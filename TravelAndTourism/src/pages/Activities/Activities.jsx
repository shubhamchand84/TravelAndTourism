import React from "react";
import "./Activities.css"; // optional styling

// Local images
import RaftingImg from "../../assets/images/Activities/Rafting.jpg";
import BungeeImg from "../../assets/images/Activities/bungee.jpg";
import ParaglidingImg from "../../assets/images/Activities/paragliding.jpg";
import CampingImg from "../../assets/images/Activities/camping.jpg";

const activitiesData = [
  {
    id: 1,
    title: "River Rafting",
    description:
      "Experience the thrill of navigating rapid waters amidst breathtaking Himalayan landscapes.",
    image: RaftingImg,
  },
  {
    id: 2,
    title: "Bungee Jumping",
    description:
      "Take the leap of faith from dizzying heights for an unforgettable adrenaline rush.",
    image: BungeeImg,
  },
  {
    id: 3,
    title: "Paragliding",
    description:
      "Soar above valleys and mountains while enjoying panoramic views of the Himalayas.",
    image: ParaglidingImg,
  },
  {
    id: 4,
    title: "Camping",
    description:
      "Sleep under a canopy of stars surrounded by serene mountain scenery.",
    image: CampingImg,
  },
];

const Activities = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-blue-800 fw-bold">Adventure Activities</h2>
      <p className="lead text-center text-gray-700 mb-5">
        Add more excitement to your Himalayan adventure with these thrilling activities.
      </p>

      <div className="row">
        {activitiesData.map((activity) => (
          <div className="col-md-3 mb-4" key={activity.id}>
            <div className="card shadow-sm h-100">
              <img
                src={activity.image}
                alt={activity.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="fw-bold">{activity.title}</h5>
                <p className="text-muted">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
