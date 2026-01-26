import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
  ],
  resources: [
    { name: 'Alumni', href: '/alumni' },
    { name: 'News & Events', href: '/news' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin Login', href: '/admin/login' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-500 p-2 rounded-lg">
                <GraduationCap className="h-7 w-7 text-primary-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg">Excellence</span>
                <span className="text-xs text-gray-300 -mt-1">High School</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Building future leaders through academic excellence, character development, and holistic growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 hover:text-primary-900 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  123 Education Road, Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">+256 700 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@excellencehighschool.ac.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Excellence High School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
