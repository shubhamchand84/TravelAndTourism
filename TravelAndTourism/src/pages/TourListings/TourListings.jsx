
import React, { useState } from "react";
import { FaMountain } from "react-icons/fa";
import "./TourListings.css";

// Your existing trek images
import Singapore from "../../assets/images/populars/Kedarkantha.avif";
import Kiwiana from "../../assets/images/populars/roopkund.jpg";
import Quito from "../../assets/images/populars/Valley-of-Flower.jpg";
import Anchorage from "../../assets/images/populars/KuariPass.jpg";
import Cuzco from "../../assets/images/populars/hariKiDun.jpeg";
import Ushuaia from "../../assets/images/populars/dehraBugyal.jpg";
import Santiago from "../../assets/images/populars/chandrsilla.jpg";
import Explorer from "../../assets/images/populars/kuari-pass.jpg";

// Panch Kedar images
import kedarnathImg from "../../assets/images/tours/kedarnath.jpg";
import tungnathImg from "../../assets/images/tours/tungnath.jpeg";
import kalpeshwarImg from "../../assets/images/tours/kalpeshwar.jpg";
import rudranathImg from "../../assets/images/tours/rudranath.jpg";
import madhyamaheshwarImg from "../../assets/images/tours/madhyamaheshwar.jpg";

// Char Dham images
import yamunotriImg from "../../assets/images/tours/yamunotri.jpg";
import gangotriImg from "../../assets/images/tours/gangotri.jpg";
import badrinathImg from "../../assets/images/tours/badrinath.jpg";

const toursData = [
  // Uttarakhand Treks
  {
    id: 1,
    title: "Kedarkantha Trek (Uttarakhand)",
    description:
      "A scenic winter trek through snow-covered forests and stunning Himalayan peaks.",
    price: 5999,
    category: "adventure",
    state: "Uttarakhand",
    image: Singapore,
  },
  {
    id: 2,
    title: "Valley of Flowers Trek (Uttarakhand)",
    description:
      "A UNESCO World Heritage trek with vibrant alpine flowers and panoramic views.",
    price: 7499,
    category: "adventure",
    state: "Uttarakhand",
    image: Quito,
  },
  {
    id: 3,
    title: "Har Ki Dun Trek (Uttarakhand)",
    description:
      "A beautiful trek in the Garhwal Himalayas with rich cultural and natural heritage.",
    price: 5499,
    category: "adventure",
    state: "Uttarakhand",
    image: Cuzco,
  },
  {
    id: 4,
    title: "Chandrashila Trek (Uttarakhand)",
    description:
      "A popular trek with mesmerizing sunrise views over the Himalayas.",
    price: 5999,
    category: "adventure",
    state: "Uttarakhand",
    image: Santiago,
  },
  // Himachal Pradesh Treks
  {
    id: 5,
    title: "Hampta Pass Trek (Himachal Pradesh)",
    description:
      "A breathtaking crossover trek from lush Kullu valley to the barren Spiti landscapes.",
    price: 6999,
    category: "adventure",
    state: "Himachal Pradesh",
    image: Anchorage,
  },
  {
    id: 6,
    title: "Bhrigu Lake Trek (Himachal Pradesh)",
    description: "A short and scenic trek to a high-altitude glacial lake near Manali.",
    price: 5499,
    category: "adventure",
    state: "Himachal Pradesh",
    image: Ushuaia,
  },
  {
    id: 7,
    title: "Pin Parvati Trek (Himachal Pradesh)",
    description:
      "An adventurous trek connecting lush green Kullu with barren Spiti landscapes.",
    price: 7999,
    category: "adventure",
    state: "Himachal Pradesh",
    image: Kiwiana,
  },
  {
    id: 8,
    title: "Indrahar Pass Trek (Himachal Pradesh)",
    description:
      "A thrilling trek in the Dhauladhar range offering panoramic views of Kangra valley.",
    price: 6999,
    category: "adventure",
    state: "Himachal Pradesh",
    image: Explorer,
  },
];

// Panch Kedar Data
const panchKedarData = [
  {
    id: 13,
    name: "Kedarnath Dham",
    description: "The sacred Kedarnath temple and nearby trek routes.",
    image: kedarnathImg,
  },
  {
    id: 14,
    name: "Tungnath",
    description: "The highest Shiva temple and beautiful trek trails.",
    image: tungnathImg,
  },
  {
    id: 15,
    name: "Kalpeshwar",
    description: "A serene temple nestled in dense forests.",
    image: kalpeshwarImg,
  },
  {
    id: 16,
    name: "Rudranath",
    description: "A remote temple surrounded by rich flora and fauna.",
    image: rudranathImg,
  },
  {
    id: 17,
    name: "Madhyamaheshwar",
    description: "A sacred shrine with scenic mountain views.",
    image: madhyamaheshwarImg,
  },
];

// Char Dham Data
const charDhamData = [
  {
    id: 10,
    name: "Yamunotri Dham",
    description: "The source of the Yamuna River and a revered pilgrimage spot.",
    image: yamunotriImg,
  },
  {
    id: 11,
    name: "Gangotri Dham",
    description: "The origin of the holy Ganges River.",
    image: gangotriImg,
  },
  {
    id: 12,
    name: "Badrinath Dham",
    description: "One of the holiest temples dedicated to Lord Vishnu.",
    image: badrinathImg,
  },
  {
    id: 13,
    name: "Kedarnath Dham",
    description: "The sacred temple dedicated to Lord Shiva.",
    image: kedarnathImg,
  },
];

const categoryIcons = {
  adventure: <FaMountain />,
};

const TourListings = () => {
  const [selectedState, setSelectedState] = useState("all");

  const filteredTours =
    selectedState === "all"
      ? toursData
      : toursData.filter((tour) => tour.state === selectedState);

  return (
    <div className="container py-5">
      {/* Himalayan Trek Listings Section */}
      <h2 className="mb-4 text-center text-blue-800 fw-bold">
        Himalayan Trek Listings
      </h2>
      <p className="lead text-center text-gray-700 mb-5">
        Explore the most scenic trekking experiences in Uttarakhand and Himachal
        Pradesh.
      </p>

      {/* State Filter */}
      <div className="filter-buttons text-center mb-5">
        {["all", "Uttarakhand", "Himachal Pradesh"].map((state) => (
          <button
            key={state}
            className={`filter-btn ₹{selectedState === state ? "active" : ""}`}
            onClick={() => setSelectedState(state)}
          >
            {state}
          </button>
        ))}
      </div>

      {/* Trek Cards */}
      <div className="row">
        {filteredTours.map((tour) => (
          <div className="col-md-4 mb-4" key={tour.id}>
            <div className="tour-card shadow-sm">
              <img src={tour.image} alt={tour.title} className="tour-img" />
              <div className="tour-content p-3">
                <h5 className="fw-bold">{tour.title}</h5>
                <p className="text-muted">{tour.description}</p>
                <p className="fw-bold text-primary">
                  ₹{tour.price.toLocaleString()}
                </p>
                <span className="category-icon">{categoryIcons[tour.category]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Panch Kedar Section */}
      <h2 className="mb-4 text-center text-green-700 fw-bold mt-5">
        Panch Kedar Destinations
      </h2>
      <p className="lead text-center text-gray-700 mb-4">
        Discover the five sacred temples of Panch Kedar nestled in the Himalayas.
      </p>
      <div className="row">
        {panchKedarData.map((place) => (
          <div className="col-md-3 mb-4" key={place.id}>
            <div className="panchkedar-card shadow-sm">
              <img src={place.image} alt={place.name} className="panchkedar-img" />
              <div className="panchkedar-content p-3">
                <h5 className="fw-bold">{place.name}</h5>
                <p className="text-muted">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Char Dham Section */}
      <h2 className="mb-4 text-center text-indigo-700 fw-bold mt-5">
        Char Dham Destinations
      </h2>
      <p className="lead text-center text-gray-700 mb-4">
        Visit the four sacred Char Dham pilgrimage sites in Uttarakhand.
      </p>
      <div className="row">
        {charDhamData.map((place) => (
          <div className="col-md-3 mb-4" key={place.id}>
            <div className="chardham-card shadow-sm">
              <img src={place.image} alt={place.name} className="chardham-img" />
              <div className="chardham-content p-3">
                <h5 className="fw-bold">{place.name}</h5>
                <p className="text-muted">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourListings;
