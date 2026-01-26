import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Shield, BookOpen, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and ethical conduct in all our endeavors',
  },
  {
    icon: BookOpen,
    title: 'Excellence',
    description: 'We strive for the highest standards in teaching, learning, and character development',
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'We value diversity and treat everyone with dignity and compassion',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We foster collaboration among students, staff, parents, and the community',
  },
];

const leadership = [
  {
    name: 'Dr. James Okello',
    position: 'Headteacher',
    bio: 'PhD in Educational Leadership with over 20 years of experience in secondary education',
  },
  {
    name: 'Mrs. Sarah Nambi',
    position: 'Deputy Headteacher - Academics',
    bio: 'Masters in Curriculum Development, specializing in Science and Mathematics education',
  },
  {
    name: 'Mr. David Musoke',
    position: 'Deputy Headteacher - Administration',
    bio: 'MBA in Educational Management with extensive experience in school operations',
  },
  {
    name: 'Mrs. Grace Nakato',
    position: 'Director of Studies',
    bio: 'Masters in Education with a focus on student assessment and academic performance',
  },
];

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Discover our history, mission, and the values that guide our commitment to excellence
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Our History
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Founded in 1998, Excellence High School began as a small institution with just 120 students 
                and a vision to provide quality education that transforms lives. Over the past 25 years, 
                we have grown into one of Uganda's premier secondary schools, serving over 1,200 students 
                from diverse backgrounds.
              </p>
              <p>
                Our journey has been marked by consistent academic excellence, with our students regularly 
                achieving top grades in UNEB examinations. We have expanded our facilities to include modern 
                science laboratories, a well-stocked library, sports fields, and comfortable boarding facilities 
                that create an ideal learning environment.
              </p>
              <p>
                Throughout our history, we have remained committed to our founding principles: academic rigor, 
                character development, and holistic education. Today, our alumni serve in various fields across 
                the globe, carrying forward the values and knowledge they gained at Excellence High School.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary-900" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading center of academic excellence and character formation in East Africa, 
                  producing well-rounded individuals who are equipped to make positive contributions to 
                  society and excel in their chosen fields.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-accent-700" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality education that nurtures academic excellence, critical thinking, 
                  creativity, and strong moral values. We are committed to developing responsible citizens 
                  who will lead with integrity and make a difference in their communities and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Excellence High School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-900" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              School Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated team guiding Excellence High School toward continued success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Motto</h2>
          <p className="text-2xl md:text-3xl font-serif text-accent-400 mb-4">
            "Knowledge, Discipline, Service"
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These three pillars guide our educational philosophy and shape every aspect of student life 
            at Excellence High School. We believe that true excellence comes from the combination of 
            academic knowledge, personal discipline, and service to others.
          </p>
        </div>
      </section>
    </div>
  );
}
