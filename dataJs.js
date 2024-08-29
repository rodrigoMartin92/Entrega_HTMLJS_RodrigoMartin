// Muestra el contenedor de carga
document.getElementById('loading').classList.remove('hidden');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Oculta el contenedor de carga
        document.getElementById('loading').classList.add('hidden');

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

    // Añadir evento de clic para expandir/contraer el proyecto
    projectDiv.addEventListener('click', () => {
        const isExpanded = projectDiv.classList.contains('expanded');
        // Cerrar cualquier proyecto expandido
        document.querySelectorAll('.project.expanded').forEach(expandedProject => {
            if (expandedProject !== projectDiv) {
                expandedProject.classList.remove('expanded');
            }
        });
        // Alternar la expansión
        projectDiv.classList.toggle('expanded', !isExpanded);
    });
}