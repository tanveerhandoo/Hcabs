window.addEventListener('load', () => {
document.getElementById('loader').style.display='none';
});

const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');

menuBtn.addEventListener('click',()=>{
navLinks.classList.toggle('active');
});

const cards=document.querySelectorAll('.car-card');
const fareAmount=document.getElementById('fareAmount');

cards.forEach(card=>{
card.addEventListener('click',()=>{

cards.forEach(c=>c.classList.remove('active'));

card.classList.add('active');

fareAmount.textContent=card.dataset.price;
});
});

const bookingForm=document.getElementById('bookingForm');

bookingForm.addEventListener('submit',(e)=>{
e.preventDefault();

const name=document.getElementById('name').value;
const phone=document.getElementById('phone').value;
const pickup=document.getElementById('pickup').value;
const destination=document.getElementById('destination').value;

const message=`Luxury Cab Booking
Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Destination: ${destination}
Estimated Fare: ₹${fareAmount.textContent}`;

const whatsappURL=`https://wa.me/917006462571?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,'_blank');
});

window.addEventListener('scroll',()=>{

const navbar=document.querySelector('.navbar');

if(window.scrollY>50){
navbar.style.background='rgba(0,0,0,0.92)';
}else{
navbar.style.background='rgba(0,0,0,0.55)';
}
});
