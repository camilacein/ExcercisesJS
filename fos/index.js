//1
function imprimirMensajes (mensaje){
    console.log (mensaje)
}
let mostrarMensaje= mensaje => console.log(mensaje)
//2
function crearMultiplicacion (numero1, numero2){
    let resultado = numero1*numero2
    return resultado
}
let Multiplicacion= (numero1,numero2)=>{
    let resultado= numero1*numero2
    return resultado
}
//3
const array = [1,2,3,4,5,6,7,8,9]
let array2 = array.map(elemento => crearMultiplicacion(elemento,2))
console.log(array2)
//4
let cervezasAlcoholicas= beers.filter (beers=>{return beers.abv>7.3})
console.log (cervezasAlcoholicas)
//5
function filtrarCervezas( cervezas, propiedad ){
    const resultado = cervezas.filter( beer => beer[propiedad] )
                        .toSorted( (a,b) => a[propiedad] - b[propiedad] )
                        .slice( 0, 10 )
    console.log( resultado )
} 
filtrarCervezas( beers, 'ibu' )
//6 find es lo primero que encuentre que es true
function nombreCerveza(nombre){return beers.find(beer=> beer.name==nombre)}
console.log(nombreCerveza("Buzz"))
//7
let valorIngresado= 60
function encontarIbu(beers,valor){ 
    const comparar=(beers.find(beer=> beer.ibu==valor))
 if(comparar){
return comparar
}
console.log(`No existe cerveza con ibu de ${valor}` )

}
console.log(encontarIbu(beers,valorIngresado))
//8
function buscarPosicion (nombre){
let encontrar=nombreCerveza(nombre)
if(encontrar)
return beers.indexOf(encontrar)
else{
console.log(`${nombre} no existe`)
}
}
console.log(buscarPosicion("Buzz"))
//9
function filtrarCervezasPorAlcohol (beers, valor){
    let nuevoArray = []
    for(let i = 0; i < beers.length; i++){
    const retornarFun = valor(beers[i], i, beers)
    nuevoArray.push(retornarFun)
    }
    return nuevoArray
}
function encontrarPropiedad (beers, valor){
let noExcedanAbv=(beers.filter(beer=> beer.abv <=valor))
.map((beer)=>{
const beersNew={
name: beer.name,
abv: beer.abv,
ibu: beer.ibu,
}
return beersNew
})
return noExcedanAbv
}
console.log(encontrarPropiedad(beers, 6.3))
//10
function cansadaDeLasBirras(array, propiedad, booleano){
const ordenarBirras = array.toSorted((a,b)=>{
if(a[propiedad]<b[propiedad]){
return -1
}
if(a[propiedad]>b[propiedad]){
return 1
}
return booleano
}
).map(array=>array.name)
return ordenarBirras.slice(0,10)
}
console.log(cansadaDeLasBirras(beers, "name", true))
//11
function rellenarTabla(beers, id){
const buscartable = document.getElementById("tablanueva")

function crearFila (array){
let tabla= `<tr>
<td>${beersNew.name}</td>
<td>${beersNew.abv}</td>
<td>${beersNew.ibu}</td>

</tr>`
return tabla
}
/*usar map*/
}
console.log(crearTabla(beersNew, ))