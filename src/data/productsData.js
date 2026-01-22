import slidingImg from "../assets/sliding/product-sliding.png";
import slidingConfig from "../assets/sliding/slidingconfig.png";
import ecoSeries from "../assets/sliding/series/ecoseries.png";
import primaSeries from "../assets/sliding/series/primaseries.png";
import royalSeries from "../assets/sliding/series/royalseries.png";

import casementImg from "../assets/product-casement.png";
import fixedImg from "../assets/fixed windows.jpeg";
import frenchImg from "../assets/french Windows.jpeg";
import liftSlideImg from "../assets/lift and slide doors.jpg";
import tiltTurnImg from "../assets/tilt-and-turn-window.png";

export const products = [
  {
    title: "Sliding Systems",
    slug: "sliding-systems",
    image: slidingImg,
    description:
      "Sliding systems are engineered for smooth operation and large openings. These systems support wide glass panels, enhanced daylight, ventilation, and long-term durability.",

    highlights: [
      "5–24 mm glass thickness",
      "Smooth aluminium track movement",
      "2, 2.5 & 3 track options",
      "High wind-load resistance",
      "Mosquito mesh provision",
      "Heavy duty low threshold"
    ],

    configurationImage: slidingConfig,

    series: [
      { name: "Eco Series", image: ecoSeries },
      { name: "Prima Series", image: primaSeries },
      { name: "Royal Series", image: royalSeries }
    ],

    applications: ["Apartments", "Villas", "Balconies"]
  },

  {
    title: "Casement Systems",
    slug: "casement-systems",
    image: casementImg,
    description:
      "Casement windows provide superior ventilation and tight sealing, making them ideal for residential and commercial spaces."
  },

  {
    title: "Fixed Windows",
    slug: "fixed-windows",
    image: fixedImg,
    description:
      "Fixed windows are designed to allow maximum daylight while maintaining insulation and security."
  },

  {
    title: "French Windows",
    slug: "french-windows",
    image: frenchImg,
    description:
      "French windows bring elegance and wide openings, enhancing aesthetics and airflow."
  },

  {
    title: "Lift & Slide Doors",
    slug: "lift-slide-doors",
    image: liftSlideImg,
    description:
      "Lift & Slide systems allow effortless movement of large panels with excellent sealing performance."
  },

  {
    title: "Tilt & Turn Windows",
    slug: "tilt-turn-windows",
    image: tiltTurnImg,
    description:
      "Tilt & Turn windows offer dual opening functionality for ventilation and safety."
  }
];
