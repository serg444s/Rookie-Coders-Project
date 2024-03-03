const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img1x: '../img/support/save-the-children@1x-min.png',
    img2x: '../img/support/save-the-children@2x-min.png',
    img3x: '../img/support/save-the-children@3x-min.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img1x: '../img/support/project-hope@1x-min.png',
    img2x: '../img/support/project-hope@2x-min.png',
    img3x: '../img/support/project-hope@3x-min.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img1x: '../img/support/united24@1x-min.png',
    img2x: '../img/support/united24@2x-min.png',
    img3x: '../img/support/united24@3x-min.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img1x: '../img/support/international-medical-corps@1x-min.png',
    img2x: '../img/support/international-medical-corps@2x-min.png',
    img3x: '../img/support/international-medical-corps@3x-min.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img1x: '../img/support/medicins-sans-frontieres@1x-min.png',
    img2x: '../img/support/medicins-sans-frontieres@2x-min.png',
    img3x: '../img/support/medicins-sans-frontieres@3x-min.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img1x: '../img/support/razom@1x-min.png',
    img2x: '../img/support/razom@2x-min.png',
    img3x: '../img/support/razom@3x-min.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img1x: '../img/support/action-against-hunger@1x-min.png',
    img2x: '../img/support/action-against-hunger@2x-min.png',
    img3x: '../img/support/action-against-hunger@3x-min.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img1x: '../img/support/world-vision@1x-min.png',
    img2x: '../img/support/world-vision@2x-min.png',
    img3x: '../img/support/world-vision@3x-min.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img1x: '../img/support/serhiy-prytula-charity-foundation@1x-min.png',
    img2x: '../img/support/serhiy-prytula-charity-foundation@2x-min.png',
    img3x: '../img/support/serhiy-prytula-charity-foundation@3x-min.png',
  },
];
export { charities };
const ul = document.querySelector('.supporters_list');

charities.forEach(function (charity, index) {
  const li = document.createElement('li');
  li.className = 'support_line';

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
  ul.appendChild(li);
});

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
// import Swiper from 'swiper';
// const swiper = new Swiper('.swiper',  {
//   speed: 400,
//   spaceBetween: 100,
// });
// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();
