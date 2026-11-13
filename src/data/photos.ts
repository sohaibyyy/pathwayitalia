/**
 * Every photograph used on the site, with the attribution its licence requires.
 * All images come from Wikimedia Commons, were downloaded into the repo (no
 * hotlinking), resized and converted to WebP. Credits are shown in captions and
 * on the /credits page.
 *
 * To swap a photo: drop new -lg (1280px wide) and -sm (640px wide) WebP files
 * into src/assets/photos, update the imports, and update the credit fields.
 */
import bocconiLg from "@/assets/photos/bocconi-lg.webp";
import bocconiSm from "@/assets/photos/bocconi-sm.webp";
import bolognaLg from "@/assets/photos/bologna-lg.webp";
import bolognaSm from "@/assets/photos/bologna-sm.webp";
import cattolicaLg from "@/assets/photos/cattolica-lg.webp";
import cattolicaSm from "@/assets/photos/cattolica-sm.webp";
import polimiLg from "@/assets/photos/polimi-lg.webp";
import polimiSm from "@/assets/photos/polimi-sm.webp";
import luissLg from "@/assets/photos/luiss-lg.webp";
import luissSm from "@/assets/photos/luiss-sm.webp";
import padovaLg from "@/assets/photos/padova-lg.webp";
import padovaSm from "@/assets/photos/padova-sm.webp";
import torinoLg from "@/assets/photos/torino-lg.webp";
import torinoSm from "@/assets/photos/torino-sm.webp";
import trentoLg from "@/assets/photos/trento-lg.webp";
import trentoSm from "@/assets/photos/trento-sm.webp";
import politoLg from "@/assets/photos/polito-lg.webp";
import politoSm from "@/assets/photos/polito-sm.webp";
import nabaLg from "@/assets/photos/naba-lg.webp";
import nabaSm from "@/assets/photos/naba-sm.webp";
import linkLg from "@/assets/photos/linkCampus-lg.webp";
import linkSm from "@/assets/photos/linkCampus-sm.webp";
import heroLg from "@/assets/photos/hero-lg.webp";
import heroSm from "@/assets/photos/hero-sm.webp";
import aboutLg from "@/assets/photos/about-lg.webp";
import aboutSm from "@/assets/photos/about-sm.webp";

export interface Photo {
  lg: string;
  sm: string;
  /** Pixel size of the -lg file (used for width/height attributes). */
  width: number;
  height: number;
  alt: string;
  /** What the photo shows, for the caption. */
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** Wikimedia Commons file page. */
  source: string;
}

export const photos = {
  bocconi: {
    lg: bocconiLg,
    sm: bocconiSm,
    width: 1280,
    height: 946,
    alt: "The Grafton Building of Bocconi University on Via Roentgen, Milan",
    caption: "Grafton Building, Bocconi University, Milan",
    author: "Paolo Gamba",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Bocconi_Grafton_Building_Milan.jpg",
  },
  bologna: {
    lg: bolognaLg,
    sm: bolognaSm,
    width: 1280,
    height: 853,
    alt: "Courtyard of Palazzo Poggi, seat of the University of Bologna",
    caption: "Palazzo Poggi, University of Bologna",
    author: "Vlach Pavel",
    license: "CC0 1.0 (public domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Palazzo_Poggi_Bologna.jpg",
  },
  cattolica: {
    lg: cattolicaLg,
    sm: cattolicaSm,
    width: 1280,
    height: 960,
    alt: "Cloister and garden of the Università Cattolica del Sacro Cuore in Milan",
    caption: "Cloister of Università Cattolica, Milan",
    author: "Scruch",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Chiostro_Unicatt.jpg",
  },
  polimi: {
    lg: polimiLg,
    sm: polimiSm,
    width: 1280,
    height: 960,
    alt: "Main building (Rettorato) of Politecnico di Milano on the Leonardo campus",
    caption: "Rettorato, Politecnico di Milano, Leonardo campus",
    author: "Marco Ausano Maria Introini",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Polimi_Rettorato_Campus_Leonardo.jpg",
  },
  luiss: {
    lg: luissLg,
    sm: luissSm,
    width: 1280,
    height: 720,
    alt: "Villa Blanc, restored by Luiss, in Rome",
    caption: "Villa Blanc, Luiss, Rome (photographed during restoration, 2016)",
    author: "Carlo Dani",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Villa_Blanc_ristrutturata.jpg",
  },
  padova: {
    lg: padovaLg,
    sm: padovaSm,
    width: 1280,
    height: 960,
    alt: "Columns of the old courtyard of Palazzo del Bo, University of Padua",
    caption: "Cortile Antico, Palazzo del Bo, University of Padua",
    author: "Federica.tamburini.75",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Padova_-_Palazzo_del_Bo_-_il_Cortile_Antico_-_202209291229.jpg",
  },
  torino: {
    lg: torinoLg,
    sm: torinoSm,
    width: 1280,
    height: 960,
    alt: "Arcaded courtyard of the Palazzo dell'Università, University of Turin",
    caption: "Courtyard porticos, Palazzo dell'Università, University of Turin",
    author: "Pmk58",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Porticos_in_the_courtyard,_Palazzo_dell%27Universit%C3%A0,_Turin,_Italy.jpg",
  },
  trento: {
    lg: trentoLg,
    sm: trentoSm,
    width: 1280,
    height: 960,
    alt: "Faculty of Science buildings of the University of Trento with mountains behind",
    caption: "Faculty of Science, University of Trento",
    author: "Turgidson",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:University_of_Trento_(3).jpg",
  },
  polito: {
    lg: politoLg,
    sm: politoSm,
    width: 1280,
    height: 797,
    alt: "Castello del Valentino in Turin, home of Politecnico di Torino's architecture department",
    caption: "Castello del Valentino, Politecnico di Torino (architecture)",
    author: "Basilicofresco",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Castello_del_Valentino,_Torino.jpg",
  },
  naba: {
    lg: nabaLg,
    sm: nabaSm,
    width: 1280,
    height: 713,
    alt: "Entrance of the NABA campus building in Rome",
    caption: "NABA Rome campus",
    author: "Carlo Dani",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:NABA_ROMA.jpg",
  },
  linkCampus: {
    lg: linkLg,
    sm: linkSm,
    width: 1280,
    height: 697,
    alt: "Building of Link Campus University in Rome",
    caption: "Link Campus University, Rome",
    author: "Carlo Dani",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Link_Campus_University_-_Rome.jpeg",
  },
  hero: {
    lg: heroLg,
    sm: heroSm,
    width: 1920,
    height: 1196,
    alt: "Cypress trees on the hills of the Val d'Orcia, Tuscany",
    caption: "Cypresses in the Val d'Orcia, Tuscany",
    author: "Maurizio Moro5153",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Cipressi_Val_D%27Orcia.jpg",
  },
  about: {
    lg: aboutLg,
    sm: aboutSm,
    width: 1280,
    height: 853,
    alt: "Arcaded courtyard of the Archiginnasio in Bologna, seen through an archway",
    caption: "Archiginnasio, Bologna",
    author: "Ugeorge",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Archiginnasio_di_Bologna_dal_cortile.jpg",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
