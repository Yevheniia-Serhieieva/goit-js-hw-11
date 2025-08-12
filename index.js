import{a as c,S as u,i}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=c.create({baseURL:"https://pixabay.com/api/",params:{key:"51736098-e561806c369733f177830f298",q:"query",image_type:"photo",orientation:"horizontal",safesearch:!0}});function y(s){return d.get("").then(t=>t.data)}let n=document.querySelector(".gallery"),f=new u(".gallery a");function m(s){const t=s.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
            />
            <div class = "gallery-box">
            <p class="gallery-box-text">Likes "${r.likes}"</p>
            <p class="gallery-box-text">Views "${r.views}"</p>
            <p class="gallery-box-text">Comments "${r.comments}"</p>
            <p class="gallery-box-text">Downloads "${r.downloads}"</p>
            </div>
            </a>
            </li>`).join("");n.insertAdjacentHTML("beforeend",t),f.refresh()}function g(){n.innerHTML=""}function p(){document.querySelector(".loader").classList.add("is-hidden")}function h(){document.querySelector(".loader").classList.remove("is-hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchText.value.trim();if(!(t===""||t===" ")){g(),p();try{const r=y(t);r.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):m(r.hits)}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{h()}}});
//# sourceMappingURL=index.js.map
