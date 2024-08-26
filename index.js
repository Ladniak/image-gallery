import{a as y,i as m,S as g}from"./assets/vendor-DOgVoBmD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=s=>`
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
    `;y.defaults.baseURL="https://pixabay.com";const L=(s,t)=>{const o={params:{key:"45500129-782b0efec7a4b6e4cb35c382f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return y.get("/api/",o)},c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),i=document.querySelector("span"),d=document.querySelector(".load-btn");let h=0,u=1,p="";const v=async s=>{try{if(s.preventDefault(),i.classList.remove("is-hidden"),p=l.elements.user_query.value,h=0,u=1,p==""){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",l.reset(),i.classList.add("is-hidden"),d.classList.add("is-hidden");return}const t=await L(p,u);if(t.data.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",l.reset(),i.classList.add("is-hidden"),d.classList.add("is-hidden");return}h+=t.data.hits.length;const o=t.data.hits.map(e=>f(e)).join("");c.innerHTML=o;let a=new g(".gallery a");a.refresh(),a.on("show.simplelightbox",function(){}),d.classList.remove("is-hidden")}catch(t){console.log(t)}finally{i.classList.add("is-hidden")}l.reset()},b=async s=>{try{u++,i.classList.remove("is-hidden");const t=await L(p,u),o=t.data.hits.map(n=>f(n)).join("");c.insertAdjacentHTML("beforeend",o),h+=t.data.hits.length;let a=new g(".gallery a");a.refresh(),a.on("show.simplelightbox",function(){});const r=c.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),h===t.data.totalHits&&(d.classList.add("is-hidden"),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}finally{i.classList.add("is-hidden")}};l.addEventListener("submit",v);d.addEventListener("click",b);
//# sourceMappingURL=index.js.map
