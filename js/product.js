// Product functions - Đánh giá và bình luận

// Fake checkout
function fakeCheckout() {
  const productName = document.querySelector('h1').textContent;
  const priceElement = document.querySelector('strong:contains("Giá:")');
  
  if (confirm('Xác nhận mua "' + productName + '"?\n(Đây là giao dịch giả)')) {
    alert('✅ Đặt hàng thành công!\n(Demo - không có giao dịch thật)');
  }
}

// Lưu đánh giá
function saveRating(productId) {
  const select = document.getElementById('ratingSelect-' + productId);
  const display = document.getElementById('ratingDisplay-' + productId);
  
  if (!select) {
    console.error('Rating select not found for:', productId);
    return;
  }
  
  const rating = select.value;
  
  try {
    localStorage.setItem('rating-' + productId, rating);
    display.textContent = ' ✓ Đã lưu!';
    display.style.color = 'green';
    
    setTimeout(() => {
      display.textContent = '';
    }, 2000);
    
    console.log('Rating saved:', rating);
  } catch (e) {
    console.error('Error saving rating:', e);
  }
}

// Thêm bình luận
function addComment(productId) {
  console.log('addComment called for:', productId);
  
  const input = document.getElementById('commentInput-' + productId);
  const commentsList = document.getElementById('commentsList-' + productId);
  
  if (!input) {
    console.error('Comment input not found for:', productId);
    return;
  }
  
  const comment = input.value.trim();
  
  if (!comment) {
    alert('Vui lòng nhập bình luận!');
    return;
  }
  
  console.log('Adding comment:', comment);
  
  const commentsKey = 'comments-' + productId;
  let comments = [];
  
  try {
    const saved = localStorage.getItem(commentsKey);
    comments = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Error loading comments:', e);
    comments = [];
  }
  
  const newComment = {
    id: Date.now(),
    text: comment,
    date: new Date().toLocaleString('vi-VN')
  };
  
  comments.unshift(newComment);
  
  try {
    localStorage.setItem(commentsKey, JSON.stringify(comments));
    console.log('Comment saved to localStorage');
  } catch (e) {
    console.error('Error saving comment:', e);
    alert('Lỗi khi lưu bình luận!');
    return;
  }
  
  renderComments(productId);
  input.value = '';
  
  // Hiển thị thông báo
  alert('✓ Đã đăng bình luận!');
}

// Hiển thị danh sách bình luận
function renderComments(productId) {
  const commentsList = document.getElementById('commentsList-' + productId);
  
  if (!commentsList) {
    console.error('Comments list not found for:', productId);
    return;
  }
  
  const commentsKey = 'comments-' + productId;
  let comments = [];
  
  try {
    const saved = localStorage.getItem(commentsKey);
    comments = saved ? JSON.parse(saved) : [];
    console.log('Loaded comments:', comments);
  } catch (e) {
    console.error('Error loading comments:', e);
  }
  
  if (comments.length === 0) {
    commentsList.innerHTML = '<p><em>Chưa có bình luận nào.</em></p>';
    return;
  }
  
  commentsList.innerHTML = comments.map(comment => `
    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px; background: #f9f9f9;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
        <strong style="color: #000;">👤 Người dùng</strong>
        <small style="color: #666;">${comment.date}</small>
      </div>
      <p style="margin: 10px 0; color: #000;">${comment.text}</p>
      <button onclick="deleteComment('${productId}', ${comment.id})" style="background: #ff4757; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
        🗑️ Xóa
      </button>
    </div>
  `).join('');
}

// Xóa bình luận
function deleteComment(productId, commentId) {
  if (!confirm('Bạn có chắc muốn xóa bình luận này?')) return;
  
  const commentsKey = 'comments-' + productId;
  let comments = [];
  
  try {
    const saved = localStorage.getItem(commentsKey);
    comments = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Error loading comments:', e);
    return;
  }
  
  comments = comments.filter(c => c.id !== commentId);
  
  try {
    localStorage.setItem(commentsKey, JSON.stringify(comments));
    console.log('Comment deleted');
  } catch (e) {
    console.error('Error deleting comment:', e);
  }
  
  renderComments(productId);
  alert('✓ Đã xóa bình luận!');
}

// Load khi trang load xong
document.addEventListener('DOMContentLoaded', function() {
  console.log('Product page loaded');
  
  // Tìm productId từ các element
  const ratingSelect = document.querySelector('[id^="ratingSelect-"]');
  if (ratingSelect) {
    const productId = ratingSelect.id.replace('ratingSelect-', '');
    console.log('Product ID:', productId);
    
    // Load đánh giá đã lưu
    try {
      const savedRating = localStorage.getItem('rating-' + productId);
      if (savedRating) {
        ratingSelect.value = savedRating;
        console.log('Loaded saved rating:', savedRating);
      }
    } catch (e) {
      console.error('Error loading rating:', e);
    }
    
    // Load bình luận
    renderComments(productId);
  }
});