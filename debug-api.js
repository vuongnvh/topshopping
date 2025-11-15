// Quick debug script
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

console.log('🔍 Debug Script Starting...');
console.log('CWD:', process.cwd());

const csvPath = path.join(process.cwd(), 'public/data/products.csv');
console.log('CSV Path:', csvPath);
console.log('CSV Exists:', fs.existsSync(csvPath));

if (fs.existsSync(csvPath)) {
  const content = fs.readFileSync(csvPath, 'utf-8');
  console.log('📊 File Size:', content.length, 'bytes');
  
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    relax_column_count: true,
    relax_quotes: true,
  });
  
  console.log('✅ Parsed Records:', records.length);
  
  if (records.length > 0) {
    console.log('📋 Column Names:', Object.keys(records[0]));
    console.log('First Record:', {
      code: records[0]['Mã sản phẩm'],
      name: records[0]['Tên sản phẩm'].substring(0, 50) + '...',
    });
    console.log('\nRaw first record:');
    console.log(JSON.stringify(records[0], null, 2).substring(0, 500));
  }
}

