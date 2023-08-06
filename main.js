var btn = document.querySelector('.btn-modal');
var close = document.querySelector('.modal__close')
var modal = document.querySelector('.modal-box')
btn.onclick = function() {
    modal.classList.add('active')
}
close.onclick = function () {
    modal.classList.remove('active')
}