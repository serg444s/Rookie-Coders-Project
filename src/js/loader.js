export function loaderOn(element) {
  element.classList.add('loader');
}

export function loaderOff(element) {
  element.classList.remove('loader');
}

//використання
/*

HTML
створити div для лодера і задати йому id
<div id="your-id"></div>

JS
import { loaderOn, loaderOff } from './loader';
const yourLoader = document.querySelector('#your-id');
loaderOn(yourLoader);
loaderOff(yourLoader);


*/
