import React from 'react';

// Import your images
import hamptaImg from '../../assets/images/treks/hampta.jpg';
import kedarkanthaImg from '../../assets/images/treks/kedarkantha.png';
import valleyImg from '../../assets/images/treks/valley.jpg';

const trekPackages = [
  {
    name: "Hampta Pass Trek",
    duration: "5 Days, 4 Nights",
    altitude: "14,100 ft",
    region: "Himachal Pradesh",
    route: "Manali → Jobra → Chikka → Balu ka Ghera → Hampta Pass → Siagoru → Chatru → Chandratal → Manali",
    inclusions: "Meals, transport, certified guides, tents, permits",
    price: "₹6,999/person",
    image: hamptaImg
  },
  {
    name: "Kedarkantha Trek",
    duration: "6 Days, 5 Nights",
    altitude: "12,500 ft",
    region: "Uttarakhand",
    route: "Sankri → Juda ka Talab → Kedarkantha Base → Kedarkantha Summit → Hargaon → Sankri",
    inclusions: "Meals, camping, guide, permits",
    price: "₹5,999/person",
    image: kedarkanthaImg
  },
  {
    name: "Valley of Flowers Trek",
    duration: "6 Days, 5 Nights",
    altitude: "14,100 ft",
    region: "Uttarakhand",
    route: "Govindghat → Ghangaria → Valley of Flowers → Hemkund Sahib → Ghangaria → Govindghat",
    inclusions: "Guide, food, permits, stay",
    price: "₹7,499/person",
    image: valleyImg
  }
];

const Destination = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-blue-800 font-bold">Trek & Tour Packages</h2>
      <p className="lead text-center mb-4 text-gray-600">
        Explore India’s most iconic treks and travel experiences. All packages include certified guides, meals, and full support for a stress-free adventure.
      </p>
      <div className="row">
        {trekPackages.map((trek, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm transition transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src={trek.image}
                alt={trek.name}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0"
                }}
              />
              <div className="card-body">
                <h4 className="card-title text-blue-700 font-semibold">{trek.name}</h4>
                <ul className="list-unstyled mb-2 text-gray-700">
                  <li><strong>Duration:</strong> {trek.duration}</li>
                  <li><strong>Altitude:</strong> {trek.altitude}</li>
                  <li><strong>Region:</strong> {trek.region}</li>
                  <li><strong>Route:</strong> {trek.route}</li>
                  <li><strong>Inclusions:</strong> {trek.inclusions}</li>
                </ul>
                <div className="fw-bold text-indigo-600 mb-2">{trek.price}</div>
                <a
                  href="/book-now"
                  className="btn btn-outline-primary btn-sm transition duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  See Full Itinerary & Book
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h5 className="text-blue-800 font-semibold">Other Services</h5>
        <ul className="text-gray-700">
          <li>Hotel Booking Assistance</li>
          <li>Verified Local Taxi Services</li>
          <li>Customizable Honeymoon Trips</li>
          <li>Custom Trips & Group Tours</li>
          <li>24/7 Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Destination;
