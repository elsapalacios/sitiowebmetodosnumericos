// Menú de navegación móvil
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Calculadora de error absoluto y relativo (página de Python)
  var calcBtn = document.getElementById("calc-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", function () {
      var real = parseFloat(document.getElementById("calc-real").value);
      var aprox = parseFloat(document.getElementById("calc-aprox").value);
      var out = document.getElementById("calc-result");

      if (isNaN(real) || isNaN(aprox)) {
        out.innerHTML = "Ingresa dos valores numéricos válidos.";
        return;
      }
      var ea = Math.abs(real - aprox);
      var er = real !== 0 ? ea / Math.abs(real) : NaN;

      var erText = isNaN(er)
        ? "no definido (el valor real es 0)"
        : (er * 100).toFixed(6) + " %";

      out.innerHTML =
        "Error absoluto (Ea) = <span class='v'>" + ea.toPrecision(8) + "</span><br>" +
        "Error relativo (Er) = <span class='v'>" + (isNaN(er) ? "—" : er.toPrecision(8)) + "</span>" +
        " &nbsp;(" + erText + ")";
    });
  }
});
