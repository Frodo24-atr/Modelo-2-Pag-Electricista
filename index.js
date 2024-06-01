/*botones navbar*/   /*botones navbar*/  /*botones navbar*/  /*botones navbar*/  /*botones navbar*/

document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('toggle-menu');
    const menuItems = document.querySelectorAll('.navbar-list li a');
  
    menuItems.forEach(item => {
      item.addEventListener('click', function (event) {
        // Obtener el href del enlace
        const targetId = this.getAttribute('href');
  
        if (targetId === '#') {
          // Si el href es '#', evitar el comportamiento por defecto y desplazarse al inicio
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else if (targetId.startsWith('#')) {
          // Prevenir el comportamiento por defecto del enlace
          event.preventDefault();
          
          // Desplazarse a la sección correspondiente
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        }
  
        // Cerrar el menú desmarcando el checkbox
        menuCheckbox.checked = false;
      });
    });
  });

  /*botones seccion presentacion*/  /*botones seccion presentacion*/  /*botones seccion presentacion*/

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });

  /*seccion servicios*/  /*seccion servicios*/  /*seccion servicios*/  /*seccion servicios*/  /*seccion servicios*/

  document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;
    const cardWidth = document.querySelector('.card').offsetWidth;
    const totalCards = document.querySelectorAll('.card').length;
    
    // Función para desplazamiento automático
    function autoScroll() {
      index++;
      if (index >= totalCards) {
        index = 0;
      }
      cardsContainer.scrollLeft = index * cardWidth;
    }
  
    // Configurar desplazamiento automático
    const scrollInterval = setInterval(autoScroll, 3000); // Cambia el tiempo de desplazamiento aquí (en milisegundos)
  
    // Detener desplazamiento automático cuando se hace clic en los botones de navegación
    prevButton.addEventListener('click', () => clearInterval(scrollInterval));
    nextButton.addEventListener('click', () => clearInterval(scrollInterval));
  });
  

  /*seccion galeria*/   /*seccion galeria*/  /*seccion galeria*/  /*seccion galeria*/  /*seccion galeria*/

  document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = Array.from(carouselImages.querySelectorAll('img'));
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    // Duplicar imágenes para crear el efecto de bucle infinito
    images.forEach(image => {
        const clone = image.cloneNode();
        carouselImages.appendChild(clone);
    });

    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        const width = images[0].clientWidth;
        const move = -(currentIndex * width);
        carouselImages.style.transition = 'transform 0.5s ease-in-out';
        carouselImages.style.transform = `translateX(${move}px)`;

        if (currentIndex === totalImages) {
            setTimeout(() => {
                carouselImages.style.transition = 'none';
                currentIndex = 0;
                carouselImages.style.transform = 'translateX(0)';
            }, 500); // 500ms debe coincidir con el tiempo de la transición
        }
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex > totalImages) {
            currentIndex = 1;
            carouselImages.style.transition = 'none';
            const move = -(currentIndex * images[0].clientWidth);
            carouselImages.style.transform = `translateX(${move}px)`;
            setTimeout(() => {
                carouselImages.style.transition = 'transform 0.5s ease-in-out';
                updateCarousel();
            }, 50);
        } else {
            updateCarousel();
        }
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
            carouselImages.style.transition = 'none';
            const move = -(currentIndex * images[0].clientWidth);
            carouselImages.style.transform = `translateX(${move}px)`;
            setTimeout(() => {
                carouselImages.style.transition = 'transform 0.5s ease-in-out';
                updateCarousel();
            }, 50);
        } else {
            updateCarousel();
        }
    }

    rightButton.addEventListener('click', () => {
        nextImage();
    });

    leftButton.addEventListener('click', () => {
        prevImage();
    });

    setInterval(nextImage, 3000); // Desplazamiento automático cada 3 segundos
});


  
