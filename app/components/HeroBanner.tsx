import { ShoppingBag, TrendingUp, Award, Zap } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12 md:py-20 rounded-xl overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            🛍️ Mua Sản Phẩm Chất Lượng - Giá Tốt Nhất
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Khám phá hàng ngàn sản phẩm bán chạy từ Shopee được review chi tiết. Hàng chính hãng, giá tốt, giao nhanh - tất cả được chúng tôi kiểm chứng cẩn thận.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="flex justify-center mb-3">
                <ShoppingBag size={32} className="text-yellow-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sản phẩm chất lượng</h3>
              <p className="text-blue-100 text-sm">
                Hàng chính hãng từ các shop uy tín, bán chạy hàng ngàn sản phẩm
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="flex justify-center mb-3">
                <TrendingUp size={32} className="text-green-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Giá tốt nhất</h3>
              <p className="text-blue-100 text-sm">
                So sánh giá thực tế từ Shopee, tìm thấy deal tốt nhất
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="flex justify-center mb-3">
                <Award size={32} className="text-purple-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Review chi tiết</h3>
              <p className="text-blue-100 text-sm">
                Đánh giá chuyên sâu, hình ảnh thực tế, so sánh chi tiết
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="flex justify-center mb-3">
                <Zap size={32} className="text-orange-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Giao nhanh</h3>
              <p className="text-blue-100 text-sm">
                Mọi sản phẩm đều hỗ trợ giao nhanh, trả góp 0%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

