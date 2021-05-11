export const redirect = (user_type)=>{
    switch(parseInt(user_type)) {
        case 5:
            return "/admin/dashboard"
        case 2:
            return "/student/dashboard"
        case 0:
            return "/"
        default:
            return "/";
    }
}
export const validate = (classname) =>{
    (() => {
        // 'use strict';

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll( '.'+classname);

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
}
export const LOADERON = ()=>{
    document.getElementById("loader").style.opacity = "1"
    document.getElementById("loader").style.visibility = "visible"
}
export const LOADEROFF = ()=>{
    document.getElementById("loader").style.opacity = "0"
    document.getElementById("loader").style.visibility = "hidden"
}