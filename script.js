
const practicas = [
    {
        title: "Card 1",
        description: "Descripción de la primera tarjeta. Contiene un enlace interesante.",
        imgSrc: "https://via.placeholder.com/300",
        link: "https://www.example1.com"
    },
    {
        title: "Card 2",
        description: "Descripción de la segunda tarjeta. Contiene un enlace interesante.",
        imgSrc: "https://via.placeholder.com/300",
        link: "https://www.example2.com"
    },
    {
        title: "Card 3",
        description: "Descripción de la tercera tarjeta. Contiene un enlace interesante.",
        imgSrc: "https://via.placeholder.com/300",
        link: "https://www.example3.com"
    },
    {
        title: "Card 4",
        description: "Descripción de la cuarta tarjeta. Contiene un enlace interesante.",
        imgSrc: "https://via.placeholder.com/300",
        link: "https://www.example4.com"
    },

];


function createCard(){

    //se crea el contenedor donde estan las cards
    const container = document.getElementById('card-container');

    practicas.forEach(practica => {
        
        //creamos el contenedor para cada card
        const card = document.createElement('div');
        card.classList.add('card')

        //crear la imagen
        const image = document.createElement('img');
        image.classList.add('card-img');
        image.src = practica.imgSrc;
        image.alt = `Imagen de ${practica.title}`


        //crear el contenedor de los textos
        const content = document.createElement('div')
        content.classList.add('card-content');

        //creamos el titulo
        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = practica.title;

        //creamos la decsripcion
        const description = document.createElement('h3');
        description.classList.add('card-description');
        description.textContent = practica.description;

        //creamos el boton para mandar al link
        const button = document.createElement('button');
        button.classList.add('card-button');
        button.textContent= 'Visualiza esta practica';
        button.onclick = function() {
            window.open(practica.link, '_blank');
        }

        //agregar el TODO el contenido a la tarjeta (texto)
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(button)

        //agregamos la imagen y el contenido a la card
        card.appendChild(image);
        card.appendChild(content);

        //agregamos la tarjeta al contenedor
        container.appendChild(card);
    });

} //Fin de la funcion

createCard();
