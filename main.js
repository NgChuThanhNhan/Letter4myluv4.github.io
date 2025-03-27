// Thay đổi nội dung búc thư ở đây
var letterContent ="Chúc mừng sinh nhật em bé đáng yêu ! Hôm nay là một ngày thật đặc biệt, ngày mà thiên thần của anh đã đến với thế giới này và mang theo ánh sáng rực rỡ vào cuộc đời anh. Anh cảm thấy thật may mắn và hạnh phúc khi có em bên cạnh, người đã làm cho mỗi ngày của anh trở nên ý nghĩa và tràn đầy niềm vui.Những khoảnh khắc chúng ta đã cùng nhau trải qua, từ những nụ cười, những cái ôm ấm áp cho đến những giây phút giận dỗiii, đều là những kỷ niệm quý giá mà anh luôn trân trọng.Em là người đặc biệt nhất trong trái tim anh, và anh mong rằng em sẽ luôn hạnh phúc, khỏe mạnh và tràn đầy niềm vui.Anh yêu em rất nhiều và sẽ luôn ở bên em, cùng em trải qua mọi niềm vui và thử thách trong cuộc sống. Cảm ơn em đã đến bên anh và làm cho cuộc sống của anh trở nên tươi đẹp hơn. Anh mong rằng mỗi ngày bên em đều là một ngày tuyệt vời và đáng nhớ.Chúc em có một sinh nhật thật vui vẻ và ngập tràn yêu thương! ....Yêu Trúc gất nhiều 💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
