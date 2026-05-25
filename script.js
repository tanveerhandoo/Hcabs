const bookingForm = document.getElementById('bookingForm');
const message = document.getElementById('message');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const destination = document.getElementById('destination').value;
  const vehicle = document.getElementById('vehicle').value;
  const date = document.getElementById('date').value;
  const extraMessage = document.getElementById('messageBox').value;

  const whatsappMessage = `🚖 *New Cab Booking* %0A%0A` +
    `👤 Name: ${name}%0A` +
    `📞 Phone: ${phone}%0A` +
    `📍 Pickup: ${pickup}%0A` +
    `🏁 Destination: ${destination}%0A` +
    `🚘 Vehicle: ${vehicle}%0A` +
    `📅 Date: ${date}%0A` +
    `📝 Extra Details: ${extraMessage}`;

  const whatsappURL = `https://wa.me/917006462571?text=${whatsappMessage}`;

  message.innerHTML = '✅ Redirecting to WhatsApp...';

  window.open(whatsappURL, '_blank');

  bookingForm.reset();
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0,0,0,0.9)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.5)';
  }
});
