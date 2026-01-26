import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, BookOpen, Trophy, Heart, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Consistent outstanding performance in UNEB examinations with 98% pass rate',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Highly qualified and dedicated teachers committed to student success',
  },
  {
    icon: BookOpen,
    title: 'Modern Curriculum',
    description: 'Comprehensive O-Level and A-Level programs following UNEB curriculum',
  },
  {
    icon: Trophy,
    title: 'Co-curricular Activities',
    description: 'Sports, music, drama, debate, and various clubs for holistic development',
  },
  {
    icon: Heart,
    title: 'Character Building',
    description: 'Strong emphasis on discipline, integrity, and moral values',
  },
  {
    icon: Globe,
    title: 'State-of-the-Art Facilities',
    description: 'Modern classrooms, science labs, library, sports fields, and boarding facilities',
  },
];

const achievements = [
  { stat: '25+', label: 'Years of Excellence' },
  { stat: '98%', label: 'Pass Rate' },
  { stat: '1200+', label: 'Students' },
  { stat: '80+', label: 'Teaching Staff' },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-900/75" />
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Tomorrow's Leaders Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
              Excellence High School: Where Academic Achievement Meets Character Development
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold">
                  Apply Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Welcome to Excellence High School
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For over 25 years, Excellence High School has been at the forefront of providing quality education 
              that prepares students for academic success and life beyond the classroom. Our commitment to excellence, 
              combined with our experienced faculty and modern facilities, creates an environment where every student 
              can thrive and reach their full potential.
            </p>
            <p className="text-base text-gray-600 italic">
              "Education is not the filling of a pail, but the lighting of a fire. We are dedicated to igniting 
              the passion for learning in every student who walks through our doors."
            </p>
            <p className="text-sm text-gray-600 mt-4 font-medium">
              — Dr. James Okello, Headteacher
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                  {item.stat}
                </div>
                <div className="text-sm md:text-base text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose Excellence High School
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive educational experience that nurtures academic excellence 
              and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-900" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Applications for the new academic year are now open. Discover how Excellence High School 
            can shape your child's future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button size="lg" className="bg-primary-900 hover:bg-primary-800">
                View Admissions
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
