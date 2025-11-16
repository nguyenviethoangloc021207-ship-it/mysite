---
title: "Giỏ Hàng"
description: "Xem những vật phẩm bạn đã chọn"
summary: "cart"
layout: "simple"
---


<style>


body {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  background: #1a1a1a;
  color: #e5e5e5;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-image: url('https://wallpaperaccess.com/full/5926713.jpg'); 
    background-attachment: scroll; 
    background-color: #10262cff; 
    background-size:cover;
}

.cart-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.cart-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #2a2a2a;
}

.cart-header h1 {
  position: relative;
  left:50px;
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.cart-subtitle {
  font-size: 0.95rem;
  color: #8a8a8a;
  font-weight: 400;
}

.cart-empty {
  text-align: center;
  padding: 6rem 2rem;
  background: #212121;
  border-radius: 8px;
  background: transparent;
}

.cart-empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
  display:none;
}

.cart-empty p {
  font-size: 1.1rem;
  color: #8a8a8a;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.cart-empty a {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.cart-empty a:hover {
  background: #e5e5e5;
  transform: scale(1.02);
}

.cart-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  background: #2121214a;
  border-radius: 12px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 2rem;
  align-items: center;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
}

.cart-item:hover {
  border-color: #3a3a3a;
  background: #252525;
}

.item-image-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 0px;
  overflow: hidden;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  
}

.cart-item:hover .item-image {
  transform: scale(1.05);
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.3px;
  line-height: 1.3;
}

.item-price {
  font-size: 1.1rem;
  color: #8a8a8a;
  font-weight: 500;
}

.item-controls {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-end;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid #2a2a2a;
}

.qty-btn {
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
}

.qty-btn:hover {
  background: #2a2a2a;
}

.qty-btn:active {
  transform: scale(0.9);
}

.quantity {
  font-size: 1rem;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
  color: #ffffff;
}

.remove-btn {
  padding: 0.625rem 1.25rem;
  background: transparent;
  border: 1px solid #2a2a2a;
  color: #8a8a8a;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 50px;
  letter-spacing: 0.3px;
}

.remove-btn:hover {
  background: #2a2a2a;
  border-color: #ff4444;
  color: #ff4444;
}

.cart-sidebar {
  position: sticky;
  top: 2rem;
}

.cart-summary {
  background: #2121213c;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #2a2a2a;
  margin-bottom: 1.5rem;
}

.summary-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.3px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #2a2a2a;
  font-size: 0.95rem;
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-label {
  color: #8a8a8a;
  font-weight: 400;
}

.summary-value {
  color: #ffffff;
  font-weight: 500;
}

.total-row {
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #3a3a3a;
}

.total-row .summary-label {
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
}

.total-row .summary-value {
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 700;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  width: 100%;
  padding: 1.125rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 50px;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.checkout-btn {
  background: #ffffff;
  color: #000000;
}

.checkout-btn:hover {
  background: #e5e5e5;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.12);
}

.checkout-btn:active {
  transform: translateY(0);
}

.clear-btn {
  background: transparent;
  color: #8a8a8a;
  border: 1px solid #2a2a2a;
}

.clear-btn:hover {
  background: #2a2a2a;
  border-color: #3a3a3a;
  color: #ffffff;
}

.continue-shopping {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #2a2a2a;
}

.continue-shopping a {
  color: #8a8a8a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.continue-shopping a:hover {
  color: #ffffff;
}

.success-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
}

.success-modal.active {
  display: flex;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.success-content {
  background: #212121;
  border: 1px solid #3a3a3a;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 480px;
  width: 90%;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #00ff88 0%, #00cc88 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #000000;
}

.success-content h13 {
  position: relative;
  top:0px;
  right: 0px;
  font-size: 1.75rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.success-content p {
  font-size: 1rem;
  color: #8a8a8a;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.close-modal-btn {
  padding: 1rem 3rem;
  background: #ffffff;
  color: #000000;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
}

.close-modal-btn:hover {
  background: #e5e5e5;
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .cart-content-wrapper {
    grid-template-columns: 1fr;
  }

  .cart-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-wrapper {
    padding: 2rem 1rem;
  }

  .cart-header h1 {
    font-size: 2rem;
  }

  .cart-item {
    grid-template-columns: 100px 1fr;
    gap: 1.25rem;
    padding: 1.5rem;
  }


  .item-controls {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .cart-summary {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .cart-header h1 {
    font-size: 1.75rem;
  }

  .item-name {
    font-size: 1rem;
  }

  .summary-title {
    font-size: 1.1rem;
  }
}
</style>

<div class="cart-wrapper">
  <div class="cart-header">
    <h1>Giỏ Hàng</h1>
    <div class="cart-subtitle" id="cart-subtitle"></div>
  </div>
  
  <div id="cart-content"></div>
  
  <div class="continue-shopping">
    <a href="/products/">← Tiếp tục mua sắm</a>
  </div>
</div>

<div class="success-modal" id="successModal">
  <div class="success-content">
    <div class="success-icon">✓</div>
    <h13>Đặt Hàng Thành Công!</h13>
    <p>Cảm ơn bạn đã tin tưởng và mua hàng. Chúng tôi sẽ xử lý đơn hàng của bạn ngay lập tức.</p>
    <button class="close-modal-btn" onclick="closeSuccessModal()">Hoàn Tất</button>
  </div>
</div>

<script>
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
  }

  function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); 
    renderCart();
  }

  function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountElement.textContent = totalItems;
      cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
  }

  function updateSubtitle() {
    const subtitle = document.getElementById('cart-subtitle');
    if (subtitle && cart.length > 0) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      subtitle.textContent = `${totalItems} sản phẩm trong giỏ hàng`;
    }
  }

  function renderCart() {
    const cartContent = document.getElementById('cart-content');
    updateSubtitle();
    
    if (cart.length === 0) {
      cartContent.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>Giỏ hàng của bạn đang trống</p>
          <a href="/products/">Khám Phá Sản Phẩm</a>
        </div>
      `;
      return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    const itemsHTML = cart.map((item, index) => {
      const itemTotal = item.price * item.quantity;
      totalItems += item.quantity;
      totalPrice += itemTotal;

      return `
        <div class="cart-item">
          <div class="item-image-wrapper">
            <img src="${item.image}" alt="${item.name}" class="item-image">
          </div>
          <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-price">${formatPrice(item.price)} đ</div>
          </div>
          <div class="item-controls">
            <div class="quantity-controls">
              <button class="qty-btn" onclick="decreaseQuantity(${index})">−</button>
              <span class="quantity">${item.quantity}</span>
              <button class="qty-btn" onclick="increaseQuantity(${index})">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Xóa</button>
          </div>
        </div>
      `;
    }).join('');

    cartContent.innerHTML = `
      <div class="cart-content-wrapper">
        <div class="cart-items">
          ${itemsHTML}
        </div>
        
        <div class="cart-sidebar">
          <div class="cart-summary">
            <div class="summary-title">Tổng Đơn Hàng</div>
            <div class="summary-row">
              <span class="summary-label">Số lượng</span>
              <span class="summary-value">${totalItems} sản phẩm</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Tạm tính</span>
              <span class="summary-value">${formatPrice(totalPrice)} đ</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Vận chuyển</span>
              <span class="summary-value">Miễn phí</span>
            </div>
            <div class="summary-row total-row">
              <span class="summary-label">Tổng cộng</span>
              <span class="summary-value">${formatPrice(totalPrice)} đ</span>
            </div>
          </div>

          <div class="cart-actions">
            <button class="btn checkout-btn" onclick="checkout()">
              Thanh Toán
            </button>
            <button class="btn clear-btn" onclick="clearCart()">
              Xóa Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
  }

  function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      updateCart();
    }
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function clearCart() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
      cart = [];
      updateCart();
    }
  }

  function checkout() {
    if (cart.length === 0) {
      alert('Giỏ hàng của bạn đang trống!');
      return;
    }
    
    document.getElementById('successModal').classList.add('active');
    cart = [];
    updateCart();
  }

  function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
  }

  renderCart();
</script>