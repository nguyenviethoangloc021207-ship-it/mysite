---
title: "Áo T1"
date: 2025-01-01
description: "Áo T1 - placeholder mô tả."
price: 500000
image: "https://th.bing.com/th/id/OIP.PLgtHzUr1iXYKnXvWDn0NAHaHj?w=188&h=192&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
id: "ao-t1"
---

![Áo T1](https://th.bing.com/th/id/OIP.PLgtHzUr1iXYKnXvWDn0NAHaHj?w=188&h=192&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1)

## Mô tả sản phẩm
Một chiếc Jersey màu đen đỏ mang biểu tượng của T1. Chất vải dễ chịu, dễ di chuyển. 

<p>
  <strong>Giá:</strong> 500.000₫
</p>

<button 
  class="add-to-cart-detail" 
  data-id="ao-t1" 
  data-name="Áo T1" 
  data-price="500000" 
  data-image="https://th.bing.com/th/id/OIP.PLgtHzUr1iXYKnXvWDn0NAHaHj?w=188&h=192&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1">
  Thêm vào giỏ hàng
</button>
<br><br>
<button onclick="fakeCheckout()">Mua hàng</button>

<hr />

<!-- Đánh giá -->
<div id="rating-ao-t1">
  <label>Đánh giá: </label>
  <select id="ratingSelect-ao-t1" onchange="saveRating('ao-t1')">
    <option value="">Chọn đánh giá...</option>
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <span id="ratingDisplay-ao-t1"></span>
</div>

<!-- Bình luận -->
<div id="comments-ao-t1">
  <h4>Bình luận</h4>
  <div id="commentsList-ao-t1"></div>
  <textarea id="commentInput-ao-t1" placeholder="Viết bình luận..." rows="4" style="width: 100%; padding: 10px;"></textarea><br/>
  <button onclick="addComment('ao-t1')">Gửi bình luận</button>
</div>

<script src="/js/product.js"></script>
<script src="/js/cart.js"></script>