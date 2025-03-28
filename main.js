// Thay đổi nội dung bức thư ở đây
var letterContent = "Chúc mừng sinh nhật em yêu! 💖 Hôm nay là ngày đặc biệt khi thiên thần của anh đến với thế giới này, mang theo ánh sáng rực rỡ vào cuộc đời anh. Anh thật may mắn và hạnh phúc khi có em bên cạnh, người đã làm cho mỗi ngày của anh trở nên ý nghĩa. Mọi khoảnh khắc bên em, từ nụ cười đến những phút giận dỗi, đều là kỷ niệm anh trân trọng. Anh mong em luôn hạnh phúc, khỏe mạnh và tràn đầy yêu thương. Cảm ơn em đã đến và làm cho cuộc sống của anh thêm tươi đẹp. Yêu Trúc rất nhiều! 💕🎂✨";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh
var durationWrite = 45;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

// Nhạc nền
var audio = new Audio("audio/music.mp3"); // Đúng đường dẫn
audio.loop = true; // Lặp lại nhạc

// Chỉ phát nhạc khi người dùng click lần đầu
function playMusic() {
    audio.play().then(() => {
        console.log("Nhạc đang phát...");
    }).catch(error => {
        console.log("Trình duyệt chặn autoplay:", error);
    });

    // Xóa sự kiện click sau khi nhạc bắt đầu phát
    document.removeEventListener("click", playMusic);
}

// Khi trang load, chờ người dùng click mới phát nhạc
document.addEventListener("click", playMusic);

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});
