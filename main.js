// Nội dung bức thư
var letterContent = "Chúc mừng sinh nhật em yêu! 💖 Hôm nay là ngày đặc biệt khi thiên thần của anh đến với thế giới này, mang theo ánh sáng rực rỡ vào cuộc đời anh. Anh thật may mắn và hạnh phúc khi có em bên cạnh, người đã làm cho mỗi ngày của anh trở nên ý nghĩa. Mọi khoảnh khắc bên em, từ nụ cười đến những phút giận dỗi, đều là kỷ niệm anh trân trọng. Anh mong em luôn hạnh phúc, khỏe mạnh và tràn đầy yêu thương. Cảm ơn em đã đến và làm cho cuộc sống của anh thêm tươi đẹp. Yêu Trúc rất nhiều! 💕🎂✨";

// Tốc độ viết chữ (số càng nhỏ tốc độ càng nhanh)
var durationWrite = 45;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    boxLetter.innerHTML = ""; // Xóa nội dung cũ
    let i = 0;
    function typeLetter() {
        if (i < letterContent.length) {
            boxLetter.innerHTML += letterContent[i];
            i++;
            setTimeout(typeLetter, durationWrite);
        }
    }
    typeLetter();
}

// Nhạc nền
var audio = new Audio("audio/music.mp3"); // Đảm bảo đúng đường dẫn
audio.loop = true; // Phát lặp lại

// Tạo nút bật/tắt âm thanh
document.body.insertAdjacentHTML("beforeend", '<button class="toggle-audio">🔊 Bật âm thanh</button>');
var audioBtn = document.querySelector(".toggle-audio");

audioBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        audioBtn.textContent = "🔇 Tắt âm thanh";
    } else {
        audio.pause();
        audioBtn.textContent = "🔊 Bật âm thanh";
    }
});

// Khi mở thư, phát nhạc tự động
var cardValentine = document.querySelector(".cardValentine");
cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
        audio.play(); // Bắt đầu phát nhạc
        audioBtn.textContent = "🔇 Tắt âm thanh";
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
        audio.pause(); // Dừng nhạc
        audio.currentTime = 0;
        audioBtn.textContent = "🔊 Bật âm thanh";
    }
});
