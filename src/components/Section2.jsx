const Section2 = () => {
  const steps = [
    {
      title: "Attend Next Steps Class",
      description:
        "Learn about the Christian faith, our church and your purpose.",
      imageUrl: "/image-1.jpg",
    },
    {
      title: "Get Baptized",
      description:
        "Take the next step in your faith with baptism and publicly declare Christ.",
      imageUrl: "/image-3.jpg",
    },
    {
      title: "Serve",
      description:
        "Use your gifts to serve others and make an impact in our community.",
      imageUrl: "/image-2.jpg",
    },
  ];

  return (
    <>
      <div className="p-3 flex items-center justify-center flex-col">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10 text-center">
          Take your first step with Christ
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-7 max-w-xl p-2 text-center">
          Take the next step in your journey with Church. Whether you're new,
          looking to serve, or ready to be baptized, we’re here to guide you as
          you grow in faith.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl "
          >
            {/* background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${step.imageUrl}')` }}
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

            {/* text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section2;
