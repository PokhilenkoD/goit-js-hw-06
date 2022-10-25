const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const arrayElements = [];

for (let i = 0; i < images.length; i += 1) {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');

  imgEl.src = images[i].url;
  imgEl.alt = images[i].alt;

  itemEl.classList.add('gallery__item');
  imgEl.classList.add('gallery__img');

  itemEl.append(imgEl);
  arrayElements.push(itemEl);
}

galleryEl.append(...arrayElements);
