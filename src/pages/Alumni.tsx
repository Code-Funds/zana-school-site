import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Briefcase, Heart, Users, Calendar, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const notableAlumni = [
  {
    name: 'Dr. Sarah Kamau',
    year: '2005',
    achievement: 'Renowned Surgeon at Mulago Hospital, leading cardiac surgery department',
  },
  {
    name: 'Eng. Patrick Ssebunya',
    year: '2008',
    achievement: 'Civil Engineer, designed major infrastructure projects across East Africa',
  },
  {
    name: 'Advocate Mary Nakimuli',
    year: '2010',
    achievement: 'Human Rights Lawyer, championing social justice and equality',
  },
  {
    name: 'Prof. David Mugisha',
    year: '2003',
    achievement: 'University Professor and published researcher in environmental science',
  },
  {
    name: 'Hon. Grace Apio',
    year: '2006',
    achievement: 'Member of Parliament, advocate for education reform',
  },
  {
    name: 'Robert Okello',
    year: '2012',
    achievement: 'Successful entrepreneur, founder of leading tech startup',
  },
];

const contributions = [
  {
    icon: Award,
    title: 'Mentorship Programs',
    description: 'Alumni mentor current students in career guidance and life skills',
  },
  {
    icon: Briefcase,
    title: 'Career Networking',
    description: 'Alumni connect students with internship and job opportunities',
  },
  {
    icon: Heart,
    title: 'Scholarships & Donations',
    description: 'Financial support for deserving students through alumni contributions',
  },
  {
    icon: Users,
    title: 'Guest Speakers',
    description: 'Alumni share their experiences and inspire the next generation',
  },
];

export function Alumni() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Alumni</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Celebrating our graduates and their remarkable achievements across the globe
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Welcome, Excellence Alumni
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once a student at Excellence High School, always a member of our family. Our alumni community 
              spans continents and professions, united by the shared experience of learning, growing, and 
              thriving within these walls.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are immensely proud of what our graduates have accomplished and continue to achieve. 
              Your success stories inspire our current students and remind us why we do what we do. 
              Stay connected, give back, and help us continue the legacy of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Notable Alumni
            </h2>
            <p className="text-lg text-gray-600">
              Excellence graduates making a difference in their fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notableAlumni.map((alumni) => (
              <Card key={alumni.name} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-primary-900">
                      {alumni.name}
                    </h3>
                    <span className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                      Class of {alumni.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {alumni.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Contributions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How Alumni Give Back
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our alumni remain actively engaged in supporting the school and current students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributions.map((contribution) => (
              <Card key={contribution.title} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contribution.icon className="h-8 w-8 text-primary-900" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-3">
                    {contribution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {contribution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">5,000+</div>
              <div className="text-gray-300">Alumni Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">25+</div>
              <div className="text-gray-300">Countries Represented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">150+</div>
              <div className="text-gray-300">Annual Mentorship Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">UGX 50M+</div>
              <div className="text-gray-300">Scholarships Funded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Alumni Events
              </h2>
              <p className="text-lg text-gray-600">
                Stay connected through our regular alumni gatherings
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary-900" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                          Annual Alumni Homecoming
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Reunite with classmates, tour the campus, and celebrate achievements
                        </p>
                        <p className="text-sm text-gray-500">November 15, 2026 • School Campus</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-accent-700" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                          Alumni Networking Night
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Connect with fellow alumni, share opportunities, and expand your network
                        </p>
                        <p className="text-sm text-gray-500">Quarterly Events • Various Locations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <LinkIcon className="h-8 w-8 text-primary-900" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our alumni network to stay updated on events, connect with fellow graduates, 
              and support current students. Your journey with Excellence continues!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-900 hover:bg-primary-800">
                  Join Alumni Network
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
