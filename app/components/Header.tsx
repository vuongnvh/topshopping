import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-blue-600 hover:text-blue-700 transition">
            <Image src="/logo.png" alt="TopShopping" width={64} height={64} />
            <span className="hidden sm:inline">TopShopping</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium text-sm md:text-base transition-colors">
              Sản phẩm
            </a>
            <a href="#trending" className="text-gray-700 hover:text-blue-600 font-medium text-sm md:text-base transition-colors">
              Xu hướng
            </a>
            <a
              href="https://shopee.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-shadow text-sm md:text-base font-medium"
            >
              Khám phá ngay
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

