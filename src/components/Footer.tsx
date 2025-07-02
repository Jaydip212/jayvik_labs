import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight } from
'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }];


  const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile Development',
  'Data Engineering',
  'Cybersecurity',
  'AI & ML Solutions'];


  const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' }];


  return (
    <footer className="bg-gray-900 text-white" data-id="n83iq7lae" data-path="src/components/Footer.tsx">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-id="t69y2ydz1" data-path="src/components/Footer.tsx">
        <div className="grid lg:grid-cols-4 gap-12" data-id="o5i5xi95e" data-path="src/components/Footer.tsx">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6" data-id="srvypupb1" data-path="src/components/Footer.tsx">
            <div data-id="43lwuxwax" data-path="src/components/Footer.tsx">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4" data-id="jcjzn5ygd" data-path="src/components/Footer.tsx">
                Jayvik Labs
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md" data-id="ylrp94tlc" data-path="src/components/Footer.tsx">
                Empowering businesses with innovative technology solutions. We specialize in 
                web development, cloud solutions, and digital transformation services.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4" data-id="c6mldwzqn" data-path="src/components/Footer.tsx">
              <div className="flex items-center text-gray-400" data-id="td90atf92" data-path="src/components/Footer.tsx">
                <Mail className="w-5 h-5 mr-3 text-blue-400" data-id="m0larw56a" data-path="src/components/Footer.tsx" />
                <span data-id="1vyyt193g" data-path="src/components/Footer.tsx">hello@jayviklabs.com</span>
              </div>
              <div className="flex items-center text-gray-400" data-id="9lisfc98f" data-path="src/components/Footer.tsx">
                <Phone className="w-5 h-5 mr-3 text-blue-400" data-id="k6nl4linz" data-path="src/components/Footer.tsx" />
                <span data-id="6dlusx5hz" data-path="src/components/Footer.tsx">+918855843841</span>
              </div>
              <div className="flex items-center text-gray-400" data-id="lbx8xquri" data-path="src/components/Footer.tsx">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" data-id="4cc6ga6wy" data-path="src/components/Footer.tsx" />
                <span data-id="pnmtcmx4h" data-path="src/components/Footer.tsx">Maharastra Karmala, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4" data-id="w4oft6bd2" data-path="src/components/Footer.tsx">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label} data-id="ubsp7r6hi" data-path="src/components/Footer.tsx">

                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" data-id="2wcj5qh2s" data-path="src/components/Footer.tsx" />
                  </a>);

              })}
            </div>
          </div>

          {/* Quick Links */}
          <div data-id="6p8rtfkes" data-path="src/components/Footer.tsx">
            <h3 className="text-lg font-semibold text-white mb-6" data-id="gby2oh5og" data-path="src/components/Footer.tsx">Quick Links</h3>
            <ul className="space-y-4" data-id="b98m5pudn" data-path="src/components/Footer.tsx">
              {quickLinks.map((link, index) =>
              <li key={index} data-id="mdckjq9yk" data-path="src/components/Footer.tsx">
                  <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group" data-id="cpv4zo9kc" data-path="src/components/Footer.tsx">

                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" data-id="zoiugvpsx" data-path="src/components/Footer.tsx" />
                    {link.name}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div data-id="zv5hdss52" data-path="src/components/Footer.tsx">
            <h3 className="text-lg font-semibold text-white mb-6" data-id="oimbaa237" data-path="src/components/Footer.tsx">Our Services</h3>
            <ul className="space-y-4" data-id="dw1mrqxlt" data-path="src/components/Footer.tsx">
              {services.map((service, index) =>
              <li key={index} data-id="a84n09xoe" data-path="src/components/Footer.tsx">
                  <div className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" data-id="48zfnuevp" data-path="src/components/Footer.tsx">
                    {service}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-12" data-id="yek05pnty" data-path="src/components/Footer.tsx">
          <div className="lg:flex lg:items-center lg:justify-between" data-id="8ggjekjh3" data-path="src/components/Footer.tsx">
            <div className="mb-6 lg:mb-0" data-id="nfpa5dxz8" data-path="src/components/Footer.tsx">
              <h3 className="text-xl font-semibold text-white mb-2" data-id="xra7apjis" data-path="src/components/Footer.tsx">Stay Updated</h3>
              <p className="text-gray-400" data-id="81fwrtdeq" data-path="src/components/Footer.tsx">
                Get the latest insights on technology trends and solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:max-w-md" data-id="3i3sp1tqu" data-path="src/components/Footer.tsx">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" data-id="k6yecio0s" data-path="src/components/Footer.tsx" />

              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6" data-id="krywqd2l4" data-path="src/components/Footer.tsx">

                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800" data-id="43elv948d" data-path="src/components/Footer.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-id="mxitixfaq" data-path="src/components/Footer.tsx">
          <div className="md:flex md:items-center md:justify-between" data-id="myp2105aa" data-path="src/components/Footer.tsx">
            <div className="text-gray-400 text-sm" data-id="gy5kkp5eu" data-path="src/components/Footer.tsx">
              © 2025 Jayvik Labs. All rights reserved. | Powered by jayviklabs.
            </div>
            <div className="mt-4 md:mt-0" data-id="9axgw9u94" data-path="src/components/Footer.tsx">
              <div className="flex space-x-6 text-sm text-gray-400" data-id="lbwjsw0yu" data-path="src/components/Footer.tsx">
                <button className="hover:text-white transition-colors" data-id="bz9cvvi1t" data-path="src/components/Footer.tsx">Privacy Policy</button>
                <button className="hover:text-white transition-colors" data-id="739n4c4qo" data-path="src/components/Footer.tsx">Terms of Service</button>
                <button className="hover:text-white transition-colors" data-id="gilmrby7g" data-path="src/components/Footer.tsx">Cookie Policy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;