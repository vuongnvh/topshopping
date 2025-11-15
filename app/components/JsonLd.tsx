export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TopShopping',
    description: 'Trang review sản phẩm và mua hàng online từ Shopee',
    url: 'https://topshopping-ecru.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://topshopping-ecru.vercel.app/logo.png',
      width: 512,
      height: 512,
    },
    sameAs: [
      'https://www.facebook.com/topshopping',
      'https://www.tiktok.com/@topshopping',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TopShopping',
    url: 'https://topshopping-ecru.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://topshopping-ecru.vercel.app?search={search_term_string}',
      },
      query_input: 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://topshopping-ecru.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sản phẩm bán chạy',
        item: 'https://topshopping-ecru.vercel.app#products',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

