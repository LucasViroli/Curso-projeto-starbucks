const circulo = document.getElementById('circulo')
const imagem = document.querySelector('.starbucks')
const botoes = document.querySelectorAll('.botao-menu')

function trocarCor(cor) {
  if (circulo) {
    circulo.style.background = cor
  }
}

function trocaImagem(src) {
  if (imagem) {
    imagem.src = src
  }
}

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const cor = botao.dataset.cor
    const img = botao.dataset.img

    trocarCor(cor)
    trocaImagem(img)
  })
})