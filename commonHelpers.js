import{S as g,i as c}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(a){const t="https://pixabay.com/api/?",s="43182397-b36e0d0e4f4165f4a1d81192e",o=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}u("cats");const m=document.querySelector(".gallery");function p(a){const t=a.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");m.innerHTML=t,f.refresh()}const f=new g(".gallery a",{captionsData:"alt",captionDelay:250});let i;const d=document.querySelector(".loader"),h=document.querySelector(".form");document.querySelector(".gallery");h.addEventListener("submit",a=>{if(a.preventDefault(),i=a.target.elements.query.value.trim(),!i){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topCenter"});return}y(),u(i).then(t=>{if(t.hits.length===0){l(),c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}else l(),p(t.hits)}).catch(t=>{l()})});function y(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
