import Image from 'next/image';

export const Content = () => {
  return (
    <section className="grid w-full">
      {/* <div className="h- bg-[url('../../public/ss_images/mobile/image-header.jpg')] sm:bg-[url('../../public/ss_images/desktop/image-header.jpg')] bg-center bg-no-repeat bg-cover">
        Hello
      </div> */}
      <div>
        <Image
          className="h-auto w-96"
          src="/ss_images/desktop/image-transform.jpg"
          alt="arrow down"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
