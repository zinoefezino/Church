import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center md:justify-start text-white"
        style={{
          backgroundImage: "url('/Hero.avif')",
        }}
      >
        <div className="text-center md:text-left md:p-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Church</h1>
          <p className="text-xl mb-8 max-w-xl p-5">
            Join us as we grow in Jesus, serve others, and step boldly into
            God’s purpose for our lives. Together, we keep moving forward!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button text="Visit Us" />
            <Button text="Learn More" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
