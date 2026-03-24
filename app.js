(function () {
  const container = document.getElementById('menu-items');
  if (!container) return;

  const key = document.body.dataset.section;
  const section = MENU_DATA[key];
  const titleEl = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');
  const noteEl = document.getElementById('page-note');
  const heroTag = document.getElementById('section-tag');

  if (!section) {
    if (titleEl) titleEl.textContent = 'Menu';
    if (subtitleEl) subtitleEl.textContent = 'Section not found.';
    return;
  }

  document.title = `${section.title} | Shmagh & Kufiya`;
  if (titleEl) titleEl.textContent = section.title;
  if (subtitleEl) subtitleEl.textContent = section.subtitle;
  if (noteEl) noteEl.textContent = section.note || '';
  if (heroTag) heroTag.textContent = `Shmagh & Kufiya • ${section.title}`;

  container.innerHTML = section.items.map(item => `
    <article class="menu-item">
      <div class="item-top">
        <h3 class="item-name">${item.name}</h3>
        <div class="item-price">${item.price}</div>
      </div>
      <p class="item-desc">${item.desc}</p>
    </article>
  `).join('');
})();
