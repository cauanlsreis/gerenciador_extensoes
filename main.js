const root = document.documentElement;
const btn = document.getElementById('theme-toggle-btn');
const icon = document.getElementById('theme-toggle-icon');
const filters = document.getElementById('filters');
const grid = document.getElementById('extensions-grid');

let extensions = [];
let currentFilter = 'all';
let isLight = false;

// Tema claro/escuro
function setLightTheme() {
  root.style.setProperty('--bg-main', '#f3f7fa');
  root.style.setProperty('--bg-card', '#fff');
  root.style.setProperty('--bg-header', '#fff');
  root.style.setProperty('--color-primary', '#232c4b');
  root.style.setProperty('--color-secondary', '#232c4b');
  root.style.setProperty('--color-accent', '#ff5e5e');
  root.style.setProperty('--color-btn', '#fff');
  root.style.setProperty('--color-btn-hover', '#ff5e5e');
  root.style.setProperty('--card-title', '#232c4b');
  root.style.setProperty('--card-desc', '#3a415c');
  icon.src = './assets/images/icon-moon.svg';
  icon.alt = 'Tema escuro';
  document.body.style.background = 'linear-gradient(135deg, #eaf3fa 0%, #f3f7fa 100%)';

  // Deixe o botão do tema mais claro no modo claro
  btn.style.background = '#eaf3fa';
  btn.style.borderColor = '#b6e3f4';
}

function setDarkTheme() {
  root.style.setProperty('--bg-main', '#181e2a');
  root.style.setProperty('--bg-card', '#232c4b');
  root.style.setProperty('--bg-header', '#232c4b');
  root.style.setProperty('--color-primary', '#fff');
  root.style.setProperty('--color-secondary', '#b6e3f4');
  root.style.setProperty('--color-accent', '#ff5e5e');
  root.style.setProperty('--color-btn', '#232c4b');
  root.style.setProperty('--color-btn-hover', '#ff5e5e');
  root.style.setProperty('--card-title', '#fff');
  root.style.setProperty('--card-desc', '#b6e3f4');
  icon.src = './assets/images/icon-sun.svg';
  icon.alt = 'Tema claro';
  document.body.style.background = 'linear-gradient(135deg, #181e2a 0%, #232c4b 100%)';

  // Volta o botão do tema para o padrão escuro
  btn.style.background = '#232c4b';
  btn.style.borderColor = '#3a415c';
}
btn.addEventListener('click', () => {
  isLight = !isLight;
  isLight ? setLightTheme() : setDarkTheme();
});

// Carregar extensões do data.json
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    extensions = data.map((ext, idx) => ({
      ...ext,
      id: idx + '_' + ext.name.replace(/\s/g, '_')
    }));
    renderExtensions();
  });

function renderExtensions() {
  grid.innerHTML = '';
  extensions.forEach((ext, idx) => {
    if (
      currentFilter === 'all' ||
      (currentFilter === 'active' && ext.isActive) ||
      (currentFilter === 'inactive' && !ext.isActive)
    ) {
      grid.appendChild(createCard(ext, idx));
    }
  });
}

function createCard(ext, idx) {
  const card = document.createElement('div');
  card.className = 'extension-card' + (ext.isActive ? ' active' : '');
  card.setAttribute('data-id', ext.id);

  card.innerHTML = `
    <div class="extension-card__icon">
      <img src="${ext.logo}" alt="${ext.name}" />
    </div>
    <div class="extension-card__content">
      <h2>${ext.name}</h2>
      <p>${ext.description}</p>
    </div>
    <div class="extension-card__actions">
      <button class="remove-btn" aria-label="Remove ${ext.name}">Remove</button>
      <label class="switch" aria-label="Toggle ${ext.name} active">
        <input type="checkbox" ${ext.isActive ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
    </div>
  `;

  // Remover extensão
  card.querySelector('.remove-btn').addEventListener('click', () => {
    extensions = extensions.filter(e => e.id !== ext.id);
    renderExtensions();
  });

  // Alternar ativo/inativo
  card.querySelector('.switch input').addEventListener('change', (e) => {
    ext.isActive = e.target.checked;
    renderExtensions();
  });

  return card;
}

// Filtro
filters.addEventListener('click', e => {
  if (e.target.classList.contains('filter')) {
    filters.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.getAttribute('data-filter');
    renderExtensions();
  }
});