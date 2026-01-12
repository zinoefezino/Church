const Section1 = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A place to grow, a people to call home
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            No matter where you're from or where you've been, you belong here.
            At Church, you'll find hope, purpose, and a family to walk with you.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full">
              Who we are
            </button>
            <button className="px-6 py-3">Plan a visit →</button>
          </div>
        </div>

        {/* Images */}
        <div className="relative w-full h-105  md:block">
          <img
            src="/image-1.jpg"
            className="absolute right-0 top-0 w-72 h-96 object-cover rounded-2xl"
          />
          <img
            src="/image-2.jpg"
            className="absolute right-40 top-24 w-64 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
