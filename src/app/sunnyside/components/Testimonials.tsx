import Image from 'next/image';

type ITestimonial = {
  image: string;
  review: string;
  name: string;
  job: string;
};

export const Testimonials = () => {
  const data: ITestimonial[] = [
    {
      image: '/ss_images/image-emily.jpg',
      review:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      job: 'Marketing Director',
    },
    {
      image: '/ss_images/image-thomas.jpg',
      review:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: 'Thomas S.',
      job: 'Chief Operatingg Officer',
    },
    {
      image: '/ss_images/image-jennie.jpg',
      review:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended',
      name: 'Jennie F.',
      job: 'Business Owner',
    },
  ];
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl  mx-auto py-16 px-6 font-barlow text-[18px]">
        <h1 className="uppercase font-fraunces font-bold tracking-[0.2em] text-center text-ss-grayblue mb-8">
          Client Testimonials
        </h1>
        <div className=" grid md:grid-cols-3 grid-flow-row items-baseline gap-8 text-center">
          {data.map((d) => {
            return (
              <div
                key={d.name}
                className="flex flex-col items-center justify-center gap-8"
              >
                <Image
                  src={d.image}
                  alt="Emily's picture"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <p className="text-ss-darkblue-300 font-medium">{d.review}</p>
                <div>
                  <p className="font-fraunces font-bold text-[18px]">
                    {d.name}
                  </p>
                  <p className="text-ss-grayblue font-light text-[0.9em]">
                    {d.job}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
