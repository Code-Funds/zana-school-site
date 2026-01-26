import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, DollarSign, Calendar, Award, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const requirements = [
  {
    level: 'S1 (O-Level Entry)',
    items: [
      'Primary Leaving Examination (PLE) certificate',
      'Birth certificate or affidavit',
      'Recent passport-size photographs (4 copies)',
      'Transfer letter from previous school (if applicable)',
      'Medical examination report',
    ],
  },
  {
    level: 'S5 (A-Level Entry)',
    items: [
      'UCE (O-Level) certificate with minimum 5 passes',
      'Birth certificate or affidavit',
      'Recent passport-size photographs (4 copies)',
      'Transfer letter from previous school',
      'Medical examination report',
      'Good conduct certificate from previous school',
    ],
  },
];

const admissionSteps = [
  {
    step: 1,
    title: 'Obtain Application Form',
    description: 'Visit the school office or download the form from our website',
  },
  {
    step: 2,
    title: 'Submit Documents',
    description: 'Complete the form and submit with all required documents',
  },
  {
    step: 3,
    title: 'Entrance Assessment',
    description: 'Attend the entrance interview/examination (for competitive positions)',
  },
  {
    step: 4,
    title: 'Receive Admission Letter',
    description: 'Successful applicants receive admission letters within 2 weeks',
  },
  {
    step: 5,
    title: 'Pay Fees & Register',
    description: 'Pay required fees and complete registration process',
  },
];

const feeStructure = [
  {
    category: 'O-Level (Day Students)',
    amount: 'UGX 1,200,000',
    period: 'Per Term',
  },
  {
    category: 'O-Level (Boarding Students)',
    amount: 'UGX 1,800,000',
    period: 'Per Term',
  },
  {
    category: 'A-Level (Day Students)',
    amount: 'UGX 1,400,000',
    period: 'Per Term',
  },
  {
    category: 'A-Level (Boarding Students)',
    amount: 'UGX 2,000,000',
    period: 'Per Term',
  },
];

export function Admissions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&fit=crop&auto=format)',
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        
        <div className="relative container-custom text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Join Excellence High School and begin your journey toward academic success
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Admissions Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We welcome applications from students who are committed to academic excellence and personal growth. 
              Our admission process is designed to be transparent and fair, ensuring that every qualified student 
              has the opportunity to join our vibrant learning community.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Documents needed for successful application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((req) => (
              <Card key={req.level} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 flex items-center">
                    <FileText className="h-5 w-5 text-accent-600 mr-2" />
                    {req.level}
                  </h3>
                  <ul className="space-y-3">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-start text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {admissionSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300 -ml-px" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-gray-600">
              Transparent and competitive fees for quality education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {feeStructure.map((fee) => (
              <Card key={fee.category} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-primary-900 mb-2">
                        {fee.category}
                      </h3>
                      <p className="text-sm text-gray-600">{fee.period}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-600">{fee.amount}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-3">
              <DollarSign className="h-6 w-6 text-accent-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">What's Included</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Tuition covers instruction, exams, library access, sports, and co-curricular activities. 
                  Boarding fees include accommodation and meals.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Additional costs:</strong> Uniforms, textbooks, and personal items not included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary-900 to-primary-800 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Award className="h-10 w-10 text-accent-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-4">Scholarships & Bursaries</h3>
                    <p className="text-gray-100 mb-4 leading-relaxed">
                      Excellence High School offers merit-based scholarships and need-based bursaries to 
                      deserving students. We believe financial constraints should not prevent talented 
                      students from accessing quality education.
                    </p>
                    <p className="text-gray-100 mb-6">
                      <strong>Eligibility:</strong> Exceptional academic performance, demonstrated leadership, 
                      or financial need. Applications reviewed on a case-by-case basis.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Inquire About Scholarships
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Term Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Important Dates 2026
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary-900" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Application Deadline - Term 1</h4>
                    <p className="text-sm text-gray-600">For students joining in February</p>
                  </div>
                </div>
                <span className="font-semibold text-accent-600">January 25, 2026</span>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary-900" />
                  <div>
                    <h4 className="font-semibold text-primary-900">S1 & S5 Reporting Date</h4>
                    <p className="text-sm text-gray-600">New students orientation begins</p>
                  </div>
                </div>
                <span className="font-semibold text-accent-600">February 3, 2026</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <HelpCircle className="h-12 w-12 text-accent-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Our admissions team is here to help. Contact us for more information about the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-primary-900">
                Contact Admissions
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Application Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
