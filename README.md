# Analizador de texto de Itzel :)

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Interfaz](#2-interfaz)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Descripción de archivos](#4-descripción-de-scripts-/archivos)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
***

## 1. Consideraciones generales

* El proyecto presente consiste en un ANALIZADOR DE TEXTO, el cual permite realiza la descomposición de un enunciado y brinda información de este a través de la interacción con la interfaz.
* Es resultado de una actividad de aprendizaje en tres lenguajes de programación: HTML, JavaScript y CSS. (Ver apartado de objetivos de aprendizaje)

## 2. Interfaz

La apliación creada permite a las usuarias tomar decisiones informadas y sacar conclusiones significativas a través del análisis que la herramienta genera; con un estilo enfocado a la presentación visual de la información de una manera atractiva y clara. 

![Analizador ITZEL](https://github.com/ItzelQuintana/text-analyzerIQ/assets/142268037/964bec5c-3e2b-4951-bc47-4539eda14adf)

## 3. Funcionalidades

El listado de funciones que ejecuta en tiempo real y a medida que la usuaria escribe su texto es:

1) **Recuento de palabras**: La aplicación cuenta el número de palabras en el texto de entrada.
2) **Recuento de caracteres**: La aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación.
3) **Recuento de caracteres excluyendo espacios y signos de puntuación**: La aplicación cuenta el número de caracteres, excluyendo espacios y signos de puntuación.
4) **Recuento de números**: La aplicación cuenta cúantos números hay en el texto de entrada.
5) **Suma total de números**: La aplicación suma todos los números que hay en el texto de entrada.
6) **Longitud media de las palabras**: La aplicación calcula la longitud media de las palabras en el texto de entrada.

Además, la aplicación permite ejecutar anáisis nuevos de acuerdo con la necesidad del usuario. 
![código](https://github.com/ItzelQuintana/text-analyzerIQ/assets/142268037/2288ae95-5176-45cf-a6fd-e025a64535f7)


## 4.Descripción de scripts / archivos

* [`src/index.html`](./src/index.html): Este archivo contiene el código de HTML.
* [`src/style.css`](./src/style.css): Este archivo contiene las reglas de
  estilo utilizado en código CSS.
* [`src/analyzer.js`](./src/analyzer.js): Este archivo contiene las especificaciones del objeto
  `analyzer`, el cual, contiene los métodos desarollados en JS para dar funcionalidad al proyecto.
* [`src/index.js`](./src/index.js): Este archivo contiene el código para escuchar eventos del DOM, invocar
  los métodos del objeto `analyzer` y actualizar el resultado en la UI (interfaz de usuaria).
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): Este archivo contiene las pruebas unitarias realizadas para los métodos del objeto `analyzer`.


## 5.Objetivos de aprendizaje

1) HTML
   - Uso de HTML semántico
   - Uso de selectores del DOM
   - Manejo de eventos del DOM (listeners, propagación, delegación)
   - Manipulación dinámica del DOM

2) JavaScript
   - Uso de selectores del DOM
   - Tipos de datos primitivos
   - Variables (declaración, asignación, ámbito
   - Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
   - Uso de bucles/ciclos (while, for, for..of)
   - Funciones (params, args, return)

3) CSS
   - Uso de selectores de CSS
   - Modelo de caja (box model): border, margen, paddin



**¡Espero que el proyecto sea de tu utilidad y agrado!**

[ ] *Elaborado por Itzel Quintana, generación DEV-011*
