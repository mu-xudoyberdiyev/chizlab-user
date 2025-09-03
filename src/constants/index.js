export const navLinks = [
  {
    text: "Adabiyotlar",
    path: "/literature",
  },
  {
    text: "Maqolalar",
    path: "/articles",
  },
  {
    text: "Taqdimotlar",
    path: "/presantations",
  },
  {
    text: "Videolar",
    path: "/videos",
  },
  {
    text: "Mualliflar",
    path: "/authors",
  },
];

import HeroBottomRightWhite from "/public/hero-white-br.svg";
import HeroBottomLeftWhite from "/public/hero-white-bl.svg";
export const publicResurs = [
  {
    title: "Adabiyotlar",
    href: "/adabiyotlar",
    img: HeroBottomLeftWhite,
    borderRadius: "rounded-br-[100px] ",
    position: "right-0",
  },
  {
    title: "Maqolalar",
    href: "/maqolalar",
    img: HeroBottomRightWhite,
    borderRadius: " rounded-bl-[100px]",
    position: "left-0",
  },
  {
    title: "Taqdimotlar",
    href: "/taqdimotlar",
    img: HeroBottomLeftWhite,
    borderRadius: "rounded-br-[100px]",
    position: "right-0",
  },
  {
    title: "Videolar",
    href: "/videolar",
    img: HeroBottomRightWhite,
    borderRadius: "rounded-bl-[100px]",
    position: "left-0",
  },
];
export const aboutInfo = [
  {
    title: "Biz kimmiz?",
    disc: `Chizlab — bu chizmachilik va dizaynni sevuvchilar uchun onlayn maydon. 
O‘zbekistondagi ilk chizmachilik 
va dizayn sohasidagi materiallar to‘plangan vertual makon. 
Biz ijodkorlarni birlashtiramiz!
`,
  },
  {
    title: "Chizlab hikoyasi",
    disc: `Oddiy g‘oyadan boshlanib, 
butun o‘zbek  ijodkorlariga 
yordam beruvchi platforma 
tuzishni niyat qildik.`,
  },
  {
    title: "Nega aynan Chizlab?",
    disc: `Texnik bilimlarni mukammallashtirish 
uchun interaktiv resurslar va o'quv materiallarini taklif etamiz.

Biz bilan barchasi oson va kreativ.`,
  },
  {
    title: "Jamoamiz haqida",
    disc: `Chizlab ortida bilimdon va ijodkor 
jamoa turibdi. Siz uchun eng yaxshi vositalarni taqdim etishga intilamiz.`,
  },
  {
    title: "Bizning missiyamiz",
    disc: `Ijod va ta'limni birlashtirish. 
O‘zbekistonda ijodkorlik madaniyati yuksalishiga hissa qo‘shish. 

Har bir qalam harakati yangi imkoniyatlar ochishi uchun xizmat qiladi. `,
  },
  {
    title: "Ta'riflar",
    disc: `Saytda standart ta’rifda bepul 
materiallardan foydalana olasiz.

Pro ta’rifida yillik to‘lov
qilganingizdan so‘ng, 
saytdagi materiallarning 
barchasidan foydalana olasiz.
`,
  },
];

import HeroBottomRight from "/public/hero-br.svg";
import HeroBottomLeft from "/public/hero-bl.svg";
import HeroTopRight from "/public/hero-tr.svg";
import HeroTopLeft from "/public/hero-tl.svg";

export const statistic = [
  {
    title: "Adabiyotlar",
    count: 100,
    img: HeroTopLeft,
    position: "right-0 bottom-0",
  },
  {
    title: "Taqdimotlar",
    count: 100,
    position: "left-0 bottom-0",
    img: HeroTopRight,
  },
  {
    title: "Foydalanuvchilar",
    count: 200,
    imgRotate: "none",
    position: "",
  },

  {
    title: "Videolar",
    count: 100,
    img: HeroBottomLeft,
    position: "right-0 top-0",
  },
  {
    title: "Maqolalar",
    count: 100,
    img: HeroBottomRight,

    position: "left-0 top-0",
  },
  {
    title: "Pro ta'rifida",
    count: 100,
    imgRotate: "none",
    position: "",
  },
];

import behanceIcon from "/public/behanceIcon.svg";
import telegramIcon from "/public/telegramicon.svg";
import instagramIcon from "/public/instagramicon.svg";
import emailIcon from "/public/email-icon.svg";
import globeIcon from "/public/globe-icon.svg";
import githubIcon from "/public/github-icon.svg";
import MotabarhonLogo from "/public/Motabarhon-logo.svg";
import Ilogo from "/public/MirzoUlugbekLogo.png";
import IsmoilovLogo from "/public/Ismoilov-logo.png";
import OyatilloLogo from "/public/oyatillo-logo.png";
export const foundersInfo = [
  {
    Fullname: `Turdaliyeva
Mo‘tabarxon`,
    position: `G‘oya muallifi 
& dizayner`,
    work: `-FarDu, Najot Ta’lim
-Grafik dizayner`,
    logo: MotabarhonLogo,
    contacts: [
      {
        img: telegramIcon,
        LinkHref: "/example",
        tooltip: "Telegram",
      },
      {
        img: instagramIcon,
        LinkHref: "/example",
        tooltip: "Instagram",
      },
      {
        img: behanceIcon,
        LinkHref: "/example",
        tooltip: "Behance",
      },
      {
        img: emailIcon,
        LinkHref: "/example",
        tooltip: "Email",
      },
    ],
  },
  {
    Fullname: `Mirzo Ulug‘bek
Xudoyberdiyev`,
    position: `Bosh dasturchi`,
    work: `-Najot Ta’lim
-Fronted dasturchi`,
    logo: Ilogo,
    contacts: [
      {
        img: telegramIcon,
        LinkHref: "/example",
        tooltip: "Telegram",
      },
      {
        img: githubIcon,
        LinkHref: "/example",
        tooltip: "GitHub",
      },
      {
        img: globeIcon,
        LinkHref: "https://ilhomlandim.uz",
        tooltip: "Ilhomlandim.uz",
      },
      {
        img: emailIcon,
        LinkHref: "/example",
        tooltip: "Email",
      },
    ],
  },
  {
    Fullname: `Ismoilov 
Islom`,
    position: `Art director`,
    work: `-Najot Ta’lim
-Grafik dizayner`,
    logo: IsmoilovLogo,
    contacts: [
      {
        img: telegramIcon,
        LinkHref: "/example",
        tooltip: "Telegram",
      },
      {
        img: instagramIcon,
        LinkHref: "/example",
        tooltip: "Instagram",
      },
      {
        img: behanceIcon,
        LinkHref: "/example",
        tooltip: "Behance",
      },
      {
        img: emailIcon,
        LinkHref: "/example",
        tooltip: "Email",
      },
    ],
  },
  {
    Fullname: `Oyatillo Toshtemirov`,
    position: `Assistent dasturchi`,
    work: `-Najot Ta’lim
-Fronted dasturchi`,
    logo: OyatilloLogo,
    contacts: [
      {
        img: telegramIcon,
        LinkHref: "https://t.me/OyatilloToshtemirov",
        tooltip: "Telegram",
      },
      {
        img: githubIcon,
        LinkHref: "https://github.com/oyatillo071",
        tooltip: "GitHub",
      },
      {
        img: globeIcon,
        LinkHref: "https://toshtemirov.uz",
        tooltip: "toshtemirov.uz",
      },
      {
        img: emailIcon,
        LinkHref: "mailto:oyatillotoshtemir071@gmail.com",
        tooltip: "mail",
      },
    ],
  },
];
export const baseURL = "https://json-api.uz/api/project/chizlab";
