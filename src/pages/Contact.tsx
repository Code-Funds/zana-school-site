import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Education Road, Kampala, Uganda',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+256 700 123 456 / +256 700 789 012',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@excellencehighschool.ac.ug',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM',
    color: 'bg-orange-100 text-orange-700',
  },
];

const departments = [
  {
    title: 'Admissions Office',
    contact: 'admissions@excellencehighschool.ac.ug',
    phone: '+256 700 123 456',
  },
  {
    title: 'Academic Office',
    contact: 'academics@excellencehighschool.ac.ug',
    phone: '+256 700 234 567',
  },
  {
    title: 'Bursar\'s Office',
    contact: 'bursar@excellencehighschool.ac.ug',
    phone: '+256 700 345 678',
  },
  {
    title: 'Headteacher\'s Office',
    contact: 'headteacher@excellencehighschool.ac.ug',
    phone: '+256 700 456 789',
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
];

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            We're here to answer your questions and provide the information you need
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us, call us, or send us an email. We're always happy to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                Our Location
              </h2>
              <Card className="border-none shadow-md overflow-hidden">
                <div className="w-full h-96 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.14348573055!2d32.54494!3d0.31628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6c6b000000%3A0x0!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="School Location"
                  ></iframe>
                </div>
              </Card>
            </div>

            {/* Departments */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                Department Contacts
              </h2>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <Card key={dept.title} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-primary-900 mb-3">
                        {dept.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-accent-600" />
                          <span className="text-sm">{dept.contact}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-accent-600" />
                          <span className="text-sm">{dept.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected and get the latest updates on our social media channels
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6 text-center">
              How to Find Us
            </h2>
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    <strong>From Kampala City Center:</strong> Take the Northern Bypass heading towards Gayaza. 
                    Turn right at the Education Road junction (near Shell petrol station). The school is located 
                    500 meters on your left, clearly marked with our signpost.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>By Public Transport:</strong> Take a taxi to Gayaza and alight at Education Road junction. 
                    From there, you can walk (10 minutes) or take a boda-boda to the school entrance.
                  </p>
                  <p className="text-gray-700">
                    <strong>Parking:</strong> Ample parking is available for visitors within the school compound. 
                    Please report to the security gate upon arrival.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
