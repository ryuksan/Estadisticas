function pagina (){
	let creditosPagina = 0;
	creditosPagina = document.getElementById('creditosPagina').value;
	let corte = [];
	corte = creditosPagina.split('	');
	corte.splice(1, 3);
	let opcion;

	let obj = {};
	obj = Object.assign({fecha: corte[0], creditos: parseFloat(corte[1])})
	  
	let cortes = {
	  corte_0: { fecha: null, creditos: null },
	  corte_1: { fecha: null, creditos: null },
	  corte_2: { fecha: null, creditos: null },
	  corte_3: { fecha: null, creditos: null },
	  corte_4: { fecha: null, creditos: null },
	  corte_5: { fecha: null, creditos: null },
	  corte_6: { fecha: null, creditos: null },
	  corte_7: { fecha: null, creditos: null },
	  corte_8: { fecha: null, creditos: null },
	  corte_9: { fecha: null, creditos: null }
	};
	if ((cortes.corte_0.fecha === obj.fecha || cortes.corte_0 === null) || (cortes.corte_1.fecha === obj.fecha || cortes.corte_1 === null) || (cortes.corte_2.fecha === obj.fecha || cortes.corte_2 === null) || (cortes.corte_3.fecha === obj.fecha || cortes.corte_3 === null) || (cortes.corte_4.fecha === obj.fecha || cortes.corte_4 === null) || (cortes.corte_5.fecha === obj.fecha || cortes.corte_5 === null) || (cortes.corte_6.fecha === obj.fecha || cortes.corte_6 === null) || (cortes.corte_7.fecha === obj.fecha || cortes.corte_7 === null) || (cortes.corte_8.fecha === obj.fecha || cortes.corte_8 === null) || (cortes.corte_9.fecha === obj.fecha || cortes.corte_9 === null)){
    alert("corte subido");
  }
	
  if (cortes.corte_0.fecha === null){
    cortes.corte_0 = obj;
  }else if (cortes.corte_1.fecha === null){
    cortes.corte_1 = obj;
  }else if (cortes.corte_2.fecha === null){
    cortes.corte_2 = obj;
  }else if (cortes.corte_3.fecha === null){
    cortes.corte_3 = obj;
  }else if (cortes.corte_4.fecha === null){
    cortes.corte_4 = obj;
  }else if (cortes.corte_5.fecha === null){
    cortes.corte_5 = obj;
  }else if (cortes.corte_6.fecha === null){
    cortes.corte_6 = obj;
  }else if (cortes.corte_7.fecha === null){
    cortes.corte_7 = obj;
  }else if (cortes.corte_8.fecha === null){
    cortes.corte_8 = obj;
  }else if (cortes.corte_9.fecha === null){
    cortes.corte_9 = obj;
  }else{
    alert("No Hay Espacio");
  }
  let propiedades = {
    creditosPagina: cortes.corte_0.creditos + cortes.corte_1.creditos + cortes.corte_2.creditos + cortes.corte_3.creditos + cortes.corte_4.creditos + cortes.corte_5.creditos + cortes.corte_6.creditos + cortes.corte_7.creditos + cortes.corte_8.creditos + cortes.corte_9.creditos,
    moneda: 5200,
    descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}

  	propiedades.creditosPagina *= propiedades.descuentoPagina;
	propiedades.creditosPagina *= propiedades.descuentoStudio;
	propiedades.creditosPagina *= propiedades.moneda;
	 

	document.getElementById('resultadoPagina').innerHTML = propiedades.creditosPagina.toFixed(2);
	document.getElementById('resultadoPagina2').innerHTML = cortes.corte_0;
	return cortes;
}
console.log(pagina())