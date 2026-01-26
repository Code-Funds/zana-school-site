import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Microscope, Calculator, Globe, Languages, Palette, Music, ChevronRight } from 'lucide-react';

const oLevelSubjects = [
  { icon: BookOpen, name: 'English Language', color: 'bg-blue-100 text-blue-700' },
  { icon: Calculator, name: 'Mathematics', color: 'bg-purple-100 text-purple-700' },
  { icon: Microscope, name: 'Physics', color: 'bg-green-100 text-green-700' },
  { icon: Microscope, name: 'Chemistry', color: 'bg-orange-100 text-orange-700' },
  { icon: Microscope, name: 'Biology', color: 'bg-teal-100 text-teal-700' },
  { icon: Globe, name: 'Geography', color: 'bg-indigo-100 text-indigo-700' },
  { icon: BookOpen, name: 'History', color: 'bg-red-100 text-red-700' },
  { icon: Languages, name: 'Literature in English', color: 'bg-pink-100 text-pink-700' },
  { icon: BookOpen, name: 'Christian Religious Education', color: 'bg-yellow-100 text-yellow-700' },
  { icon: Languages, name: 'Luganda', color: 'bg-cyan-100 text-cyan-700' },
  { icon: Palette, name: 'Fine Art', color: 'bg-rose-100 text-rose-700' },
  { icon: Music, name: 'Music', color: 'bg-violet-100 text-violet-700' },
];

const aLevelCombinations = [
  {
    name: 'Physics, Chemistry, Mathematics (PCM)',
    description: 'For students aspiring to careers in Engineering, Architecture, and Physical Sciences',
  },
  {
    name: 'Physics, Chemistry, Biology (PCB)',
    description: 'Perfect for future Medical Doctors, Dentists, Veterinarians, and Pharmacists',
  },
  {
    name: 'Biology, Chemistry, Mathematics (BCM)',
    description: 'Ideal for Nursing, Medical Laboratory Technology, and related health sciences',
  },
  {
    name: 'History, Economics, Geography (HEG)',
    description: 'For careers in Law, Journalism, Social Work, and Development Studies',
  },
  {
    name: 'History, Economics, Literature (HEL)',
    description: 'Suitable for Arts, Humanities, and Social Sciences programs',
  },
  {
    name: 'Economics, Geography, Mathematics (EGM)',
    description: 'Best for Business, Economics, Statistics, and Actuarial Science',
  },
];

const highlights = [
  {
    stat: '98%',
    label: 'Pass Rate',
    description: 'Consistent excellence in UNEB examinations',
  },
  {
    stat: '45+',
    label: 'First Grades',
    description: 'Average per year in O-Level',
  },
  {
    stat: '3.2',
    label: 'Average Points',
    description: 'A-Level students performance',
  },
];

export function Academics() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            A comprehensive curriculum designed to nurture academic excellence and critical thinking
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Our Curriculum
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Excellence High School follows the Uganda National Examinations Board (UNEB) curriculum, 
              offering a comprehensive education from O-Level through A-Level. Our experienced faculty 
              employs modern teaching methods to ensure students grasp concepts thoroughly and develop 
              critical thinking skills.
            </p>
          </div>

          {/* Performance Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {highlights.map((item) => (
              <Card key={item.label} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary-900 mb-2">{item.stat}</div>
                  <div className="text-lg font-semibold text-accent-600 mb-2">{item.label}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O-Level Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              O-Level Subjects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of subjects to provide a well-rounded foundation for all students
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {oLevelSubjects.map((subject) => (
              <Card key={subject.name} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${subject.color}`}>
                    <subject.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-800">{subject.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A-Level Combinations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              A-Level Subject Combinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized combinations aligned with your career aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {aLevelCombinations.map((combo) => (
              <Card key={combo.name} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-6 w-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary-900 mb-2">
                        {combo.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {combo.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Academic Calendar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-accent-600 mb-3">Term 1</h3>
                  <p className="text-gray-700 mb-2"><strong>February - May</strong></p>
                  <p className="text-sm text-gray-600">
                    Opening: Early February<br />
                    Mid-term break: Late March<br />
                    Closing: Early May
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-accent-600 mb-3">Term 2</h3>
                  <p className="text-gray-700 mb-2"><strong>June - August</strong></p>
                  <p className="text-sm text-gray-600">
                    Opening: Early June<br />
                    Mid-term break: Mid July<br />
                    Closing: Late August
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-accent-600 mb-3">Term 3</h3>
                  <p className="text-gray-700 mb-2"><strong>September - November</strong></p>
                  <p className="text-sm text-gray-600">
                    Opening: Mid September<br />
                    Mid-term break: Late October<br />
                    Closing: Late November
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
