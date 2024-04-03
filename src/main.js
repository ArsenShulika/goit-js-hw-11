'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

let query;
const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  if (!query) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      messageColor: 'white',
      position: 'topCenter',
    });
    return;
  }
  showLoader();

  getImages(query)
    .then(obj => {
      if (obj.hits.length === 0) {
        hideLoader();
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
        return;
      } else {
        hideLoader();
        renderGallery(obj.hits);
      }
    })
    .catch(error => {
      hideLoader();
    });
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
