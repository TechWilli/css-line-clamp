const text = document.querySelector('.text-line-clamp')
const btnShowText = document.querySelector('.btn-show-text')
const card = document.querySelector('.card')

const titleText = `Esse é um texto aplicado com o truque do line-clamp,
onde é possível definir a partir de qual linha as reticências (...) aparecerão.
Então, caso o texto chegue no momento de cortar o que é visível, a classe entra em ação`

text.setAttribute('title', titleText)

btnShowText.addEventListener('click', () => {
  
  card.classList.toggle('card-full-height')
  text.classList.toggle('text-display-block')

  if (card.classList.contains('card-full-height')) {
    btnShowText.innerHTML = 'esconder texto'

  } else {
    btnShowText.innerHTML = 'mostrar texto completo'

  }

})