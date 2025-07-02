import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code2,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Zap,
  Globe,
  Cpu,
  BarChart3 } from
'lucide-react';

const ServicesSection = () => {
  const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Compatible']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for AWS, Azure, and Google Cloud',
    features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Integration', '24/7 Monitoring']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms',
    features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Deployment']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Big data solutions, data warehousing, and business intelligence systems',
    features: ['Data Pipeline', 'ETL Processes', 'Analytics Dashboard', 'Real-time Processing']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and security implementations',
    features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Threat Monitoring']
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, machine learning models, and intelligent automation',
    features: ['Custom AI Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  }];


  const technologies = [
  'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
  'TensorFlow', 'MongoDB', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Next.js'];


  return (
    <section id="services" className="py-20 bg-white" data-id="405pgzu9q" data-path="src/components/ServicesSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="yebhkd77y" data-path="src/components/ServicesSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="eifnrqhrc" data-path="src/components/ServicesSection.tsx">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4" data-id="b8xrhbsjp" data-path="src/components/ServicesSection.tsx">
            <Zap className="w-4 h-4 mr-2" data-id="bn8ki9oml" data-path="src/components/ServicesSection.tsx" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="r1fenrt8l" data-path="src/components/ServicesSection.tsx">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="d2xl4z4qp" data-path="src/components/ServicesSection.tsx">
              Technology Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="y3va3j7qn" data-path="src/components/ServicesSection.tsx">
            We deliver end-to-end technology solutions that help businesses innovate, 
            scale, and stay competitive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-id="9vpy5e6g0" data-path="src/components/ServicesSection.tsx">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2" data-id="43rpqcxn4" data-path="src/components/ServicesSection.tsx">

                <CardHeader className="pb-4" data-id="b9rkbt6gu" data-path="src/components/ServicesSection.tsx">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" data-id="w9h3hq9sj" data-path="src/components/ServicesSection.tsx">
                    <Icon className="w-6 h-6 text-blue-600" data-id="9zrauwgir" data-path="src/components/ServicesSection.tsx" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors" data-id="s6sxg7a1h" data-path="src/components/ServicesSection.tsx">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600" data-id="pl59iepkl" data-path="src/components/ServicesSection.tsx">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent data-id="y46pzjewc" data-path="src/components/ServicesSection.tsx">
                  <ul className="space-y-2" data-id="tm2pfgo8u" data-path="src/components/ServicesSection.tsx">
                    {service.features.map((feature, featureIndex) =>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600" data-id="b66e5tblf" data-path="src/components/ServicesSection.tsx">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" data-id="f3q4kl963" data-path="src/components/ServicesSection.tsx"></div>
                        {feature}
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Technologies */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8" data-id="zb8tsf5fe" data-path="src/components/ServicesSection.tsx">
          <div className="text-center mb-8" data-id="ms1o5o45q" data-path="src/components/ServicesSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="oez6jvdfo" data-path="src/components/ServicesSection.tsx">Technologies We Master</h3>
            <p className="text-gray-600" data-id="wcnnzumxn" data-path="src/components/ServicesSection.tsx">
              We work with cutting-edge technologies to deliver the best solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-id="dh68eny5f" data-path="src/components/ServicesSection.tsx">
            {technologies.map((tech, index) =>
            <div
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 font-medium" data-id="g691nglt3" data-path="src/components/ServicesSection.tsx">

                {tech}
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16" data-id="tbeib5phj" data-path="src/components/ServicesSection.tsx">
          <div className="text-center" data-id="k1u1yn8s8" data-path="src/components/ServicesSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4" data-id="rczs464br" data-path="src/components/ServicesSection.tsx">
              <BarChart3 className="w-8 h-8 text-blue-600" data-id="u43tsf2am" data-path="src/components/ServicesSection.tsx" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2" data-id="8cq4teu9o" data-path="src/components/ServicesSection.tsx">500+</div>
            <div className="text-gray-600" data-id="ywkcknr5n" data-path="src/components/ServicesSection.tsx">Projects Completed</div>
          </div>
          <div className="text-center" data-id="hfjrump0j" data-path="src/components/ServicesSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4" data-id="c9r6owy6v" data-path="src/components/ServicesSection.tsx">
              <Globe className="w-8 h-8 text-purple-600" data-id="grls6ey4z" data-path="src/components/ServicesSection.tsx" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2" data-id="e1o27alr2" data-path="src/components/ServicesSection.tsx">15+</div>
            <div className="text-gray-600" data-id="2glzj1m6g" data-path="src/components/ServicesSection.tsx">Countries Served</div>
          </div>
          <div className="text-center" data-id="k0b7hvis5" data-path="src/components/ServicesSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4" data-id="6t2jd3dd4" data-path="src/components/ServicesSection.tsx">
              <Shield className="w-8 h-8 text-green-600" data-id="ncuvbo6ch" data-path="src/components/ServicesSection.tsx" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2" data-id="eb3iiu7as" data-path="src/components/ServicesSection.tsx">99.9%</div>
            <div className="text-gray-600" data-id="3zh0ajce4" data-path="src/components/ServicesSection.tsx">Uptime Guarantee</div>
          </div>
          <div className="text-center" data-id="rfpgwmclm" data-path="src/components/ServicesSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4" data-id="g97q5r6lm" data-path="src/components/ServicesSection.tsx">
              <Zap className="w-8 h-8 text-orange-600" data-id="gictqppgf" data-path="src/components/ServicesSection.tsx" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2" data-id="q8283xkq4" data-path="src/components/ServicesSection.tsx">24/7</div>
            <div className="text-gray-600" data-id="50yzilgth" data-path="src/components/ServicesSection.tsx">Support Available</div>
          </div>
        </div>
      </div>
    </section>);

};

export default ServicesSection;