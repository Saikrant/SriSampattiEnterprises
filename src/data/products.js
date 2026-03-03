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
import fixedSeries from "../assets/fixed/fixed-series.png";

// ================= TILT & TURN =================
import tiltTurnMain from "../assets/tilt-and-turn-window.png";
import tiltTurnConfig from "../assets/tilt-turn/tt.png";
import tiltTurnOpen from "../assets/tilt-turn/tt2.png";

// ================= FRENCH =================
import frenchMain from "../assets/french doors.png";
import frenchOpen from "../assets/french/frenchopen.png";
import frenchSeries from "../assets/french/french-series.png";

// ================= LIFT & SLIDE =================
import liftSlideMain from "../assets/lift and slide doors.jpg";
import liftSlideOpen from "../assets/lift-slide/lsopen.png";
import liftSlideSeries from "../assets/lift-slide/lsseries.png";

export const PRODUCTS = [
    {
        id: 1,
        slug: "sliding-systems",
        name: "uPVC Sliding Systems",
        category: "WINDOWS SYSTEM",
        shortDesc:
            "Smooth-glide sliding window and door systems designed for large openings with excellent weather resistance.",
        highlights: [
            "Smooth sliding rollers",
            "Weather resistant",
            "Low maintenance",
            "High load-bearing capacity",
        ],
        applications: ["Living Rooms", "Balconies", "Commercial Buildings"],
        image: slidingMain,
        configurations: ["2-Track", "3-Track", "4-Track"],
        configImage: slidingConfig,
        series: [
            { name: "Eco Series", image: ecoSeries },
            { name: "Prima Series", image: primaSeries },
            { name: "Royal Series", image: royalSeries },
        ],
    },
    {
        id: 2,
        slug: "casement-windows",
        name: "uPVC Casement Windows",
        category: "WINDOWS SYSTEM",
        shortDesc:
            "Side-hung and top-hung casement windows providing excellent ventilation, security, and insulation.",
        highlights: [
            "Multi-point locking",
            "Slim sightlines",
            "Superior ventilation",
            "Easy operation",
        ],
        applications: ["Bedrooms", "Kitchens", "Offices"],
        image: casementMain,
        configurations: ["Side Hung", "Top Hung"],
        configImage: casementOpening,
        series: [
            { name: "Prima Series", image: casementPrimaProfile },
            { name: "Royal Series", image: casementRoyalProfile },
        ],
    },
    {
        id: 3,
        slug: "fixed-windows",
        name: "uPVC Fixed Windows",
        category: "WINDOWS SYSTEM",
        shortDesc:
            "Non-openable windows designed for maximum daylight and aesthetics.",
        highlights: [
            "Maximum light transmission",
            "No moving parts",
            "Energy efficient",
            "Custom sizes available",
        ],
        applications: ["Staircases", "Feature Walls", "Commercial Facades"],
        image: fixedMain,
        configurations: ["Single Pane", "Multi-Pane"],
        configImage: fixedConfig,
        series: [{ name: "Fixed Series", image: fixedSeries }],
    },
    {
        id: 4,
        slug: "tilt-turn-windows",
        name: "uPVC Tilt & Turn Windows",
        category: "WINDOWS SYSTEM",
        shortDesc:
            "Dual opening system offering both ventilation and full opening access.",
        highlights: [
            "Tilt for ventilation",
            "Turn for full opening",
            "Child safety locks",
            "Easy to clean",
        ],
        applications: ["High-rise Apartments", "Bedrooms", "Studies"],
        image: tiltTurnMain,
        configurations: ["Tilt Mode", "Turn Mode"],
        configImage: tiltTurnConfig,
        series: [{ name: "Tilt & Turn Series", image: tiltTurnOpen }],
    },
    {
        id: 5,
        slug: "french-doors",
        name: "uPVC French Doors",
        category: "DOORS SYSTEM",
        shortDesc:
            "Elegant door systems that enhance aesthetics and openness.",
        highlights: [
            "Classic design",
            "Wide opening",
            "Strong multi-point locking system",
        ],
        applications: ["Balconies", "Living Rooms"],
        image: frenchMain,
        configurations: ["Double Door"],
        configImage: frenchOpen,
        series: [{ name: "French Door Series", image: frenchSeries }],
    },
    {
        id: 6,
        slug: "lift-slide-doors",
        name: "uPVC Lift & Slide Doors",
        category: "DOORS SYSTEM",
        shortDesc:
            "Premium sliding door systems engineered for large spans and luxury interiors.",
        highlights: [
            "Smooth lift mechanism",
            "Minimal visible frame",
            "Floor-to-ceiling glass option",
            "Heavy duty",
        ],
        applications: ["Patios", "Terraces", "Luxury Villas"],
        image: liftSlideMain,
        configurations: ["2-Panel", "3-Panel"],
        configImage: liftSlideOpen,
        series: [{ name: "Lift & Slide Series", image: liftSlideSeries }],
    },
];
