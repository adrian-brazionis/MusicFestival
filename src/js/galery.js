document.addEventListener(`DOMContentLoaded`,function() {
    newGalery();
});

function newGalery() {
    const galery = document.querySelector(`.galery-images`);
    

    for( let i = 1; i <= 12; i++ ) {
    const image = document.createElement(`IMG`);    //creo imagen con JS//
    image.src = `build/img/thumb/${i}.webp`;
    image.dataset.imageId = i;

    //Añadir la function showImage
    image.onclick = showImage;
    
    const list = document.createElement(`LI`);      //creo el LI que la va a contener//
    list.appendChild(image);                        //Agrego la imagen al LI//

    galery.appendChild(list);                       //hago que la muestre en la page//
    }
}

function showImage(e) {
    const id = parseInt ( e.target.dataset.imageId );

    //Generar imagen//

    const image = document.createElement(`IMG`);
    image.src = `build/img/grande/${id}.webp`;

    //Overlay oscuro al ver imagen
    const overlay = document.createElement(`DIV`);
    overlay.appendChild(image);
    overlay.classList.add(`overlay`);

    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
        
    }

    //Boton Cerrar imagen
    const closeImage = document.createElement(`P`);
    closeImage.textContent = `X`;
    closeImage.classList.add(`btn-close`);

    overlay.appendChild(closeImage);

    closeImage.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
    }


    //Mostrar en el HTML
    const body = document.querySelector(`body`);
    body.appendChild(overlay);  
    body.classList.add(`fix-body`);           
}