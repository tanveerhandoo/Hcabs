const fareAmount = document.getElementById('fareAmount');
const carCards = document.querySelectorAll('.car-card');

let selectedFare = 4500;

carCards.forEach(card => {
  card.addEventListener('click', () => {
    carCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    selectedFare = parseInt(card.dataset.price);
    fareAmount.textContent = selectedFare;
  });
});

const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const whatsappMessage = `Luxury Booking - Name: ${name}, Phone: ${phone}`;
  const whatsappURL = `https://wa.me/917006462571?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank');
});
