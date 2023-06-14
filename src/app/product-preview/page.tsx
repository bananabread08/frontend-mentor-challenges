import React from 'react';
import Image from 'next/image';
import cartIcon from './images/icon-cart.svg';
const ProductReviewCard = () => {
  return (
    <article className="sm:w-[600px] rounded-2xl font-montserrat bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <picture>
        <source
          srcSet="./product_images/image-product-desktop.jpg"
          type="image/jpg"
          media="(min-width: 600px)"
        />
        <source
          srcSet="./product_images/image-product-mobile.jpg"
          typeof="image/jpg"
          media="(max-width: 599px)"
        />

        <img
          src="./product_images/image-product-desktop.jpg"
          alt="product-image"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="p-6 flex flex-col gap-4">
        <p className="uppercase tracking-[0.3rem] text-pr-dark-grayish-blue">
          Perfume
        </p>
        <h1 className="font-bold font-fraunces text-3xl">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-[15px] text-pr-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-3xl text-pr-dark-cyan font-fraunces font-bold">
            $149.99
          </p>
          <p className="line-through text-pr-dark-grayish-blue text-sm">
            $169.99
          </p>
        </div>
        <button className="bg-pr-dark-cyan py-3 rounded-lg inline-flex justify-center items-center gap-2 text-white font-semibold hover:bg-green-900">
          <Image src={cartIcon} alt="cart-icon" />
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductReviewCard;
