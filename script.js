
const bookingForm = document.getElementById('bookingForm');
const bookingTable = document.getElementById('bookingTable');
const message = document.getElementById('message');

let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

function renderBookings(){
  bookingTable.innerHTML = '';

  bookings.forEach(booking => {
    bookingTable.innerHTML += `
      <tr>
        <td>${booking.name}</td>
        <td>${booking.pickup}</td>
        <td>${booking.destination}</td>
        <td>${booking.vehicle}</td>
        <td>${booking.date}</td>
      </tr>
    `;
  });
}

renderBookings();

bookingForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const booking = {
    name: document.getElementById('name').value,
    pickup: document.getElementById('pickup').value,
    destination: document.getElementById('destination').value,
    vehicle: document.getElementById('vehicle').value,
    date: document.getElementById('date').value
  };

  bookings.push(booking);

  localStorage.setItem('bookings', JSON.stringify(bookings));

  renderBookings();

  message.innerHTML = '✅ Booking Added Successfully';

  bookingForm.reset();
});

window.addEventListener('scroll', ()=>{
  const nav = document.querySelector('nav');

  if(window.scrollY > 50){
    nav.style.background = 'rgba(0,0,0,0.9)';
  }else{
    nav.style.background = 'rgba(0,0,0,0.5)';
  }
});
