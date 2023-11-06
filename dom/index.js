//1
let titulo = document.getElementById ("titulo")
//2
let tituloPrincipal= "Frutas"
titulo.innerHTML= tituloPrincipal
//3 
let naranja = document.querySelectorAll(`.naranja`)
for (const elemento of naranja) {
    elemento.classList = "bg-orange-700"
}
//4
let parrafo= document.getElementById("parrafo")
parrafo.textContent = "Camila Cein cohort 52"
//5
let main = document.querySelector("main")
let contenedor = document.createElement("div")
contenedor.className="contenedor"
main.appendChild(contenedor)
/*Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción).*/
//6
function devolverCard (parametro){
let card = `<article>
    <h2>${parametro.nombre}</h2>
    <img src="${parametro.foto}" alt="">
    <p>${parametro.descripcion}</p>
</article>`
return card
}
//7y8
    for(let i = 0; i < frutas.length; i++){
      contenedor.innerHTML=contenedor.innerHTML+devolverCard(frutas[i])
    
    }

//9
let main2 = document.querySelector("main")
let contenedor2 = document.createElement("div")
contenedor2.className="contenedor2"
main.appendChild(contenedor2)
contenedor2.innerHTML= "Frutas Dulces"
//10y11
/*function listaFrutas (frutas){
    let listaDulce= document.createElement("ul")
    let frutasDulces = frutas.filter (fruta=>fruta.esDulce)
    frutasDulces.forEach(fruta => {
        let puntosLi = document.createElement("li")
        puntosLi.textContent=fruta.nombre
        listaDulce.appendChild(puntosLi)
    });
  return listaDulce
}
let listaFrutasDulces = listaFrutas(frutas)
let contenedor3 = document.querySelector(".contenedor2")
contenedor3.appendChild(listaFrutasDulces)*/
function listaFrutas(frutas){
const listaDulce = document.createElement("ul")
for(const fruta of frutas){
if(fruta.esDulce=== true){
let crearLista=document.createElement("li")
crearLista.textContent= fruta.nombre
listaDulce.appendChild(crearLista)
}
}
return listaDulce
}
let listaFrutasDulces= listaFrutas(frutas)
let contenedor3 = document.querySelector(".contenedor2")
contenedor3.appendChild(listaFrutasDulces)