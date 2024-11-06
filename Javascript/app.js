
// Form contact

// DomContentLoaded para la validacion

    document.addEventListener("DOMContentLoaded",()=>{
        window.scrollTo(0, 0);

// Creacion del objeto Email

    const email = {
        nombre:"",
        email:"",
        mensaje:""
    }
    
// Referencia a los elementos a utilizar del DOM

    const inputName = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#email");
    const inputMensaje = document.querySelector("#mensaje");
    const btnSubmit = document.querySelector(".form button[type=submit]");
    const formulario = document.querySelector(".form");
    const btnReset = document.querySelector(".form-reset");

// Eventos de elementos a utilizar del DOM

    inputName.addEventListener("input",validar);
    inputName.addEventListener("blur",validar);
    inputEmail.addEventListener("input",validar);
    inputEmail.addEventListener("blur",validar);
    inputMensaje.addEventListener("input",validar);
    inputMensaje.addEventListener("blur",validar);
    btnReset.addEventListener("click",resetAll)

// Submit Prevent default

    formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
    });

// Funcion de error

    function mostrarAlerta (mensaje,referencia){

    limpiarAlerta(referencia);
    
    const error = document.createElement("P");
    error.classList.add("created");
    error.textContent = mensaje;
    referencia.appendChild(error);

    };

// Funcion de validacion
    
    function validar (e){
        if(e.target.value.trim() === ""){
            email[e.target.name] ="";
            comprobarEmail();
            mostrarAlerta(`*El campo ${e.target.id} es obligatorio*`, e.target.parentElement);
            return
        };

        if(e.target.id === "email" && !validarEmail(e.target.value)){
            email[e.target.name] ="";
            comprobarEmail();
            mostrarAlerta(`*El ${e.target.id} no es valido*`, e.target.parentElement);
            return
        };
        
        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarEmail();
        };

        function limpiarAlerta(referencia){

// Comprobamos si ya existe una alerta

        const alert = referencia.querySelector(".created");
        
        if(alert){
            alert.remove();
        }
        };

// Validar email

        function validarEmail(email){

            const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            const resultado = regex.test(email);
            return resultado
        };

        function comprobarEmail(){
            if(Object.values(email).includes("")){
                btnSubmit.style.opacity = "50%";
                btnSubmit.disabled=true;
                return
            }
                btnSubmit.style.opacity = 1;
                btnSubmit.disabled=false;

        };

        // Quitar alerta al click boton reset

        function resetAll(){
            document.querySelectorAll(".created").forEach(element => element.remove());
                return
        };
});

// Navbar show
    
    const navList = document.querySelector(".nav-list");
    const button = document.querySelector(".nav-toggle");
    const body = document.querySelector("body");

    button.addEventListener("click",(e)=>{
    e.stopPropagation();
    navList.classList.toggle("show")
    });

    body.addEventListener("click",()=>{
    if(navList.classList.contains("show")){
        navList.classList.remove("show")
    }
});
    



















