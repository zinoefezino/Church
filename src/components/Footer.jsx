import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-10 mt-10 cursor-pointer">
      <div className="container mx-auto px-4">
        {/* Four columns on desktop, one on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4"> Church</h3>
            <p className="text-gray-400">Where Faith Moves Forward</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <p className="text-gray-400">About</p>
            <p className="text-gray-400">Visit</p>
            <p className="text-gray-400">Donate</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400">Event</p>
            <p className="text-gray-400">Contact Us</p>
            {/* <p className="text-gray-400">FAQ</p> */}
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ministries</h3>
            <p className="text-gray-400">Kids</p>
            <p className="text-gray-400">Youth</p>
            {/* <p className="text-gray-400">Cookie Policy</p> */}
          </div>
        </div>

        {/* Social links centered under the footer */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
