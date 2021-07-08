const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryEl: document.querySelector('.gallery'),
  lightboxEl: document.querySelector('.lightbox'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  closeButtonEl: document.querySelector('[data-action="close-lightbox"]'),
};

galleryItems.map(image => {
  const imageEl = document.createElement('img');
  imageEl.setAttribute('class', 'gallery__image');
  imageEl.setAttribute('src', image.preview);
  imageEl.setAttribute('data-source', image.original);
  imageEl.setAttribute('alt', image.description);

  const linkImageEl = document.createElement('a');
  linkImageEl.setAttribute('class', 'gallery__link');
  linkImageEl.setAttribute('href', image.original);
  linkImageEl.appendChild(imageEl);

  const itemImageEl = document.createElement('li');
  itemImageEl.setAttribute('class', 'gallery__item');
  itemImageEl.appendChild(linkImageEl);

  refs.galleryEl.appendChild(itemImageEl);
});

refs.galleryEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  };

  refs.lightboxEl.classList.add('is-open');
  refs.lightboxImageEl.src = e.target.dataset.source;
  refs.lightboxImageEl.alt = e.target.alt;
});

refs.closeButtonEl.addEventListener('click', onCloseModal)

function onCloseModal() {
  refs.lightboxEl.classList.remove('is-open');
  refs.lightboxImageEl.src = '';
  refs.lightboxImageEl.alt = '';
};

refs.lightboxOverlayEl.addEventListener('click', onLightboxOverlayClose);

function onLightboxOverlayClose(e) {
  if (e.target.className !== 'lightbox__overlay') {
    return;
  };
  onCloseModal();
};

window.addEventListener('keydown', onEscCloseModal)

function onEscCloseModal(e) {
  if (e.code !== 'Escape') {
    return;
  }
  onCloseModal()
}