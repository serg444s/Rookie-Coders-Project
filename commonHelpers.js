import{o as f}from"./assets/dark-mode-13953200.js";import{i as y,a as c,b as v}from"./assets/vendor-375581c1.js";function p(){y.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function w(t){return t.map(({author:o,book_image:e,title:n,description:i,_id:s})=>`<li class="books-item-about" id=${s} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}"  alt="${i}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${n}</p>  
    <p class="info-author">${o}</p>  
    </div>  
    </li>`).join("")}async function S(t){return(await Promise.all(t.map(async({list_name:e,books:n})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await w(n)}</ul>
    <button class="book-button" data-js="${e}">See more</button>
    </div>
    `))).join("")}async function L(){const t=document.querySelector(".top-categories-list");try{const o=await c.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await S(o.data);return t.insertAdjacentHTML("beforeend",e),o.data}catch(o){console.log(o.message),p()}}async function E(t){const o=document.querySelector(".top-categories-list");console.log(o),o.innerHTML="";try{const e=await c.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(e);const n=e.data;o.insertAdjacentHTML("afterbegin",await $(t,n))}catch(e){console.log(e.message),p()}}async function $(t,o){return`
  <h3 class="book-categoty-title">${t}</h3>
  <ul class='list-books'>${await C(o)}</ul>`}async function C(t){return console.log(t),t.map(I).join("")}function I({author:t,book_image:o,title:e,description:n,_id:i}){return`<li class="category-item" id=${i}>
    <div class="book-wrap">
    <img class="book-img" src="${o}"  alt="${n}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function m(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await c.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function _(){try{const t=await m(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const n=document.createElement("li");n.classList.add("item-list_category"),n.dataset.category=e.list_name;const i=document.createElement("a");i.textContent=e.list_name,i.href=`#${e.list_name}`,i.classList.add("link_category-book"),n.appendChild(i),o.appendChild(n),n.addEventListener("click",async()=>{const s=n.dataset.category;await E(s)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",_);const M=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img1x:"../img/support/save-the-children@1x-min.png",img2x:"../img/support/save-the-children@2x-min.png",img3x:"../img/support/save-the-children@3x-min.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img1x:"../img/support/project-hope@1x-min.png",img2x:"../img/support/project-hope@2x-min.png",img3x:"../img/support/project-hope@3x-min.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img1x:"../img/support/united24@1x-min.png",img2x:"../img/support/united24@2x-min.png",img3x:"../img/support/united24@3x-min.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img1x:"../img/support/international-medical-corps@1x-min.png",img2x:"../img/support/international-medical-corps@2x-min.png",img3x:"../img/support/international-medical-corps@3x-min.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img1x:"../img/support/medicins-sans-frontieres@1x-min.png",img2x:"../img/support/medicins-sans-frontieres@2x-min.png",img3x:"../img/support/medicins-sans-frontieres@3x-min.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img1x:"../img/support/razom@1x-min.png",img2x:"../img/support/razom@2x-min.png",img3x:"../img/support/razom@3x-min.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img1x:"../img/support/action-against-hunger@1x-min.png",img2x:"../img/support/action-against-hunger@2x-min.png",img3x:"../img/support/action-against-hunger@3x-min.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img1x:"../img/support/world-vision@1x-min.png",img2x:"../img/support/world-vision@2x-min.png",img3x:"../img/support/world-vision@3x-min.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img1x:"../img/support/serhiy-prytula-charity-foundation@1x-min.png",img2x:"../img/support/serhiy-prytula-charity-foundation@2x-min.png",img3x:"../img/support/serhiy-prytula-charity-foundation@3x-min.png"}],O=document.querySelector(".supporters_list");M.forEach(function(t,o){const e=document.createElement("li");e.className="support_line";const n=document.createElement("span");n.className="supporters__number",n.textContent=(o+1).toString().padStart(2,"0"),e.appendChild(n);const i=document.createElement("a");i.href=t.url,i.title=t.title,i.target="_blank",i.rel="noopener noreferrer nofollow",i.setAttribute("aria-label","Link to support fond");const s=document.createElement("img");s.src=t.img1x,s.srcset=`${t.img1x} 1x, ${t.img2x} 2x, ${t.img3x} 3x`,s.className="supporters__img",s.alt=t.title+" logo",i.appendChild(s),e.appendChild(i),O.appendChild(e)});function T(t){const o=JSON.parse(localStorage.getItem("books"))||[];o.push(t),localStorage.setItem("books",JSON.stringify(o))}function j(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(n=>n===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}const g=document.querySelector(".top-categories-list"),A=document.querySelector(".modal-icon"),N=document.querySelector(".backdrop"),r=document.querySelector(".modal-btn"),q=document.querySelector(".modal-congrat-text");g.addEventListener("click",u);let a;function u(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=+t.target.closest("li").dataset._id,n=g.find(b=>b._id===e),{book_image:i,title:s,author:d,description:h,buy_links:{url:k,name:x}}=n;a=v.create(`
        <div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${i}" width="330" height="485"/>
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${d}</p> 
        <p class="modal-text">${h}</p>
        <ul>
        <li class="modal-link"><a href="${buy_links[k]}">${buy_links[x]}</a></li>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",l),r.addEventListener("click",P)},onClose:()=>{document.removeEventListener("keydown",l),A.addEventListener("click",B),N.addEventListener("click",D)}}),a.show()}function l(t){t.preventDefault(),t.code==="Escape"&&a.close()}function B(t){t.preventDefault(),a.close()}function D(t){t.preventDefault(),a.close()}function P(t){t.preventDefault(),r.textContent="REMOVE FROM THE SHOPPING LIST",q.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',T(),r.addEventListener("click",()=>{j()})}const H=document.querySelector(".top-categories-list");m();document.addEventListener("DOMContentLoaded",f);H.addEventListener("click",u);L();
//# sourceMappingURL=commonHelpers.js.map
