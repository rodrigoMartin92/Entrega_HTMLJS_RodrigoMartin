// Creación de las muestras de proyectos recientes

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Crear los proyectos dinámicamente
        addProject(data.Proyecto_1.P1_src, data.Proyecto_1.P1_title, data.Proyecto_1.P1_description);
        addProject(data.Proyecto_2.P2_src, data.Proyecto_2.P2_title, data.Proyecto_2.P2_description);
        addProject(data.Proyecto_3.P3_src, data.Proyecto_3.P3_title, data.Proyecto_3.P3_description);
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });

function addProject(imageSrc, title, description) {
    // Crear el contenedor del proyecto
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    // Crear la imagen y asignar los atributos
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;

    // Crear el título del proyecto
    const h2 = document.createElement('h2');
    h2.textContent = title;

    // Crear la descripción del proyecto
    const p = document.createElement('p');
    p.textContent = description;

    // Añadir los elementos al contenedor del proyecto
    projectDiv.appendChild(img);
    projectDiv.appendChild(h2);
    projectDiv.appendChild(p);

    // Añadir el nuevo proyecto a la sección "projects"
    const projectsSection = document.querySelector('.projects');
    projectsSection.appendChild(projectDiv);
}

// Creación de los botones de la barra de navegación

document.addEventListener("DOMContentLoaded", () => {
    // Define los botones de navegación
    const navItems = [
        { id: "about", text: "Sobre Nosotros" },
        { id: "projects", text: "Proyectos" },
        { id: "contact", text: "Contacto" }
    ];

    // Crea los botones y los añade a la barra de navegación
    const navButtonsContainer = document.getElementById("nav-buttons");
    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${item.id}`;
        a.textContent = item.text;

        // Añadir el evento de clic para mostrar la sección correspondiente
        a.addEventListener("click", (event) => {
            event.preventDefault();
            showSection(item.id);
        });

        li.appendChild(a);
        navButtonsContainer.appendChild(li);
    });

    // Función para mostrar la sección correspondiente y ocultar las demás
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.container > section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    // Mostrar la primera sección por defecto
    showSection('about');
});
