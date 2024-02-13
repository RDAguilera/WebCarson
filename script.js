
  // Definir los textos asociados a cada botón
  var textos = {
      'texto1': 'Somos un faro en educación consciente, nutrimos mentes y corazones a través del autoconocimiento, empoderando a cada ser humano para liderar con su máximo potencial en un mundo en constante cambio.',
      'texto2': 'Formar líderes, educando múltiples ​inteligencias, cultivando mentes; para ​expandir consciencias',
      'texto3': 'Creativos (Co-crear), Vulnerables, Colaborativos (Dejar aparecer), Rentables (+Productividad/+Enfoque/+Energía), Auto conocimiento (Gestión), Plasticidad (Adaptable).'
  };

  function mostrarTexto(idTexto) {
    // Obtener la referencia al área de texto
    var areaTexto = document.getElementById('areaTexto');

    // Mostrar el texto correspondiente al botón clickeado
    areaTexto.textContent = textos[idTexto];

    // Desactivar la clase 'seleccionado' de todos los botones
    var botones = document.querySelectorAll('button');
    botones.forEach(function (boton) {
        boton.classList.remove('seleccionado');
    });

    // Activar la clase 'seleccionado' en el botón clickeado
    document.querySelector(`button[onclick="mostrarTexto('${idTexto}')"]`).classList.add('seleccionado');
}

// Obtén el elemento del contenedor
var container = document.querySelector('.hero .container');

// Almacena el valor original de la opacidad
var originalOpacity = parseFloat(getComputedStyle(container).getPropertyValue('background-color').split(',')[3]);

// Almacena la última posición de desplazamiento
var lastScrollTop = window.scrollY;

// Agrega un evento de desplazamiento
window.addEventListener('scroll', function() {
    // Calcula la dirección del scroll
    var currentScrollTop = window.scrollY;
    var scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
    
    // Actualiza la última posición de desplazamiento
    lastScrollTop = currentScrollTop;

    // Ajusta la opacidad en función de la dirección del scroll
    if (scrollDirection === 'down') {
        container.style.backgroundColor = 'rgba(49, 54, 116, 0)';
    } else {
        var opacity = Math.min(1, originalOpacity + (currentScrollTop / 400));
        container.style.backgroundColor = 'rgba(49, 54, 116, ' + opacity + ')';
    }
});

//Popup
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popup-container");
    var closePopupButton = document.getElementById("close-popup");
    var inscripcionLink = document.getElementById("enlace-inscripcion");

    // Abre el popup al cargar la página
    setTimeout(function() {
        popupContainer.style.display = "block";
    }, 1000);

    // Cierra el popup al hacer clic en el botón de cerrar
    closePopupButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
    });

    // Cierra el popup y lleva a la sección al hacer clic en "Inscríbete"
    inscripcionLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        popupContainer.style.display = "none";

        // Obtiene el destino del enlace y desplaza la ventana a esa sección
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth" // Desplazamiento suave
            });
        }
    });
});

_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
};