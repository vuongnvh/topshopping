'use client';

import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import { Product } from './types/product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.products);
        setCategories(data.categories);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();

    // Track affiliate clicks
    const handleAffiliateClick = (event: Event) => {
      const customEvent = event as CustomEvent<Product>;
      const clickData = {
        productId: customEvent.detail.id,
        productName: customEvent.detail.name,
        affiliateLink: customEvent.detail.affiliateLink,
        timestamp: new Date().toISOString(),
      };
      
      // Store in localStorage for tracking
      const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
      clicks.push(clickData);
      localStorage.setItem('affiliateClicks', JSON.stringify(clicks));

      // Log for analytics
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'affiliate_click', {
          product_id: customEvent.detail.id,
          product_name: customEvent.detail.name,
        });
      }
    };

    window.addEventListener('affiliateClick', handleAffiliateClick);
    return () => {
      window.removeEventListener('affiliateClick', handleAffiliateClick);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Hero Banner */}
          <HeroBanner />

          {/* Products Section - SEO Optimized */}
          <section id="products" className="mt-12 md:mt-16">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Top 100 Sản Phẩm Shopee Bán Chạy 2025 - Review Chi Tiết & Giá Tốt Nhất
              </h1>
              <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                Khám phá những sản phẩm bán chạy nhất từ Shopee được review chi tiết bởi chuyên gia. Tất cả đều là <strong>hàng chính hãng</strong> từ các cửa hàng uy tín, <strong>giá cạnh tranh</strong>, và <strong>giao nhanh</strong>.
              </p>
              <p className="text-gray-600 text-base">
                🎯 Tìm sản phẩm tốt nhất, so sánh giá, đọc review thực tế từ hàng ngàn người dùng. Mua hàng qua TopShopping, bạn yên tâm về chất lượng và giá cả.
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <Suspense fallback={<div>Loading products...</div>}>
                <ProductList products={products} categories={categories} />
              </Suspense>
            )}
          </section>

          {/* How to Buy Section - SEO Optimized */}
          <section className="mt-16 md:mt-20 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 md:p-12 rounded-xl border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              🎯 Cách Mua Hàng Chỉ 3 Bước Đơn Giản
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1️⃣</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Tìm sản phẩm yêu thích</h4>
                <p className="text-gray-700">Duyệt qua danh sách sản phẩm bán chạy được review chi tiết trên TopShopping</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">2️⃣</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Click "Mua Ngay"</h4>
                <p className="text-gray-700">Nhấn nút "Mua Ngay" để được chuyển đến Shopee với link affiliate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">3️⃣</div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Hoàn tất đơn hàng</h4>
                <p className="text-gray-700">Mua sản phẩm, nhận hàng - vui vẻ sử dụng sản phẩm chất lượng!</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
