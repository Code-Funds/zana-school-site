import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Newspaper } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { NewsArticle, Event } from '@/types';
import { format } from 'date-fns';

async function fetchNews() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(20);
  
  if (error) throw error;
  return data as NewsArticle[];
}

async function fetchEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false })
    .limit(20);
  
  if (error) throw error;
  return data as Event[];
}

export function News() {
  const { data: news = [], isLoading: newsLoading } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const { data: events = [], isLoading: eventsLoading } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      news: 'bg-blue-100 text-blue-700',
      announcement: 'bg-purple-100 text-purple-700',
      achievement: 'bg-green-100 text-green-700',
      academic: 'bg-orange-100 text-orange-700',
      sports: 'bg-teal-100 text-teal-700',
      cultural: 'bg-pink-100 text-pink-700',
      alumni: 'bg-indigo-100 text-indigo-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Stay updated with the latest happenings at Excellence High School
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="news">News & Announcements</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              {newsLoading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Loading news...</p>
                </div>
              ) : news.length === 0 ? (
                <Card className="border-none shadow-md">
                  <CardContent className="p-12 text-center">
                    <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-gray-700 mb-2">
                      No News Available
                    </h3>
                    <p className="text-gray-600">
                      Check back soon for the latest news and announcements
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {news.map((article) => (
                    <Card key={article.id} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                      {article.image_url && (
                        <img
                          src={article.image_url}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {format(new Date(article.published_at), 'MMM dd, yyyy')}
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                          {article.excerpt || article.content.substring(0, 150) + '...'}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="events">
              {eventsLoading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Loading events...</p>
                </div>
              ) : events.length === 0 ? (
                <Card className="border-none shadow-md">
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-gray-700 mb-2">
                      No Events Scheduled
                    </h3>
                    <p className="text-gray-600">
                      Check back soon for upcoming school events
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {events.map((event) => (
                    <Card key={event.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              {format(new Date(event.event_date), 'MMM dd, yyyy')}
                            </div>
                            {event.end_date && (
                              <div className="text-xs text-gray-500 mt-1">
                                to {format(new Date(event.end_date), 'MMM dd, yyyy')}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">
                          {event.title}
                        </h3>
                        
                        {event.location && (
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
