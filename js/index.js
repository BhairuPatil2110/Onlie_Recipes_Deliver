/* =============================================================
                    Responsive Navbar code
   ============================================================= */
   
   const mobile_nav = document.querySelector('.mobile-navbar-btn');
   
   const nav_header = document.querySelector('.header');
   
   const toggleNavbar = () => {
       nav_header.classList.toggle('active');
    }
    
    mobile_nav.addEventListener('click', () => {
        toggleNavbar();
    });



/* =============================================================
                    CONTACT-US code
   ============================================================= */
   
   
const contact_inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

contact_inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});





/* =============================================================
                    SIGN-IN(User and Admin) code
   ============================================================= */


const user_sign_in_btn = document.querySelector("#user-sign-in-btn");

const admin_sign_in_btn = document.querySelector("#admin-sign-in-btn");

const sign_in_wrapper = document.querySelector(".sign-in-wrapper");


admin_sign_in_btn.addEventListener('click', () => {
    sign_in_wrapper.classList.add("form-animation");
});

user_sign_in_btn.addEventListener('click', () => {
    sign_in_wrapper.classList.remove("form-animation");
});    