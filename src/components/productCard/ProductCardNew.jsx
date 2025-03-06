import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * ProductCard component for displaying product information
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Unique product ID
 * @param {string} props.title - Product title
 * @param {string} props.description - Product description
 * @param {number|string} props.price - Product price
 * @param {string} props.currency - Currency symbol (default: "dkkr")
 * @param {string} props.imageSrc - Image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {boolean} props.isLoading - Loading state flag
 * @param {Function} props.onAddToCart - Function to call when adding to cart
 * @param {Function} props.onToggleFavorite - Function to call when toggling favorite
 * @param {boolean} props.isFavorite - Whether product is favorited
 * @param {string} props.buttonText - Text for the action button
 * @param {string} props.detailsUrl - URL for product details page
 */
const ProductCard = ({
  id,
  title = "Single Product",
  description = "Small info",
  price,
  currency = "dkkr",
  imageSrc,
  imageAlt,
  isLoading = false,
  onAddToCart,
  onToggleFavorite,
  isFavorite: externalFavorite,
  buttonText = "Text",
  detailsUrl,
}) => {
  // Use internal state if no external control is provided
  const [internalFavorite, setInternalFavorite] = useState(false);
  const isFavorite =
    externalFavorite !== undefined ? externalFavorite : internalFavorite;

  // Handle favorite toggle with fallback to internal state
  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(id, !isFavorite);
    } else {
      setInternalFavorite(!internalFavorite);
    }
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  // Determine if the card should be wrapped in a link
  const CardWrapper = ({ children }) => {
    if (detailsUrl) {
      return (
        <Link href={detailsUrl} className="cursor-pointer">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-md animate-pulse">
        <div className="bg-gray-200 h-96"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="flex items-center justify-between">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <CardWrapper>
      <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image area */}
        <div className="bg-gray-300 h-96 relative">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              onError={(e) => {
                e.currentTarget.src = "/placeholder-image.jpg"; // Fallback image
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-1 line-clamp-1" title={title}>
            {title}
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-2" title={description}>
            {description}
          </p>
          <p className="text-xl font-bold mb-4">
            {typeof price !== "undefined"
              ? `Price ${price} ${currency}`
              : `Price ${currency}`}
          </p>

          {/* Button and favorite icon area */}
          <div
            className="flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bg-lime-300 hover:bg-lime-400 text-black font-semibold py-2 px-10 rounded transition-colors duration-200"
              onClick={handleAddToCart}
              aria-label={`Add ${title} to cart`}
            >
              {buttonText}
            </button>

            <button
              onClick={handleToggleFavorite}
              className="focus:outline-none transition-transform duration-200 hover:scale-110"
              aria-label={
                isFavorite
                  ? `Remove ${title} from favorites`
                  : `Add ${title} to favorites`
              }
            >
              {isFavorite ? (
                <svg
                  className="w-10 h-10 text-lime-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 text-lime-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;
