import analyzer from './analyzer.js';
console.log("prueba");
const botonr=document.querySelector("button");
botonr.addEventListener("click", () =>{
    document.getElementsByTagName("textarea")[0].value ="";
  });


function getWordCount() {
  const txt = ["Lucia ana sol lupe"]; 
    return txt.split(" ").lenght;
}
    console.log(getWordCount());
 
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`