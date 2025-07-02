import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Shield } from
'lucide-react';

const AboutSection = () => {
  const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver consistent, high-quality results that our clients can depend on.'
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We build lasting relationships based on trust, transparency, and mutual success.'
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'We strive for perfection in every project and continuously improve our processes.'
  }];


  const teamStats = [
  { icon: Users, number: '50+', label: 'Expert Professionals' },
  { icon: Award, number: '2+', label: 'Years Experience' },
  { icon: Target, number: '500+', label: 'Successful Projects' },
  { icon: Eye, number: '15+', label: 'Countries Served' }];


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-id="38a7vxz5h" data-path="src/components/AboutSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="hfrtw2old" data-path="src/components/AboutSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="jjwehjgop" data-path="src/components/AboutSection.tsx">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4" data-id="buq2a5ly9" data-path="src/components/AboutSection.tsx">
            <Heart className="w-4 h-4 mr-2" data-id="l50x9ptie" data-path="src/components/AboutSection.tsx" />
            About Jayvik Labs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="ii38ozc6l" data-path="src/components/AboutSection.tsx">
            Empowering Businesses
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="usjjjtevb" data-path="src/components/AboutSection.tsx">
              Through Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="5nlupfxnk" data-path="src/components/AboutSection.tsx">
            Founded with a mission to bridge the gap between innovative technology and business success, 
            Jayvik Labs has been at the forefront of digital transformation for over a decade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16" data-id="ek2xkxhlo" data-path="src/components/AboutSection.tsx">
          {/* Left Column - Story */}
          <div className="space-y-6" data-id="9shhuh9ek" data-path="src/components/AboutSection.tsx">
            <div data-id="nqnjzbf87" data-path="src/components/AboutSection.tsx">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="tfiokqicj" data-path="src/components/AboutSection.tsx">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4" data-id="7g9l6y57r" data-path="src/components/AboutSection.tsx">
                Jayvik Labs was born from a simple yet powerful vision: to make advanced technology 
                accessible to businesses of all sizes. What started as a small team of passionate 
                developers has grown into a comprehensive technology partner for companies worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed" data-id="kr0t8ig09" data-path="src/components/AboutSection.tsx">
                Our partnership with industry leaders like TCS has enabled us to leverage enterprise-grade 
                expertise while maintaining the agility and personal touch of a boutique consultancy. 
                This unique position allows us to deliver world-class solutions with exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6" data-id="37ke9kcie" data-path="src/components/AboutSection.tsx">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center" data-id="yscxp56zd" data-path="src/components/AboutSection.tsx">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3" data-id="fazpplpw3" data-path="src/components/AboutSection.tsx">
                      <Icon className="w-6 h-6 text-blue-600" data-id="nhv3vcqmk" data-path="src/components/AboutSection.tsx" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900" data-id="uiflfc4al" data-path="src/components/AboutSection.tsx">{stat.number}</div>
                    <div className="text-gray-600 text-sm" data-id="cszcgixmt" data-path="src/components/AboutSection.tsx">{stat.label}</div>
                  </div>);

              })}
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-8" data-id="lgh6z23do" data-path="src/components/AboutSection.tsx">
            <Card className="border-0 shadow-lg" data-id="qs1p9up7b" data-path="src/components/AboutSection.tsx">
              <CardContent className="p-8" data-id="wo5nl0fbq" data-path="src/components/AboutSection.tsx">
                <div className="flex items-center mb-4" data-id="200abp0s0" data-path="src/components/AboutSection.tsx">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4" data-id="avh7yvm14" data-path="src/components/AboutSection.tsx">
                    <Target className="w-5 h-5 text-blue-600" data-id="3k6z1z5cz" data-path="src/components/AboutSection.tsx" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900" data-id="d6fopc22b" data-path="src/components/AboutSection.tsx">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed" data-id="hktg94f67" data-path="src/components/AboutSection.tsx">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-id="lyybwn293" data-path="src/components/AboutSection.tsx">
              <CardContent className="p-8" data-id="fd7srfu67" data-path="src/components/AboutSection.tsx">
                <div className="flex items-center mb-4" data-id="ku3qiz819" data-path="src/components/AboutSection.tsx">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4" data-id="wpogntb5a" data-path="src/components/AboutSection.tsx">
                    <Eye className="w-5 h-5 text-purple-600" data-id="v7kfvkr5d" data-path="src/components/AboutSection.tsx" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900" data-id="6d0rl3gfi" data-path="src/components/AboutSection.tsx">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed" data-id="k8dust2ug" data-path="src/components/AboutSection.tsx">
                  To be the globally recognized leader in technology consulting, known for our 
                  innovation, reliability, and the transformative impact we create for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div data-id="aux1sxa8e" data-path="src/components/AboutSection.tsx">
          <div className="text-center mb-12" data-id="dx9k1gchj" data-path="src/components/AboutSection.tsx">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-id="i8jvu6h0j" data-path="src/components/AboutSection.tsx">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto" data-id="svrkd2s9d" data-path="src/components/AboutSection.tsx">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="2r7ijt5jh" data-path="src/components/AboutSection.tsx">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group" data-id="zrvtrftq8" data-path="src/components/AboutSection.tsx">

                  <CardContent className="p-8" data-id="ykx45izoe" data-path="src/components/AboutSection.tsx">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" data-id="3ehenidpv" data-path="src/components/AboutSection.tsx">
                      <Icon className="w-8 h-8 text-blue-600" data-id="ssfx81awb" data-path="src/components/AboutSection.tsx" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors" data-id="bv9x9f5no" data-path="src/components/AboutSection.tsx">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed" data-id="65zb0jxsl" data-path="src/components/AboutSection.tsx">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white" data-id="rxwlaz7xf" data-path="src/components/AboutSection.tsx">
          <h3 className="text-2xl font-bold mb-4" data-id="pc5as4gnc" data-path="src/components/AboutSection.tsx">Trusted Partner Network</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto" data-id="yc8b500wb" data-path="src/components/AboutSection.tsx">
            Our strategic partnerships with industry leaders like TCS enable us to deliver 
            enterprise-grade solutions with the personal attention you deserve.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-75" data-id="9sjzce3r4" data-path="src/components/AboutSection.tsx">
            <div className="text-lg font-semibold" data-id="039vq3elx" data-path="src/components/AboutSection.tsx">TCS Partnership</div>
            <div className="w-px h-8 bg-white/30" data-id="7w8nzaqdg" data-path="src/components/AboutSection.tsx"></div>
            <div className="text-lg font-semibold" data-id="i9o32tk1z" data-path="src/components/AboutSection.tsx">AWS Certified</div>
            <div className="w-px h-8 bg-white/30" data-id="2r5a23w01" data-path="src/components/AboutSection.tsx"></div>
            <div className="text-lg font-semibold" data-id="yrb5r5u78" data-path="src/components/AboutSection.tsx">Microsoft Partner</div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;