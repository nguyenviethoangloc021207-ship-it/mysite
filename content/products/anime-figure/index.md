---
title: "Nezuko figure"
date: 2025-01-01
description: "Nezuko figure - placeholder mô tả."
price: vô giá
image: "https://i.pinimg.com/736x/2f/4c/ff/2f4cff29b51dad68ffecbacdab842433.jpg"
id: "nezukofigure"
---

![Nezuko figure](https://i.pinimg.com/736x/2f/4c/ff/2f4cff29b51dad68ffecbacdab842433.jpg)

## Mô tả sản phẩm
Một phiên bản mini của Nezuko trong anime series Thanh gươm diệt quỷ. Nezuko là một cô gái lớn lên trong một gia đình nhỏ cho đến một ngày, một con quỷ đã giết hầu hết cả gia đình cô. Nezuko may mắn sống sót, nhưng bi biến thành quỷ. Món này không bán được, vì Nezuko-chan là vô giá!

<p>
  <strong>Giá:</strong> vô giá
</p>


<hr />

<!-- Đánh giá -->
<div id="rating-{{ .Params.id }}">
  <label>Đánh giá: </label>
  <select id="ratingSelect-{{ .Params.id }}" onchange="saveRating('{{ .Params.id }}')">
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <span id="ratingDisplay-{{ .Params.id }}"></span>
</div>

<!-- Bình luận -->
<div id="comments-{{ .Params.id }}">
  <h4>Bình luận</h4>
  <div id="commentsList-{{ .Params.id }}"></div>
  <textarea id="commentInput-{{ .Params.id }}" placeholder="Viết bình luận..."></textarea><br/>
  <button onclick="addComment('{{ .Params.id }}')">Gửi bình luận</button>
</div>

<script src="/js/product.js"></script>
<script src="/js/cart.js"></script>
