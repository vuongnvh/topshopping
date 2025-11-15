'use client';

import { Product } from '../types/product';
import { ExternalLink, Tag, Store, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    // Track user click for analytics
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('productClick', { detail: product });
      window.dispatchEvent(event);
    }
  };

  // Simulate rating based on revenue (higher revenue = higher rating)
  const getRating = () => {
    const revenue = product.revenue.toLowerCase();
    if (revenue.includes('1tr+') || revenue.includes('600k+')) return 4.8;
    if (revenue.includes('500k+') || revenue.includes('200k+')) return 4.6;
    if (revenue.includes('100k+')) return 4.4;
    return 4.2;
  };

  const rating = getRating();

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: `Sản phẩm ${product.name} từ cửa hàng ${product.storeName}`,
    price: product.price,
    priceCurrency: 'VND',
    url: product.productLink,
    brand: {
      '@type': 'Brand',
      name: product.storeName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      ratingCount: '1000+',
    },
    offers: {
      '@type': 'Offer',
      url: product.affiliateLink,
      priceCurrency: 'VND',
      price: product.price,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <article 
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 hover:border-blue-300"
        itemScope 
        itemType="https://schema.org/Product"
      >
      {/* Category Badge */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          <Tag size={14} />
          {product.category || 'Sản phẩm'}
        </span>
      </div>

      {/* Product info */}
      <div className="flex-1 px-4 py-4">
        {/* Title */}
        <h3 
          className="text-sm font-bold text-gray-900 line-clamp-3 mb-2 leading-tight"
          itemProp="name"
        >
          {product.name}
        </h3>

        {/* Store info */}
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
          <Store size={14} />
          <span className="truncate font-medium">{product.storeName}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-700">{rating}</span>
        </div>

        {/* Price */}
        <div className="mb-3 p-3 bg-red-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Giá hiện tại</p>
          <p 
            className="font-bold text-xl text-red-600"
            itemProp="price"
          >
            {product.price}
          </p>
        </div>

        {/* Store info & Sales */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600">Doanh số</p>
            <p className="font-semibold text-gray-900">{product.revenue}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600">Đã bán</p>
            <p className="font-semibold text-gray-900">4.5k+</p>
          </div>
        </div>
      </div>

      {/* CTA Button - Optimized for conversion */}
      <div className="px-4 py-3 bg-gradient-to-b from-white to-gray-50 border-t">
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-3 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg"
          itemProp="url"
        >
          <ShoppingCart size={16} />
          Mua Ngay - Giá Tốt
        </a>
        <p className="text-xs text-gray-500 text-center mt-2">Giao nhanh • Hàng chính hãng</p>
      </div>
      </article>
    </>
  );
}

