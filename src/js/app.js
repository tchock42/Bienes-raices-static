document.addEventListener('DOMContentLoaded', function(){   //callback
    eventListeners();
    darkMode();
    // darkChange();
});

function darkMode(){
    //Guardar el estado del darkMode en el localStorage

    //Comprueba si estaba habilitado darkMode
    let darkLocal = window.localStorage.getItem('dark');
    if (darkLocal === 'true'){
        document.body.classList.add('darkMode');
    }

    //Codigo que permite el darkMode usando el boton de luna
    // const botonDarkMode = document.querySelector('.dark-mode-boton');
    // botonDarkMode.addEventListener('click', function(){
    //     document.body.classList.toggle('darkMode');
    // });
    document.querySelector('.dark-mode-boton').addEventListener('click', darkChange);
}

function darkChange(){
    let darkLocal = window.localStorage.getItem('dark');

    if(darkLocal===null || darkLocal ==='false'){
        //no se habia inicializado darkLocal
        window.localStorage.setItem('dark', true);
        document.body.classList.add('darkMode');
    }else{
        //Si ya era true, se pasa a false
        window.localStorage.setItem('dark', false);
        document.body.classList.remove('darkMode')
    }
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion')

    navegacion.classList.toggle('mostrar'); //elimina o agrega la clase mostrar
}