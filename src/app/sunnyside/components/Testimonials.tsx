import Image from 'next/image';
export const Testimonials = () => {
  return (
    <section>
      <div className="w-full p-28">
        <h1 className="text-center mb-8">Client Testimonials</h1>
        <div className=" grid md:grid-cols-3 grid-flow-row place-content-center gap-8 text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/ss_images/image-emily.jpg"
              alt="Emily's picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/ss_images/image-emily.jpg"
              alt="Emily's picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/ss_images/image-emily.jpg"
              alt="Emily's picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
