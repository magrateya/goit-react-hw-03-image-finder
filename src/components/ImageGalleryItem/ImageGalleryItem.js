import React from 'react';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, type }) {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={type} className={s.ImageGalleryItemImage} />
    </li>
  );
}
