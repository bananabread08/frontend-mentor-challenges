import Link from 'next/link';
export const Content = () => {
  return (
    <section className="grid md:grid-cols-2 w-full">
      <picture className="md:order-2">
        <source
          srcSet="./ss_images/desktop/image-transform.jpg"
          type="image/jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="./ss_images/mobile/image-transform.jpg"
          typeof="image/jpg"
          media="(max-width: 767px)"
        />
        <img alt="product-image" className="w-auto h-full" />
      </picture>
      <div className="text-center md:text-left md:order-1 grid place-content-center py-20 px-4 md:px-24 gap-10 bg-white">
        <h2 className="text-4xl md:text-5xl font-fraunces font-extrabold">
          Transform your brand
        </h2>
        <p className="text-[18px] text-ss-darkblue-100">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link
          href="#"
          className="uppercase font-fraunces font-bold decoration-4 hover:underline underline-offset-[0.1em]  hover:decoration-ss-yellow "
        >
          Learn More
        </Link>
      </div>
      <picture className="md:order-3">
        <source
          srcSet="./ss_images/desktop/image-stand-out.jpg"
          type="image/jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="./ss_images/mobile/image-stand-out.jpg"
          typeof="image/jpg"
          media="(max-width: 767px)"
        />
        <img alt="product-image" className="w-auto h-full object-cover" />
      </picture>
      <div className="text-center md:text-left md:order-4 grid place-content-center py-20 px-4 md:px-24 gap-10 bg-white">
        <h2 className="text-4xl md:text-5xl  font-fraunces font-bold">
          Stand out to the right audience
        </h2>
        <p className="text-[18px] text-ss-darkblue-100">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we{`'`}ll build and
          extend your brand in digital places.
        </p>
        <Link
          href="#"
          className="uppercase font-fraunces font-bold decoration-4 hover:underline underline-offset-[0.1em]  hover:decoration-ss-red"
        >
          Learn More
        </Link>
      </div>
      <div className="min-h-screen md:h-full md:order-5 bg-[url('/ss_images/mobile/image-graphic-design.jpg')] sm:bg-[url('/ss_images/desktop/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat grid">
        <div className="text-center text-ss-darkcyan-500 md:w-2/3 mx-auto py-14 px-4 self-end">
          <h2 className="text-4xl font-fraunces font-extrabold">
            Graphic Design
          </h2>
          <p className="text-[18px] font-barlow font-bold mt-8 ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </p>
        </div>
      </div>
      <div className="min-h-screen md:h-full md:order-5 bg-[url('/ss_images/mobile/image-photography.jpg')] sm:bg-[url('/ss_images/desktop/image-photography.jpg')] bg-cover bg-center bg-no-repeat grid">
        <div className="text-center text-ss-darkcyan-300 md:w-2/3 mx-auto py-14 px-4 self-end">
          <h2 className="text-4xl font-fraunces font-extrabold">Photography</h2>
          <p className="text-[18px] font-barlow font-semibold mt-8 ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};
