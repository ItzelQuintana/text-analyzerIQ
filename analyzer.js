const analyzer = {
  getWordCount: (text) => {

    const espacios = text.trim()
    const texto = espacios.split(" ");
    let nPalabras = texto.length;
    if (texto.length === 1 && texto[0] === "") {
      nPalabras = 0;
    }
    
    return nPalabras;

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const nCarac = text.length

    return nCarac

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    const caracSE = text.replace(/\W/g, '').length

    return caracSE;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabras = text.trim().split(" ");
    let sumaLongitudes = 0;
    for (let i=0; i <palabras.length; i++){
      sumaLongitudes +=palabras[i].length;
    }
    const promedio = (sumaLongitudes/palabras.length).toFixed(2)
    console.log(promedio)
    return promedio;

   //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const nmsIdentificados = text.match(/-?\d+(\.\d+)?/g);
    console.log(nmsIdentificados)
    let nEnteros = 0;
    let nDecimales = 0;
    if (!nmsIdentificados) {
      nEnteros = 0;
      nDecimales = 0;
    } else {
      for (let i = 0; i < nmsIdentificados.length; i++) {
      const numero = parseFloat(nmsIdentificados[i]);
      if (Number.isInteger(numero)) {
      nEnteros++;
      }
      else {
      nDecimales++;
      }
      }
    }

    console.log(nDecimales + nEnteros)
    const nTotales = nDecimales + nEnteros;
    return nTotales
    
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const nmsIngresados = text.match(/-?\d+(\.\d+)?/g)||[];
    let arrayNms= [];
    for (let i = 0; i < nmsIngresados.length; i++) {
      arrayNms.push(Number(nmsIngresados[i]));
    }
    console.log(arrayNms);
  

    const suma = arrayNms.reduce((anterior, actual) => anterior + actual, 0);
    return suma;
        
   //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  }
  


}
export default analyzer;
