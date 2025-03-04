import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  const { id, name, description, image, avgRating } = product;
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={image} alt={name} width={150} height={150} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Average Rating: <strong>{avgRating.toFixed(1)}</strong>
      </p>
      <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
