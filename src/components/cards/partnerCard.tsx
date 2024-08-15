import Image from "next/image";
import React from "react";

interface PartnerCardProps {
    logoSrc: string;
    width: number;
    height: number;
}

export const PartnerCard = (props: PartnerCardProps) => {
  return (
    <div className="lg:w-60 lg:h-32 w-44 h-24 mx-2 my-8 p-2 rounded-xl shadow-lg shadow-black border-[0.5px] bg-secondary-yellow/5 border-primary-yellow flex justify-center items-center">
      <Image
        src={props.logoSrc}
        alt="logo-partner-infest-usk"
        width={props.width}
        height={props.height}
        className={`rounded-xl`}
      />
    </div>
  );
};
