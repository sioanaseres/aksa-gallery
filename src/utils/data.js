import { MdWorkspacesOutline } from "react-icons/md";
import { GiFruitTree } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";

export const projectFeatures = [
  {
    name: "Grădină",
    features: "700 mp",
    icon: GiFruitTree,
    bg: "#286F6C",
  },
  {
    name: "Piscină",
    features: "7 m lungime",
    icon: MdPool,
    bg: "#0077B6",
  },
  {
    name: "Grătar",
    features: "din cărămidă",
    icon: FaBurger,
    bg: "#F26440",
  },
  {
    name: "Terasă și foișor",
    features: "32 locuri la mese",
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },
];

export const WhatDoWeOffer = [
  "Ne place să facem mișcare, să petrecem timpul în aer liber, fie că este vorba despre aventuri în natură sau petreceri în grădină 🌳🌞. De aici a plecat și ideea de a crea o grădină frumoasă și relaxantă, unde să ne jucăm cu copiii, după-amiaza când terminăm cu joburile, petrecem timp împreună, la fel și in weekend, sub cerul liber, printre flori și copaci.",
  "Așa a apărut AKSĂ Garden, un proiect tare drag familiei noastre, pe care îl vedem crescând frumos și pe care vrem să îl  împărțim cu alți iubitori de natură.  ",
  "AKSĂ este locul unde poți organiza petreceri pentru copii, botezuri, cocktail-uri, cununii, nunți sau alt eveniment special alături de familie și prieteni.",
];

export const Amenities = [
  {
    place: "Grădina",
    image: "../../images/gradina.jpg",
    description:
      "În luna aprilie, grădina noastră prinde viață cu primele flori ale primăverii. Bulbii de lalele și narcise încep să înflorească, aducând cu sine promisiunea unei veri pline de culoare. Pe măsură ce lunile trec, vom trece de la flori delicate de primăvară la trandafiri eleganți, crăițe, dalii și bujori impresionanți. Dar nu numai florile sunt vedetele grădinii noastre! Din mai până în octombrie, puteți gusta fructe proaspete cultivate cu grijă. Cireșele și căpșunile devin coapte în mai, iar vara aduce cu sine zmeură, mure, coacăze, mere, smochine.",
  },
  {
    place: "Piscina",
    image: "../../images/piscinaIncalzita.jpg",
    description:
      "Piscina noastră încalzită este deschisă din mai până în octombrie, oferindu-vă posibilitatea de a înota și de a vă relaxa în apa plăcută. Pentru cei mai mici exploratori, am creat un loc special, adaptat nevoilor lor. Copiii mici pot se bucura de o zonă separată în piscină, cu apă puțin adâncă, astfel încât părinții să se poată relaxa și să se bucure de liniște știind că cei mici sunt în siguranță.",
  },
  {
    place: "Acomodare",
    image: "../../images/meseTerasa.jpg",
    description:
      "Mesele și băncile răspândite pe iarbă, terasa care planează deasupra celor 2 mese mari unde toată familia se adună, foișorul cu umbră și masă din lemn, nisiparul, căsuța colorată și zona pentru grătar pentru cei mari - toate contribuie la crearea unui spațiu intim și călduros.",
  },
];

export const comments = [
  {
    name: "Adelina",

    comment:
      "  Ioana şi Sergiu sunt nişte super gazde. Au o grădină absolut superbă şi probabil nici dacă lucrau cu specialişti n-ar fi reuşit să o facă perfectă pentru astfel de evenimente. Totul e super îngrijit şi curat. E efectiv un parc privat cu pomi fructiferi şi atmosferă de familie. ",
  },
  {
    name: "Iulia",

    comment:
      "Este un loc absolut superb, construit şi amenajat cu mare atenție, aşa ca pentru o familie iubitoare de natură, aer curat, bălăceală in piscină şi joacă multă afară. Am fost de nenumărate ori aici şi ne simțim mereu ca într-o oază de liniste şi bucurie! Recomand cu mare drag! E de neratat! ",
  },
  {
    name: "Maria",

    comment:
      "Aksă Garden ne-a depășit cu mult așteptările! Curtea parcă este dintr-o poveste, toate spațiile sunt perfect îngrijite și aranjate. Sunt amenajate multiple spații de relaxare unde invitații noștri s-au putut bucura de umbra copacilor și aerul curat. Cu siguranță atracția principală a fost piscina încălzită.",
  },
  {
    name: "Isabela",

    comment:
      "Un loc pe care îl recomand cu inima, pe lângă că e frumos are și un super vibe pe care îl dau oamenii care stau în spatele poveștii Aksă Garden.",
  },
  {
    name: "Elena",

    comment: "Absolut superba curtea 🙂",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 737,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
