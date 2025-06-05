3// 🔹 Datos del carrusel

let currentIndex = 0;

// 🔹 Elementos del carrusel
const imageElement = document.getElementById("carousel-image");
const titleElement = document.getElementById("carousel-title");
const descriptionElement = document.getElementById("carousel-description");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 🔹 Función para actualizar el carrusel
function updateCarousel() {
  // Oculta todas las imágenes
  document.getElementById('carousel-image').classList.remove('active');
  document.getElementById('carousel-image-2').classList.remove('active');

  // Muestra solo la imagen correspondiente
  const current = slides[index];
  document.getElementById(current.imgId).classList.add('active');

  // Cambia texto
  title.textContent = current.title;
  description.textContent = current.description;
}

// 🔹 Evento para avanzar
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// 🔹 Evento para retroceder
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// 🔹 Inicializar carrusel
updateCarousel();

//secciones 
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    document.getElementById(id).classList.add('activa');
}

const exhibiciones = [
    {
        imgId: 'ex-image-1',
        title: 'Auto Show Retro',
        description: 'Una de nuestras exhibiciones más populares con autos clásicos de los 60s y 70s.'
    },
    {
        imgId: 'ex-image-2',
        title: 'Muscle Cars en Vivo',
        description: 'Vehículos icónicos estadounidenses rugiendo como en sus mejores tiempos.'
    },
    {
        imgId: 'ex-image-3',
        title: 'Expo Futuro Clásico',
        description: 'Prototipos modernos con potencial para convertirse en leyendas.'
    }
];

let exIndex = 0;

const exTitle = document.getElementById("ex-title");
const exDesc = document.getElementById("ex-description");
const nextExBtn = document.getElementById("nextExBtn");
const prevExBtn = document.getElementById("prevExBtn");

function updateExCarousel() {
    exhibiciones.forEach(ex => {
        document.getElementById(ex.imgId).classList.remove("active");
    });

    const currentEx = exhibiciones[exIndex];
    document.getElementById(currentEx.imgId).classList.add("active");
    exTitle.textContent = currentEx.title;
    exDesc.textContent = currentEx.description;
}

nextExBtn.addEventListener("click", () => {
    exIndex = (exIndex + 1) % exhibiciones.length;
    updateExCarousel();
});

prevExBtn.addEventListener("click", () => {
    exIndex = (exIndex - 1 + exhibiciones.length) % exhibiciones.length;
    updateExCarousel();
});

updateExCarousel();


