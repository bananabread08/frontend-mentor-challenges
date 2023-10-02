export const Hero = () => {
  return (
    <section className="grid lg:col-span-2">
      <div>
        <picture>
          <source
            srcSet="/nh-images/image-web-3-desktop.jpg"
            type="image/jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/nh-images/image-web-3-mobile.jpg"
            typeof="image/jpg"
            media="(max-width: 768px)"
          />
          <img alt="hero-image" className="w-auto h-auto" />
        </picture>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-4">
        <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        <div className="flex flex-col gap-4">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-fit bg-nh-softred py-2 px-6 uppercase text-nh-offwhite">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
