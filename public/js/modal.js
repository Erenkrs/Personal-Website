var modal = document.getElementById('pp-modal');
var img = document.getElementById('openModal');
var modalImg = document.getElementById("img01");
var body = document.body
img.onclick = function () {
    modal.style.display = "flex";
    body.classList.toggle('block-window-scroll');
    modalImg.src = this.src;
}
modal.onclick = function () {
    modal.style.display = "none";
}