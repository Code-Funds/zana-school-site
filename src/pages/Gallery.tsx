import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'facilities' | 'events' | 'activities';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: Exclude<Category, 'all'>;
  description: string;
}

const galleryImages: GalleryImage[] = [
  // Facilities
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format',
    title: 'Modern Classrooms',
    category: 'facilities',
    description: 'Spacious, well-lit classrooms equipped with modern teaching aids',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&auto=format',
    title: 'Science Laboratory',
    category: 'facilities',
    description: 'State-of-the-art science labs for physics, chemistry, and biology',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format',
    title: 'School Library',
    category: 'facilities',
    description: 'Extensive collection of books and digital resources for research',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop&auto=format',
    title: 'Computer Lab',
    category: 'facilities',
    description: 'Modern computer laboratory with high-speed internet connectivity',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop&auto=format',
    title: 'Sports Field',
    category: 'facilities',
    description: 'Well-maintained sports grounds for football, athletics, and more',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&auto=format',
    title: 'Dining Hall',
    category: 'facilities',
    description: 'Spacious dining area serving nutritious meals daily',
  },

  // Events
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format',
    title: 'Graduation Ceremony',
    category: 'events',
    description: 'Annual graduation celebrating our successful students',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&auto=format',
    title: 'Sports Day',
    category: 'events',
    description: 'Inter-house sports competition bringing the school together',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format',
    title: 'Science Fair',
    category: 'events',
    description: 'Students showcase innovative science projects and experiments',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&auto=format',
    title: 'Cultural Day',
    category: 'events',
    description: 'Celebrating diversity through music, dance, and traditional wear',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&auto=format',
    title: 'Awards Ceremony',
    category: 'events',
    description: 'Recognizing academic excellence and outstanding achievements',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&auto=format',
    title: 'Parents Day',
    category: 'events',
    description: 'Parents engage with teachers and celebrate student progress',
  },

  // Student Activities
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&auto=format',
    title: 'Drama Performance',
    category: 'activities',
    description: 'Students perform in the annual school play',
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format',
    title: 'Debate Competition',
    category: 'activities',
    description: 'Honing critical thinking and public speaking skills',
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format',
    title: 'Basketball Team',
    category: 'activities',
    description: 'School basketball team training and competing',
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&auto=format',
    title: 'Music Club',
    category: 'activities',
    description: 'Students learning instruments and performing together',
  },
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&auto=format',
    title: 'Community Service',
    category: 'activities',
    description: 'Students participating in outreach programs',
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1577896851905-f97c1e498fb0?w=800&h=600&fit=crop&auto=format',
    title: 'Art Class',
    category: 'activities',
    description: 'Creative arts and painting sessions',
  },
];

const categories = [
  { id: 'all', label: 'All Photos', count: galleryImages.length },
  { id: 'facilities', label: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
  { id: 'events', label: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
  { id: 'activities', label: 'Student Activities', count: galleryImages.filter(img => img.category === 'activities').length },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage) 
    : -1;

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Capturing moments of excellence, growth, and achievement at our school
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id as Category)}
                className={activeCategory === category.id ? 'bg-primary-900' : ''}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-serif text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                  <Badge 
                    className="absolute top-3 right-3 bg-white/90 text-primary-900 hover:bg-white"
                  >
                    {image.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No photos found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none"
          onKeyDown={(e: any) => handleKeyDown(e)}
        >
          {selectedImage !== null && currentImageIndex !== -1 && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              {currentImageIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}

              {/* Next Button */}
              {currentImageIndex < filteredImages.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}

              {/* Image */}
              <div className="flex flex-col items-center justify-center max-h-[90vh] p-8">
                <img
                  src={filteredImages[currentImageIndex].url}
                  alt={filteredImages[currentImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="mt-6 text-center text-white max-w-2xl">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {filteredImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {filteredImages[currentImageIndex].description}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <Badge variant="secondary">
                      {filteredImages[currentImageIndex].category}
                    </Badge>
                    <span>
                      {currentImageIndex + 1} / {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
