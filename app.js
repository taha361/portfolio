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






// Project Data
const projects = [
    {
        title: "ESusoft",
        description: [
            "Designed and implemented a dynamic e-commerce platform, eSusoft, tailored to support a wide range of retail industries including clothing, shoes, and workshops.",
            "Implemented secure payment gateways and streamlined checkout processes to ensure reliable transactions.",
            "Added multilingual and multi-currency support, expanding accessibility for international customers and enabling smooth operations in diverse markets.",
            "Enhanced the e-commerce solution with a comprehensive admin dashboard, providing store owners with real-time data on sales, inventory levels, and customer analytics."
        ],
        images: [
            "./assets/projects/project1.png", 
            "./assets/projects/project1/2.png", 
            "./assets/projects/project1/3.png", 
            "./assets/projects/project1/1.png", 
            "./assets/projects/project1/4.png"
        ],
    },
    {
        title: "Ticket Scanning Solution",
        description: [
            "A ticket scanning solution to manage and verify event tickets quickly and efficiently.",
            "Features real-time ticket validation to ensure accuracy at event entrances.",
            "Designed to support a high volume of entries in a short period.",
            "Increased ticket validation efficiency by 30% through developing a QR code scanning system."
        ],
        images: [
            "./assets/projects/project2.png", 
            "./assets/projects/project2/1.png", 
            "./assets/projects/project2/2.png", 
            "./assets/projects/project2/3.png", 
            "./assets/projects/project2/4.png"
        ],
    },
    {
        title: "Hotel Management System",
        description: [
            "Developed a cloud-based hotel management system tailored for the Norwegian market, enabling seamless booking, check-in, and checkout processes for hotels of varying sizes.",
            "Utilized Angular and Express to create a responsive admin dashboard, providing hotel managers with real-time insights into occupancy, revenue, and customer feedback.",
            "Increased booking efficiency by 25% through developing customizable room selection and calendar features for hotel staff and guests.",
            "Automated guest notifications, including booking confirmations and reminders, through email and SMS integration, enhancing guest experience and reducing manual workload."
        ],
        images: [
            "./assets/projects/project3.png", 
            "./assets/projects/project3/1.png", 
            "./assets/projects/project3/2.png", 
            "./assets/projects/project3/3.png", 
            "./assets/projects/project3/4.png",
            "./assets/projects/project3/5.png"
        ],
    },
    {
        title: "Event Ticketing Platform",
        description: [
            "Increased ticket revenue by 15% by implementing secure tiered ticketing for main and sub-events.",
            "Developed a real-time ticketing platform that allows users to select seats simultaneously using WebSocket technology.",
            "Resulted in increased transaction volume by 25% by integrating streamlined payment process with 3 providers STRIPE, SUMUP, VIPPS.",
        ],
        images: [
            "./assets/projects/project4.png", 
            "./assets/projects/project4/1.png", 
            "./assets/projects/project4/2.png", 
            "./assets/projects/project4/3.png", 
            "./assets/projects/project4/4.png",
        ],
    },
    // Add more projects...
];

let currentSlide = 0;

// Handle Project Card Clicks
document.querySelectorAll(".projects__card").forEach((card, index) => {
    card.addEventListener("click", () => {
        const project = projects[index];
        document.getElementById("modalTitle").innerText = project.title;
       

         // Generate bullet point list for description
         const descriptionList = document.getElementById("modalDescription");
         descriptionList.innerHTML = ""; // Clear previous content
         project.description.forEach((point) => {
             const listItem = document.createElement("li");
             listItem.innerText = point;
             descriptionList.appendChild(listItem);
         });

        // Generate slideshow content
        const slideshow = document.getElementById("slideshow");
        slideshow.innerHTML = ""; // Clear previous content
        project.images.forEach((src, idx) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.style.display = idx === 0 ? "block" : "none"; // Show only the first slide
            slide.innerHTML = `<img src="${src}" alt="${project.title} image ${idx + 1}">`;
            slideshow.appendChild(slide);
        });

        currentSlide = 0; // Reset to first slide
        document.getElementById("projectModal").style.display = "block";
    });
});

// Handle Slideshow Navigation
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? "block" : "none";
    });
}

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + projects[0].images.length) % projects[0].images.length;
    showSlide(currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % projects[0].images.length;
    showSlide(currentSlide);
});

// Close Modal
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("projectModal").style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("projectModal")) {
        document.getElementById("projectModal").style.display = "none";
    }
});


