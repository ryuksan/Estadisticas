// funciones para el manejo de la pagina de estadisticas.

//funcion para creditos de la trasmision.
function trasmision (){
	let propiedades = {creditosTasmision: 1,
	moneda: 5200,
	descuentoTrasmision1: 0.950138504,
	descuentoTrasmision2: 0.970452447,
	descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}
	
	
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision1;
	propiedades.creditosTasmision *= propiedades.descuentoTrasmision2;
	propiedades.creditosTasmision *= propiedades.descuentoPagina;
	propiedades.creditosTasmision *= propiedades.descuentoStudio;
	propiedades.creditosTasmision *= propiedades.moneda;
	return propiedades.creditosTansmision.toFixed(2);
}
console.log(trasmision())

// funcion para creditos de la pagina.
function pagina (){
	let propiedades = {creditosPagina: 1,
	moneda: 5200,
	descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}
	
	
	propiedades.creditosPagina *= propiedades.descuentoPagina;
	propiedades.creditosPagina *= propiedades.descuentoStudio;
	propiedades.creditosPagina *= propiedades.moneda;
	return propiedades.creditosPagina.toFixed(2);
}
console.log(pagina())

// funcion para creditos del estudio.
function studio (){
	let propiedades = {creditosStudio: 1,
	moneda: 5200,
	descuentoStudio: 0.8}
	
	
	propiedades.creditosStudio *= propiedades.descuentoStudio;
	propiedades.creditosStudio *= propiedades.moneda;
	return propiedades.creditosStudio.toFixed(2);
}
console.log(studio())