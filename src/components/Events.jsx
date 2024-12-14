import React from "react";

const events = [
  {
    id: 1,
    title: "Basketball Championship 2025",
    date: "January 15, 2025",
    location: "Dhaka, Bangladesh",
    image:
      "https://assets.fiba.basketball/image/upload/w_2000/f_auto/q_auto/v1727701473/neppkh07gpgkpkcpiilw.jpg",
  },
  {
    id: 2,
    title: "Marathon for Health",
    date: "February 20, 2025",
    location: "Chittagong, Bangladesh",
    image:
      "https://www.visitgreenwich.org.uk/imageresizer/?image=%2Fdmsimgs%2FThe_Big_Half_-_Mo_-_resize_-_837678564.jpg&action=ProductDetailProFullWidth",
  },
  {
    id: 3,
    title: "Tennis Open 2025",
    date: "March 25, 2025",
    location: "Khulna, Bangladesh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5W98_za9oX-qzpDhC5GWHnCHEGNx0spPiQ&s",
  },
  {
    id: 4,
    title: "Football League Finals",
    date: "April 10, 2025",
    location: "Sylhet, Bangladesh",
    image:
      "https://proind.org/wp-content/uploads/2021/12/Football-Tournaments.jpg",
  },
];

const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative min-w-[300px] max-w-[300px] bg-white rounded-lg shadow-md p-4 group overflow-hidden"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="rounded-lg mb-4 w-full h-40 object-cover group-hover:blur-sm transition duration-300"
              />

              {/* Event Details */}
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm text-gray-600">{event.location}</p>

              {/* Overlay for Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
