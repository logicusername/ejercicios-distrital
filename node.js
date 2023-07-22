function showVideo() {
   var select = document.getElementById("video-select");
   var videoContainer = document.getElementById("video-container");
   var videoFrame = document.getElementById("video-frame");

   // Obtener el valor seleccionado de la lista desplegable
   var selectedValue = select.value;

   // Asignar el video correspondiente al iframe
   if (selectedValue === "video1") {
     videoFrame.src = "./images/ejercicio1.ogv";
   } else if (selectedValue === "video2") {
     videoFrame.src = "./images/ejercicio-declaraciones-2.ogv";
   } else if (selectedValue === "video3") {
     videoFrame.src = "./images/exports-amparo-3.ogv";
   } else if (selectedValue === "video4") {
      videoFrame.src = "./images/exports-2-funciones-4.ogv";
   } else if (selectedValue === "video5") {
      videoFrame.src = "./images/exportar-una-clase-5.ogv";
   } else if (selectedValue === "video6") {
      videoFrame.src = "./images/imprimir-objeto-JSON-6.ogv";
   } else if (selectedValue === "video7") {
      videoFrame.src = "./images/JSON-a-cadena.ogv";
   } else if (selectedValue === "video8") {
      videoFrame.src = "./images/cadena-a-JSON.ogv";
   } else if (selectedValue === "video9") {
      videoFrame.src = "./images/modulos-cowsay.ogv";
   } else if (selectedValue === "video10") {
      videoFrame.src = "./images/eventos.ogv";
   } else if (selectedValue === "video11") {
      videoFrame.src = "./images/buffer.ogv";
   } else if (selectedValue === "video12") {
      videoFrame.src = "./images/variables-de-entorno.ogv";
   } else if (selectedValue === "video13") {
      videoFrame.src = "./images/crear-servidor.ogv";
   } else if (selectedValue === "video14") {
      videoFrame.src = "./images/parametro-url.ogv";
   } else if (selectedValue === "video15") {
      videoFrame.src = "./images/parametros-url-2.ogv";
   } else if (selectedValue === "video16") {
      videoFrame.src = "./images/archivos-estaticos.ogv";
   } else if (selectedValue === "video17") {
      videoFrame.src = "./images/creacion.ogv"; 
   } else if (selectedValue === "video18") {
      videoFrame.src = "./images/clonacion.ogv";
   } else if (selectedValue === "video19") {
      videoFrame.src = "./images/git-branches.ogv";
   } else if (selectedValue === "video20") {
      videoFrame.src = "./images/analytics.ogv";
   } else if (selectedValue === "video21") {
      videoFrame.src = "./images/consultas-sql.ogv";
   } else if (selectedValue === "video22") {
      videoFrame.src = "./images/api-6.ogv";
   }
   
   // Mostrar el contenedor del video
   videoContainer.style.display = "block";
 }