//exercicio 1

//1.1
function olaMundo(){
    alert("OLÁ MUNDO!!!")
 
}

//1.3
function mostraNome(){
    let nome = prompt("digite seu nome:") 

   console.log(nome)

}

//1.3
function concatenaPalavras(){

     let p1 = prompt("digite uma palavra:")
     let p2 = prompt("digite outra palavra:");
     let fusao = p1 + p2

     console.log(fusao)

}


// exercicio 2 //

//2.1
function soma(){

    let n1 = parseInt(prompt("digite o primeiro numero:"))
    let n2 = parseInt(prompt("digite o segundo numero"))

    let soma = n1 + n2

    console.log(soma)


}

//2.2
function valoresSub(){

  let n1= Number(prompt("digite o primeiro numero:"))
  let n2 = Number(prompt("digite o segundo numero:"))
   subtracao(n1,n2)
}

function subtracao(n1, n2){

 
  
  alert("subtracao realizada")
  

  console.log(n1-n2)

  


}

//2.3

function CriaObjeto(){

let nome = prompt("digite seu nome:")
let idade = prompt("digite sua idade:")
let time = prompt("digite seu time favorito:")

let usuario = {

nome: nome,
idade: idade,
time_favorito: time



}

console.log(usuario)
}






// exercicio 3 //

  //3.1
  function calculadora(){
   let  n1 = parseInt(prompt("digite o primeiro numero:"));
   let n2 = parseInt(prompt("digite o segundo valor:"));
   let opcao = prompt("escolha a operação que deseja realizar: (+,-,/,*):");
   
   if (opcao == "+"){
   
    let soma = n1 + n2
    
    console.log(soma)
   }    
   if (opcao == "-"){
    
    let subtracao = n1 - n2
    
    console.log(subtracao)

   }    
   if (opcao == "/"){
    let divisao = n1 / n2
    console.log(divisao)
   }    

   if (opcao == "*"){
    let multi = n1 * n2
    console.log(multi)
   }    



  }

  //3.2
  function mudaConstante(){

   const nome = prompt("digite seu nome:")
  
    console.log(nome)

   let nome2 = prompt("digite um novo valor:")
   
   nome=nome2
   
   console.log(nome)
}


// exercicio 4 //

//3.1
function manipulaArray(){
  
  cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]

  console.log("array original",cores)
  
  cores.push("laranja")

  console.log("laranja adicionado: ",cores)

  let pop = cores.pop()

  console.log("elemento removido pelo pop: ",pop)
  console.log("array apos o pop:",cores)
  
  let sort = cores.sort()

  console.log("array apos o sort: ",sort)

  let splice = cores.splice()

 console.log("array apos o splice: " ,splice)

 console.log("primeiro e ultimo elemento:",cores[0],cores[11])

 cores.unshift("fuscia")

 console.log("fuscia adicionado: " ,cores)

  let shift = cores.shift()

console.log("array apos o shift: ",shift)





}