// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { createGalleryCard } from "./js/render-functions";
import { fetchPhotos } from "./js/pixabay-api";

const galleryEl = document.querySelector('.gallery');
const formElSearch = document.querySelector('.search-form'); 
const loadEl = document.querySelector('span');
const loadBtn = document.querySelector('.load-btn');


let numOfEl = 0;
let currentPage = 1;
let searchFromInput = '';

const onSearchSubmit = async (event) => {

    try {
        event.preventDefault();
        loadEl.classList.remove("is-hidden");

        searchFromInput = formElSearch.elements.user_query.value;

        numOfEl = 0;
        currentPage = 1;

        if (searchFromInput == '') {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })

            galleryEl.innerHTML = '';
            formElSearch.reset();
            loadEl.classList.add("is-hidden");
            loadBtn.classList.add("is-hidden");

            return;
        }

        const response = await fetchPhotos(searchFromInput, currentPage);

        if (response.data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })

            galleryEl.innerHTML = '';
            formElSearch.reset();
            loadEl.classList.add("is-hidden");
            loadBtn.classList.add("is-hidden");

            return;
        }

        numOfEl += response.data.hits.length;
        
        const galleryCardTemplate = response.data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');
        
        galleryEl.innerHTML = galleryCardTemplate;

        let gallery = new SimpleLightbox('.gallery a');
        gallery.refresh();
        gallery.on('show.simplelightbox', function () { });    
        
        loadBtn.classList.remove('is-hidden');
    } catch (error) {
        console.log(error);
    } finally {
        loadEl.classList.add("is-hidden");
    };
    
    formElSearch.reset();
};

const onBtnClick = async event => {
    try {
        currentPage++;
        loadEl.classList.remove("is-hidden");

        const response = await fetchPhotos(searchFromInput, currentPage);
        const galleryCardTemplate = response.data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');
        galleryEl.insertAdjacentHTML('beforeend', galleryCardTemplate);

        numOfEl += response.data.hits.length;

        let gallery = new SimpleLightbox('.gallery a');
        gallery.refresh();
        gallery.on('show.simplelightbox', function () { });    

        const galleryCardEl = galleryEl.querySelector('.gallery-card');
        const cardHeight = galleryCardEl.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });

        if (numOfEl === response.data.totalHits) {
            loadBtn.classList.add('is-hidden');
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            })
        }
    } catch (error) {
        console.log(error);
    } finally {
        loadEl.classList.add("is-hidden");
    }
};

formElSearch.addEventListener('submit', onSearchSubmit);
loadBtn.addEventListener('click', onBtnClick);
