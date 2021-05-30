export const redirect = (user_type)=>{
    switch(parseInt(user_type)) {
        case 7:
            return "/admin/superadmin-dashboard"
        case 5:
            return "/admin/add-question-set"
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
    document.getElementById("loader-overlay").style.left = "0"
    document.getElementById("loader-overlay").style.visibility = "visible"
}
export const LOADEROFF = ()=>{
    setTimeout(() => {
        document.getElementById("loader-overlay").style.left = "-100%"
        document.getElementById("loader-overlay").style.visibility = "visible"
    }, 500);
}
export const notification =(text , type="info")=>{

    //types => sucess(shows green right) , error(shows red cross), warning(shows yellow exlaimation )
    const hide= ()=>{
        overlayElm.style.visibility = "hidden";
        overlayElm.style.opacity = "0";
        boxElm.style.transform = "scale(0.5)";
    }
    const show= ()=>{
        overlayElm.style.visibility = "visible";
        overlayElm.style.opacity = "1";
        boxElm.style.transform = "scale(1)";
    }
    
    let overlayElm = document.getElementById('notification-overlay');
    let boxElm = document.getElementById('notification-box');
    let textElm = document.getElementById('notification-text');
    let iconElm = document.getElementById('notification-icon');
    let buttonBoxElm = document.getElementById('notification-buttons');
    switch (type) {
        case 'info':
            iconElm.innerHTML = ""
            textElm.innerHTML = text;
            buttonBoxElm.innerHTML ="";
            var btn = document.createElement("button"); 
            btn.setAttribute("class", "ripple");
            btn.setAttribute("data-mdb-ripple-color", "primary");
            btn.onclick= hide;
            btn.innerHTML = "OK";
            buttonBoxElm.append(btn);
            show();
            break;
        case 'success':
            var icon = document.createElement("i"); 
            icon.className = "fas fa-check-circle fa-6x text-success";
            iconElm.innerHTML = ""
            iconElm.append(icon)
            textElm.innerHTML = text;
            buttonBoxElm.innerHTML ="";
            var btn = document.createElement("button"); 
            btn.setAttribute("class", "ripple");
            btn.setAttribute("data-mdb-ripple-color", "primary");
            btn.onclick= hide;
            btn.innerHTML = "OK";
            buttonBoxElm.append(btn);
            show();
            break;
        case 'error':
            var icon = document.createElement("i"); 
            icon.className = "fas fa-times-circle fa-6x text-danger";
            iconElm.innerHTML = ""
            iconElm.append(icon)
            textElm.innerHTML = text;
            buttonBoxElm.innerHTML ="";
            var btn = document.createElement("button"); 
            btn.setAttribute("class", "ripple");
            btn.setAttribute("data-mdb-ripple-color", "primary");
            btn.onclick= hide;
            btn.innerHTML = "OK";
            buttonBoxElm.append(btn);
            show();
            break;
        case 'confirm':
            return new Promise(function(resolve, reject) {
                const hide2= ()=>{
                    resolve(false);
                    overlayElm.style.visibility = "hidden";
                    overlayElm.style.opacity = "0";
                    boxElm.style.transform = "scale(0.5)";
                }
                const confirm= ()=>{
                    resolve(true);
                    overlayElm.style.visibility = "hidden";
                    overlayElm.style.opacity = "0";
                    boxElm.style.transform = "scale(0.5)";
                }
                var icon = document.createElement("i"); 
                icon.className = "fas fa-exclamation-circle fa-6x text-warning";
                iconElm.innerHTML = ""
                iconElm.append(icon)
                textElm.innerHTML = text;
                buttonBoxElm.innerHTML ="";
                var btn1 = document.createElement("button"); 
                btn1.setAttribute("class", "ripple");
                btn1.setAttribute("data-mdb-ripple-color", "primary");
                btn1.onclick= hide2;
                btn1.innerHTML = "No";
                var btn2 = document.createElement("button"); 
                btn2.setAttribute("class", "ripple");
                btn2.setAttribute("data-mdb-ripple-color", "primary");
                btn2.onclick= confirm
                btn2.innerHTML = "Yes";
                buttonBoxElm.append(btn1);
                buttonBoxElm.append(btn2);
                show();
            });
        case 'onClickReturn':
            return new Promise(function(resolve, reject) {
               
                const clicked= ()=>{
                    resolve(true);
                    overlayElm.style.visibility = "hidden";
                    overlayElm.style.opacity = "0";
                    boxElm.style.transform = "scale(0.5)";
                }
                var icon = document.createElement("i"); 
                icon.className = "fas fa-exclamation-circle fa-6x text-danger";
                iconElm.innerHTML = ""
                iconElm.append(icon)
                textElm.innerHTML = text;
                buttonBoxElm.innerHTML ="";
                
                var btn2 = document.createElement("button"); 
                btn2.setAttribute("class", "ripple");
                btn2.setAttribute("data-mdb-ripple-color", "primary");
                btn2.onclick= clicked
                btn2.innerHTML = "OK";
                buttonBoxElm.append(btn2);
                show();
            });
    
        default:
            break;
    }
   
    
}
export const futurePastDetecter = (givenDate ,hours) => {
    let now = new Date();
    let date = new Date(givenDate);
    let [h ,m, s] = hours.split(":");
    let d = new Date()
    if (date.setHours(0, 0, 0, 0) > now.setHours(0, 0, 0, 0)) {
        return "Upcoming";
    } else if (date.setHours(0, 0, 0, 0) < now.setHours(0, 0, 0, 0)) {
        return "Missed"
    } else {
        if ((parseInt(h)*60 + parseInt(m)) <= (d.getHours()*60 + d.getMinutes())) {
            if((parseInt(h)*60 + parseInt(m)+60) >= (d.getHours()*60 + d.getMinutes())){
                return "Running"
            }else{
                return "Missed"
            }
        } else {
            return "Upcoming today"

        }
    }
}
export const timeConvert = (time)=> {
    // Check correct time format and split into components
    time = time.split(":")[0] + ":" + time.split(":")[1]
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }