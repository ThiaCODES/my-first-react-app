import { AiFillStar } from "react-icons/ai";
import redheel from "../Asset/Red_Heels.png";
import nudeheel from "../Asset/nude_Heels.png";
import designerheel from "../Asset/Designer_Heels.png";
import highheel from "../Asset/high-heel-shoes.png";
import blueheel from "../Asset/Blue_Heel.png";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
    slug: "nike-air-monarch-iv",
  },
  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    slug: "nike-waffle-one-sneaker",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
    slug: "nike-running-shoe",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "flats",
    slug: "flat-slip-on-pumps",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    slug: "knit-ballet-flat",
  },
  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
    slug: "loafer-flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    slug: "nike-zoom-freak",
  },
  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
    slug: "nike-mens-sneaker",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",

    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
    slug: "puma-black-oce",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
    slug: "pacer-future-sneaker",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    slug: "unisex-adult-super",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
    slug: "roma-basic-sneaker",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    slug: "pacer-future-doubleknit",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
    slug: "fusion-evo-golf-shoe",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
    slug: "rainbow-chex-skate",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
    slug: "low-top-trainers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "sandals",
    slug: "vans-unisex-low-top",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "sandals",
    slug: "classic-bandana-sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "heels",
    slug: "chunky-high-heel",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "puma",
    color: "black",
    category: "heels",
    slug: "slip-on-stiletto-high-heel",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "heels",
    slug: "dream-pairs-court-shoes",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    slug: "nike-air-vapormax-plus",
  },
  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "heels",
    slug: "low-mid-block-heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    slug: "chunky-high-heel-2",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
    slug: "amore-fashion-stilettos",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    slug: "bridal-sandals-glitter",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    slug: "wedding-prom-bridal",
  },
  {
    img: "https://m.media-amazon.com/images/I/71PxkG+s4rL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Skechers Men's Energy Afterburn",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Skechers",
    color: "black",
    category: "flats",
    slug: "skechers-mens-energy-afterburn",
  },
  {
    img: "https://m.media-amazon.com/images/I/71qetQtleuL._AC_UL480_FMwebp_QL65_.jpg",
    title: "VILOCY Men's Casual Dress Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vilocy",
    color: "black",
    category: "flats",
    slug: "vilocy-mens-casual-dress-sneaker",
  },
  {
    img: { blueheel },
    title: "Gorgeous  Heels",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Heel",
    color: "blue",
    category: "heel",
    slug: "gorgeous-heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/713ZQh-rVhL._AC_SY695_.jpg",
    title: "Hawkwell Lightweight Walking Sneakers",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Hawkwell",
    color: "black",
    category: "flats",
    slug: "hawkwell-mens-big-size-plus-size-casual-lightweight-walking-sneakers",
  },
  {
    img: { redheel },
    title: "Red Sparking Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Heel",
    color: "black",
    category: "heels",
    slug: "red-sparking-heel",
  },
  {
    img: { nudeheel },
    title: "Fashion high",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "heel",
    color: "nude",
    category: "heel",
    slug: "fashion-high",
  },
  {
    img: { designerheel },
    title: "Designer Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Heel",
    color: "black",
    category: "heels",
    slug: "designer-heel",
  },
  {
    img: { highheel },
    title: "Get Classy and shine",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Heels",
    color: "black",
    category: "heels",
    slug: "get-classy-and-shine",
  },
];

export default data;
