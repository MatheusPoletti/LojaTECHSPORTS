let selectedProduct = null;
let cart = [];
let currentSlide = 0;

function selectProduct(name, imageFront, imageBack, price) {
  selectedProduct = { name, imageFront, imageBack, price };
  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-image-front').src = imageFront;
  document.getElementById('modal-image-back').src = imageBack;
  document.getElementById('modal-price').textContent = `R$${price}`;
  document.getElementById('size-modal').style.display = 'flex';
  updateCarousel();
}

function closeModal() {
  document.getElementById('size-modal').style.display = 'none';
}

function addToCart() {
  const size = document.querySelector('input[name="size"]:checked')?.value;
  if (!size) {
    alert('Por favor, selecione um tamanho.');
    return;
  }
  cart.push({ ...selectedProduct, size });
  document.getElementById('cart-count').textContent = cart.length;
  closeModal();
}

function showCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - Tamanho: ${item.size}`;
    cartItemsContainer.appendChild(itemElement);
  });
  document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
  document.getElementById('cart-modal').style.display = 'none';
}

function confirmCart() {
  if (cart.length === 0) {
    alert('Seu carrinzho está vazio.');
    return;
  }

  const whatsappNumber = '46999170184'; // Substitua pelo seu número de WhatsApp
  let message = 'Pedido:%0A';
  cart.forEach(item => {
    message += `${item.name} - Tamanho: ${item.size}%0A`;
  });

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
  closeCartModal();
}

document.querySelector('.cart-icon').addEventListener('click', showCart);

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.style.display = (index === currentSlide) ? 'block' : 'none';
  });
}

function prevSlide() {
  currentSlide = (currentSlide === 0) ? 1 : 0;
  updateCarousel();
}

function nextSlide() {
  currentSlide = (currentSlide === 0) ? 1 : 0;
  updateCarousel();
}
