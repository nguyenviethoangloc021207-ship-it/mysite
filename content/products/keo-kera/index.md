---
title: "Kẹo Kera"
date: 2025-01-01
description: "Kẹo Kera ngọt ngào"
price: 50000
image: "https://mtv.vn/uploads/2025/03/06/kr1.jpg"
id: "keo-kera"
---

![Kẹo Kera](https://mtv.vn/uploads/2025/03/06/kr1.jpg)

## Mô tả sản phẩm
Kẹo Kera - Truyền thuyết kể rằng một viên kẹo bằng một đĩa rau xanh. Đó là sự thật. (hãy tin tôi)

<p>
  <strong>Giá:</strong> 500.000₫
</p>

<button 
  class="add-to-cart-detail" 
  data-id="keo-kera" 
  data-name="Kẹo Kera" 
  data-price="50000" 
  data-image="https://mtv.vn/uploads/2025/03/06/kr1.jpg">
  Thêm vào giỏ hàng
</button>
<br><br>
<button onclick="fakeCheckout()">Mua hàng</button>

<hr />

<!-- Đánh giá -->
<div id="rating-keo-kera">
  <label>Đánh giá: </label>
  <select id="ratingSelect-keo-kera" onchange="saveRating('keo-kera')">
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <span id="ratingDisplay-keo-kera"></span>
</div>

<!-- Bình luận -->
<div id="comments-keo-kera">
  <h4>Bình luận</h4>
  <div id="commentsList-keo-kera"></div>
  <textarea id="commentInput-keo-kera" placeholder="Viết bình luận..."></textarea><br/>
  <button onclick="addComment('keo-kera')">Gửi bình luận</button>
</div>

<script src="/js/product.js"></script>
<script src="/js/cart.js"></script>