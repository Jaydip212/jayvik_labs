import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle } from
'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await window.ezsite.apis.tableCreate('13745', {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_interest: formData.service_interest,
        message: formData.message,
        status: 'new'
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@jayviklabs.com',
    description: 'Send us an email anytime!'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+918855843841',
    description: 'Mon-Fri from 8am to 5pm'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Maharastra Karmala, India',
    description: 'Come say hello at our office'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: '8am - 5pm PST',
    description: 'Monday to Friday'
  }];


  const services = [
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
  'Data Engineering',
  'Cybersecurity',
  'AI & Machine Learning',
  'Digital Transformation',
  'Other'];


  return (
    <section id="contact" className="py-20 bg-white" data-id="ymnt3f8yv" data-path="src/components/ContactSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="hsah8bae0" data-path="src/components/ContactSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="pgr136qdq" data-path="src/components/ContactSection.tsx">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4" data-id="4ghl5nfta" data-path="src/components/ContactSection.tsx">
            <MessageSquare className="w-4 h-4 mr-2" data-id="5cq50tzdt" data-path="src/components/ContactSection.tsx" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="iv3zfars7" data-path="src/components/ContactSection.tsx">
            Ready to Start
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="ai7q131g5" data-path="src/components/ContactSection.tsx">
              Your Project?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="vdb3yh6j7" data-path="src/components/ContactSection.tsx">
            Let's discuss how we can help transform your business with cutting-edge technology solutions. 
            Our team is ready to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16" data-id="8en1wwv8e" data-path="src/components/ContactSection.tsx">
          {/* Contact Form */}
          <div data-id="w0eb3iw3e" data-path="src/components/ContactSection.tsx">
            <Card className="border-0 shadow-2xl" data-id="zhhrdk38m" data-path="src/components/ContactSection.tsx">
              <CardHeader className="pb-6" data-id="t1u137ihh" data-path="src/components/ContactSection.tsx">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center" data-id="7gmr9ubi7" data-path="src/components/ContactSection.tsx">
                  <Send className="w-6 h-6 mr-3 text-blue-600" data-id="h6zn3hbbl" data-path="src/components/ContactSection.tsx" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent data-id="k04e69ft6" data-path="src/components/ContactSection.tsx">
                <form onSubmit={handleSubmit} className="space-y-6" data-id="kjn71enlv" data-path="src/components/ContactSection.tsx">
                  <div className="grid md:grid-cols-2 gap-6" data-id="8s6pel7sz" data-path="src/components/ContactSection.tsx">
                    <div className="space-y-2" data-id="c9jbsx5zv" data-path="src/components/ContactSection.tsx">
                      <Label htmlFor="full_name" className="text-sm font-medium text-gray-700" data-id="emd5exbdi" data-path="src/components/ContactSection.tsx">
                        Full Name *
                      </Label>
                      <Input
                        id="full_name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.full_name}
                        onChange={(e) => handleInputChange('full_name', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required data-id="h4dru9yiu" data-path="src/components/ContactSection.tsx" />

                    </div>
                    <div className="space-y-2" data-id="qp9xnhhlp" data-path="src/components/ContactSection.tsx">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700" data-id="u7r70n330" data-path="src/components/ContactSection.tsx">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jaydip@jayviklabs.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required data-id="kbw10qmn7" data-path="src/components/ContactSection.tsx" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6" data-id="ie36qwbe1" data-path="src/components/ContactSection.tsx">
                    <div className="space-y-2" data-id="8f1al6xb0" data-path="src/components/ContactSection.tsx">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700" data-id="stl7d5lzf" data-path="src/components/ContactSection.tsx">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" data-id="kb3h58af5" data-path="src/components/ContactSection.tsx" />

                    </div>
                    <div className="space-y-2" data-id="s03folorh" data-path="src/components/ContactSection.tsx">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700" data-id="u47cigujg" data-path="src/components/ContactSection.tsx">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" data-id="0ko2102rh" data-path="src/components/ContactSection.tsx" />

                    </div>
                  </div>

                  <div className="space-y-2" data-id="qsmhi5cnm" data-path="src/components/ContactSection.tsx">
                    <Label htmlFor="service_interest" className="text-sm font-medium text-gray-700" data-id="j1jabctvg" data-path="src/components/ContactSection.tsx">
                      Service Interest
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('service_interest', value)} data-id="dg731l5mu" data-path="src/components/ContactSection.tsx">
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" data-id="wjs9vqs5y" data-path="src/components/ContactSection.tsx">
                        <SelectValue placeholder="Select a service" data-id="1jaxs0vbl" data-path="src/components/ContactSection.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="m7lja72dq" data-path="src/components/ContactSection.tsx">
                        {services.map((service) =>
                        <SelectItem key={service} value={service} data-id="98yya40a3" data-path="src/components/ContactSection.tsx">
                            {service}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2" data-id="r560rxmo8" data-path="src/components/ContactSection.tsx">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700" data-id="5gvawdu67" data-path="src/components/ContactSection.tsx">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and how we can help..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                      required data-id="q6mixp67x" data-path="src/components/ContactSection.tsx" />

                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg" data-id="in7cxr1f4" data-path="src/components/ContactSection.tsx">

                    {isSubmitting ?
                    <>
                        <div className="animate-spin w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full" data-id="9of56wws2" data-path="src/components/ContactSection.tsx"></div>
                        Sending...
                      </> :

                    <>
                        <Send className="w-5 h-5 mr-3" data-id="9xjwcm3l2" data-path="src/components/ContactSection.tsx" />
                        Send Message
                      </>
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-id="7k0n9cvse" data-path="src/components/ContactSection.tsx">
            <div data-id="zud6h4i28" data-path="src/components/ContactSection.tsx">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-id="b98d9efit" data-path="src/components/ContactSection.tsx">Get in touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed" data-id="odvberih4" data-path="src/components/ContactSection.tsx">
                We'd love to hear from you. Choose the best way to reach out to us and 
                we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid gap-6" data-id="eiakku5by" data-path="src/components/ContactSection.tsx">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300" data-id="sshka9o43" data-path="src/components/ContactSection.tsx">
                    <CardContent className="p-6" data-id="bfzqtfvr8" data-path="src/components/ContactSection.tsx">
                      <div className="flex items-start" data-id="fwknxkr8v" data-path="src/components/ContactSection.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" data-id="pclihhdk9" data-path="src/components/ContactSection.tsx">
                          <Icon className="w-6 h-6 text-blue-600" data-id="1byk9i9re" data-path="src/components/ContactSection.tsx" />
                        </div>
                        <div data-id="jq7u6mk7t" data-path="src/components/ContactSection.tsx">
                          <h4 className="font-semibold text-gray-900 mb-1" data-id="garl334z9" data-path="src/components/ContactSection.tsx">{info.title}</h4>
                          <p className="text-blue-600 font-medium mb-1" data-id="lj7tu5egq" data-path="src/components/ContactSection.tsx">{info.value}</p>
                          <p className="text-gray-600 text-sm" data-id="l8ji911ax" data-path="src/components/ContactSection.tsx">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>);

              })}
            </div>

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-id="rkbuvgmk9" data-path="src/components/ContactSection.tsx">
              <CardContent className="p-8 text-center" data-id="t3niwp2bw" data-path="src/components/ContactSection.tsx">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-90" data-id="o4fvcmo88" data-path="src/components/ContactSection.tsx" />
                <h4 className="text-xl font-bold mb-2" data-id="trprasj2e" data-path="src/components/ContactSection.tsx">Quick Response Guarantee</h4>
                <p className="text-blue-100 mb-4" data-id="h0hea9106" data-path="src/components/ContactSection.tsx">
                  We respond to all inquiries within 24 hours, typically much sooner.
                </p>
                <div className="text-sm text-blue-100" data-id="8d0tbqiow" data-path="src/components/ContactSection.tsx">
                  📞 Need immediate assistance? Call us directly!
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;