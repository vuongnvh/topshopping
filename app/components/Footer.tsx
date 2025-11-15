export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TopShopping</h3>
            <p className="text-sm leading-relaxed">
              Trang review sản phẩm hàng đầu Việt Nam. Chúng tôi giúp bạn tìm những sản phẩm chất lượng, giá tốt nhất từ Shopee. Mỗi sản phẩm đều được review chi tiết bởi đội ngũ chuyên gia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Sản phẩm bán chạy
                </a>
              </li>
              <li>
                <a href="https://shopee.vn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Shopee Official
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Liên hệ</h4>
            <p className="text-sm mb-3">
              📧 Email: <span className="text-gray-400">contact@topshopping.local</span>
            </p>
            <p className="text-sm text-gray-500">
              © 2025 TopShopping. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            TopShopping không phải là nền tảng chính thức của Shopee. Chúng tôi là một trang review độc lập giúp bạn tìm sản phẩm tốt nhất. Giá cả có thể thay đổi, vui lòng kiểm tra trực tiếp trên Shopee.
          </p>
        </div>
      </div>
    </footer>
  );
}

