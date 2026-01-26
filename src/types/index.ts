export interface AuthUser {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category: 'news' | 'announcement' | 'achievement';
  image_url?: string;
  published_at: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  end_date?: string;
  location?: string;
  image_url?: string;
  category: 'academic' | 'sports' | 'cultural' | 'alumni';
  created_by: string;
  created_at: string;
  updated_at: string;
}
