const Time = () => {
  const features = [
    {
      id: 1,
      icon: "🔥",
      title: "SUNDAY SERVICE",
      subtitle: "8AM - 12PM",
      text: "Sundays where we come together to worship God, Hear His word, and experience His presence. All new and old members are welcomed to worship with us!",
    },
    {
      id: 2,
      icon: "⛪",
      title: "WEDNESDAYS",
      subtitle: "5PM-7PM",
      text: "Midweek Service on Wednesdays.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "CONVENANT HOUR OF PRAYERS",
      subtitle: "MON-FRI",
      text: "Prayers and Intercession every mornings.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-[15px] font-bold md:text-center">OUR SERVICES</h1>
      <p className="text-3xl text-[#facf2e] mt-3 md:text-center">
        JOIN US IN WORSHIP
      </p>
      <p className="leading-5 mt-3 md:text-center">
        Experience the presence of God with us at any of our weekly services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {features.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">{item.icon}</div>

            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>

            <h3 className="text-sm text-[#facf2e] mb-3">{item.subtitle}</h3>

            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
