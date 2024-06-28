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
/* gather all the values of form fields and console log them like {name:"naveen",email:"naveen@gmail.com",phone:628042379,stage:0-6} */

document.querySelector('.overlay__form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("document-->", document.getElementById('stage'));
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('countrycode').value + document.getElementById('phone').value;
    const stage = document.getElementById('stage').value;
    console.log({ name, email, phone, stage });
    // closeOverlay();
}
)