// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// Typing Effect

const text = "Future Network Computing Professional";
let i = 0;

function typing() {

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }
}

typing();


// Contact Form Validation

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    if(name === "" || email === ""){

        document.getElementById("formMessage")
        .innerHTML =
        "Please fill in all fields.";

        return;
    }

    document.getElementById("formMessage")
    .innerHTML =
    "Message sent successfully!";
});


// Project Search

document
.getElementById("search")
.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let projects =
document.querySelectorAll(".project-card");

projects.forEach(project => {

project.style.display =
project.textContent
.toLowerCase()
.includes(value)
? "block"
: "none";

});

});


// Scroll To Top

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 200){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});
