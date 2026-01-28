// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, ≥ 2 danh mục)
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phone", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 0, "Phone", true),
  new Product(3, "MacBook Pro M3", 52000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 6000000, 10, "Accessories", true),
  new Product(5, "Magic Mouse", 2500000, 0, "Accessories", false),
  new Product(6, "Dell XPS 13", 32000000, 4, "Laptop", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm danh mục Accessories có đang bán không
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6:", accessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7:", totalInventoryValue);

// Câu 8: Dùng for...of in ra Tên – Danh mục – Trạng thái
console.log("Câu 8:");
for (const p of products) {
  console.log(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

// Câu 9: Dùng for...in in tên thuộc tính và giá trị
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingAndInStockNames);
