'use client';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
    //   subItems: [
    //     { name: 'Renovation', href: '/services/renovation' },
    //     { name: 'Office Fitout', href: '/services/office-fitout' },
    //     { name: 'Maintenance', href: '/services/maintenance' },
    //     { name: 'Others', href: '/services/others' }
    //   ]
    href: '/services'
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 text-2xl"
        aria-label="Toggle menu"
      >
        <FiMenu />
      </button>

      {/* Full-screen Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-slate-950 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="p-2 text-2xl text-white"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>
        {/* Logo */}
        {/* Menu Items */}
        <nav className="flex flex-col justify-center h-[calc(100%-150px)] overflow-y-auto text-white text-center">
        <h1 className='text-white text-4xl'>MUHEEB</h1>
          <ul className="space-y-6 p-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                    href={item.href} 
                    className="text-2xl font-medium block py-2 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                >
                    {item.name}
                </a>
                
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Contact Buttons */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t">
          <div className="flex flex-col space-y-4">
            <a 
              href="https://wa.me/971501234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            
            <a 
              href="tel:+971501234567"
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FiPhone size={20} />
              <span>Call Us</span>
            </a>
            
            <a 
              href="/get-a-quote"
              className="flex items-center justify-center space-x-2 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              <FiMessageSquare size={20} />
              <span>Get a Quote</span>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}