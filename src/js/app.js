document.addEventListener(`DOMContentLoaded`, function() {
    scrollNav();

    navFixed();
});

function navFixed() {
    
    const barra = document.querySelector(`.header`);
    
    //Registrar el IntersectionObserver

    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove(`fix`);
        }else {
            barra.classList.add(`fix`);
        }
    });

    //Elemento a observar

    observer.observe(document.querySelector(`.about-festival`));

}

function scrollNav() {
    const enlaces = document.querySelectorAll(`.navegacion-header a`);
    
    enlaces.forEach( function ( enlace ) {
        enlace.addEventListener(`click`, function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                    behavior:`smooth`
            });    
        
        });
    });
} 