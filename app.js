const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle.addEventListener('click', () => {
	ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "taha yassine ben ameur"
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 300);
	}
}
typeWrite();

// open / close modal

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close')

// open modal
modalBtn.addEventListener('click', () => {
	modal.style.display = "flex";
})

// close modal
modalClose.addEventListener('click', () => {
	modal.style.display = "none";
})

// get current year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// EmailJS Setup and Form Submission
emailjs.init("cggY_MjALRTvhGGo_"); // Your EmailJS user ID from your EmailJS account

// Handle form submission
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(contactForm);
    const formObj = {};
    formData.forEach((value, key) => {
        formObj[key] = value;
    });
	console.log(formData)

    // Send the email using EmailJS
    emailjs.sendForm("service_cguerwv", "template_rjluon1", contactForm)
        .then((response) => {
            alert("Your email has been sent successfully!");
            contactForm.reset(); // Optionally reset the form after submission
        })
        .catch((error) => {
            alert("Something went wrong. Please try again later.");
            console.error("Error sending email:", error);
        });
});
