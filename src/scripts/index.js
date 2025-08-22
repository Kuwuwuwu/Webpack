import '../styles/main.scss';
console.log('Webpack працює!');
import logo from '../assets/images/image.png';
import '../styles/main.scss';
import '../styles/theme.less';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);
