// Auto llenado de pagina "https://ptscdecprov.clouda.sat.gob.mx/Paginas/ConfigDeclaracion.aspx"

/***
 * Periodicidad seleccionables
 *
 * 'M' = 1-Mensual
 * 'T' = 3-Trimestral
 * 'Q' = 4-Cuatrimestral
 * 'S' = 5-Semestral (A)
 * 'L' = 6-Semestral (B)
 * 'J' = 7-Ajuste
 * 'Y' = 8-Del Ejercicio
 * 'N' = 9-Sin Periodos
 *
 */
/**
 *
 * '001' = Enero
 * '002' = Febrero
 * '003' = Marzo
 * '004' = Abril
 * '005' = Mayo
 * '006' = Junio
 * '007' = Julio
 * '008' = Agosto
 * '009' = Septiembre
 * '010' = Octubre
 * '011' = Noviembre
 * '012' = Diciembre
 *
 *
*/

/**
 * Periodos Trimestral
 * '013' = 1° Enero-Marzo
 * '014' = 2° Abril-Junio
 * '015' = 3° Julio-Septiembre
 * '016' = 4° Octubre-Diciembre
 *
 */

//Seleccionar el elemento que fija el periodo
const periodicidad = document.getElementById("MainContent_wucConfigDeclaracion_wucDdlPeriodicidad_ddlCatalogo")

// Fijar el valor del pericidad deseado
// Ejem. 3-Trimestral
periodicidad.value = 'M'

setTimeout(__doPostBack('ctl00$MainContent$wucConfigDeclaracion$wucDdlPeriodicidad$ddlCatalogo',''), 0)

// Fijar el valor del periodo deseado
// Ejem 2° Abril-Junio

setTimeout(() => {
    const periodo = document.getElementById("MainContent_wucConfigDeclaracion_wucDdlPeriodoFiscal_ddlCatalogo")
    periodo.value = '004'
    
    document.getElementById("MainContent_btnSiguiente").click();

},1000)



//Segunda seccion {parte del CFDI}
//Seleccionar isr
document.getElementById('MainContent_wucObligaciones_rptGvObligaciones_gvObligaciones_0_chkObligaciones_0').click();

//Seleccionar iva
document.getElementById('MainContent_wucObligaciones_rptGvObligaciones_gvObligaciones_0_chkObligaciones_1').click();

//Click siguiente

document.getElementById('MainContent_btnSiguiente').click();
//Aceptar terminos
setTimeout(()=>{
    document.getElementById("MainContent_rdConClasificador").click()
    document.getElementById("MainContent_Btn_EnviarDeclaracionPMS").click()
},3000)


/***
 * Opciones columna deduccion
 * "DG1" = Sin seleccion 
 * "DG2" = Total
 * "DG3" = Parcial
 * "DG4" = No deducible
 * "DG5" = No considerar
*/



//Dentro del panel 
//Tabla detalle de gastos


const eventoCambio = new Event('change');

const fijarTotal = () => {

    Array.from(document.getElementsByClassName("clasificador-deduccion")).map((select)=>{

        select.value="DG2";
        //Notificar con un evento sobre el cambio, para que angular se ejecute
        select.dispatchEvent(eventoCambio);
    })
}


const paginacion = document.getElementById("modalEgresoList"); 
//TODO verificar que la pagina sea una coleccion
const listaPaginas = paginacion.getElementsByClassName("pagination")[0].getElementsByTagName("li");

const navegarPaginacion = () =>{
    Array.from(listaPaginas).map((li)=>{
        //TODO DETERMINAR UNA FORMA DE SABER QUE LA PAGINA YA ESTA CARGADA
        setTimeout(() => {

            li.click();
        },3000)
    })    
}
