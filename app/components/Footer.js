import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customBlack p-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-white text-sm mt-4 md:mt-6">© 2024 Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
