const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector*('.codigo-wrapper')
const botao = document.querySelector('.botao')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innertext
    areaDoCodigo.innerHTML = '<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de codigo"></code>'
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

function alterarCorBorda() {

    var cor = document.querySelector("#cores").value;
    var borda = document.getElementById("retangulo");
    borda.style.backgroundColor = cor;
}

