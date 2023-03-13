// funciones para el manejo de la pagina de estadisticas.

//funcion para creditos de la trasmision.

function t() {
  const descuentoTrasmision1 = 0.950138504;
  const descuentoTrasmision2 = 0.970452447;
  const descuentoStudio = 0.70044843;
  const descuentoPagina = 0.8;
  let moneda = document.getElementById("m").value;

  let propiedades = {
    creditosTrasmision: document.getElementById("creditos").value,
    moneda: document.getElementById("m").value,
    descuentoTrasmision1: descuentoTrasmision1,
    descuentoTrasmision2: descuentoTrasmision2,
    descuentoPagina: descuentoPagina,
    descuentoStudio: descuentoStudio,
  };

  propiedades.creditosTrasmision *= propiedades.descuentoTrasmision1;
  propiedades.creditosTrasmision *= propiedades.descuentoTrasmision2;
  propiedades.creditosTrasmision *= propiedades.descuentoPagina;
  propiedades.creditosTrasmision *= propiedades.descuentoStudio;
  propiedades.creditosTrasmision *= propiedades.moneda;

  document.getElementById("result").innerHTML =
    propiedades.creditosTrasmision.toFixed(2);
}
