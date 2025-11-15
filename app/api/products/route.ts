import { NextResponse } from 'next/server';
import { getProducts, getCategories } from '../../lib/products';

export const dynamic = 'force-dynamic'; // Force dynamic rendering for dev
export const revalidate = 3600; // Cache for 1 hour in production

export async function GET() {
  try {
    const products = await getProducts();
    const categories = getCategories(products);

    return NextResponse.json({
      success: true,
      products,
      categories,
      totalProducts: products.length,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

