import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Music, Palette, BookOpen, Users, Heart, Home, Award } from 'lucide-react';

const activities = [
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    description: 'Football, basketball, volleyball, netball, athletics, swimming, and table tennis',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Music,
    title: 'Music & Drama',
    description: 'School choir, band, traditional dance, drama club, and annual school musical',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    description: 'Fine art, pottery, photography, fashion design, and creative writing',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    icon: BookOpen,
    title: 'Academic Clubs',
    description: 'Debate society, science club, mathematics club, book club, and French club',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Users,
    title: 'Community Service',
    description: 'Interact club, Red Cross, environmental club, and outreach programs',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Award,
    title: 'Leadership Programs',
    description: 'Prefects, class monitors, club leaders, and student council',
    color: 'bg-indigo-100 text-indigo-700',
  },
];

const boardingFeatures = [
  'Comfortable dormitories with adequate space',
  'Nutritious meals prepared by qualified staff',
  '24/7 security and supervision',
  'Study time with teacher assistance',
  'Weekend recreational activities',
  'Medical care and counseling services',
];

export function StudentLife() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Student Life</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Beyond the classroom: A vibrant community fostering growth, creativity, and leadership
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Life at Excellence High School
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Excellence High School, we believe education extends beyond textbooks and examinations. 
              Our comprehensive co-curricular program provides students with opportunities to discover their 
              talents, develop new skills, and build lasting friendships.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From sports and arts to academic clubs and community service, every student finds their 
              place to shine and grow into well-rounded individuals prepared for life's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Co-curricular Activities
            </h2>
            <p className="text-lg text-gray-600">
              Diverse programs to nurture talents and develop character
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${activity.color}`}>
                    <activity.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Boarding Life */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-primary-900" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Boarding Facilities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our boarding section provides a safe, comfortable home away from home where students 
                can focus on their studies while enjoying a supportive community environment.
              </p>
              <ul className="space-y-3">
                {boardingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop&auto=format"
                alt="Dormitory"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=300&fit=crop&auto=format"
                alt="Dining hall"
                className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1577896851905-f97c1e498fb0?w=400&h=300&fit=crop&auto=format"
                alt="Common room"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop&auto=format"
                alt="Study area"
                className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Life */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary-900" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Spiritual & Moral Development
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We nurture the spiritual growth of our students through regular assemblies, prayer sessions, 
              and Christian Religious Education. Students are encouraged to develop strong moral values 
              based on respect, integrity, and service to others.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our interfaith approach ensures that all students feel welcomed and respected while learning 
              universal values of compassion, honesty, and responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Student Leadership Structure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    Head Prefects
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Lead the student body, represent students to administration, and coordinate major school events.
                  </p>
                  <p className="text-sm text-gray-500">
                    Elected annually by students and staff
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    Guild Council
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Represent different houses and classes, advocate for student interests and welfare.
                  </p>
                  <p className="text-sm text-gray-500">
                    Democratically elected representatives
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    Club Leaders
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Coordinate activities in various clubs and societies, promoting participation and excellence.
                  </p>
                  <p className="text-sm text-gray-500">
                    Appointed based on commitment and skills
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    Sports Captains
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Lead teams in various sports, organize training sessions and inter-house competitions.
                  </p>
                  <p className="text-sm text-gray-500">
                    Selected for leadership and sportsmanship
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* School Culture */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our School Culture
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Excellence High School is built on a foundation of mutual respect, academic integrity, 
              and collective responsibility. We foster an inclusive environment where diversity is 
              celebrated, individual talents are nurtured, and every student is empowered to reach 
              their full potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">Discipline</div>
                <p className="text-gray-300">Respect for rules and authority</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">Unity</div>
                <p className="text-gray-300">Working together as one family</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">Excellence</div>
                <p className="text-gray-300">Striving for the best in all we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
