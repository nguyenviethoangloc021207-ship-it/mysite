---
title: "Danh Sách Sản phẩm"
description: "Tất cả sản phẩm của cửa hàng"
layout: "list"
---
<!--
<video autoplay loop id="background-video">
  <source src="/videos/flower2.mp4" type="video/mp4">
</video> -->


<!-- Thanh tìm kiếm -->
<div class="search-container">
  <input type="text" id="searchInput" placeholder="🔍 Tìm kiếm sản phẩm..." onkeyup="searchProducts()">
</div>

<!-- Grid sản phẩm -->
<div class="products-grid" id="productsGrid">
  
  <!-- Sản phẩm 1: Áo MU -->
  <div class="product-card" data-name="Áo MU" data-price="399000">
    <a href="/blog/ao-manchester-united">
      <img src="https://wallpapers.com/images/hd/manchester-united-jersey-desktop-7bgnmm0ye9n5vrd0.jpg" alt="Áo MU">
      <h3>Áo MU</h3>
      <p class="product-price">399.000₫</p>
      <p class="product-desc">Chiếc áo đỏ của đội tuyển Manchester United</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="ao-mu" 
      data-name="Áo MU" 
      data-price="399000" 
      data-image="https://wallpapers.com/images/hd/manchester-united-jersey-desktop-7bgnmm0ye9n5vrd0.jpg">
      <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 2: Áo Juventus -->
  <div class="product-card" data-name="Áo Juventus" data-price="340000">
    <a href="/blog/ao-juventus/">
      <img src="https://assets.adidas.com/images/w_940,f_auto,q_auto/7ab554cc072641ad830d536284cf429b_9366/HR8256_HM6.jpg" alt="Áo Juventus">
      <h3>Áo Juventus</h3>
      <p class="product-price">340.000₫</p>
      <p class="product-desc">Áo đấu Juventus sọc đen trắng kinh điển</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="ao-juventus" 
      data-name="Áo Juventus" 
      data-price="340000" 
      data-image="https://assets.adidas.com/images/w_940,f_auto,q_auto/7ab554cc072641ad830d536284cf429b_9366/HR8256_HM6.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 3: Áo T1 -->
  <div class="product-card" data-name="Áo T1" data-price="500000">
    <a href="/blog/ao-t1/">
      <img src="https://down-ph.img.susercontent.com/file/sg-11134201-7rce1-lr2xmvq4lmq748" alt="Áo T1">
      <h3>Áo T1</h3>
      <p class="product-price">500.000₫</p>
      <p class="product-desc">Jersey màu đen đỏ mang biểu tượng của T1</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="ao-t1" 
      data-name="Áo T1" 
      data-price="500000" 
      data-image="https://down-ph.img.susercontent.com/file/sg-11134201-7rce1-lr2xmvq4lmq748">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 4: Áo Độ Mixi -->
  <div class="product-card" data-name="Áo Độ Mixi" data-price="250000">
    <a href="/blog/ao-do-mixi/">
      <img src="https://product.hstatic.net/200000881795/product/ao-khoac-mixi-8-scaled_8bb77d5894534d6ab3c5961643f1547a_large.jpg" alt="Áo Độ Mixi">
      <h3>Áo Độ Mixi</h3>
      <p class="product-price">499.000₫</p>
      <p class="product-desc">Áo Độ Mixi Gaming, form rộng thoải mái</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="ao-do-mixi" 
      data-name="Áo Độ Mixi" 
      data-price="250000" 
      data-image="https://product.hstatic.net/200000881795/product/ao-khoac-mixi-8-scaled_8bb77d5894534d6ab3c5961643f1547a_large.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 5: Kẹo Kera -->
  <div class="product-card" data-name="Kẹo Kera" data-price="50000">
    <a href="/blog/keo-kera/">
      <img src="https://mtv.vn/uploads/2025/03/06/kr1.jpg" alt="Kẹo Kera">
      <h3>Kẹo Kera</h3>
      <p class="product-price">500.000₫</p>
      <p class="product-desc">Truyền thuyết kể rằng một viên kẹo bằng một đĩa rau xanh</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="keo-kera" 
      data-name="Kẹo Kera" 
      data-price="50000" 
      data-image="https://mtv.vn/uploads/2025/03/06/kr1.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 6: Lightstick đom đóm -->
  <div class="product-card" data-name="Lightstick đom đóm" data-price="150000">
    <a href="/blog/lightstick-j97/">
      <img src="https://taoanhdep.com/wp-content/uploads/2024/08/lightstick_j97-1.jpg" alt="Lightstick đom đóm">
      <h3>Lightstick đom đóm</h3>
      <p class="product-price">150.000₫</p>
      <p class="product-desc">Lightstick phát sáng, dùng trong concert J97</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="lightstick" 
      data-name="Lightstick đom đóm" 
      data-price="150000" 
      data-image="https://taoanhdep.com/wp-content/uploads/2024/08/lightstick_j97-1.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 7: Gối ôm anime -->
  <div class="product-card" data-name="Gối ôm anime" data-price="10000000">
    <a href="/blog/goi-om-rem-re-zero/">
      <img src="https://www.animebp.com/wp-content/uploads/2022/07/dakimakura-rem-cute-1.jpg" alt="Gối ôm anime">
      <h3>Gối ôm anime</h3>
      <p class="product-price">10.000.000₫</p>
      <p class="product-desc">Gối ôm in hình Rem - chỉ dùng để ôm</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="goi-om" 
      data-name="Gối ôm anime" 
      data-price="10000000" 
      data-image="https://www.animebp.com/wp-content/uploads/2022/07/dakimakura-rem-cute-1.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 8: Nem chua -->
  <div class="product-card" data-name="Nem chua" data-price="5000">
    <a href="/blog/nem-chua-thanh-hoa/">
      <img src="https://static.vinwonders.com/production/gia-nem-chua-o-thanh-hoa.jpg" alt="Nem chua">
      <h3>Nem chua</h3>
      <p class="product-price">5.000₫</p>
      <p class="product-desc">Món ăn biểu tượng của Thanh Hóa</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="nem-chua" 
      data-name="Nem chua" 
      data-price="5000" 
      data-image="https://static.vinwonders.com/production/gia-nem-chua-o-thanh-hoa.jpg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 9: Dép -->
  <div class="product-card" data-name="Dép" data-price="100000">
    <a href="/blog/dep-lao-viet-nam/">
      <img src="https://cf.shopee.vn/file/vn-11134201-23020-6oxt6kcaxknv3e" alt="Dép">
      <h3>Dép</h3>
      <p class="product-price">100.000₫</p>
      <p class="product-desc">Dép lê xỏ ngón thoải mái</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="dep" 
      data-name="Dép" 
      data-price="100000" 
      data-image="https://cf.shopee.vn/file/vn-11134201-23020-6oxt6kcaxknv3e">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

  <!-- Sản phẩm 10: Figure Anime -->
  <div class="product-card" data-name="Figure Anime" data-price="999999999">
    <a href="/blog/nezuko-tamado-figure/">
      <img src="https://i5.walmartimages.com/seo/Nezuko-Kamado-Chibi-Masters-Demon-Slayer-Figure_fb90e950-04fe-458f-83f2-e580405f414d.e1e0c41c520a04c410970cffa2d0564c.jpeg" alt="Figure Anime">
      <h3>Nezuko Figure</h3>
      <p class="product-price">Vô giá</p>
      <p class="product-desc">Phiên bản mini của Nezuko - Nezuko-chan là vô giá!</p>
    </a>
    <button class="add-to-cart-detail" 
      data-id="figure-anime" 
      data-name="Nezuko Figure" 
      data-price="999999999" 
      data-image="https://i5.walmartimages.com/seo/Nezuko-Kamado-Chibi-Masters-Demon-Slayer-Figure_fb90e950-04fe-458f-83f2-e580405f414d.e1e0c41c520a04c410970cffa2d0564c.jpeg">
       <themvaogio> Thêm vào giỏ </themvaogio>
    </button>
  </div>

</div>


<a href="/cart" class="cart-button">
    Giỏ Hàng
</a>


<style>
    
/* Background */

body {
  background-color: #0E2A41 !important;
  background-image: url('https://wallpaperaccess.com/full/564400.jpg');
  background-size: cover;
  background-attachment: scroll;
}

/* Search container */
.search-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
}

#searchInput {
  position: absolute;
  top: -58px;
  right: -160px;
  width: 50%;
  padding: 15px;
  font-size: 1.1rem;
  border: 2px solid #5a6880;
  border-radius: 0px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s;
}

#searchInput:focus {
  outline: none;
  border-color: #6ce9faff;
  background: rgba(255, 255, 255, 0.15);
}

#searchInput::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* Products grid */
/* Products grid - ĐÃ SỬA */
.products-grid {
  display: grid;
  /* Hiển thị 3 cột trên màn hình lớn */
  grid-template-columns: repeat(3, 1fr);
  column-gap: 23rem;
  row-gap: 3rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  left: -220px !important;
}

/* Product card */
.product-card {
  background: transparent;
  border-radius: 0px;
  padding: 1.5rem;
  transition: all 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.23);
  width: 400%;
  border-width: 4px;
}

.product-card:hover {
  transform: translateY(-20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.08);
  border-color: #acd0ff;
}

.product-card a {
  text-decoration: none;
  color: white;
}

.product-card img {
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.product-card:hover img {
  transform: scale(1.05);
}

.product-card h3 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  color: white;
  text-align: center;
}

.product-price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #e5e7ccff;
  text-align: center;
  margin: 0.5rem 0;
}
#background-video {
  /* Định vị tuyệt đối để video chiếm toàn bộ khung nhìn */
  position: fixed !important; 
  top: -34px;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* Đảm bảo video luôn nằm sau nội dung */
  z-index: -100 !important; 
  
  /* Giữ tỷ lệ khung hình và cắt nếu cần để lấp đầy toàn bộ không gian */
  object-fit: cover ;
}
.product-desc {
  font-size: 1.5rem;
  color: rgba(255, 240, 240, 0.98);
  text-align: center;
  margin: 0.5rem 0 1rem 0;
  min-height: 40px;
  font-weight: 250;
}

.product-card button {
  width: 100%;
  padding: 12px;
  background: #5a6880;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.product-card button:hover {
  background: #6d7d99;
  transform: scale(1.02);
}
button{
    background-color:transparent !important;
    
}
/* Hidden class cho search */
.hidden {
  display: none !important;
}

/* Responsive */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .product-card img {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
.mt-5.text-4xl.font-extrabold.text-neutral-900.dark\:text-neutral
{
  white-space:nowrap;
  font-size:5.3rem !important;
}
</style>




<script>
// Hàm tìm kiếm sản phẩm
function searchProducts() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const price = card.getAttribute('data-price');
    
    if (name.includes(filter) || price.includes(filter) || filter === '') {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
</script>

<script src="/js/cart.js" defer></script>

