import analyzer from './analyzer.js';
console.log("prueba");
const botonr=document.getElementById("reset-button");
botonr.addEventListener("click", () =>{
  document.getElementsByTagName("textarea")[0].value ="";
  document.querySelectorAll('#columnas li')[0].innerHTML= "Número de Palabras: ";
  document.querySelectorAll('#columnas li')[1].innerHTML= "Caracteres totales: ";
  document.querySelectorAll('#columnas li')[2].innerHTML= "Caracteres sin espacios ni signos: ";
  document.querySelectorAll('#columnas li')[3].innerHTML= "Cantidad de números: ";
  document.querySelectorAll('#columnas li')[4].innerHTML= "Suma total de números: ";
  document.querySelectorAll('#columnas li')[5].innerHTML= "Longitud media de palabra: ";

});
const ctexto = document.querySelector("textarea")
ctexto.addEventListener("keyup", () =>{

  const texto = ctexto.value
  
  analyzer.getWordCount(texto)
  const metrica = analyzer.getWordCount(texto)
  document.querySelectorAll('#columnas li')[0].innerHTML= "Número de Palabras: "+ metrica;

  analyzer.getCharacterCount(texto)
  const metrica1 =analyzer.getCharacterCount(texto)
  document.querySelectorAll('#columnas li')[1].innerHTML= "Caracteres totales: "+ metrica1;

  analyzer.getCharacterCountExcludingSpaces(texto)
  const metrica2 =analyzer.getCharacterCountExcludingSpaces(texto)
  document.querySelectorAll('#columnas li')[2].innerHTML= "Caracteres sin espacios ni signos: "+ metrica2;

  analyzer.getNumberCount(texto)
  const metrica3 = analyzer.getNumberCount(texto)
  document.querySelectorAll('#columnas li')[3].innerHTML= "Cantidad de números: "+ metrica3
  
  analyzer.getAverageWordLength(texto)
  const metrica5 = analyzer.getAverageWordLength(texto)
  document.querySelectorAll('#columnas li')[5].innerHTML= "Longitud media de palabra: "+ metrica5

  analyzer.getNumberSum(texto)
  const metrica4 = analyzer.getNumberSum(texto)
  document.querySelectorAll('#columnas li')[4].innerHTML= "Suma total de números: "+ metrica4
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`