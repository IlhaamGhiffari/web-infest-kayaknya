import { Instagram } from "@/components/icons/instagram";
import { Tiktok } from "@/components/icons/tiktok";
import { WhatsApp } from "@/components/icons/whatsApp";

export const socialAccounts = [
  {
    id: "whatsApp",
    iconComponent: (<WhatsApp />),
    url: "https://api.whatsapp.com/send?phone=6285269270159",
  },
  {
    id: "tiktok",
    iconComponent: <Tiktok width="21" height="21" className="mb-2 mr-1" />,
    url: "https://www.tiktok.com/@hmif_usk",
  },
  {
    id: "instagram",
    iconComponent: <Instagram />,
    url: "https://www.instagram.com/infest_usk/",
  },
];