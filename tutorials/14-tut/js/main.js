const itemForm = document.getElementById('itemForm');
const cardsContainer = document.getElementById('cards');
const scrollToForm = document.getElementById('scrollToForm');
const resetBtn = document.getElementById('resetBtn');
const imageUrlInput = document.getElementById('imageUrl');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');

let items = [
  {
    id: 1,
    link: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    category: 'Breakfast',
    description: 'A cozy brunch-style food card with warm tones and inviting textures.'
  },
  {
    id: 2,
    link: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    category: 'Dinner',
    description: 'A warm food card featuring a social dining setup for family meals.'
  }
];

function normalizeUrl(value) {
  const url = value.trim();
  if (!url) return '';
  if (url.startsWith('//')) return `https:${url}`;
  if (url.startsWith('www.')) return `https://${url}`;
  if (!/^https?:\/\//i.test(url)) return `https://${url}`;
  return url;
}

function renderItems() {
  if (items.length === 0) {
    cardsContainer.innerHTML = '<p class="empty-state">No items yet. Add a new card to begin.</p>';
    return;
  }

  cardsContainer.innerHTML = items
    .map(item => {
      return `
      <article class="card" data-id="${item.id}">
        <div class="image-wrap">
          <img src="${item.link}" alt="${item.category}" onerror="this.src='https://via.placeholder.com/800x450/ffd8c2/59382f?text=Image+not+found'" />
        </div>
        <div class="card-content">
          <p class="card-category">${item.category}</p>
          <p class="card-description">${item.description}</p>
          <div class="card-actions">
            <button type="button" class="action-btn delete-btn" data-id="${item.id}">Delete</button>
          </div>
        </div>
      </article>
    `;
    })
    .join('');
}

function resetForm() {
  itemForm.reset();
}

function handleSubmit(event) {
  event.preventDefault();
  const newItem = {
    id: Date.now(),
    link: normalizeUrl(imageUrlInput.value),
    category: categoryInput.value.trim(),
    description: descriptionInput.value.trim()
  };

  if (!newItem.link || !newItem.category || !newItem.description) {
    return;
  }

  items.unshift(newItem);
  renderItems();
  resetForm();
}

function handleClick(event) {
  const deleteButton = event.target.closest('.delete-btn');
  if (deleteButton) {
    const id = Number(deleteButton.dataset.id);
    items = items.filter(entry => entry.id !== id);
    renderItems();
  }
}

itemForm.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', resetForm);
cardsContainer.addEventListener('click', handleClick);
scrollToForm.addEventListener('click', () => {
  window.scrollTo({ top: itemForm.offsetTop - 80, behavior: 'smooth' });
});

renderItems();
