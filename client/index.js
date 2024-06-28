document.querySelector('.navbar__booking-link').addEventListener('click', () => {

    document.getElementById('overlay').style.display = 'flex';
})
document.querySelector('.overlay-close-btn').addEventListener('click', () => {
    closeOverlay();
})
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


document.querySelector('.overlay__form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('countrycode').value + document.getElementById('phone').value;
    const stage = document.getElementById('stage').value;
    const applyNowBtn = document.querySelector('.apply-now-btn');
    applyNowBtn.textContent = 'Loading...';
    applyNowBtn.disabled = true;
    // validation
    if (name === '' || email === '' || phone === '' || stage === '') {
        alert('All fields are required');
        applyNowBtn.textContent = 'Apply Now';
        applyNowBtn.disabled = false;
        return;
    }
    try {
        const response = await fetch('http://localhost:8000/api/user/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, stage })
        })
        const data = await response.json();
        console.log("data", data)
        alert(data.message)
        return data;

    } catch (error) {
        console.log("error aya", err);
        alert("error occured", err.message)

    }
    finally {
        applyNowBtn.textContent = 'Apply Now';
        applyNowBtn.disabled = false;
        closeOverlay();
    }

}
)