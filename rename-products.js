import fs from 'fs';

const dbPath = './db.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

// Map tên cũ sang tên mới
const nameMap = {
  "Licensed Frozen Table": "Smart Home Table",
  "Rustic Rubber Chicken": "Wireless Bluetooth Speaker",
  "Bespoke Frozen Ball": "Portable Mini Projector",
  "Bespoke Metal Chair": "Ergonomic Gaming Chair",
  "Refined Soft Chicken": "Noise Cancelling Headphones",
  "Generic Bronze Pizza": "Ultra Bass Bluetooth Speaker",
  "Small Wooden Soap": "Wireless Mouse Pro",
  "Oriental Bronze Chicken": "True Wireless Earbuds",
  "Rustic Fresh Soap": "Smart LED Desk Lamp",
  "Elegant Metal Pizza": "Hi-Res Audio Speaker",
  "Refined Cotton Ball": "Fast Wireless Charger",
  "Oriental Rubber Chair": "Adjustable Laptop Stand",
  "Electronic Granite Keyboard": "RGB Mechanical Keyboard"
  // Thêm các tên khác nếu muốn đổi
};

data.products = data.products.map(product => {
  if (nameMap[product.name]) {
    product.name = nameMap[product.name];
  }
  return product;
});

// Đổi cả trong orders nếu có
if (data.orders) {
  data.orders.forEach(order => {
    if (order.products) {
      order.products.forEach(p => {
        if (nameMap[p.nameProduct]) {
          p.nameProduct = nameMap[p.nameProduct];
        }
      });
    }
  });
}

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Đã đổi tên sản phẩm!');