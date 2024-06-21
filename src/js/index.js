// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const buttonElement = document.getElementById('button');
//const printClick = () => {
//  console.log('click');
//};
//buttonElement.addEventListener('click', printClick);

const buttonElement = document.getElementById('button');
const printClick = event => {
  console.log(event);
};

buttonElement.addEventListener('click', printClick);

//Window es quien escucha el evento y no el body o hatml
const viewScroll = event => {
  console.log(event);
};
window.addEventListener('scroll', viewScroll);
