// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'; 
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
const topMenuEL = document.querySelector('#top-menu');
topMenuEL.style.height='100%';
topMenuEL.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEL.classList.add('flex-around');

menuLinks.forEach(link => {
    const aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    aEl.textContent = link.text;
    topMenuEL.appendChild(aEl);
  });