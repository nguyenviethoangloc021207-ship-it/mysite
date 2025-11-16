// static/js/cart.js

console.log("cart ready");

// Khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
  const addButtons = document.querySelectorAll('.add-to-cart-detail');
  console.log("Found buttons:", addButtons.length);

  addButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: parseInt(this.dataset.price),
        image: this.dataset.image,
        quantity: 1
      };
      console.log("Adding product:", product);
      addToCart(product);
    });
  });

  updateCartCount();
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === product.id);
  if (index > -1) cart[index].quantity += 1;
  else cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-block' : 'none';
  }
}
