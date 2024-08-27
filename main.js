fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Asignar los datos a los elementos HTML
        document.getElementById('P1_title').innerText = data.Proyecto_1.P1_title;
        document.getElementById('P1_description').innerText = data.Proyecto_1.P1_description;
        document.getElementById('P1_src').src = data.Proyecto_1.P1_src;

        document.getElementById('P2_title').innerText = data.Proyecto_2.P2_title;
        document.getElementById('P2_description').innerText = data.Proyecto_2.P2_description;
        document.getElementById('P2_src').src = data.Proyecto_2.P2_src;

        document.getElementById('P3_title').innerText = data.Proyecto_3.P3_title;
        document.getElementById('P3_description').innerText = data.Proyecto_3.P3_description;
        document.getElementById('P3_src').src = data.Proyecto_3.P3_src;
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });
