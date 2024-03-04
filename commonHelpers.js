import{o as g,a as w}from"./assets/dark-mode-1bf0219b.js";import{S as v,a as c,b as L}from"./assets/vendor-9b4a9007.js";const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img1x:"../img/support/save-the-children1x.png",img2x:"../img/support/save-the-children2x.png",img3x:"../img/support/save-the-children3x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img1x:"../img/support/project-hope1x.png",img2x:"../img/support/project-hope2x.png",img3x:"../img/support/project-hope3x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img1x:"../img/support/united241x.png",img2x:"../img/support/united242x.png",img3x:"../img/support/united243x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img1x:"../img/support/international-medical-corps1x.png",img2x:"../img/support/international-medical-corps2x.png",img3x:"../img/support/international-medical-corps3x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img1x:"../img/support/medicins-sans-frontieres1x.png",img2x:"../img/support/medicins-sans-frontieres2x.png",img3x:"../img/support/medicins-sans-frontieres3x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img1x:"../img/support/razom1x.png",img2x:"../img/support/razom2x.png",img3x:"../img/support/razom3x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img1x:"../img/support/action-against-hunger1x.png",img2x:"../img/support/action-against-hunger2x.png",img3x:"../img/support/action-against-hunger3x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img1x:"../img/support/world-vision1x.png",img2x:"../img/support/world-vision2x.png",img3x:"../img/support/world-vision3x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img1x:"../img/support/serhiy-prytula-charity-foundation1x.png",img2x:"../img/support/serhiy-prytula-charity-foundation2x.png",img3x:"../img/support/serhiy-prytula-charity-foundation3x.png"}],$=document.querySelector(".supporters_list");S.forEach(function(t,e){const o=document.createElement("li");o.className="support_line swiper-slide";const n=document.createElement("div");n.className="support_line_container";const s=document.createElement("span");s.className="supporters__number",s.textContent=(e+1).toString().padStart(2,"0"),n.appendChild(s);const a=document.createElement("a");a.className="support_link",a.href=t.url,a.title=t.title,a.target="_blank",a.rel="noopener noreferrer nofollow",a.setAttribute("aria-label","Link to support fond");const i=document.createElement("img");i.src=t.img1x,i.srcset=`${t.img1x} 1x, ${t.img2x} 2x, ${t.img3x} 3x`,i.className="supporters__img",i.alt=t.title+" logo",a.appendChild(i),n.appendChild(a),o.appendChild(n),$.appendChild(o)});const E=new v(".swiper",{direction:"vertical",loop:!0,slidesPerView:6,effect:"slide"});let r=!1;const _=document.querySelector(".supporters__btn"),C=document.querySelector(".supporters__btn-icon");_.addEventListener("click",()=>{E.slideTo(r?0:6,100),C.style.transform=r?"":"rotate(180deg)",r=!r});async function l(t){return t.map(({author:e,book_image:o,title:n,description:s,_id:a})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${o}" data-id="${a}"  alt="${s}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${n}</p>  
    <p class="info-author">${e}</p>  
    </div>  
    </li>`).join("")}async function M(t){return d()<768?l(t.slice(0,1)):d()<1439?l(await t.slice(0,3)):l(t)}function d(){return window.innerWidth}async function q(t){return(await Promise.all(t.map(async({list_name:o,books:n})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await M(n)}</ul>
    <button class="book-button" data-category="${o}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const e=t.target.dataset.category;await m(e)}});async function B(){const t=document.querySelector(".top-categories-list");try{const e=await c.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const o=await q(e.data);return t.insertAdjacentHTML("beforeend",o),e.data}catch(e){console.log(e.message),g()}}async function m(t){const e=document.querySelector(".top-categories-list");console.log(e),e.innerHTML="";try{const o=await c.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(o);const n=o.data;e.insertAdjacentHTML("afterbegin",await I(t,n))}catch(o){console.log(o.message),g()}}async function I(t,e){return`
  <h3 class="book-categoty-title">${t}</h3>
  <ul class='list-books'>${await j(e)}</ul>`}async function j(t){return console.log(t),t.map(A).join("")}function A({author:t,book_image:e,title:o,description:n,_id:s}){return`<li class="category-item" id=${s}>
    <div class="book-wrap">
    <img class="book-img" src="${e}"  alt="${n}" data-id="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${o}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function h(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await c.get(t)).data}catch(e){console.error("Error fetching books:",e)}}async function D(){try{const t=await h(),e=document.querySelector(".categories-list_books");t.forEach(o=>{const n=document.createElement("li");n.classList.add("item-list_category"),n.dataset.category=o.list_name;const s=document.createElement("a");s.textContent=o.list_name,s.href=`#${o.list_name}`,s.classList.add("link_category-book"),n.appendChild(s),e.appendChild(n),n.addEventListener("click",async()=>{const a=n.dataset.category;await m(a)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",D);const y=document.querySelector('[data-action="open-modal"]'),k=document.querySelector('[data-action="close-modal"]'),b=document.querySelector("body");function N(){document.body.classList.add("show-modal"),k.style.display="flex",y.style.display="none",b.style.overflow="hidden"}function O(){document.body.classList.remove("show-modal"),k.style.display="none",y.style.display="flex",b.style.overflow="auto"}async function P(t){const e=`https://books-backend.p.goit.global/books/${t}`;return(await c.get(e)).data}const T=document.querySelector(".top-categories-list");document.querySelector(".modal-icon");document.querySelector(".backdrop");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");T.addEventListener("click",x);let p;async function x(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=t.target.dataset.id,o=await P(e),{book_image:n,title:s,author:a,description:i,amazon_product_url:f}=o;p=L.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${n}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${a}</p> 
        <p class="modal-text">${i}</p>
        <ul><li class="modal-link"><a href="${f}">Amazon
        </a></li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",u)},onClose:()=>{document.removeEventListener("keydown",u)}}),p.show()}function u(t){t.preventDefault(),t.code==="Escape"&&p.close()}const z=document.querySelector(".top-categories-list"),H=document.querySelector('[data-action="open-modal"]'),R=document.querySelector('[data-action="close-modal"]');h();document.addEventListener("DOMContentLoaded",w);z.addEventListener("click",x);B();H.addEventListener("click",N);R.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
