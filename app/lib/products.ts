/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../types/product';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function getProducts(): Promise<Product[]> {
  try {
    const csvPath = path.join(process.cwd(), 'public/data/products.csv');
    
    if (!fs.existsSync(csvPath)) {
      console.error('❌ CSV file not found at:', csvPath);
      throw new Error(`CSV not found: ${csvPath}`);
    }
    
    console.log('📂 Reading CSV from:', csvPath);
    let fileContent = fs.readFileSync(csvPath, 'utf-8');
    
    // Remove BOM if present
    if (fileContent.charCodeAt(0) === 0xFEFF) {
      fileContent = fileContent.slice(1);
    }
    
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true,
      relax_quotes: true,
    });
    
    const mapped = records.map((record: any, index: number) => {
      const code = record['Mã sản phẩm']?.toString().trim();
      return {
        id: `${code}-${index}`,
        productCode: code,
        name: record['Tên sản phẩm'],
        price: record['Giá'],
        revenue: record['Doanh thu'],
        storeName: record['Tên cửa hàng'],
        commissionRate: record['Tỉ lệ hoa hồng'],
        commission: record['Hoa hồng'],
        productLink: record['Link sản phẩm'],
        affiliateLink: record['Link ưu đãi'],
        category: categorizeProduct(record['Tên sản phẩm']),
      };
    }).filter(p => p.productCode && p.productCode !== '');
    
    return mapped;
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return [];
  }
}

function categorizeProduct(productName: string): string {
  const name = productName.toLowerCase();
  
  if (name.includes('sữa chống nắng') || name.includes('kem dưỡng') || name.includes('nước hoa hồng') || name.includes('gel rửa mặt')) {
    return 'Chăm sóc da';
  }
  if (name.includes('dầu gội') || name.includes('gội') || name.includes('shampoo')) {
    return 'Chăm sóc tóc';
  }
  if (name.includes('quần lót') || name.includes('sịp nam') || name.includes('trunk')) {
    return 'Quần áo';
  }
  if (name.includes('giấy') || name.includes('tissue') || name.includes('napkin')) {
    return 'Gia dụng';
  }
  if (name.includes('mặt nạ') || name.includes('mask')) {
    return 'Mặt nạ & Peel';
  }
  if (name.includes('muối tắm') || name.includes('sữa tắm') || name.includes('tắm')) {
    return 'Tắm & Gội';
  }
  return 'Khác';
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map(p => p.category).filter(Boolean) as string[]);
  return Array.from(categories).sort();
}

export function searchProducts(products: Product[], query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.storeName.toLowerCase().includes(lowerQuery) ||
    p.category?.toLowerCase().includes(lowerQuery)
  );
}

export function filterByCategory(products: Product[], category: string): Product[] {
  return products.filter(p => p.category === category);
}

