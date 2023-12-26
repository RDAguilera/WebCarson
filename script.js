
  // Definir los textos asociados a cada botón
  var textos = {
      'texto1': 'En Carson reconocemos que no hay un enfoque único para el aprendizaje, porque cada estudiante es especial y tiene talentos distintos.  Nuestra escuela se inspira en la teoría de las Inteligencias Múltiples de Howard Gardner, lo que significa que valoramos y cultivamos todas las formas en que nuestros estudiantes brillan.',
      'texto2': 'Aquí está el texto del Botón 2.',
      'texto3': 'Este texto pertenece al Botón 3.'
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
