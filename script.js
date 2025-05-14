const infoBtn = document.querySelector(".impotentInfo button"), cardBox = document.querySelector(".cardBox");

infoBtn.onclick = function () {
    infoBtn.classList.toggle("open");
    cardBox.classList.toggle("open");
}