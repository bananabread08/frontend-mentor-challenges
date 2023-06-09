import React from 'react';
import Image from 'next/image';
import qrImage from './images/image-qr-code.png';

const QRComponent = () => {
  return (
    <div className="max-w-[375px] p-4 bg-white rounded-2xl">
      <Image src={qrImage} alt="qr-code-image" className="rounded-xl" />
      <div className="px-6 py-4 text-center flex flex-col gap-4">
        <h1 className="font-bold text-2xl">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] text-qr-gray-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRComponent;
