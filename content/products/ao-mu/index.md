---
title: "Áo MU"
date: 2025-01-01
description: "Áo MU - placeholder mô tả."
price: 399000
image: "https://th.bing.com/th/id/OIP.KW7m9WhGHRJPUg16JH7EIwHaEk?w=251&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
id: "aomu"
---

![Áo MU](https://th.bing.com/th/id/OIP.KW7m9WhGHRJPUg16JH7EIwHaEk?w=251&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1)

## Mô tả sản phẩm
Chiếc áo đỏ của đội tuyển Manchester United. Tuy nhiên người ở trong hang sẽ không thấy màu gì

<p>
  <strong>Giá:</strong> 399,000₫
</p>

<button 
  class="add-to-cart-detail" 
  data-id="ao-mu" 
  data-name="Áo MU" 
  data-price="399000" 
  data-image="https://th.bing.com/th/id/OIP.KW7m9WhGHRJPUg16JH7EIwHaEk?w=251&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1">
  Thêm vào giỏ hàng
</button>
<br><br>
<button onclick="fakeCheckout()">Mua hàng</button>

<hr />

<!-- Đánh giá -->
<div id="rating-ao-mu">
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
<div id="comments-ao-mu">
  <h4>Bình luận</h4>
  <div id="commentsList-ao-mu"></div>
  <textarea id="commentInput-ao-mu" placeholder="Viết bình luận..." rows="4" style="width: 100%; padding: 10px;"></textarea><br/>
  <button onclick="addComment('ao-mu')">Gửi bình luận</button>
</div>
<style>
  /*ảnh background*/
body {
    background-image: url('https://th.bing.com/th/id/R.77f83686609dd0413ea31effbcffab2d?rik=UFQm15fe0KTrwA&pid=ImgRaw&r=0'); 
    /*background-image: url('https://wallpaperaccess.com/full/2081895.jpg');*/ 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-color: #333333; 
}

</style>



<script src="/js/product.js"></script>

<script src="/js/cart.js"></script>
