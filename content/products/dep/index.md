---
title: "Dép"
date: 2025-01-01
description: "Dép lê xỏ ngón"
price: 100000
image: "https://th.bing.com/th/id/OIP.Hmuu4hzJ2ljZhqILmbneQAHaHa?w=212&h=212&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
id: "dep"
---

![Dép](https://th.bing.com/th/id/OIP.Hmuu4hzJ2ljZhqILmbneQAHaHa?w=212&h=212&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1)

## Mô tả sản phẩm
Dép lê xỏ ngón thoải mái, đi trong nhà hoặc ra ngoài. Mặt hàng này mới toanh, chưa hề qua tay chủ trước. 

<p>
  <strong>Giá:</strong> 100.000₫
</p>

<button 
  class="add-to-cart-detail" 
  data-id="dep" 
  data-name="Dép" 
  data-price="100000" 
  data-image="https://th.bing.com/th/id/OIP.Hmuu4hzJ2ljZhqILmbneQAHaHa?w=212&h=212&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1">
  Thêm vào giỏ hàng
</button>
<br><br>
<button onclick="fakeCheckout()">Mua hàng</button>

<hr />

<!-- Đánh giá -->
<div id="rating-dep">
  <label>Đánh giá: </label>
  <select id="ratingSelect-dep" onchange="saveRating('dep')">
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <span id="ratingDisplay-dep"></span>
</div>

<!-- Bình luận -->
<div id="comments-dep">
  <h4>Bình luận</h4>
  <div id="commentsList-dep"></div>
  <textarea id="commentInput-dep" placeholder="Viết bình luận..."></textarea><br/>
  <button onclick="addComment('dep')">Gửi bình luận</button>
</div>

<script src="/js/product.js"></script>
<script src="/js/cart.js"></script>
