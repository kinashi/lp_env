import velocity from 'velocity-animate';

window.onload = () => {
  const header = document.getElementById('header');
  header.style.opacity = 0

  velocity(header, {opacity: 100}, {duration: 500});
}
