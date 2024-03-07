import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import children1x from '../img/support/save-the-children1x.png';
import children2x from '../img/support/save-the-children2x.png';
import children3x from '../img/support/save-the-children3x.png';
import hope1x from '../img/support/project-hope1x.png';
import hope2x from '../img/support/project-hope2x.png';
import hope3x from '../img/support/project-hope3x.png';
import corps1x from '../img/support/international-medical-corps1x.png';
import corps2x from '../img/support/international-medical-corps2x.png';
import corps3x from '../img/support/international-medical-corps3x.png';
import razom1x from '../img/support/razom1x.png';
import razom2x from '../img/support/razom2x.png';
import razom3x from '../img/support/razom3x.png';
import hunger1x from '../img/support/action-against-hunger1x.png';
import hunger2x from '../img/support/action-against-hunger2x.png';
import hunger3x from '../img/support/action-against-hunger3x.png';
import foundation1x from '../img/support/serhiy-prytula-charity-foundation1x.png';
import foundation2x from '../img/support/serhiy-prytula-charity-foundation2x.png';
import foundation3x from '../img/support/serhiy-prytula-charity-foundation3x.png';
import frontieres1x from '../img/support/medicins-sans-frontieres1x.png';
import frontieres2x from '../img/support/medicins-sans-frontieres2x.png';
import frontieres3x from '../img/support/medicins-sans-frontieres3x.png';
import vision1x from '../img/support/world-vision1x.png';
import vision2x from '../img/support/world-vision2x.png';
import vision3x from '../img/support/world-vision3x.png';
import united241x from '../img/support/united241x.png';
import united242x from '../img/support/united242x.png';
import united243x from '../img/support/united243x.png';

export const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img1x: `${children1x}`,
    img2x: `${children2x}`,
    img3x: `${children3x}`,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img1x: `${hope1x}`,
    img2x: `${hope2x}`,
    img3x: `${hope3x}`,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img1x: `${corps1x}`,
    img2x: `${corps2x}`,
    img3x: `${corps3x}`,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img1x: `${razom1x}`,
    img2x: `${razom2x}`,
    img3x: `${razom3x}`,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img1x: `${hunger1x}`,
    img2x: `${hunger2x}`,
    img3x: `${hunger3x}`,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img1x: `${foundation1x}`,
    img2x: `${foundation2x}`,
    img3x: `${foundation3x}`,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img1x: `${frontieres1x}`,
    img2x: `${frontieres2x}`,
    img3x: `${frontieres3x}`,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img1x: `${vision1x}`,
    img2x: `${vision2x}`,
    img3x: `${vision3x}`,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img1x: `${united241x}`,
    img2x: `${united242x}`,
    img3x: `${united243x}`,
  },
];

const ul = document.querySelector('.supporters_list');

charities.forEach(function (charity, index) {
  const li = document.createElement('li');
  li.className = 'support_line swiper-slide';

  const container = document.createElement('div');
  container.className = 'support_line_container';

  const span = document.createElement('span');
  span.className = 'supporters__number';
  span.textContent = (index + 1).toString().padStart(2, '0');
  container.appendChild(span);

  const a = document.createElement('a');
  a.className = 'support_link';
  a.href = charity.url;
  a.title = charity.title;
  a.target = '_blank';
  a.rel = 'noopener noreferrer nofollow';
  a.setAttribute('aria-label', 'Link to support fond');

  const img = document.createElement('img');
  img.src = charity.img1x;
  img.srcset = `${charity.img1x} 1x, ${charity.img2x} 2x, ${charity.img3x} 3x`;
  img.className = 'supporters__img';
  img.alt = `${charity.title} logo`;
  a.appendChild(img);

  container.appendChild(a);
  li.appendChild(container);
  ul.appendChild(li);
});

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  slidesPerView: 6,
  effect: 'slide',
});

let isNext = false;

const btn = document.querySelector('.supporters__btn');
const svgIcon = document.querySelector('.supporters__btn-icon');

btn.addEventListener('click', () => {
  swiper.slideTo(isNext ? 0 : 6, 100);

  svgIcon.style.transform = isNext ? '' : 'rotate(180deg)';

  isNext = !isNext;
});
