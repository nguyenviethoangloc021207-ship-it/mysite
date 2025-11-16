---
disable_global_css: true  # <--- KHÓA ĐIỀU KIỆN

---
<audio id="credit" loop >
    <source src="/website/credit.mp3" type="audio/mp3">
</audio>

<div class="credits-container">
  <div class="credits-content">
    <div class="spacer-large"></div>
    <h11>ĐỐI XÃ HẠY: THE PROJECT</h11>
    <p class="subtitle">MỘT ĐỒ ÁN ĐƯỢC THỰC HIỆN TẠI</p>
    <p class="subtitle">TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN TP.HCM</p>
    <p class="subtitle">NGÀNH TRÍ TUỆ NHÂN TẠO – LỚP 25TNT2</p>
    <div class="spacer-large"></div>
    <h12>CAST & CREW</h12>
    <h3>ĐỐI XÃ HẠY – MAIN TEAM</h3>
    <div class="spacer"></div>
    <div class="team-member">
      <p class="role">NGUYỄN VIẾT HOÀNG LỘC</p>
      <p class="description">Frontline Developer<br>Đảm nhiệm giao diện, code tới sáng, fix bug không khoan nhượng.</p>
    </div>
    <div class="team-member">
      <p class="role">NGUYỄN ĐÌNH NGỌC KHOA</p>
      <p class="description">Web Engineer<br>Người xử lý logic, tối ưu chức năng và chiến đấu với các lỗi từ đâu xuất hiện.</p>
    </div>
    <div class="team-member">
      <p class="role">BÙI QUANG MINH</p>
      <p class="description">Slide & Report Specialist<br>Giữ nhiệm vụ tạo ra tài liệu nhìn cho ra sản phẩm.</p>
    </div>
    <div class="team-member">
      <p class="role">LÊ QUANG MINH</p>
      <p class="description">The Presenter<br>Người đứng ra kể toàn bộ hành trình của dự án trước giảng đường.</p>
    </div>
    <div class="spacer-large"></div>
    <h12>SPECIAL SUPPORT TEAM</h12>
    <h3>BỘ PC</h3>
    <div class="spacer"></div>
    <div class="support-team">
      <p class="role">NGUYỄN ĐỨC HUY</p>
    </div>
    <div class="support-team">
      <p class="role">TRẦN ĐỨC LONG</p>
    </div>
    <div class="support-team">
      <p class="role">PHAN CHẤN VIỄN</p>
    </div>
    <div class="support-team">
      <p class="role">TRƯƠNG TIẾN DƯƠNG</p>
    </div>
    <p class="description" style="margin-top: 2rem;">Đội ngũ hỗ trợ hậu trường: góp ý, test thử, và cứu nguy khi nhóm cần.</p>
    <div class="spacer-large"></div>
    <h12>ACKNOWLEDGMENTS</h12>
    <div class="spacer"></div>
    <p class="description" style="font-size: 1.2rem;">Cảm ơn thầy cô đã hướng dẫn và tạo điều kiện để dự án hoàn thành.<br>
    Cảm ơn bạn bè đã góp ý giúp nhóm hoàn thiện sản phẩm tốt hơn.<br>
    Cảm ơn bạn đã chiêm ngưỡng trang web này
    Cảm ơn bạn vì đã trở thành một phần của trải nghiệm<br><br> Embrace HCMUS</p>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
    <p class="year">ĐỐI XÃ HẠY – 2025</p>
    <div class="spacer"></div>
    <p class="final-message">THE CREDITS END HERE</p>
    <p class="final-message">BUT THE STORY CONTINUES.</p>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
    <div class="coffee"> Mua cho tôi một cốc cà phê<br> 1038050406 Vietcombank</div>
    <div class="spacer-large"></div>
    <div class="spacer-large"></div>
  </div>
</div>


<style>

body {
  margin: 0;
  padding: 0;
  background-color: #0E2A41;
  background-image: url('https://wallpapercave.com/wp/wp9218687.jpg');
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.credits-container {
  position: fixed;
  top: 180px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.credits-content {
  width: 100%;
  max-width: 900px;
  text-align: center;
  color: #ffffff;
  padding: 0 2rem;
  animation: scrollUp 180s linear forwards;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
}

@keyframes scrollUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
}

.credits-content h11 {
  font-size: 3.5rem !important;
  font-weight: 600 !important;
  margin: 3rem 0 1rem !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  line-height: 1.2 !important;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8) !important;
}

.credits-content h12 {
  font-size: 2.2rem !important;
  font-weight: 600 !important;
  margin: 4rem 0 1.5rem !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  line-height: 1.3 !important;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.7) !important;
}

.credits-content h3 {
  font-size: 1.8rem !important;
  font-weight: 600 !important;
  margin: 3rem 0 1rem !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  line-height: 1.3 !important;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7) !important;
}

.credits-content p {
  font-size: 1.3rem;
  line-height: 2;
  margin: 1rem 0;
  font-weight: 300;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0 0.5rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.role {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0 0.3rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.85;
  line-height: 1.4;
}

.description {
  position:relative;
  left: 70px;
  font-size: 1.4rem;
  opacity: 0.7;
  margin: 0.3rem 0 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.team-member {
  margin: 2.5rem 0;
}

.support-team {
  margin: 1rem 0;
}

.spacer {
  height: 4rem;
}

.spacer-large {
  height: 6rem;
}

.final-message {
  font-size: 1.6rem;
  font-weight: 300;
  margin: 2rem 0;
  letter-spacing: 1px;
  line-height: 1.8;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.8);
}

.year {
  font-size: 2rem;
  font-weight: 700;
  margin: 3rem 0;
  letter-spacing: 3px;
  line-height: 1.3;
}*/

/* Mobile responsive */

@media (max-width: 768px) {
  .credits-content h11 {
    font-size: 2rem !important;
  }
  
  .credits-content h12 {
    font-size: 1.6rem !important;
  }
  
  .credits-content h3 {
    font-size: 1.4rem !important;
  }
  
  .credits-content p {
    font-size: 1.1rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .final-message {
    font-size: 1.3rem;
  }
}

a.text-base.font-medium {
  position: relative;
  left: 30%;
}

.flex.flex-1.items-center.justify-between {
  position: relative;
  right: -200px;
}
.coffee{
    font-size: 2rem;
    font-weight: 100;
    text-transform: uppercase !important;
}
</style>

<script>
// Lấy element audio
const creditAudio = document.getElementById('credit');

// Biến để kiểm tra đã phát chưa
let hasPlayed = false;

// Function phát nhạc
function playAudio() {
  if (!hasPlayed) {
    creditAudio.play()
      .then(() => {
        console.log('Audio đang phát');
        hasPlayed = true;
      })
      .catch((error) => {
        console.log('Không thể phát audio:', error);
      });
  }
}

// Lắng nghe sự kiện click trên toàn bộ document
document.addEventListener('click', playAudio, { once: true });

// Lắng nghe thêm sự kiện touchstart cho mobile
document.addEventListener('touchstart', playAudio, { once: true });

// Hoặc lắng nghe bất kỳ tương tác nào
document.addEventListener('keydown', playAudio, { once: true });
</script>