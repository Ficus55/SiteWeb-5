// mobile menu open
document.querySelector(".menu_burger").addEventListener("click", () => {
    document.querySelector(".site-header").classList.toggle("open");
    document.body.classList.toggle("disable_scroll");
});

// mobile menu close
document.querySelector(".menu_close_body").addEventListener("click", () => {
    document.querySelector(".site-header").classList.toggle("open");
    document.body.classList.toggle("disable_scroll");
});

// disable scroll when mobile menu is open
document.querySelector(".menu_list").addEventListener("click", (event) => {
    if (event.target.closest(".menu_link")) {
        document.querySelector(".site-header").classList.toggle("open");
        document.body.classList.remove("disable_scroll");
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("open")) {
        document.querySelector(".site-header").classList.toggle("open");
        document.body.classList.toggle("disable_scroll");
    }
});


// slider

const configHome = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    autoplay: 8000
};

if (document.querySelector(".glide_home")) {
    new Glide(".glide_home", configHome).mount()
}


// slider testimonials

const testimonials = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 40,
    breakpoints: {
        590: {
            perView: 1
        }
    }
};

if (document.querySelector(".glide_testimonials")) {
    new Glide(".glide_testimonials", testimonials).mount()
}




// copyright year
let currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;


//Accordion
document.querySelectorAll(".footer__title").forEach((element) => {
    element.addEventListener("click", () => {
        element.closest('.footer-item').classList.toggle('active');
    });
})


//Form e-mail validation
function checkEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


//Subscribe form
if (document.querySelector(".newsletter-contact-form")) {
    let newsletterForm = document.forms.newsletter_form;
    let newsletterEmail = newsletterForm.email;

    newsletterForm.addEventListener("submit", function (event) {
        let errors = document.querySelectorAll("#newsletter-section .error");
        errors.forEach((element) => {
            element.remove();
        });
        if (checkEmail(newsletterEmail)) {
            if (!newsletterEmail.nextElementSibling.closest(".error")) {
                newsletterForm.insertAdjacentHTML('beforeend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
            }
            event.preventDefault();
        }
    });

    //Subscribe form remove warning message
    document.querySelector(".newsletter-contact-form").addEventListener("input", function (event) {
        if (document.querySelector(".newsletter-contact-form").lastElementChild.closest(".error")) {
            document.querySelector(".newsletter-contact-form").lastElementChild.closest(".error").remove();
        }
    });
}



//Join us form
let joinUsForm = document.forms.join_us;
let joinUsEmail = joinUsForm.email;

joinUsForm.addEventListener("submit", function (event) {
    let errors = document.querySelectorAll("#newsletter-footer .error");
    errors.forEach((element) => {
        element.remove();
    });
    if (checkEmail(joinUsEmail)) {
        if (!joinUsEmail.nextElementSibling.closest(".error")) {
            joinUsForm.insertAdjacentHTML('beforeend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }
});

//Join us form remove warning message
document.querySelector("#newsletter-footer").addEventListener("input", function (event) {
    if (document.querySelector("#newsletter-footer").lastElementChild.closest(".error")) {
        document.querySelector("#newsletter-footer").lastElementChild.closest(".error").remove();
    }
});