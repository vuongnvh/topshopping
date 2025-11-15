/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import { Product } from '../types/product';

export default function AnalyticsTracker() {
  useEffect(() => {
    // Track product clicks
    const handleProductClick = (event: Event) => {
      const customEvent = event as CustomEvent<Product>;
      const clickData = {
        productId: customEvent.detail.id,
        productName: customEvent.detail.name,
        affiliateLink: customEvent.detail.affiliateLink,
        timestamp: new Date().toISOString(),
      };
      
      // Store in localStorage for tracking
      if (typeof window !== 'undefined') {
        const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
        clicks.push(clickData);
        localStorage.setItem('affiliateClicks', JSON.stringify(clicks));

        // Log for analytics (Google Analytics, etc.)
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'product_click', {
            product_id: customEvent.detail.id,
            product_name: customEvent.detail.name,
          });
        }
      }
    };

    window.addEventListener('productClick', handleProductClick);
    return () => {
      window.removeEventListener('productClick', handleProductClick);
    };
  }, []);

  return null; // This component doesn't render anything
}

