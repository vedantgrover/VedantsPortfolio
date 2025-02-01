import { useState, useEffect } from 'react';

const useImageLoading = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    // If there are no images, consider them "loaded"
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded); // Count errors as loaded to prevent eternal loading
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
    };
  }, []);

  return imagesLoaded;
};

export default useImageLoading;
