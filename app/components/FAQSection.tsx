import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'TopShopping là gì?',
      a: 'TopShopping là trang review sản phẩm chuyên nghiệp, giúp bạn tìm những sản phẩm chất lượng, giá tốt nhất từ Shopee. Tất cả sản phẩm được chúng tôi review chi tiết, xác minh hàng chính hãng.',
    },
    {
      q: 'Làm sao mua hàng qua TopShopping?',
      a: 'Rất đơn giản! Chọn sản phẩm bạn yêu thích → Nhấn "Mua Ngay - Giá Tốt" → Bạn sẽ được chuyển đến Shopee để hoàn tất giao dịch. Giá vẫn như trên Shopee, không có chi phí thêm.',
    },
    {
      q: 'Sản phẩm có đúng hàng chính hãng không?',
      a: 'Có! Tất cả sản phẩm được hiển thị trên TopShopping đều từ các cửa hàng chính hãng trên Shopee. Chúng tôi chỉ lựa chọn những shop có hàng ngàn lượt mua, rating cao, và được khách hàng tin tưởng.',
    },
    {
      q: 'Giao hàng mất bao lâu?',
      a: 'Thời gian giao hàng tùy thuộc vào tỉnh thành và chính sách của từng shop. Hầu hết sản phẩm trên TopShopping hỗ trợ giao nhanh (1-2 ngày) hoặc trả góp 0%.',
    },
    {
      q: 'Giá trên TopShopping có rẻ hơn Shopee không?',
      a: 'Giá trên TopShopping là giá gốc từ Shopee. Chúng tôi không thay đổi giá, nhưng giúp bạn tìm những sản phẩm có giảm giá, khuyến mãi tốt nhất từ các shop uy tín.',
    },
    {
      q: 'Làm sao biết được sản phẩm đó tốt hay không?',
      a: 'TopShopping hiển thị thông tin bán chạy (doanh thu), hoa hồng, tên shop, và rating từ Shopee. Sản phẩm có doanh thu cao = bán chạy = được nhiều người dùng mua = tốt. Đó là cách đơn giản nhất để lựa chọn.',
    },
  ];

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="mt-20 py-16 bg-gradient-to-b from-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          ❓ Câu hỏi Thường Gặp
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Những thắc mắc về mua hàng qua TopShopping
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition cursor-pointer"
              itemScope
              itemType="https://schema.org/Question"
            >
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span itemProp="name">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="transition-transform group-open:rotate-180 text-blue-600"
                />
              </summary>
              <div
                className="mt-4 text-gray-700 leading-relaxed text-base"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{faq.a}</span>
              </div>
            </details>
          ))}
        </div>

        {/* Schema.org FAQ */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-3">💡 Mẹo mua hàng thông minh:</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Sắp xếp sản phẩm theo &quot;Hoa hồng cao → thấp&quot; để tìm deal tốt</li>
            <li>✓ Chọn sản phẩm có doanh số cao (&gt;100k+) = bán chạy = chất lượng</li>
            <li>✓ Kiểm tra &quot;Đã bán&quot; trên Shopee để biết thêm đánh giá từ khách</li>
            <li>✓ Sử dụng Shopee Voucher khi thanh toán để tiết kiệm thêm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

