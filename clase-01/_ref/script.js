document.addEventListener('DOMContentLoaded', () => {

  // ── Datos del producto ──────────────────────────────────────────
  const product = {
    category:  'Colección Otoño',
    badge:     'Nuevo',
    name:      'Perfume Noir Absolu',
    image:     'https://images.unsplash.com/photo-1541643600914-78b084683702?w=640&q=80',
    imageAlt:  'Perfume Noir Absolu',
    stock:     8,
    stockLow:  10,   // umbral para considerar stock bajo
    price:     1290,
    currency:  '$',
  };

  // ── Renderizar card ─────────────────────────────────────────────
  function renderCard(p) {
    const isLow = p.stock <= p.stockLow;

    const card = document.getElementById('product-card');

    card.innerHTML = `
      <span class="card__badge">${p.badge}</span>

      <div class="card__image-wrap">
        <img
          class="card__image"
          src="${p.image}"
          alt="${p.imageAlt}"
          loading="lazy"
        />
      </div>

      <div class="card__body">
        <p class="card__category">${p.category}</p>
        <h2 class="card__name">${p.name}</h2>

        <div class="card__meta">
          <div class="card__stock">
            <span class="stock-dot ${isLow ? 'low' : ''}"></span>
            <span class="stock-label">Existencias:</span>
            <span class="stock-count">${p.stock} uds.</span>
          </div>
          <div class="card__price">
            <span>${p.currency}</span>${p.price.toLocaleString('es-MX')}
          </div>
        </div>

        <button class="card__btn" id="add-to-cart">
          <span>Agregar al carrito</span>
        </button>
      </div>
    `;

    // ── Evento botón ──────────────────────────────────────────────
    document.getElementById('add-to-cart').addEventListener('click', () => {
      if (p.stock === 0) return;

      p.stock--;
      const btn = document.getElementById('add-to-cart');
      const original = btn.querySelector('span').textContent;

      btn.querySelector('span').textContent = '¡Agregado ✓';
      btn.style.pointerEvents = 'none';

      setTimeout(() => {
        btn.querySelector('span').textContent = original;
        btn.style.pointerEvents = '';
        // Re-renderizar para actualizar stock
        renderCard(p);
      }, 1500);
    });
  }

  renderCard(product);
});
