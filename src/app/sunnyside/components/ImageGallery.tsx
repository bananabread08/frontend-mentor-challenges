type ImageData = {
  imageW: string;
  imageM: string;
};

export const ImageGallery = () => {
  const data: ImageData[] = [
    {
      imageW: '/ss_images/desktop/image-gallery-milkbottles.jpg',
      imageM: '/ss_images/mobile/image-gallery-milkbottles.jpg',
    },
    {
      imageW: '/ss_images/desktop/image-gallery-orange.jpg',
      imageM: '/ss_images/mobile/image-gallery-orange.jpg',
    },
    {
      imageW: '/ss_images/desktop/image-gallery-cone.jpg',
      imageM: '/ss_images/mobile/image-gallery-cone.jpg',
    },
    {
      imageW: '/ss_images/desktop/image-gallery-sugarcubes.jpg',
      imageM: '/ss_images/mobile/image-gallery-sugar-cubes.jpg',
    },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {data.map((d) => {
        return (
          <article key={d.imageM}>
            <picture className="">
              <source
                srcSet={d.imageM}
                type="image/jpg"
                media="(min-width: 768px)"
              />
              <source
                srcSet={d.imageW}
                typeof="image/jpg"
                media="(max-width: 767px)"
              />
              <img alt="product-image" className="w-auto h-auto" />
            </picture>
          </article>
        );
      })}
    </section>
  );
};
