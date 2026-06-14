function rollerItems(items) {
  return items.map((item) => `<span class="roller__item">${item}<span class="roller__dot">&bull;</span></span>`).join('');
}

export function Roller({ items, direction = 'left' }, className = '') {
  const list = rollerItems(items);

  return `
    <div class="roller ${className}" data-roller-direction="${direction}">
      <div class="roller__track roller__track--${direction}">
        <div class="roller__set">${list}</div>
        <div class="roller__set" aria-hidden="true">${list}</div>
      </div>
    </div>
  `;
}
