function pagina() {
  let creditosPagina = 0;
  let array = [];
  //creacion de variable para filter en creditosPagina
  const busqueda = "Cosmo Payment - 000000794";
  //creacion de expression regular para hacer el filter
  let regex = new RegExp(`.*${busqueda}.*$`, "gm");
  creditosPagina = document.getElementById("creditosPagina").value;
  array = creditosPagina.match(regex);
  let array2 = [];
  let divisionDeString = [];
  let eliminarDatos1_2 = [];
  let eliminarDatos2_2 = [];
  let array2AObjeto = [];
  //creacion de doble arreglo para el correcto almacenamiento del split
  for (let i of array) {
    array2.push([i]);
    yarn.lock;
  }
  // implementation del split con doble for para llegar a el segundo array
  for (let m of array2) {
    for (let x of m) {
      divisionDeString.push(x.split("\t"));
    }
  }
  // elimminacion de datos imnecesarios despues de la division de string
  for (let y of divisionDeString) {
    y.splice(1, 2);
    eliminarDatos1_2.push(y);
  }
  //creacion del numero de corte
  let increments = 1;
  let nombre = "corte";
  for (let z of eliminarDatos1_2) {
    z.splice(2, 2, nombre + " " + increments);
    eliminarDatos2_2.push(z);
    increments += 1;
  }
  //pasar el segundo array a objeto con Object.assign
  for (let a of eliminarDatos2_2) {
    ac1 = Object.assign({
      id: a[2],
      fecha: a[0],
      creditos: parseFloat(a[1] * -1),
    });
    array2AObjeto.push(ac1);
  }
  // pasando el primer array a objeto
  const objetoCortes = array2AObjeto.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  //como sumar los creditos almacenados en cada corte a la propiedad creditosPagina o ver como sumar todo en fin solucionar

  /*let propiedades = {
    creditosPagina: objetoCortes + cortes.corte_1.creditos + cortes.corte_2.creditos + cortes.corte_3.creditos + cortes.corte_4.creditos + cortes.corte_5.creditos + cortes.corte_6.creditos + cortes.corte_7.creditos + cortes.corte_8.creditos + cortes.corte_9.creditos,
    moneda: window.moneda,
    descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}

  	propiedades.creditosPagina *= propiedades.descuentoPagina;
	propiedades.creditosPagina *= propiedades.descuentoStudio;
	propiedades.creditosPagina *= propiedades.moneda;
	 

	document.getElementById('resultadoPagina').innerHTML = propiedades.creditosPagina.toFixed(2);*/
  document.getElementById("resultadoPagina2").innerHTML = objetoCortes;
  console.log(objetoCortes);
}
/*	creditos para pruebas
25/02/2023 03:46	Credit	DirectCam - Wjm181	0.24	33.64	
25/02/2023 03:47	Debit	DirectCam - Facility Fee gjhhuhhftgcdr	-0.01	33.62	
25/02/2023 03:47	Debit	DirectCam - Advisor Fee gjhhuhhftgcdr	-0.01	33.62	
25/02/2023 03:47	Credit	DirectCam - gjhhuhhftgcdr	0.24	33.86	Transfer Requested on 27/02/2023
25/02/2023 03:51	Debit	DirectCam - Facility Fee mrRose95	-0.57	33.29	
25/02/2023 03:51	Debit	DirectCam - Advisor Fee mrRose95	-0.34	32.94	
25/02/2023 03:51	Credit	DirectCam - mrRose95 (Was 11.41)	11.28	44.23	Transfer Requested on 27/02/2023
27/02/2023 14:58	Credit	Transfer Req. Fix - Credits from Previous	0.13	44.35	
27/02/2023 15:00	Debit	Group Transfer to Cosmo Payment - 000000794	-44.35	0.00	
02/03/2023 01:09	Debit	DirectCam - Facility Fee Pinnock3838	-0.79	-0.79	
02/03/2023 01:09	Debit	DirectCam - Advisor Fee Pinnock3838	-0.47	-1.26	
02/03/2023 01:09	Credit	DirectCam - Pinnock3838	15.70	14.44	Transfer Requested on 03/03/2023
02/03/2023 22:21	Debit	DirectCam - Facility Fee only_you	-0.00	14.44	
02/03/2023 22:21	Debit	DirectCam - Advisor Fee only_you	-0.00	14.44	
02/03/2023 22:21	Credit	DirectCam - only_you	0.02	14.46	Transfer Requested on 04/03/2023
02/03/2023 23:25	Debit	DirectCam - Facility Fee jimjam1231993	-0.09	14.38	
02/03/2023 23:25	Debit	DirectCam - Advisor Fee jimjam1231993	-0.05	14.32	
02/03/2023 23:25	Credit	DirectCam - jimjam1231993	1.73	16.05	Transfer Requested on 04/03/2023
02/03/2023 23:56	Debit	DirectCam - Facility Fee Markkos111	-0.60	15.45	
02/03/2023 23:56	Debit	DirectCam - Advisor Fee Markkos111	-0.36	15.09	
02/03/2023 23:56	Credit	DirectCam - Markkos111	12.03	27.12	Transfer Requested on 04/03/2023
03/03/2023 00:51	Debit	DirectCam - Facility Fee Amc1978	-0.04	27.08	
03/03/2023 00:51	Debit	DirectCam - Advisor Fee Amc1978	-0.03	27.05	
03/03/2023 00:51	Credit	DirectCam - Amc1978	0.88	27.93	Transfer Requested on 04/03/2023
03/03/2023 01:39	Debit	DirectCam - Facility Fee Groggyfella	-0.03	27.90	
03/03/2023 01:39	Debit	DirectCam - Advisor Fee Groggyfella	-0.02	27.88	
03/03/2023 01:39	Credit	DirectCam - Groggyfella	0.62	28.50	Transfer Requested on 04/03/2023
03/03/2023 15:02	Debit	Group Transfer to Cosmo Payment - 000000794	-15.70	12.80	
04/03/2023 01:39	Debit	DirectCam - Facility Fee d0rrans	-0.34	12.46	
04/03/2023 01:39	Debit	DirectCam - Advisor Fee d0rrans	-0.20	12.26	
04/03/2023 01:39	Credit	DirectCam - d0rrans	6.80	19.06	Transfer Requested on 06/03/2023
04/03/2023 01:44	Debit	DirectCam - Facility Fee d0rrans	-0.06	19.00	
04/03/2023 01:44	Debit	DirectCam - Advisor Fee d0rrans	-0.03	18.97	
04/03/2023 01:44	Credit	DirectCam - d0rrans	1.12	20.09	Transfer Requested on 06/03/2023
04/03/2023 01:45	Debit	DirectCam - Facility Fee LondonLiving	-0.01	20.08	
04/03/2023 01:45	Debit	DirectCam - Advisor Fee LondonLiving	-0.01	20.07	
04/03/2023 01:45	Credit	DirectCam - LondonLiving	0.17	20.24	Transfer Requested on 06/03/2023
04/03/2023 01:46	Debit	DirectCam - Facility Fee The_Guy_	-0.22	20.03	
04/03/2023 01:46	Debit	DirectCam - Advisor Fee The_Guy_	-0.13	19.90	
04/03/2023 01:46	Credit	DirectCam - The_Guy_	4.31	24.21	Transfer Requested on 06/03/2023
04/03/2023 01:46	Debit	DirectCam - Facility Fee d0rrans	-0.02	24.19	
04/03/2023 01:46	Debit	DirectCam - Advisor Fee d0rrans	-0.01	24.18	
04/03/2023 01:46	Credit	DirectCam - d0rrans	0.32	24.50	Transfer Requested on 06/03/2023
04/03/2023 01:53	Debit	DirectCam - Facility Fee The_Guy_	-0.36	24.14	
04/03/2023 01:53	Debit	DirectCam - Advisor Fee The_Guy_	-0.22	23.92	
04/03/2023 01:53	Credit	DirectCam - The_Guy_	7.27	31.19	Transfer Requested on 06/03/2023
04/03/2023 01:57	Credit	DirectCam tip from d0rrans (0607271677894884)	5.00	36.19	Transfer Requested on 06/03/2023
04/03/2023 02:01	Credit	DirectCam tip from d0rrans (0607271677894884)	5.00	41.19	Transfer Requested on 06/03/2023
04/03/2023 02:02	Debit	DirectCam - Facility Fee d0rrans	-0.55	40.64	
04/03/2023 02:02	Debit	DirectCam - Advisor Fee d0rrans	-0.33	40.31	
04/03/2023 02:02	Credit	DirectCam - d0rrans	10.97	51.28	Transfer Requested on 06/03/2023
04/03/2023 15:13	Debit	Group Transfer to Cosmo Payment - 000000794	-15.28	36.00	
04/03/2023 20:21	Debit	DirectCam - Facility Fee KnightManc	-0.00	36.00	
04/03/2023 20:21	Debit	DirectCam - Advisor Fee KnightManc	-0.00	36.00	
04/03/2023 20:21	Credit	DirectCam - KnightManc	0.02	36.02	Transfer Requested on 06/03/2023
04/03/2023 22:24	Debit	DirectCam - Facility Fee shimmy2121	-0.15	35.87	
04/03/2023 22:24	Debit	DirectCam - Advisor Fee shimmy2121	-0.09	35.79	
04/03/2023 22:24	Credit	DirectCam - shimmy2121	2.97	38.76	Transfer Requested on 06/03/2023
04/03/2023 23:25	Debit	DirectCam - Facility Fee burb25	-0.25	38.51	
04/03/2023 23:25	Debit	DirectCam - Advisor Fee burb25	-0.15	38.36	
04/03/2023 23:25	Credit	DirectCam - burb25	4.95	43.31	Transfer Requested on 06/03/2023
05/03/2023 00:32	Debit	DirectCam - Facility Fee The_Guy_	-0.55	42.76	
05/03/2023 00:32	Debit	DirectCam - Advisor Fee The_Guy_	-0.33	42.44	
05/03/2023 00:32	Credit	DirectCam - The_Guy_	10.92	53.36	Transfer Requested on 06/03/2023
05/03/2023 00:39	Debit	DirectCam - Facility Fee A1UKGuy67	-0.01	53.34	
05/03/2023 00:39	Debit	DirectCam - Advisor Fee A1UKGuy67	-0.01	53.33	
05/03/2023 00:39	Credit	DirectCam - A1UKGuy67	0.29	53.62	Transfer Requested on 06/03/2023
05/03/2023 00:40	Debit	DirectCam - Facility Fee rattleking1	-0.46	53.16	
05/03/2023 00:40	Debit	DirectCam - Advisor Fee rattleking1	-0.28	52.89	
05/03/2023 00:40	Credit	DirectCam - rattleking1	9.18	62.07	Transfer Requested on 06/03/2023
05/03/2023 00:42	Debit	DirectCam - Facility Fee DavND	-0.01	62.05	
05/03/2023 00:42	Debit	DirectCam - Advisor Fee DavND	-0.01	62.05	
05/03/2023 00:42	Credit	DirectCam - DavND	0.27	62.32	Transfer Requested on 06/03/2023
05/03/2023 03:03	Debit	DirectCam - Facility Fee WFCY__00	-0.01	62.30	
05/03/2023 03:03	Debit	DirectCam - Advisor Fee WFCY__00	-0.01	62.29	
05/03/2023 03:03	Credit	DirectCam - WFCY__00	0.29	62.58	Transfer Requested on 06/03/2023
05/03/2023 23:36	Debit	DirectCam - Facility Fee Joshxxx69	-0.14	62.44	
05/03/2023 23:36	Debit	DirectCam - Advisor Fee Joshxxx69	-0.08	62.36	
05/03/2023 23:36	Credit	DirectCam - Joshxxx69	2.80	65.16	Available for Transfer Now
05/03/2023 23:42	Debit	DirectCam - Facility Fee lxrxnzx	-0.19	64.97	
05/03/2023 23:42	Debit	DirectCam - Advisor Fee lxrxnzx	-0.11	64.86	
05/03/2023 23:42	Credit	DirectCam - lxrxnzx	3.78	68.64	Available for Transfer Now
06/03/2023 00:15	Debit	DirectCam - Facility Fee jamesyboi2510	-0.03	68.60	
06/03/2023 00:15	Debit	DirectCam - Advisor Fee jamesyboi2510	-0.02	68.58	
06/03/2023 00:15	Credit	DirectCam - jamesyboi2510	0.67	69.25	Available for Transfer Now
06/03/2023 00:18	Debit	DirectCam - Facility Fee bobbie80	-0.31	68.94	
06/03/2023 00:18	Debit	DirectCam - Advisor Fee bobbie80	-0.19	68.76	
06/03/2023 00:18	Credit	DirectCam - bobbie80	6.18	74.94	Available for Transfer Now
06/03/2023 00:24	Debit	DirectCam - Facility Fee Hearts333	-0.19	74.75	
06/03/2023 00:24	Debit	DirectCam - Advisor Fee Hearts333	-0.11	74.64	
06/03/2023 00:24	Credit	DirectCam - Hearts333	3.71	78.35	Available for Transfer Now
06/03/2023 00:27	Debit	DirectCam - Facility Fee Hearts333	-0.11	78.24	
06/03/2023 00:27	Debit	DirectCam - Advisor Fee Hearts333	-0.07	78.18	
06/03/2023 00:27	Credit	DirectCam - Hearts333	2.18	80.36	Available for Transfer Now
06/03/2023 00:30	Debit	DirectCam - Facility Fee Markkos111	-0.06	80.30	
06/03/2023 00:30	Debit	DirectCam - Advisor Fee Markkos111	-0.04	80.26	
06/03/2023 00:30	Credit	DirectCam - Markkos111	1.23	81.49	Available for Transfer Now
06/03/2023 00:30	Debit	DirectCam - Facility Fee bobbie80	-0.68	80.81	
06/03/2023 00:30	Debit	DirectCam - Advisor Fee bobbie80	-0.41	80.40	
06/03/2023 00:30	Credit	DirectCam - bobbie80	13.56	93.96	Available for Transfer Now

Export as CSV:  Page From: 
86
 To: 
86
    
 	
Jump to page:	
86
 
 
 

Escorts
Webcam
Phone Chat
SMS Chat
Alternative
Movies
Pictures
Groups
Erotica
Blogs
Tagged
Other Services
Marketplace
TV
Top of page
AdultWork.com
Legal | Privacy | Cookies | Insider | Social | Developers | Contact | UK: 07/03/2023 14:54  GMT: 07/03/2023 14:54  VAT
*/
