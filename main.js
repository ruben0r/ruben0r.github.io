let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function descargarCV(){
   /*  window.open('https://drive.google.com/file/d/1jHC6chiQ5bhpQp6c86k8rEEL-XqrmbfB/', '_blank'); */
   // ID del archivo en Google Drive
const fileId = '1jHC6chiQ5bhpQp6c86k8rEEL-XqrmbfB'; 

// Crear enlace de descarga directa
const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

// Forzar la descarga sin abrir una nueva ventana
const link = document.createElement('a');
link.href = downloadLink;
link.setAttribute('download', '');  // Establece el atributo "download" para forzar la descarga
document.body.appendChild(link);
link.click();
document.body.removeChild(link);  // Remueve el enlace después de hacer clic
}