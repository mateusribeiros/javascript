// Tornar um objeto imutável(congelar)
const pessoa = {
    name: 'Mateus',
    age1: 19
};
Object.freeze(pessoa);


/// ------------------------------------------------------------------
// Definir parâmetro padrão para suas funções
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting());  // Hello Anonymous


///----------------------------------------------------------------------
// Use o parâmetro de descanso com parâmetros de função
function howMany(...args) { 
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments
  console.log(howMany("string", null, { })); // ...passed 3 arguments


  //------------------------------------------------------------------------
  // REDUCE - executa uma função(fornecida por você) para cada elemento
  // do array, resultando num único valor de retorno.
  const args = [1,2,3];
  args.reduce((accum,curr) => accum + curr, 0);
  // accum =  Acumulador(resul anterior), curr = Atual, 0 = Valor inicial
  console.log(args);

  
  //---------------------------------------------------------------------------
  // MAP() - executa uma função(fornecida por você) para cada elemento
  // do array, resultando em elementos num novo Array
  const numbers = [1,2,3];
  var doubles = numbers.map((curr) => curr * 2); // curr = valor atual
  console.log(doubles); // doubles = [2,4,6]


  //---------------------------------------------------------------------------
  // Use o spread para avaliar matrizes no local
  const arr = [6, 89, 3, 45];
  const maximus = Math.max.apply(null, arr); // só math.max não funciona em matrizes
  // OU
  const maximus1 = Math.max(...arr);


  //------------------------------------------------------------------------------
  // Use Atribuição de Desestruturação para Extrair Valores de Objetos
  const user = { name: 'John Doe', age: 34 };

  const name = user.name;
  const age = user.age;

  const {name,age} = user; // Realiza a mesma ação, porém mais compactado
  
  // Você pode atribuir os valores do obj a outras variáveis
  const {name: userName,age} = user; // A var userName = 'John Doe'

  // Use Atribuição de Desestruturação em Objetos Aninhados
  const person = {
    johnDoe: { 
      year: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

  const {johnDoe: {year: userYear, email}} = person;


  // ------------------------------------------------------------------------------
  // Use Atribuição de Desestruturação para Atribuir Variáveis ​​de Matrizes
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b);  // A=1, B=2; a recebe o primeiro valor da matriz e b o segundo

  const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c);// A=1,B=2,C=5; use vírgulas para chegar ao índice desejado:

  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b, arr); // A=1, B=2, ARR=[3,4,5,7]

  //   let a = 8, b = 6;  
  //   [a,b] = [b,a];       TROCA DE VALORES DE A e B


  // ---------------------------------------------------------------------------------
  // Use Atribuição de Desestruturação para Passar um Objeto como Parâmetros de Função
  const profileData = {
    name: 'Juan',
    age: 18
  };
  
  const profileUpdate = (profileData) => {
    const { name, age } = profileData;  // MENOS RECOMENDADO
    return name + age / 2;
  };

  const profileUpdate = ({name, age}) => {name + age / 2};  // COMPACTO

  
  // -------------------------------------------------------------------------------
  // CRIE STRINGS USANDO LITERAIS DE MODELO


  // -----------------------------------------------------------------------------------
  //  Escrever declarações literais concisas de objetos usando atalhos de propriedades de objetos
  const getMousePosition = (x, y) => ({
    x: x,                               // FORMA MENOS RECOMENDADA
    y: y
  });

  const getMousePosition = (x, y) => ({ x, y }); // MAIS COMPACTO


  // -----------------------------------------------------------------------------------------
  // Escreva funções declarativas concisas com ES6
  const person = {
    name: "Taylor",
    // sayHello: function() {
    //   return `Hello! My name is ${this.name}.`;          // ANTES
    // }
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };


  //-------------------------------------------------------------------------------------------------
  // Use a sintaxe de classe para definir uma função de construtor
  var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');


  class SpaceShuttle {        // CLASS declara uma nova função
    constructor(targetPlanet) {  // Constr é um método p/ criar e iniciar um obj de classe
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');


  //-------------------------------------------------------------------------------------------------------------
  // Use getters e setters para controlar o acesso a um objeto
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);  // anonymous
  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor

  
  //-----------------------------------------------------------------------------------------------------------------------
  // Crie um script de módulo
  <script type="module" src="filename.js"></script> // ADD NO ARQUIVO HTML
  //esse module tipo agora pode usar os recursos import e export.


  // ---------------------------------------------------------------------------------------------------------------------------------
  // Use a exportação e importação para compartilhar um bloco de código
  // Arquivo math.functions.js
  const add = (x,y) => {
    return x + y;
  }
 
  export { add }; // P/ exportar ADD p/ outro arquivo

  // Outro arquivo
  import { add } from './math.functions.js' // './' instrui a procurar o arquivo na mesma pasta do arquivo atual.


  // ----------------------------------------------------------------------------------------------------------------------------------
  //  Use * para importar tudo de um arquivo
  import * as myMathModule from "./math_functions.js"; 
  // A import instrução acima criará um objeto chamado 'myMathModule'
  // Este é apenas um nome de variável, você pode nomeá-lo de qualquer maneira
  myMathModule.add(2,3);
  myMathModule.subtract(5,3); // Para acessar as informações dentro dele


  // --------------------------------------------------------------------------------------------------------------------------------------------
  // Criar um substituto de exportação com padrão de exportação e importação
  // Arquivo math.functions
  export default function add(x, y) {
    return x + y;
  }
  
  export default function(x, y) {
    return x + y;
  } // A primeira é uma função nomeada e a segunda é uma função anônima.
  //  você só pode ter um valor como exportação padrão em cada módulo ou arquivo

  // Outro arquivo
  import add from "./math.functions.js"; // add é uma variável aqui


  // ----------------------------------------------------------------------------------------------------------------------------------------------
  // Crie uma promessa de JavaScript
  // Quando a tarefa é concluída, você cumpre sua promessa ou deixa de fazê-lo. Promise é uma função construtora, portanto, você precisa usar a new para criar uma
  const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }

    myPromise.then(result => { // promessa cumprida
    });   // O then método é executado imediatamente após o cumprimento de sua promessa resolve


    myPromise.catch(error => { // promessa rejeitada
    });   // catch é o método usado quando sua promessa foi rejeitada.
  });


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // EXPRESSÕES REGULARES

  // Usando o método de teste
  let myString = "Hello, World!"; // Declara a string
  let myRegex = /Hello/; // Usa-se '/' como expressão regular(usadas em linguagens de programação para combinar partes de strings. Você cria padrões para ajudá-lo a fazer essa correspondência.)
  const result = myRegex.test(myString); // pega a regex, aplica-a a uma string (que é colocada entre parênteses) e retorna true ou false se o seu padrão encontrar algo ou não.

  //Combine uma string literal com diferentes possibilidades
  let petString = "James has a pet cat.";
  let petRegex = /cat|dog|bird/; // Usa-se OU(|) para procurar diferentes possibilidades dentro de uma string
  let result = petRegex.test(petString);

  //Ignorar maiúsculas e minúsculas durante a correspondência
  let myString = "freeCodeCamp";
  let fccRegex = /code/i; // O sinalizador I ignora maiúsculas e minúsculas
  let result = fccRegex.test(myString);

  //Extrair correspondências com Match
  "Hello, World!".match(/Hello/);
  let ourStr = "Hello, world!";
  let ourRegex = /expressions/;
  ourStr.match(ourRegex); // Observe que a .match sintaxe é o "oposto" do .test método

  //Encontre mais do que a primeira correspondência
  let testStr = "Repeat, Repeat, Repeat";
  let ourRegex = /Repeat/g; // Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o g sinalizador.
  testStr.match(ourRegex); // "Repeat, Repeat, Repeat"

  //Corresponder a qualquer coisa com o período curinga
  let hugStr = "Bear hug";
  let huRegex = /hu./; // se você queria achar hug, huh ou hut você pode usar /hu./ para coincidir com todas as quatro palavras.
  huRegex.test(hugStr);

  //Combine um único personagem com múltiplas possibilidades
  let bigStr = "big"; // TRUE
  let bugStr = "bug";  // TRUE
  let bogStr = "bog"; // FALSE
  let bgRegex = /b[iu]g/; // Coloca entre [] as variações desejáveis; big, bug.
  bigStr.match(bgRegex);
  bugStr.match(bgRegex);
  bogStr.match(bgRegex);

  //Corresponder letras do alfabeto
  let catStr = "cat";
  let batStr = "bat";
  let matStr = "mat";
  let bgRegex = /[a-e]at/; //  Procura de A até E
  catStr.match(bgRegex); 
  batStr.match(bgRegex);
  matStr.match(bgRegex);

  //Corresponder números e letras do alfabeto
  let jennyStr = "Jenny8675309";
  let myRegex = /[a-z0-9]/ig;
  jennyStr.match(myRegex);

  //Corresponder a caracteres únicos não especificados
  let quoteSample = "3 blind mice.";
  let myRegex = /[^aeiou0-9]/gi; // Uso do ^ nega as correspondências após este sinalizador
  let result = quoteSample.match(myRegex); // Retorna os valores negados

  // Corresponder caracteres que ocorrem uma ou mais vezes
  let difficultSpelling = "Mississippi";
  let myRegex = /s+/g;
  let result = difficultSpelling.match(myRegex); // [ss] , [ss];

  // Corresponder a caracteres que ocorrem zero ou mais vezes
  let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);

  // Encontre personagens com correspondência preguiçosa
  let text = "<h1>Winter is coming</h1>";
  let myRegex = /<h.*?>/;  //  Retorna ["<h1>"]
  let result = text.match(myRegex);
  //  /t[a-z]*i/ à string "titanic". Retorno ["titani"] -> Correspondência gulosa
  //  /t[a-z]*?i/ à string "titanic". Retorno ["ti"] -> Correspondência preguiçosa

  // Corresponder aos Padrões de String Iniciais
  let firstString = "Ricky is first and can be found.";
  let firstRegex = /^Ricky/; // Retorno: true, pois Ricky está no início da String
  firstRegex.test(firstString)

  // Corresponder aos Padrões de String Finais
  let theEnding = "This is a never ending story";
  let storyRegex = /story$/; // Retorn: true, pois Story está no final da String
  storyRegex.test(theEnding);

  // Combinar todas as letras e números
  let longHand = /[A-Za-z0-9_]+/;  
  let shortHand = /\w+/; // /\w+/ é igual /[A-Za-z0-9_]+/  RETORNA todos os termos da String
  let varNames = "important_var";
  longHand.test(varNames);  // TRUE
  shortHand.test(varNames); // TRUE

  // Combine tudo, menos letras e números
  let shortHand = /\W/; // /\W/ é igual /[^A-Za-z0-9_]/ RETORNA todos os Não termos da String
  let numbers = "42%";  
  let sentence = "Coding!";
  numbers.match(shortHand);   // ["%"]
  sentence.match(shortHand); // ["!"]

  //  Corresponder a todos os números
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/;  // \d é igual a [0-9]
  let result = movieName.match(numRegex); // ["2001"]

  //  Corresponder a todos os não-números
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /\D/; // \D é igual a [^0-9] RETORNA todos os Não números
  let result = movieName.match(noNumRegex).length;

  // Corresponder ao espaço em branco
  let whiteSpace = "Whitespace. Whitespace everywhere!"
  let spaceRegex = /\s/g; // \s é igual a [ \r\t\f\n\v] RETORNA todos os espaços em branco
  whiteSpace.match(spaceRegex); // [" ", " "]

  // Corresponder a caracteres que não sejam espaços em branco
  let whiteSpace = "Whitespace. Whitespace everywhere!"
  let spaceRegex = /\S/g; // \S é igual  [^ \r\t\f\n\v] RETORNA todos os Não espaços em branco
  whiteSpace.match(spaceRegex); 

  // Especifique o número superior e inferior de correspondências
  let A4 = "aaaah";
  let A2 = "aah";
  let multipleA = /a{3,5}h/; // Só vai ser TRUE se tiver de 3-5 "a" juntos
  multipleA.test(A4); // TRUE
  multipleA.test(A2); // FALSE

  // Especifique apenas o menor número de correspondências
  let A2 = "haah";
  let A100 = "h" + "a".repeat(100) + "h";
  let multipleA = /ha{3,}h/; // Para especificar apenas o menor número de padrões, mantenha o primeiro número seguido por uma vírgula.
  multipleA.test(A2); // TRUE
  multipleA.test(A100); // FALSE

  // Especifique o número exato de correspondências
  let A4 = "haaaah";
  let A3 = "haaah";
  let multipleHA = /ha{3}h/; // Para especificar um certo número de padrões, basta ter esse número entre as chaves.
  multipleHA.test(A4);
  multipleHA.test(A3);

  //  Verificar tudo ou nenhum
  let american = "color";
  let british = "colour";
  let rainbowRegex= /colou?r/; // Uso do ? dizendo que o elemento anterior é opcional
  rainbowRegex.test(american);
  rainbowRegex.test(british);

  // Antecipação Positiva e Negativa
    // Uma antecipação positiva verificará se o elemento no padrão de pesquisa está lá, mas na verdade não corresponderá a ele. 
      // Uma antecipação positiva é usada (?=...)quando a ...é a parte necessária que não é correspondida.

    // Por outro lado, um lookahead negativo verificará se o elemento no padrão de pesquisa não está lá. 
      // Um lookahead negativo é usado como (?!...)onde o ...é o padrão que você não quer que esteja lá.
      // O restante do padrão é retornado se a parte de antecipação negativa não estiver presente.

  let quit = "qu";
  let noquit = "qt";
  let quRegex= /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex);
  noquit.match(qRegex);

  // Verifique se há agrupamento misto de caracteres
  let testStr = "Pumpkin";
  let testRegex = /P(engu|umpk)in/; // Verificar grupos de caracteres usando expressões regulares com ()
  testRegex.test(testStr);

  // Reutilizar padrões usando grupos de captura
  let repeatNum = "42 42 42";
  let reRegex = /^(\d+)(\s)\1\2\1$/g; // (\d+) salva temporariamente e \1 acessa o item salvo. Começando em 1
  let result = reRegex.test(repeatNum); // ["42 42 42"]

  // Use grupos de captura para pesquisar e substituir
  let wrongText = "The sky is silver.";
  let silverRegex = /silver/;
  wrongText.replace(silverRegex, "blue"); // Primeiro o regex a pesquisar e segundo o termo que substituirá

  "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"
  //Você também pode acessar grupos de captura na string de substituição com cifrões ( $).

  //  Remover espaços em branco do início e do fim
  let hello = "   Hello, World!  ";
  let wsRegex = /^\s+|\s+$/g;
  let result = hello.replace(wsRegex, ""); 

  //---------------------------------------------------------------------------------------------------------------------------------------
  //  Estruturas de dados básicas
  
  // Pop, Push, shift, unshift
  // splice -> Add e delete itens
  // slice -> Copiar itens
  // spread -> Copiar e combinar itens
  // indexOf -> Saber a posição do elemento
  // delete -> obj.chave
  // verificar propriedade dentro de obj -> users.hasOwnProperty('Alan'); OU 'Alan' in users;

  // Verificar propriedades dentro de um obj utilizando uma função:
  // return ['Alan','Jeff','Sarah','Ryan'].every(name => userObj.hasOwnProperty(name));

  // For.. in p/ objetos
  // Object.keys(obj) -> Gera um array contendo todas as chaves presentes no Objeto


  // ---------------------------------------------------------------------------------------------------------------
  //  OPP- PROGRAMAÇAO ORIENTADA A OBJETOS

  // Verifique o construtor de um objeto com instanceof
  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; // Verifica se crow foi criado a partir do constructor BIRD

  // Use as propriedades do protótipo para reduzir o código duplicado
  Bird.prototype.numLegs = 2; // Como numLegsprovavelmente terá o mesmo valor para todas 
  // as instâncias de Bird, você terá essencialmente uma variável duplicada numLegsdentro
  // de cada Bird instância.

  
  // --------------------------------------------------------------------------------------