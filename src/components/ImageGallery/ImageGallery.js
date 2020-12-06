import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ hits }) {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          webformatURL={hit.webformatURL}
          title={hit.tags}
        />
      ))}
    </ul>
  );
}
