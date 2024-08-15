import Image from "next/image";
import React from "react";
import { WhatsApp } from "../icons/whatsApp";
// import { Linkedin } from "../icons/linkedin";
import { Tiktok } from "../icons/tiktok";
import { Instagram } from "../icons/instagram";
import Link from "next/link";
import { scrollIntoSection } from "@/libs/helpers/scrollIntoSection";

const socialAccounts = [
  {
    id: "whatsApp",
    iconComponent: <WhatsApp />,
    url: "https://api.whatsapp.com/send?phone=6285269270159",
  },
  {
    id: "tiktok",
    iconComponent: <Tiktok width="21" height="21" className="mb-2 mr-1" />,
    url: "https://www.tiktok.com/@hmif_usk?lang=en",
  },
  {
    id: "instagram",
    iconComponent: <Instagram />,
    url: "https://www.instagram.com/hmif.fmipausk/",
  },
];

const FooterMobile = () => {
  return (
    <div className="bg-secondary border-t border-primary-yellow w-full flex flex-col px-8 py-6 gap-4 text-white items-center">
      <button onClick={() => scrollIntoSection("hero")} className="duration-200 hover:scale-110">
        <Image
          src={"https://jbymoblt3fzt0jez.public.blob.vercel-storage.com/logo-infest-usk.webp"}
          width={60}
          height={0}
          alt="logo-infest-usk"
        />
      </button>
      <div className="flex gap-2 mt-2">
        {socialAccounts.map((account) => (
          <Link
            key={account.id}
            href={account.url}
            className="hover:scale-110 duration-200"
          >
            {account.iconComponent}
          </Link>
        ))}
      </div>
      <div className="text-sm text-center">
        <p className="font-bold uppercase">Alamat</p>
        <p className="mt-2.5 text-xs">
          Jl. Syech Abdurrauf No.3, Kopelma Darussalam, Kecamatan Syiah Kuala, Kota Banda Aceh, Aceh 23111, Indonesia
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full mt-2.5">
        <p className="text-xs text-center">
          Hak Cipta © 2024 | Himpunan Mahasiswa Informatika
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
