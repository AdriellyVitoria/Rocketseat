// getElementsByClassName()

// const element = document.getElementsByClassName('one');
// console.log(element)

// const one = document.querySelector('.one')
// querySelectorAll()
// const elements = document.querySelectorAll('one')
// elements.forEach(el => console.log(el))

// ## Manipulando conteúdo
///const element = document.querySelector("header")
// textContent -> para mudar o texto 

// element.textContent = "ola dev"
// console.log(element.textContent)

//## innerText
// trocar o elemento interno
// element.innerText = "olá dev"

// const element = document.querySelector('h1')
// element.

// # innerHTML
// element.innerHTML = "Olá Devs! <small>! !</small> "

//## value
//element.value = "valor que eu quiser"

//## atributos 
// const header = document.querySelector('header')
// header.setAttribute("id", "header")

// const headerID = document.querySelector("#header") 
// console.log(headerID)

// header.removeAttribute("id")

// ## Altarando estilos
//classLIst
// const element = document.querySelector('body')

// element.classList.add('active', 'green')

// console.log(element.classList)
// //element.classList.remove('active')
// element.classList.toggle('active')


// // ## ne=avegando pelo os elementos:
// // parentNode parantElement

// const body = document.querySelector('body')

// // childNodes children
// const el = document.querySelector('body')

// // firstChild firstElementchild
// console.log(el.firstElementChild)

// Criando e adicionando elementos 
// createElement
// const div = document.createElement('div');
// div.innerText = 'olá devs!'

// // append prepend
// const body = document.querySelector('body')

// body.append(div)

// Adicionando elementos
// const div = document.createElement('div')
// div.innertext = 'olá devs'

// //inserBefore
// const body = document.querySelector('body')
// const header  = body.querySelector('header')
// body.insertBefore(div, header.nextElementSibling)

// Eventos

const h1 = document.querySelector('h1')

h1.addEventListener('mouse', print)

function print() {
    console.log('print')
}

