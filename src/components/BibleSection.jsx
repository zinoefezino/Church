import Button from "./Button";

const BibleSection = () => {
  return (
    <section>
      <div className="flex-col flex md:flex-row gap-4 items-center border border-gray-400  rounded-md bg-[#f3f4f5] max-w-7xl mx-auto px-6 py-10 ">
        {/* left image  */}
        <div>
          <img src="/bible.jpg" className="rounded-md" />
        </div>

        {/* right text  */}
        <div>
          <h2 className="mb-4 text-gray-600">LATEST SERMON</h2>
          <p className="text-4xl md:text-5xl font-bold mb-4">
            How to study the Bible
          </p>

          <p className="leading-7 mb-4 max-w-xl text-gray-600">
            Reading the Bible is one thing. Understanding it is another. When
            you can do both, it's really life changing. God speaks to us through
            His words, so let us learn to read the Bible together.
          </p>
          <Button text="Join Bible Study" />
        </div>
      </div>
    </section>
  );
};

export default BibleSection;
