document.querySelector('.navbar__booking-link').addEventListener('click', () => {
    console.log('clicked');
    document.getElementById('overlay').style.display = 'flex';
})
document.querySelector('.overlay-close-btn').addEventListener('click', () => {
    closeOverlay();
})
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}