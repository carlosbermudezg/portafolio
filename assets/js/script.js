// // Remove shadow's nav
// const nav = document.querySelector('#nav');
// nav.classList.remove('shadow');
// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       nav.classList.remove('shadow');
//       return;
//     }
//     nav.classList.add('shadow');
//   });
// });
// observer.observe(document.querySelector('#navbar'));

//Links Options
const linkOptions = {
  //Primer elemento del array establece el tipo(puede ser link, o un elemento normal)
  //elementoObservado:['ClasePincipalDelElementoObservado','ClaseUnicaDelElementoModificado','ClaseNuevaDelElementoModificado']
    intro: ['link','homeLink','active'],
    aboutme: ['link','aboutLink','active'],
    habilities: ['link','habLink','active'],
    experience: ['link','expLink','active'],
    portfolio: ['link','portLink','active'],
    contact: ['link','cntcLink','active'],
    main: ['main','nav','shadow']
}
const links = new Array (Object.getOwnPropertyNames(linkOptions))
//['#intro','#aboutme','#habilities','#experience','#portfolio','#contact']
//Observer for links

var options = {
  root: null,
  rootMargin: "-250px 0px -250px 0px"
};

const observer =  new IntersectionObserver(e => {
    e.forEach(i => {
      const a = linkOptions[i.target.getAttribute('id')][0]
      const b = linkOptions[i.target.getAttribute('id')][1]
      const c = linkOptions[i.target.getAttribute('id')][2]
      let x = document.querySelector('.' + b)
      if(i.isIntersecting) {
        if(a === 'link'){
          document.querySelector('.' + a).classList.remove(c)
          x.classList.add(c)
          return
        }else{
          x.classList.add(c)
          return
        }
      }
      x.classList.remove(c)
    });
}, options);
for (let i = 0; i < links[0].length; i++){
  observer.observe(document.querySelector('#' + links[0][i]))
}

//Navegacion Mobile
const buttonNav = document.querySelector('#button__nav')
const nav = document.querySelector('#nav')

buttonNav.addEventListener('click', () => nav.classList.toggle('nav__active'))
nav.addEventListener('click', () => nav.classList.toggle('nav__active'))

//Scroll Mobile
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const slider = document.querySelector('.card__slider')

// right.addEventListener('click', () => {
//   slider.scrollLeft += 100
//   slider.scroll()
// })
left.addEventListener('click', () => slider.scroll({
  left: 0 ,
  behavior: 'smooth'
}))
right.addEventListener('click', () => slider.scroll({
  left: slider.clientWidth * 2,
  behavior: 'smooth'
}))