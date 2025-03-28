// Nội dung bức thư
var letterContent = "Chúc mừng sinh nhật em yêu! 💖 Hôm nay là ngày đặc biệt khi thiên thần của anh đến với thế giới này, mang theo ánh sáng rực rỡ vào cuộc đời anh. Anh thật may mắn và hạnh phúc khi có em bên cạnh, người đã làm cho mỗi ngày của anh trở nên ý nghĩa. Mọi khoảnh khắc bên em, từ nụ cười đến những phút giận dỗi, đều là kỷ niệm anh trân trọng. Anh mong em luôn hạnh phúc, khỏe mạnh và tràn đầy yêu thương. Cảm ơn em đã đến và làm cho cuộc sống của anh thêm tươi đẹp. Yêu Trúc rất nhiều! 💕🎂✨";

// Tốc độ viết chữ (ms)
var durationWrite = 45;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    boxLetter.textContent = ""; // Xóa nội dung cũ
    let i = 0;

    function typeLetter() {
        if (i < letterContent.length) {
            boxLetter.textContent += letterContent[i];
            i++;
            requestAnimationFrame(typeLetter);
        }
    }
    typeLetter();
}

// Nhạc nền
var audio = new Audio("audio/music.mp3");
audio.loop = true;

// Kiểm tra trạng thái âm thanh từ localStorage
if (localStorage.getItem("audioState") === "playing") {
    audio.play();
}

// Tạo nút bật/tắt âm thanh
document.body.insertAdjacentHTML("beforeend", '<button class="toggle-audio">🔊 Bật âm thanh</button>');
var audioBtn = document.querySelector(".toggle-audio");

// Cập nhật trạng thái âm thanh
function updateAudioState(isPlaying) {
    localStorage.setItem("audioState", isPlaying ? "playing" : "paused");
}

// Xử lý bật/tắt nhạc
audioBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        audioBtn.textContent = "🔇 Tắt âm thanh";
        updateAudioState(true);
    } else {
        audio.pause();
        audioBtn.textContent = "🔊 Bật âm thanh";
        updateAudioState(false);
    }
});

// Khi mở thư, phát nhạc tự động
var cardValentine = document.querySelector(".cardValentine");
cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
        audio.play();
        audioBtn.textContent = "🔇 Tắt âm thanh";
        updateAudioState(true);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").textContent = "";
        }, 1000);
        audio.pause();
        audioBtn.textContent = "🔊 Bật âm thanh";
        updateAudioState(false);
    }
});
