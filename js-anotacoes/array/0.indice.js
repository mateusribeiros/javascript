//ADD
unshift(); // Inicio
splice(); // (Posição, Qts elementos deletar, itens que serão adicionados)
push(); // Final

// DELETE
Array.shift(); // Remove primeiro termo
Array.pop(); // Remove último termo
Array.splice() // (Posição, Qts elementos remover)

// PROCURAR ELEMENTOS(PRIMITIVOS)
Array.indexOf(); // Indice do item
Array.lastIndexOf(); // Último item a aparecer
Array.includes(); // true = existe; false = n/ existe

// PROCURAR ELEMENTOS(REFERENCIA) COM ARROW FUNCTION
Array.find(param => param.id === x); // OU
Array.find(function(param) { return param.id === x});

// ESVAZIANDO
Array.length = 0; // ou
Array.splice(0);

// COMBINAR & CORTAR
Array3 = Array1.concat(Array2); // combinando
Array3.slice(2); // cortando tudo antes da 2* posição

// COMBINAR & CLONANDO com SPREAD
Array3 = [...Array1,'a',...Array2]; // combinando
Array4 = [...Array3];

// ForEach
Array.forEach((param,indice) => console.log(param,indice));

for (param of Array) {      // SEM ForEach = menos compacto
    console.log(param, Array.indexOf(param));
}                       

// COMBINAR Arrays & Strings
Array = ['blue','brown','green'];
Array1 = Array.join(` & `); // Add & entre cada termo do array

Array3 = 'Olá você aí';
Array4 = Array3.split(' '); // Separa por espaços
Array4 = Array4.join('-'); // Slug = Url com traços entre termos


