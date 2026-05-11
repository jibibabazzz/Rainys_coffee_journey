/* Café filter function - This function displays café cards based on selected categories such as All, Roaster, and Specialty. */

function showCafe(category) { 
    let cafes = document.getElementsByClassName("cafe"); /* Select all café cards */

    for (let i = 0; i < cafes.length; i++) { /* Loop through café cards and show matching categories */
        if (category === "all" || cafes[i].classList.contains(category)) {
            cafes[i].style.display = "block";
        } else {
            cafes[i].style.display = "none";
        }
    }
}

/* Contact form validation */
let contactForm = document.getElementById("contactForm");

if (contactForm) { /* Validate form before submission */
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields."; /* pop up when fields are empty */
            formMessage.style.color = "#B24038";
        } else if (email.indexOf("@") === -1) {
            formMessage.textContent = "Please enter a valid email."; /* pop up when email is invalid */
            formMessage.style.color = "#B24038";
        } else {
            formMessage.textContent = "Message sent successfully."; /* pop up when message is sent */
            formMessage.style.color = "#6b4f3f";
            contactForm.reset();
        }
    });
}
