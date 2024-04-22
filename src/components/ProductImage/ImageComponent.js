// ImageComponent.js

import React from 'react';
import placeholderImage from './placeholder.jpg'; // Import a placeholder image

const ImageComponent = ({ imageUrl, alt }) => {
  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = placeholderImage; // Replace broken image with a placeholder
  };

  return (
    <img
      src={imageUrl}
      alt={alt}
      onError={handleImageError}
      style={{ maxWidth: '100%', height: 'auto' }} // Ensure images are responsive
    />
  );
};

export default ImageComponent;
