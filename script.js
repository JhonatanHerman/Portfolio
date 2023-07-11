function ativaletra(elemento) {
    const arrTexto = elemento.innerText.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        if (letra !== '<' && letra !== '>') {
          elemento.innerHTML += letra;
        }
      }, 75 * i);
    });
  }
  
  const titulo = document.querySelector('.digitando');
  ativaletra(titulo);

