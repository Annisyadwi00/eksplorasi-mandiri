document.title = "hatsuharu"

console.log(document.body)
const body = (document.body)
body.append('Halooo')

const NPM = document.createElement('h3')
NPM.innerHTML = '2210631170112'
body.append(NPM)

const b1 = document.getElementById('b1')
b1.style.border = 'none'
b1.style.padding = '8px'
b1.style.fontSize = '12px'
b1.style.background = 'green'

function klik(){
    console.log('klik')
    alert('diklik nih')
    b1.style.background = 'pink'
}
function klik2(){
    b1.textContent = 'Mau ngapain hayo'
    console.log('klik2')
}