async function duplicar(n) {
  return n*2  
}

async function imprimir(valor) {
  console.log(await valor)
}

window.addEventListener("load", async function(){
  let regalia = {
    nombre: "Falchion",
    poder: 12,
    weaponLevel: "Marth",
  };


  //de array.js

  let mobileSuits = [
    {
        nombre: "Gundam",
        id: "RX-78-2",
        año: 79
    },
    {
        nombre: "Zaku II",
        id: "MS-06",
        año: 79
    },
    {
        nombre: "Nu Gundam",
        id: "RX-93",
        año: 93
    },
    {
        nombre: "Unicorn Gundam",
        id: "RX-0",
        año: 96
    },
    {
        nombre: "Zaku I",
        id: "MS-05B",
        año: 76
    }
  ];

  //

  console.log("Holaaaaaa");

  console.log(regalia);

  //let ul = document.querySelector|All|("tag.class"|"#id")
  //ul.innerHTML =|+= `<li class="aaa"></li>`
  //for(i=0; i<n; i++){}

  let ul = document.querySelector("#ciclo");

  //let n = 100;

  //for (let i = 0; i < n; i++) {
  //  ul.innerHTML += `<li class="dom">${i + 1}</li>`;
  //}

  //alt + telca arriba o abajo para mover linea

  mobileSuits.forEach(mobileSuit => {
    ul.innerHTML += `<li class="list-group-item">
    <span class="ms-id">${mobileSuit.id} </span>
    <span class="ms-nombre">${mobileSuit.nombre}</span>
    </li>`
  })

  //ul.addEventListener("tipo", funcion)
  console.log(ul)

  ul.addEventListener("click", (e) => {
    ul.classList.toggle("dark")
    console.log(ul)
  })

 /*  let img = document.querySelector("#imagen")

  img.addEventListener("click", (e) => {
    img.setAttribute("src", "holaaa.jpg")
  }) */

  let resultado = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await resultado.json();

  console.log(data)
});
  //esto debería ser el inicio y el fin
// window.addEventListener("load", async function(){

// })