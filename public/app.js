'use strict'

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img
    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'
*/

const links = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const big = document.querySelector('.big')
const close = document.querySelector('.close');

links.forEach((eachLink, i) => {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();
    let path = eachLink.querySelector('.img').src;
    // console.log(path)

    lightbox.classList.add('active');
    big.setAttribute('src', path)

  })
})

close.addEventListener('click', () => {
  lightbox.classList.remove('active');
  // big.setAttribute('src', '')
})
