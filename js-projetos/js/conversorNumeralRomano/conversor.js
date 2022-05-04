/*
Conversor de numeral romano
Converta o número dado em um numeral romano.

Todas as respostas em algarismos romanos devem ser fornecidas em maiúsculas.
*/

var ones_numerals = new Array();	// Armazenar UNIDADES
ones_numerals[0] = "";
ones_numerals[1] = "I";
ones_numerals[2] = "II";
ones_numerals[3] = "III";
ones_numerals[4] = "IV";
ones_numerals[5] = "V";
ones_numerals[6] = "VI";
ones_numerals[7] = "VII";
ones_numerals[8] = "VIII";
ones_numerals[9] = "IX";

var tens_numerals = new Array(); // Armazenar DEZENAS
tens_numerals[0] = "";
tens_numerals[1] = "X";
tens_numerals[2] = "XX";
tens_numerals[3] = "XXX";
tens_numerals[4] = "XL";
tens_numerals[5] = "L";
tens_numerals[6] = "LX";
tens_numerals[7] = "LXX";
tens_numerals[8] = "LXXX";
tens_numerals[9] = "XC";

var hundreds_numerals = new Array(); // Armazenar CENTENAS
hundreds_numerals[0] = "";
hundreds_numerals[1] = "C";
hundreds_numerals[2] = "CC";
hundreds_numerals[3] = "CCC";
hundreds_numerals[4] = "CD";
hundreds_numerals[5] = "D";
hundreds_numerals[6] = "DC";
hundreds_numerals[7] = "DCC";
hundreds_numerals[8] = "DCCC";
hundreds_numerals[9] = "CM";

var thousands_numerals = new Array(); // Armazenar MILHARES
thousands_numerals[0] = "";
thousands_numerals[1] = "M";
thousands_numerals[2] = "MM";
thousands_numerals[3] = "MMM";

/* Essa função atuará com contas simples que pegam os restos do termo anterior
    (Esse tipo de cálculo é também utilizado em exercícios para contagem de DIAS/HORAS/MINUTOS/SEGUNDOS)
*/

function convertToRoman(num) { 
var new_num = num
var thousands = Math.floor(new_num / 1000); // Milhares
new_num -= thousands * 1000;
var hundreds = Math.floor(new_num / 100); // Centenas
new_num -= hundreds * 100;
var tens = Math.floor(new_num / 10); // Dezenas
new_num -= tens * 10;
var ones = Math.floor(new_num / 1); // Unidades
 
var array = new Array(thousands,hundreds,tens,ones); // Cria um Array para armazenar os resultados
return makeNumeral(array); // Chama a próxima função
}


// Esta função vai basicamente imprimir os valores já passados à variável
function makeNumeral(place_values){
var numeral = "";
numeral += thousands_numerals[place_values[0]]; // Junção de todos os termos na ordem correta
numeral += hundreds_numerals[place_values[1]];
numeral += tens_numerals[place_values[2]];
numeral += ones_numerals[place_values[3]];
return numeral;
}


convertToRoman(36);