import '../styles/main.scss';
console.log('Webpack працює!');
import logo from '../assets/images/image.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);
