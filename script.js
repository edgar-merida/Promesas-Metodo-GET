let alumnos = [];
let notas = [];
let asignaturas = [];

function getAlumnos(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status == "200") {
                resolve(JSON.parse(xhr.response))
            }
            else {
                reject();
            }
        };
        xhr.send();
    });
};

getAlumnos("https://6189d55b34b4f400177c4285.mockapi.io/getAlumnos").then(data => {
    alumnos.push(data);
}).catch(error => {
    console.log("Error en la solicitud al servidor!");
});


function tableAlumnos(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nombre</th>";
    head += "<th scope='col'>Apellido</th>";
    head += "<th scope='col'>Correo</th>";
    head += "<th scope='col'>Contraseña</th>";
    head += "<th scope='col'>Imagen</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);

    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let alu = element.Alumno;

            let html = "";
            html += "<tr>";
            html += '<td><span onclick="getAlumnoNotas(' + alu + ')" role="button" >' + element.Alumno + '</span></td>';
            html += "   <td>" + element.Alumno + "</td>";
            html += "   <td>" + element.Nombre + "</td>";
            html += "   <td>" + element.Apellido + "</td>";
            html += "   <td>" + element.Correo + "</td>";
            html += "   <td>" + element.Contraseña + "</td>";
            html += "   <td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
}


function getAsignaturas(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status == "200") {
                resolve(JSON.parse(xhr.response))
            }
            else {
                reject();
            }
        };
        xhr.send();
    });
};

getAsignaturas("https://6189d55b34b4f400177c4285.mockapi.io/getAsignaturas").then(data => {
    asignaturas.push(data);
}).catch(error => {
    console.log("Error en la solicitud al servidor!");
});


function tableAsignaturas(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Imagen</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let asignatura = element.Asignatura;
            let html = "";
            html += "<tr>";
            html += '<td><span onclick="getAsignaturaNotas(\'' + asignatura + '\')" role="button" >' + element.Asignatura + '</span></td>';
            html += "<td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
};


function getNotas(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status == "200") {
                resolve(JSON.parse(xhr.response))
            }
            else {
                reject();
            }
        };
        xhr.send();
    });
};

getNotas("https://6189d55b34b4f400177c4285.mockapi.io/getNotas").then(data => {
    notas.push(data);
}).catch(error => {
    console.log("Error en la solicitud al servidor!");
});


function tableNotas(arreglo) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nota</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let i = 0; i < arreglo.length; i++) {
        const a = arreglo[i];
        document.getElementById("tabla").innerHTML = "";
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            let html = "";
            html += "<tr>";
            html += "   <td>" + element.Asignatura + "</td>";
            html += "   <td>" + element.Alumno + "</td>";
            html += "   <td>" + element.Nota + "</td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }
};


function getAsignaturaNotas(asignatura) {
    document.getElementById("encabezados").innerHTML = '';
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nota</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let index = 0; index < notas.length; index++) {
        const a = notas[index];
        document.getElementById("tabla").innerHTML = "";
        for (let i = 0; i < a.length; i++) {
            const element = a[i];
            if (asignatura == element.Asignatura) {
                let html = "";
                html += "<tr>";
                html += "   <td>" + element.Asignatura + "</td>";
                html += "   <td>" + element.Alumno + "</td>";
                html += "   <td>" + element.Nota + "</td>";
                html += " ";
                html += "</tr>";
                let tabla = document.getElementById("tabla");
                tabla.insertAdjacentHTML('beforeend', html);
            }
        }
    }
};


function getAlumnoNotas(alumno) {
    document.getElementById("encabezados").innerHTML = "";
    let head = "";
    head += "<tr>"
    head += "<th scope='col'>Asignatura</th>";
    head += "<th scope='col'>Alumno</th>";
    head += "<th scope='col'>Nota</th>";
    head += "</tr>"
    let tabla1 = document.getElementById("encabezados");
    tabla1.insertAdjacentHTML('beforeend', head);
    for (let index = 0; index < notas.length; index++) {
        const a = notas[index];
        document.getElementById("tabla").innerHTML = "";
        for (let i = 0; i < a.length; i++) {
            const element = a[i];

            if (alumno == element.Alumno) {
                let html = "";
                html += "<tr>";
                html += "   <td>" + element.Asignatura + "</td>";
                html += "   <td>" + element.Alumno + "</td>";
                html += "   <td>" + element.Nota + "</td>";
                html += " ";
                html += "</tr>";
                let tabla = document.getElementById("tabla");
                tabla.insertAdjacentHTML('beforeend', html);
            }
        }
    }
};





