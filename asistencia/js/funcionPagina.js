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