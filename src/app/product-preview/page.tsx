import React from 'react';
import Image from 'next/image';
import productImage from './images/image-product-desktop.jpg';
import productImageMobile from './images/image-product-mobile.jpg';
import cartIcon from './images/icon-cart.svg';
const ProductReviewCard = () => {
  return (
    <article className="sm:w-[600px] rounded-2xl font-montserrat bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <picture>
        <source
          srcSet="./images/image-product-desktop.jpg"
          media="(min-width: 600px)"
        />
        <Image
          src={productImageMobile}
          alt="product-image"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="px-6 py-4 flex flex-col gap-4">
        <p className="uppercase tracking-[0.3rem]">Perfume</p>
        <h1 className="font-bold font-fraunces text-3xl">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-[15px] text-pr-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivie
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-3xl text-pr-dark-cyan font-fraunces font-bold">
            $149.99
          </p>
          <p className="line-through text-pr-dark-grayish-blue">$169.99</p>
        </div>
        <button className="bg-pr-dark-cyan py-2 rounded-lg inline-flex justify-center items-center gap-2 text-white">
          <Image src={cartIcon} alt="cart-icon" />
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductReviewCard;
