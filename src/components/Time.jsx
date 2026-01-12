import { FiClock, FiCalendar } from "react-icons/fi";

import { FaPrayingHands } from "react-icons/fa";

const Time = () => {
  const features = [
    {
      id: 1,
      icon: <FiClock />,
      title: "SUNDAY SERVICE",
      subtitle: "8AM - 12PM",
      text: "Live service every sundays.",
    },
    {
      id: 2,
      icon: <FiCalendar />,
      title: "WEDNESDAYS",
      subtitle: "5PM-7PM",
      text: "Midweek Service on Wednesdays.",
    },
    {
      id: 3,
      icon: <FaPrayingHands />,
      title: "CONVENANT HOUR OF PRAYERS",
      subtitle: "MON-FRI",
      text: "Prayers and Intercession every mornings.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* <h1 className="text-[15px] font-bold text-center">OUR SERVICES</h1> */}
      <p className="text-4xl md:text-5xl font-bold mt-3 text-center">
        Join Us In Worship
      </p>
      <p className=" text-xl mt-3 text-center">
        Experience the presence of God with us at any of our weekly services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {features.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white text-center rounded-2xl shadow-sm"
          >
            <div className="text-3xl mb-4 flex items-center justify-center">
              {item.icon}
            </div>

            <h2 className="text-[20px] font-bold mb-1">{item.title}</h2>

            <h3 className="text-sm  mb-3">{item.subtitle}</h3>

            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
