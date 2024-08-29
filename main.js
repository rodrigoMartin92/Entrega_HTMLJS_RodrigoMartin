
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