import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[url('../../public/ss_images/mobile/image-header.jpg')] sm:bg-[url('../../public/ss_images/desktop/image-header.jpg')] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-16">
        <h1 className="text-5xl text-center uppercase font-fraunces font-bold tracking-widest">
          We are Creatives
        </h1>
        <Image
          className="h-auto w-auto hover:scale-125 transition-all"
          src="/ss_images/icon-arrow-down.svg"
          alt="arrow down"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};
