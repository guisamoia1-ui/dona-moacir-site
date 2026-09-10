const hasGsap = typeof window.gsap !== 'undefined';
const gsapApi = hasGsap ? window.gsap : null;
if (hasGsap && window.ScrollTrigger) gsapApi.registerPlugin(window.ScrollTrigger);

const localImage = name => `assets/dona-moacir/${name}`;
const carouselData = {
  burgers: {
    images: [localImage('05_sliders_artesanais.png'), localImage('07_cheeseburger_onion_ring.png'), localImage('10_hamburguer_gourmet_fritas.png')],
    alts: ['Sliders artesanais da Dona Moacir', 'Cheeseburger com onion rings da Dona Moacir', 'Hambúrguer gourmet com fritas da Dona Moacir']
  },
  porcoes: {
    images: [localImage('01_batatas_carregadas.png'), localImage('03_cubinhos_crocantes.png'), localImage('08_tabua_carne_fritas.png')],
    alts: ['Batatas carregadas com bacon e cheddar', 'Cubinhos crocantes de queijo', 'Tábua de carne com fritas da Dona Moacir']
  },
  drinks: {
    images: [localImage('09_coqueteis_tropicais.png'), localImage('11_coquetel_rubi.png'), localImage('13_coquetel_vibrante.png'), localImage('14_coquetel_azul.png')],
    alts: ['Coquetéis tropicais da Dona Moacir', 'Coquetel rubi da Dona Moacir', 'Coquetel vibrante da Dona Moacir', 'Coquetel azul da Dona Moacir']
  },
  feijoada: {
    images: [localImage('02_feijoada_arroz_acompanhamentos.png'), localImage('06_feijoada_ao_ar_livre.png'), localImage('04_feijoada_mesa_posta.png')],
    alts: ['Feijoada com arroz e acompanhamentos', 'Feijoada ao ar livre da Dona Moacir', 'Mesa posta para a feijoada de sábado']
  },
  parmegiana: {
    images: [localImage('15_parmegiana_frango.png'), localImage('16_parmegiana_mignon.png')],
    alts: ['Parmegiana de frango com arroz e fritas', 'Parmegiana de mignon com arroz e chips']
  }
};

const categoryData = {
  burgers: { kicker: 'O MAIS PEDIDO', title: 'Burger\n de respeito.', description: 'Pão brioche, maionese da casa, carne alta e queijo mussarela. Simples só no nome.', price: 'R$ 26,90', menu: 'burgers' },
  parmegiana: { kicker: 'A LA CARTE', title: 'Parmegiana\n de respeito.', description: 'Frango ou mignon, molho de tomate, queijo derretido e acompanhamento para matar a vontade.', price: 'A partir de R$ 49,90', menu: 'parmegiana' },
  porcoes: { kicker: 'PARA COMPARTILHAR', title: 'Mais uma\n porção.', description: 'Batatas carregadas, cubinhos crocantes, tábua de carne e aquela mesa que nunca fica vazia.', price: 'A partir de R$ 10,90', menu: 'porcoes' },
  drinks: { kicker: 'DO BALCÃO', title: 'Bateu\n a sede.', description: 'Coquetéis tropicais, drinks autorais e boas ideias no gelo.', price: 'A partir de R$ 22,90', menu: 'drinks' },
  feijoada: { kicker: 'SÓ AOS SÁBADOS', title: 'Feijoada\n sem pressa.', description: 'Feijoada e guarnições com reposição livre. Crianças até 6 anos não pagam.', price: 'R$ 56,90 por pessoa', menu: 'feijoada' }
};

const menuData = {
  burgers: [['Tradicional', 'Pão brioche, maionese da casa, carne alta e queijo mussarela.', 'R$ 26,90'], ['Cheddar Bacon', 'Pão brioche, maionese da casa, carne alta, cheddar cremoso e bacon.', 'R$ 36,90'], ['Cream Cheese', 'Carne alta, cream cheese, cebola crispy e barbecue.', 'R$ 39,90'], ['Queijo Empanado', 'Pão brioche, maionese da casa, carne alta, queijo empanado e molho de maracujá.', 'R$ 46,90'], ['Smash Pachuco', '2 carnes smash, queijo cheddar e cebola caramelizada com bacon.', 'R$ 36,90'], ['Onion BBQ', 'Carne alta, queijo mussarela, onion ring e barbecue.', 'R$ 38,90']],
  parmegiana: [['Parmegiana de frango', 'Filé de coxa empanado, molho de tomate caseiro, queijo mussarela gratinado. Acompanha arroz branco e fritas.', 'R$ 49,90'], ['Parmegiana de mignon', 'Filé de mignon empanado, molho de tomate caseiro, queijo mussarela gratinado. Acompanha arroz branco e fritas.', 'R$ 64,90'], ['Parmegiana de frango para duas pessoas', 'Acompanha arroz branco e fritas.', 'R$ 98,90'], ['Parmegiana de mignon para duas pessoas', 'Acompanha arroz branco e fritas.', 'R$ 124,90']],
  porcoes: [['Dadinho de muçarela', 'Cubinhos crocantes de queijo empanado.', 'R$ 28,90'], ['Batata especial', 'Cheddar, bacon, cebola verde e maionese da casa.', 'R$ 44,90'], ['Panceta', 'Torresmo inteiro ou picado, com geleia de bacon.', 'R$ 64,90'], ['Bolinho de carne', 'Acompanha salsa crioula.', 'R$ 45,90']],
  drinks: [['Caipirinha de limão', 'Vodka ou cachaça.', 'R$ 22,90'], ['Moscow Mule de vodka', 'Vodka, limão, xarope de gengibre e espuma.', 'R$ 32,90'], ['Drink da casa', 'Campari, limão e laranja.', 'R$ 35,90'], ['Negroni', 'Campari, gin e vermute.', 'R$ 35,90'], ['Aperol Spritz', 'Aperol, suco de laranja e tônica.', 'R$ 32,90']],
  feijoada: [['Feijoada de sábado', 'Feijão, carnes, arroz, farofa, couve e banana frita. Reposição livre.', 'R$ 56,90'], ['Crianças até 6 anos', 'Não pagam acompanhadas de responsável.', 'Grátis']],
  sobremesas: [['Mini burgers doces', '4 unidades: Banoffee e Sensação.', 'R$ 25,90'], ['Milk-shake', 'Banoffee, Ovomaltine, Ninho ou Cappuccino.', 'R$ 18,90'], ['Brownie com sorvete', 'Brownie com sorvete de creme e calda de morango.', 'R$ 25,90']]
};

let activeCategory = 'burgers';
let activeSlide = 0;
function animate(target, vars) { if (gsapApi) gsapApi.to(target, vars); }
function renderItems(category) {
  const items = document.querySelector('#menu-items');
  if (items) items.innerHTML = (menuData[category] || []).map(item => `<article class="item"><div><h4>${item[0]}</h4><p>${item[1]}</p></div><strong>${item[2]}</strong></article>`).join('');
}
function setMenuActive(category) {
  document.querySelectorAll('.menu-tab').forEach(button => { const active = button.dataset.menu === category; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
}
function updateCarousel(index = activeSlide) {
  const data = carouselData[activeCategory];
  activeSlide = (index + data.images.length) % data.images.length;
  const image = document.querySelector('#category-image');
  const swap = () => { image.src = data.images[activeSlide]; image.alt = data.alts[activeSlide]; };
  if (gsapApi) animate(image, { opacity: 0, scale: 1.03, duration: .18, onComplete: () => { swap(); animate(image, { opacity: 1, scale: 1, duration: .45 }); } }); else swap();
  document.querySelector('#carousel-count').textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(data.images.length).padStart(2, '0')}`;
  document.querySelector('#carousel-dots').innerHTML = data.images.map((_, i) => `<button class="carousel-dot${i === activeSlide ? ' active' : ''}" type="button" role="tab" aria-selected="${i === activeSlide}" aria-label="Ver foto ${i + 1}"></button>`).join('');
  document.querySelector('#carousel-thumbs').innerHTML = data.images.map((src, i) => `<button class="carousel-thumb${i === activeSlide ? ' active' : ''}" type="button" aria-label="Ver foto ${i + 1}"><img src="${src}" alt="" loading="lazy" /></button>`).join('');
  document.querySelectorAll('.carousel-dot,.carousel-thumb').forEach((button, i) => button.addEventListener('click', () => updateCarousel(i % data.images.length)));
}
function moveCarousel(direction) { updateCarousel(activeSlide + direction); }
function selectCategory(category) {
  const data = categoryData[category];
  if (!data) return;
  activeCategory = category;
  activeSlide = 0;
  document.querySelector('#category-kicker').textContent = data.kicker;
  document.querySelector('#category-title').innerHTML = data.title.replace('\n', '<br /><em>').replace('.', '. </em>');
  document.querySelector('#category-description').textContent = data.description;
  document.querySelector('#category-price').textContent = data.price;
  document.querySelectorAll('.category').forEach(button => { const active = button.dataset.category === category; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
  setMenuActive(data.menu);
  renderItems(data.menu);
  updateCarousel(0);
}
document.querySelectorAll('.category').forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.category)));
document.querySelectorAll('.menu-tab').forEach(button => button.addEventListener('click', () => { renderItems(button.dataset.menu); setMenuActive(button.dataset.menu); }));
document.querySelector('.carousel-prev').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.carousel-next').addEventListener('click', () => moveCarousel(1));

const happyData = {
  seg: { description: 'Happy hour a noite toda para começar a semana sem pressa.', offer: 'Happy a noite toda', image: localImage('09_coqueteis_tropicais.png'), alt: 'Coquetéis tropicais no Happy Hour' },
  ter: { description: 'Chopp, porções e 30% de desconto no Denver e no Ancho.', offer: '30% no Denver & Ancho', image: localImage('08_tabua_carne_fritas.png'), alt: 'Tábua de carne para o Happy Hour' },
  qua: { description: 'Parmegianas individuais com 30% de desconto para dividir ou não.', offer: 'Parmegiana · 30% off', image: localImage('15_parmegiana_frango.png'), alt: 'Parmegiana de frango com arroz e fritas' },
  qui: { description: 'Dezoito às vinte: o intervalo oficial para pedir mais uma rodada.', offer: 'Happy hour · 18h—20h', image: localImage('11_coquetel_rubi.png'), alt: 'Coquetel rubi da Dona Moacir' },
  sex: { description: 'Sexta pede batata carregada, mesa cheia e o começo do fim de semana.', offer: 'Happy hour · 18h—20h', image: localImage('01_batatas_carregadas.png'), alt: 'Batatas carregadas com bacon, cheddar e molho' }
};
document.querySelectorAll('.day').forEach(day => day.addEventListener('click', () => {
  document.querySelectorAll('.day').forEach(item => { const active = item === day; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); });
  const data = happyData[day.dataset.day];
  const image = document.querySelector('#happy-image');
  const orb = document.querySelector('.drink-orb');
  const update = () => { document.querySelector('#happy-description').textContent = data.description; document.querySelector('#happy-offer').textContent = data.offer; image.src = data.image; image.alt = data.alt; orb.dataset.day = day.dataset.day; orb.classList.remove('is-changing'); };
  orb.classList.add('is-changing');
  if (gsapApi) { animate('#happy-description', { opacity: 0, y: 5, duration: .15 }); animate('#happy-offer', { opacity: 0, duration: .15 }); setTimeout(update, 180); } else update();
}));

const basePrice = 26.90;
const extras = { Bacon: 7.90, Cheddar: 6, 'Cebola crispy': 4, Barbecue: 2 };
const extraVisuals = {
  Bacon: { label: 'BACON', className: 'extra-bacon' },
  Cheddar: { label: 'CHEDDAR', className: 'extra-cheddar' },
  'Cebola crispy': { label: 'CEBOLA CRISPY', className: 'extra-onion' },
  Barbecue: { label: 'BARBECUE', className: 'extra-bbq' }
};
function renderBuilderVisual() {
  const stack = document.querySelector('.burger-stack');
  stack.classList.remove('is-updating');
  void stack.offsetWidth;
  stack.classList.add('is-updating');
  const bread = document.querySelector('.ing-top');
  const breadChoice = document.querySelector('.choice:not(.add).selected')?.textContent.trim() || 'Brioche';
  const isNewYork = breadChoice === 'New York';
  bread.classList.toggle('new-york', isNewYork);
  bread.innerHTML = `${isNewYork ? 'NEW YORK' : 'BRIOCHE'} <small>${isNewYork ? 'crocante & dourado' : 'fofinho & amanteigado'}</small>`;
  const extrasNode = document.querySelector('#burger-extras');
  const selectedExtras = [...document.querySelectorAll('.choice.add.selected')].map(choice => choice.textContent.replace('+ ', '').trim());
  extrasNode.innerHTML = selectedExtras.map(name => { const visual = extraVisuals[name]; return `<div class="ingredient ingredient-extra ${visual.className}">${visual.label}</div>`; }).join('');
  extrasNode.classList.toggle('has-extras', selectedExtras.length > 0);
}
function updateBuilder() {
  const selected = [...document.querySelectorAll('.choice.add.selected')];
  const total = basePrice + selected.reduce((sum, choice) => sum + (extras[choice.textContent.replace('+ ', '').trim()] || 0), 0);
  document.querySelector('.builder-total strong').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  const message = `Oi, quero montar meu burger com ${selected.length ? selected.map(choice => choice.textContent.trim()).join(', ') : 'a base da casa'}!`;
  document.querySelector('.builder-total a').href = `https://wa.me/554134083221?text=${encodeURIComponent(message)}`;
  renderBuilderVisual();
}
document.querySelectorAll('.choice').forEach(choice => choice.addEventListener('click', () => { if (!choice.classList.contains('add')) { choice.parentElement.querySelectorAll('.choice').forEach(item => item.classList.remove('selected')); choice.classList.add('selected'); } else choice.classList.toggle('selected'); updateBuilder(); }));

renderItems('burgers');
updateBuilder();
updateCarousel(0);
const happyOrb = document.querySelector('.drink-orb');
if (happyOrb) happyOrb.dataset.day = document.querySelector('.day.active')?.dataset.day || 'seg';
if (gsapApi && window.ScrollTrigger) {
  const mm = gsapApi.matchMedia();
  mm.add('(min-width: 801px)', () => { animate('.hero-media', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } }); animate('.drink-orb', { y: -90, rotation: 12, ease: 'none', scrollTrigger: { trigger: '.happy', start: 'top bottom', end: 'bottom top', scrub: 1 } }); });
  gsapApi.utils.toArray('.reveal').forEach((element, index) => animate(element, { opacity: 1, y: 0, duration: .9, delay: (index % 3) * .08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } }));
  animate('.hero-copy > *', { opacity: 1, y: 0, stagger: .11, duration: 1, ease: 'power3.out', delay: .2 });
} else document.querySelectorAll('.reveal').forEach(element => { element.style.opacity = '1'; element.style.transform = 'none'; });
window.addEventListener('scroll', () => document.querySelector('.topbar').classList.toggle('scrolled', window.scrollY > 35), { passive: true });
if (window.matchMedia('(pointer:fine)').matches) window.addEventListener('mousemove', event => { const glow = document.querySelector('.cursor-glow'); glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
