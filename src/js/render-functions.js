import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



let galleryElem = document.querySelector('.gallery');
let lightbox = new SimpleLightbox(".gallery a");


export function createGallery(images) {
    const markup = images
        .map((image) => 
            `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
            />
            <div class = "gallery-box">
            <p class="gallery-box-text">Likes "${image.likes}"</p>
            <p class="gallery-box-text">Views "${image.views}"</p>
            <p class="gallery-box-text">Comments "${image.comments}"</p>
            <p class="gallery-box-text">Downloads "${image.downloads}"</p>
            </div>
            </a>
            </li>`
        )
        .join('');

    galleryElem.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}



export function clearGallery() {
    galleryElem.innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.add('is-hidden');
}

export function hideLoader() {
    document.querySelector('.loader').classList.remove('is-hidden');
}