const analyzer = {
  getWordCount: (text) => {
    const espacios = text.trim();
    const texto = espacios.split(" ");
    console.log(texto);
    let nPalabras = texto.length;
    if (texto[0] === "") {
      nPalabras = 0;
    }

    return nPalabras;

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const nCarac = text.length;

    return nCarac;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const caracSE = text.replace(/\W/g, "").length;

    return caracSE;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabras = text.trim().split(" ");
    let sumaLongitudes = 0;
    for (let i = 0; i < palabras.length; i++) {
      sumaLongitudes += palabras[i].length;
    }
    const promedioSTR = (sumaLongitudes / palabras.length).toFixed(2);
    const promedio = Number(promedioSTR);
    console.log(promedio);
    return promedio;

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const elementosTotales = text.split(" ");
    console.log(elementosTotales);
    const elementosValidos = [];
    for (let i = 0; i < elementosTotales.length; i++) {
      const elementoV = elementosTotales[i].trim();
      if (/^\d+(\.\d+)?$/g.test(elementoV)) {
        elementosValidos.push(elementoV);
      }
    }
    console.log(elementosValidos);
    return elementosValidos.length;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const arrayTotal = text.split(" ");
    const arrayNms = [];
    for (let i = 0; i < arrayTotal.length; i++) {
      const numeroV = arrayTotal[i].trim();
      if (/^\d+(\.\d+)?$/g.test(numeroV)) {
        arrayNms.push(parseFloat(numeroV));
      }
    }
    console.log(arrayNms);
    let suma = 0;
    for (let i = 0; i < arrayNms.length; i++) {
      suma += arrayNms[i];
    }

    return suma;

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};
export default analyzer;
