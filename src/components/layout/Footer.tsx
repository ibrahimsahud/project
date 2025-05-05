import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Twitter, Youtube, Facebook, Music } from 'lucide-react';
import { SOCIAL_MEDIA, CONTACT_INFO } from '../../utils/constants';

const Footer: React.FC = () => {
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Instagram': return <Instagram size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Youtube': return <Youtube size={20} />;
      case 'Facebook': return <Facebook size={20} />;
      case 'Music': return <Music size={20} />; // For TikTok
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OKTANT LANG</h3>
            <p className="mb-4">
              Transforming language learning through innovative methods and personalized teaching.
            </p>
            <div className="flex items-center space-x-4">
              {SOCIAL_MEDIA.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  {renderSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-red-500">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-red-500">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Payment Methods</h4>
              <div className="flex space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-2">Subscribe to get updates on new courses and special offers</p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} OKTANT LANG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;