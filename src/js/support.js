// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img1x: '../img/support/save-the-children1x.png',
    img2x: '../img/support/save-the-children2x.png',
    img3x: '../img/support/save-the-children3x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img1x: '../img/support/project-hope1x.png',
    img2x: '../img/support/project-hope2x.png',
    img3x: '../img/support/project-hope3x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img1x: '../img/support/united241x.png',
    img2x: '../img/support/united242x.png',
    img3x: '../img/support/united243x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img1x: '../img/support/international-medical-corps1x.png',
    img2x: '../img/support/international-medical-corps2x.png',
    img3x: '../img/support/international-medical-corps3x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img1x: '../img/support/medicins-sans-frontieres1x.png',
    img2x: '../img/support/medicins-sans-frontieres2x.png',
    img3x: '../img/support/medicins-sans-frontieres3x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img1x: '../img/support/razom1x.png',
    img2x: '../img/support/razom2x.png',
    img3x: '../img/support/razom3x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img1x: '../img/support/action-against-hunger1x.png',
    img2x: '../img/support/action-against-hunger2x.png',
    img3x: '../img/support/action-against-hunger3x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img1x: '../img/support/world-vision1x.png',
    img2x: '../img/support/world-vision2x.png',
    img3x: '../img/support/world-vision3x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img1x: '../img/support/serhiy-prytula-charity-foundation1x.png',
    img2x: '../img/support/serhiy-prytula-charity-foundation2x.png',
    img3x: '../img/support/serhiy-prytula-charity-foundation3x.png',
  },
];


// export { charities };
const ul = document.querySelector('.supporters_list');


const ul = document.querySelector('.supporters_list');
console.log(ul);
charities.forEach(function (charity, index) {
  const div = document.createElement('div'); // Створення нового div
  div.className = 'support_line_container'; // Додавання класу до нового div

  const li = document.createElement('li');
  li.className = 'support_line ';

  const span = document.createElement('span');
  span.className = 'supporters__number';
  span.textContent = (index + 1).toString().padStart(2, '0');
  li.appendChild(span);

  const a = document.createElement('a');
  a.href = charity.url;
  a.title = charity.title;
  a.target = '_blank';
  a.rel = 'noopener noreferrer nofollow';
  a.setAttribute('aria-label', 'Link to support fond');

  const img = document.createElement('img');
  img.src = charity.img1x;
  img.srcset = `${charity.img1x} 1x, ${charity.img2x} 2x, ${charity.img3x} 3x`;
  img.className = 'supporters__img';
  img.alt = charity.title + ' logo';
  a.appendChild(img);

  li.appendChild(a);
  div.appendChild(li); // Додавання li в div
  ul.appendChild(div); // Додавання div в ul
});

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,
//   slidesPerView: 6,
//   effect: 'slide',

//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
// });

//////////////////////////////////////////////////////////////
let isNext = false; // Змінна для визначення напрямку прокручування слайдера

const btn = document.querySelector('.supporters__btn');
btn.addEventListener('click', () => {
  if (!isNext) {
    swiper.slideTo(8, 0); // Показати 9 організацію
  } else {
    swiper.slideTo(5, 0); // Показати 4 організацію
  }

  isNext = !isNext; // Змінити напрямок прокручування на протилежний
});
