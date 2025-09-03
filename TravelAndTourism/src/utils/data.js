






// Destination Images
import tour5 from "../assets/images/tours/5.webp";
import tour4 from "../assets/images/tours/4.jpg";
import tour6 from "../assets/images/tours/6.jpg";
import tour7 from "../assets/images/tours/7.avif";
import tour8 from "../assets/images/tours/8.jpg";
import tour9 from "../assets/images/tours/9.png";
import tour10 from "../assets/images/tours/10.jpg";
import tour11 from "../assets/images/tours/11.jpg";

// New Destinations Images
import rishikeshImg from "../assets/images/tours/rishikesh.jpeg";
import haridwarImg from "../assets/images/tours/haridwar.jpg";
import yamunotriImg from "../assets/images/tours/yamunotri.jpg";
import gangotriImg from "../assets/images/tours/gangotri.jpg";
import badrinathImg from "../assets/images/tours/badrinath.jpg";
import kedarnathImg from "../assets/images/tours/kedarnath.jpg";
import tungnathImg from "../assets/images/tours/tungnath.jpeg";
import kalpeshwarImg from "../assets/images/tours/kalpeshwar.jpg";
import rudranathImg from "../assets/images/tours/rudranath.jpg";
import madhyamaheshwarImg from "../assets/images/tours/madhyamaheshwar.jpg";

// Populars Card Images
import Singapore from "../assets/images/populars/Kedarkantha.avif";
import Kiwiana from "../assets/images/populars/roopkund.jpg";
import Quito from "../assets/images/populars/Valley-of-Flower.jpg";
import Anchorage from "../assets/images/populars/KuariPass.jpg";
import Cuzco from "../assets/images/populars/hariKiDun.jpeg";
import Ushuaia from "../assets/images/populars/dehraBugyal.jpg";
import Santiago from "../assets/images/populars/chandrsilla.jpg";
import Explorer from "../assets/images/populars/kuari-pass.jpg";

/* =============================
   PANCH KEDAR DESTINATIONS
============================= */
export const panchKedarData = [
  { id: 13, name: "Kedarnath Dham", tours: "4 trips and activities", image: kedarnathImg, link: "kedarnath-tour" },
  { id: 14, name: "Tungnath", tours: "3 trips and activities", image: tungnathImg, link: "tungnath-tour" },
  { id: 15, name: "Kalpeshwar", tours: "3 trips and activities", image: kalpeshwarImg, link: "kalpeshwar-tour" },
  { id: 16, name: "Rudranath", tours: "3 trips and activities", image: rudranathImg, link: "rudranath-tour" },
  { id: 17, name: "Madhyamaheshwar", tours: "3 trips and activities", image: madhyamaheshwarImg, link: "madhyamaheshwar-tour" },
];

/* =============================
   CHAR DHAM DESTINATIONS
============================= */
export const charDhamData = [
  { id: 10, name: "Yamunotri Dham", tours: "4 trips and activities", image: yamunotriImg, link: "yamunotri-tour" },
  { id: 11, name: "Gangotri Dham", tours: "4 trips and activities", image: gangotriImg, link: "gangotri-tour" },
  { id: 12, name: "Badrinath Dham", tours: "4 trips and activities", image: badrinathImg, link: "badrinath-tour" },
  { id: 13, name: "Kedarnath Dham", tours: "4 trips and activities", image: kedarnathImg, link: "kedarnath-tour" },
];

/* =============================
   OTHER DESTINATIONS
============================= */
export const otherDestinationsData = [
  { id: 0, name: "Kedarkantha Trek", tours: "5 treks and activities", image: tour5, link: "kedarkantha-trek" },
  { id: 1, name: "Roopkund Trek", tours: "6 treks and activities", image: tour4, link: "roopkund-trek" },
  { id: 2, name: "Valley of Flowers", tours: "4 treks and activities", image: tour6, link: "valley-of-flowers" },
  { id: 3, name: "Kuari Pass Trek", tours: "3 treks and activities", image: tour7, link: "kuari-pass-trek" },
  { id: 4, name: "Har Ki Dun", tours: "5 treks and activities", image: tour8, link: "har-ki-dun" },
  { id: 5, name: "Dayara Bugyal Trek", tours: "4 treks and activities", image: tour9, link: "dayara-bugyal-trek" },
  { id: 6, name: "Chopta Chandrashila", tours: "6 treks and activities", image: tour10, link: "chopta-chandrashila" },
  { id: 7, name: "Nag Tibba Trek", tours: "3 treks and activities", image: tour11, link: "nag-tibba-trek" },
  { id: 8, name: "Rishikesh", tours: "8 trips and activities", image: rishikeshImg, link: "rishikesh-tour" },
  { id: 9, name: "Haridwar", tours: "5 trips and activities", image: haridwarImg, link: "haridwar-tour" },
];

/* =============================
   POPULAR DESTINATIONS
============================= */
export const popularsData = [
  { id: 0, title: "Kedarkantha Winter Trek", image: Singapore, location: "Uttarkashi, Uttarakhand", category: ["Snow Trek", "Camping"], days: "6 days - 5 nights", price: 9500, afterDiscount: 8800, rating: 5, reviews: 210 },
  { id: 1, title: "Roopkund Mystery Lake Trek", image: Kiwiana, location: "Chamoli, Uttarakhand", category: ["Adventure", "Glacial Trek"], days: "8 days - 7 nights", price: 13500, afterDiscount: 12900, rating: 4, reviews: 145 },
  { id: 2, title: "Valley of Flowers National Park Trek", image: Quito, location: "Govindghat, Uttarakhand", category: ["Floral Trail", "Photography"], days: "6 days - 5 nights", price: 8500, afterDiscount: 7900, rating: 5, reviews: 300 },
  { id: 3, title: "Kuari Pass Winter Trek", image: Anchorage, location: "Auli, Uttarakhand", category: ["Himalayan Views", "Camping"], days: "5 days - 4 nights", price: 8900, afterDiscount: 0, rating: 4, reviews: 180 },
  { id: 4, title: "Har Ki Dun Valley Trek", image: Cuzco, location: "Sankri, Uttarakhand", category: ["River Valley", "Camping"], days: "7 days - 6 nights", price: 9500, afterDiscount: 0, rating: 4, reviews: 122 },
  { id: 5, title: "Dayara Bugyal Meadows Trek", image: Ushuaia, location: "Raithal, Uttarakhand", category: ["Grassland", "Easy Trek"], days: "4 days - 3 nights", price: 6900, afterDiscount: 0, rating: 5, reviews: 165 },
  { id: 6, title: "Chopta Chandrashila Trek", image: Santiago, location: "Chopta, Uttarakhand", category: ["Summit Trek", "Snow Trail"], days: "4 days - 3 nights", price: 7900, afterDiscount: 0, rating: 4, reviews: 188 },
  { id: 7, title: "Nag Tibba Weekend Trek", image: Explorer, location: "Pantwari, Uttarakhand", category: ["Beginner Friendly", "Overnight"], days: "2 days - 1 night", price: 2100, afterDiscount: 0, rating: 4, reviews: 92 },
];

/* =============================
   FILTER OPTIONS
============================= */
export const location = [
  "Kedarkantha", "Roopkund", "Valley of Flowers", "Kuari Pass", "Har Ki Dun", "Dayara Bugyal", "Chopta Chandrashila", "Nag Tibba",
  "Rishikesh", "Haridwar", "Yamunotri", "Gangotri", "Badrinath", "Kedarnath", "Tungnath", "Panch Kedar"
];

export const Categories = [
  "Snow Trek", "Meadow Trek", "Floral Trail", "River Valley", "Weekend Trek"
];

export const Duration = [
  "1-3 Days", "3-5 Days", "5-7 Days", "7-10 Days"
];

export const PriceRange = [
  "₹ 0 - ₹ 3000", "₹ 3000 - ₹ 6000", "₹ 6000 - ₹ 9000", "₹ 9000 - ₹ 12000", "₹ 12000+"
];
export const destinationsData = [...otherDestinationsData, ...popularsData];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];




