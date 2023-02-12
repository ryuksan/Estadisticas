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