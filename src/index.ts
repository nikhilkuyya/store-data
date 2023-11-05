console.log('index')

function handler(evt: SubmitEvent) {
  evt.preventDefault();
  console.log('handler')
}

const formNode = document.getElementById('my-form')
formNode.addEventListener('submit',handler)
