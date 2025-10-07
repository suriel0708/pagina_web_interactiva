
document.addEventListener("DOMContentLoaded", function () {

  
  const boton = document.querySelector("button");
  const caja = document.getElementById("caja");

  
  boton.addEventListener("click", function () {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    
    caja.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    
    console.log("Color cambiado correctamente");
  });

});
