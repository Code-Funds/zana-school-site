import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Academics } from '@/pages/Academics';
import { Admissions } from '@/pages/Admissions';
import { StudentLife } from '@/pages/StudentLife';
import { Alumni } from '@/pages/Alumni';
import { Gallery } from '@/pages/Gallery';
import { News } from '@/pages/News';
import { Contact } from '@/pages/Contact';
import { AdminLogin } from '@/pages/admin/AdminLogin';
import { AdminDashboard } from '@/pages/admin/AdminDashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="*"
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/student-life" element={<StudentLife />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
