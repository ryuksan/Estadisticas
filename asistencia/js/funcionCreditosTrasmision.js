// funciones para el manejo de la pagina de estadisticas.

//funcion para creditos de la trasmision.

let moneda = document.getElementById('m');
moneda = (moneda);

function t (){

	let propiedades = {
	creditosTasmision: 1,
	moneda: document.getElementById('m').value,
	descuentoTrasmision1: 0.950138504,
	descuentoTrasmision2: 0.970452447,
	descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}

	
	
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision1;
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision2;
	propiedades.creditosTasmision *= propiedades.descuentoPagina;
	propiedades.creditosTasmision *= propiedades.descuentoStudio;
	propiedades.creditosTasmision *= propiedades.moneda;
	let array = [];
	array.push(propiedades.creditosTasmision.toFixed(2));
	array.push(propiedades.moneda);
	array.push(moneda.value);
	array.push(document.getElementById('m').value)
	array.push(document.getElementById('m').value)
	array.push(document.getElementById('m').value)
	
	return array;
}
console.log(t())
