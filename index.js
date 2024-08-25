import{a as m,i as h,S as f}from"./assets/vendor-CZwys2ms.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y=s=>`
    <li class="gallery-card">
        <a href="${s.largeImageURL}">
            <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class="info-div">
            <div class="info-one-template">
                <p class="name">Likes</p>
                <p>${s.likes}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Views</p>
                <p>${s.views}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Comments</p>
                <p>${s.comments}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Downloads</p>
                <p>${s.downloads}</p>
            </div>
        </div>
    </li>
    `;m.defaults.baseURL="https://pixabay.com";const g=(s,t)=>{const i={params:{key:"45500129-782b0efec7a4b6e4cb35c382f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return m.get("/api/",i)},d=document.querySelector(".gallery"),n=document.querySelector(".search-form"),o=document.querySelector("span"),l=document.querySelector(".load-btn");let c=1,p="";const L=async s=>{try{if(s.preventDefault(),o.classList.remove("is-hidden"),p=n.elements.user_query.value,c=1,p==""){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",n.reset(),o.classList.add("is-hidden"),l.classList.add("is-hidden");return}const t=await g(p,c);if(t.data.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",n.reset(),o.classList.add("is-hidden"),l.classList.add("is-hidden");return}const i=t.data.hits.map(e=>y(e)).join("");d.innerHTML=i;let a=new f(".gallery a");a.refresh(),a.on("show.simplelightbox",function(){}),l.classList.remove("is-hidden")}catch(t){console.log(t)}finally{o.classList.add("is-hidden")}n.reset()},v=async s=>{try{c++,o.classList.remove("is-hidden");const t=await g(p,c),i=t.data.hits.map(e=>y(e)).join("");d.insertAdjacentHTML("beforeend",i);let a=new f(".gallery a");a.refresh(),a.on("show.simplelightbox",function(){}),c===t.data.hits.totalHits&&(l.classList.add("is-hidden"),h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}finally{o.classList.add("is-hidden")}};n.addEventListener("submit",L);l.addEventListener("click",v);
//# sourceMappingURL=index.js.map
