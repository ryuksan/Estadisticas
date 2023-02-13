// funciones para el manejo de la pagina de estadisticas.

//funcion para creditos de la trasmision.


function t (){
	const descuentoTrasmision1 = 0.950138504;
	const descuentoTrasmision2 = 0.970452447;
	const descuentoStudio = 0.70044843;
	const descuentoPagina = 0.8;

	let propiedades = {
	creditosTasmision: document.getElementById('creditos').value,
	moneda: document.getElementById('m').value,
	descuentoTrasmision1: descuentoTrasmision1,
	descuentoTrasmision2: descuentoTrasmision2,
	descuentoPagina: descuentoPagina,
	descuentoStudio: descuentoStudio}

	
	
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision1;
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision2;
	propiedades.creditosTasmision *= propiedades.descuentoPagina;
	propiedades.creditosTasmision *= propiedades.descuentoStudio;
	propiedades.creditosTasmision *= propiedades.moneda;
	
	
	document.getElementById('result').innerHTML = propiedades.creditosTasmision.toFixed(2);
}
