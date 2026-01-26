import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: 'student' | 'parent' | 'alumni';
  year?: string;
  rating: number;
  content: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Nakato',
    role: 'alumni',
    year: '2020',
    rating: 5,
    content: 'Excellence High School shaped me into the person I am today. The teachers genuinely cared about our success, and the holistic approach to education prepared me well for university life. I\'m now studying Medicine at Makerere University.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Mr. Patrick Ssemakula',
    role: 'parent',
    rating: 5,
    content: 'As a parent, I couldn\'t be happier with my decision to enroll my daughter here. The academic standards are exceptional, and the school\'s emphasis on character development gives me peace of mind. The teachers are approachable and keep us well-informed.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'David Okello',
    role: 'student',
    year: 'S4',
    rating: 5,
    content: 'I love the balance between academics and co-curricular activities. The science laboratory is well-equipped, and our debate club has helped me build confidence. The boarding facilities are comfortable, and I feel at home here.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Grace Achieng',
    role: 'alumni',
    year: '2018',
    rating: 5,
    content: 'The foundation I received at Excellence has been invaluable. The teachers pushed us to think critically and aim high. I\'m now working as a software engineer, and I still apply the problem-solving skills I learned in those classrooms.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Mrs. Lillian Nambi',
    role: 'parent',
    rating: 5,
    content: 'Excellence High School lives up to its name. My son has grown tremendously in both character and academics. The discipline is firm but fair, and the variety of activities ensures every child finds their passion. Highly recommended!',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'James Mugisha',
    role: 'student',
    year: 'S6',
    rating: 5,
    content: 'The A-Level program is rigorous but rewarding. Our teachers use modern teaching methods that make complex subjects easier to understand. The career guidance sessions have been instrumental in helping me choose my university path.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
];

const roleLabels = {
  student: 'Current Student',
  parent: 'Parent',
  alumni: 'Alumni',
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <Card className="border-none shadow-xl bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left side - Photo */}
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/90 to-transparent" />
            </div>

            {/* Right side - Content */}
            <div className="md:col-span-3 p-8 md:p-12 relative">
              <Quote className="h-12 w-12 text-accent-500/20 absolute top-8 right-8" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < currentTestimonial.rating
                        ? 'fill-accent-500 text-accent-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{currentTestimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-serif text-xl font-bold text-primary-900 mb-1">
                  {currentTestimonial.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium text-accent-700">
                    {roleLabels[currentTestimonial.role]}
                  </span>
                  {currentTestimonial.year && (
                    <>
                      <span>•</span>
                      <span>
                        {currentTestimonial.role === 'alumni' 
                          ? `Class of ${currentTestimonial.year}`
                          : currentTestimonial.year}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2 flex-1 justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-primary-900 w-8'
                          : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-sm text-gray-500">
                {currentIndex + 1} / {testimonials.length}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
