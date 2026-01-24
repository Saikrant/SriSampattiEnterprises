// ================= SLIDING =================
import slidingMain from "../assets/sliding/product-sliding.png";
import slidingConfig from "../assets/sliding/slidingconfig.png";

import ecoSeries from "../assets/sliding/series/ecoseries.png";
import primaSeries from "../assets/sliding/series/primaseries.png";
import royalSeries from "../assets/sliding/series/royalseries.png";

// ================= CASEMENT =================
import casementMain from "../assets/product-casement.png";
import casementOpening from "../assets/casement/opening-types.png";
import casementPrimaProfile from "../assets/casement/prima-series-profiles.png";
import casementRoyalProfile from "../assets/casement/royal-series-profiles.png";

// ================= FIXED =================
import fixedMain from "../assets/fixed windows.jpeg";
import fixedConfig from "../assets/fixed/fixedwindowconfig.png";
import fixedseries from "../assets/fixed/fixed-series.png";

// ================= FRENCH =================
import frenchMain from "../assets/french doors.png";
import fopen from "../assets/french/frenchopen.png";
import ffrench from "../assets/french/french-series.png";

// ================= LIFT & SLIDE =================
import liftSlideMain from "../assets/lift and slide doors.jpg";
import lsopenen from "../assets/lift-slide/lsopen.png";
import lsseriess from "../assets/lift-slide/lsseries.png";
// ================= TILT & TURN =================
import tiltTurnMain from "../assets/tilt-and-turn-window.png";
import tiltTurnConfig from "../assets/tilt-turn/tt.png";
import ttopen from "../assets/tilt-turn/tt2.png";

export const products = [
  // ---------- SLIDING ----------
  {
    slug: "sliding-systems",
    title: "uPVC Sliding Systems",
    description:
      "Smooth-glide sliding window and door systems designed for large openings with excellent weather resistance.",

    image: slidingMain,

    highlights: [
      "Smooth sliding rollers",
      "Weather resistant",
      "Low maintenance",
      "High load-bearing capacity"
    ],

    // ✅ SINGLE CONFIG IMAGE (IMPORTANT FIX)
    configurationImage: slidingConfig,

    series: [
      { name: "Eco Series", image: ecoSeries },
      { name: "Prima Series", image: primaSeries },
      { name: "Royal Series", image: royalSeries }
    ],

    applications: ["Living Rooms", "Balconies", "Commercial Buildings"]
  },

  // ---------- CASEMENT ----------
  {
    slug: "casement-windows",
    title: "uPVC Casement Windows",
    description:
      "Side-hung and top-hung casement windows providing excellent ventilation, security, and insulation.",

    image: casementMain,

    highlights: [
      "High energy saving",
      "Multiple frame and sash options",
      "Multi-point locking mechanism",
      "Excellent thermal and noise insulation"
    ],

    // ✅ SINGLE OPENING SYSTEM IMAGE
    configurationImage: casementOpening,

    series: [
      { name: "Prima Series", image: casementPrimaProfile },
      { name: "Royal Series", image: casementRoyalProfile }
    ],

    applications: ["Bedrooms", "Living Rooms", "Commercial Buildings"]
  },

  // ---------- FIXED ----------
  {
    slug: "fixed-windows",
    title: "uPVC Fixed Windows",
    description:
      "Non-openable windows designed for maximum daylight and aesthetics.",

    image: fixedMain,

    highlights: [
      "Maximum daylight",
      "Strong frame design",
      "Low maintenance"
    ],

    configurationImage: fixedConfig,

    series: [{ name: "Fixed Series", image: fixedseries }],

    applications: ["Staircases", "Showrooms"]
  },

  // ---------- TILT & TURN ----------
  {
    slug: "tilt-and-turn-windows",
    title: "uPVC Tilt & Turn Windows",
    description:
      "Dual opening system offering ventilation and full opening.",

    image: tiltTurnMain,

    highlights: [
      "Dual opening mechanism",
      "Easy cleaning",
      "Enhanced safety"
    ],

    configurationImage: tiltTurnConfig,

    series: [{ name: "Tilt and Turn Series", image: ttopen }],

    applications: ["Apartments", "Homes"]
  },

  // ---------- FRENCH ----------
  {
    slug: "french-doors",
    title: "uPVC French Doors",
    description:
      "Elegant door systems that enhance aesthetics and openness.",

    image: frenchMain,

    highlights: [
      "Classic design",
      "Wide opening",
      "Strong locking system"
    ],

    configurationImage: fopen,

    series: [{ name: "French Door Series", image: ffrench }],

    applications: ["Balconies", "Living Rooms"]
  },

  // ---------- LIFT & SLIDE ----------
  {
    slug: "lift-and-slide-doors",
    title: "uPVC Lift & Slide Doors",
    description:
      "Premium sliding door systems for large spans.",

    image: liftSlideMain,

    highlights: [
      "Heavy duty mechanism",
      "Smooth operation",
      "Excellent insulation"
    ],

    configurationImage: lsopenen,

    series: [{ name: "Lift and Slide Series", image: lsseriess }],

    applications: ["Luxury Homes", "Hotels"]
  }
];
