import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }];


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" data-id="pqj1hd1cj" data-path="src/components/Header.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="go6usidby" data-path="src/components/Header.tsx">
        <div className="flex justify-between items-center py-4" data-id="jbmsvtpc1" data-path="src/components/Header.tsx">
          {/* Logo */}
          <div className="flex items-center" data-id="6zb2ay90z" data-path="src/components/Header.tsx">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="aq7uxqrdu" data-path="src/components/Header.tsx">
              Jayvik Labs
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-id="p4tydpfao" data-path="src/components/Header.tsx">
            {navigation.map((item) =>
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium" data-id="ikbnsy4gi" data-path="src/components/Header.tsx">

                {item.name}
              </button>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4" data-id="cqkrzzpax" data-path="src/components/Header.tsx">
            {user ?
            <div className="flex items-center space-x-4" data-id="fgbwy0oy4" data-path="src/components/Header.tsx">
                <div className="flex items-center space-x-2 text-gray-700" data-id="5vm9jwddt" data-path="src/components/Header.tsx">
                  <User className="h-4 w-4" data-id="ytjmhdu4r" data-path="src/components/Header.tsx" />
                  <span className="text-sm font-medium" data-id="bzf2xccw0" data-path="src/components/Header.tsx">{user.Name || user.Email}</span>
                </div>
                <Button
                onClick={async () => {
                  await logout();
                  toast({
                    title: 'Logged out successfully',
                    description: 'You have been logged out of your account.'
                  });
                }}
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-red-600" data-id="iirkuuf46" data-path="src/components/Header.tsx">

                  <LogOut className="h-4 w-4 mr-2" data-id="14mxrvk6u" data-path="src/components/Header.tsx" />
                  Logout
                </Button>
              </div> :

            <div className="flex items-center space-x-3" data-id="m2qk3x635" data-path="src/components/Header.tsx">
                <Link to="/auth" data-id="2514bj374" data-path="src/components/Header.tsx">
                  <Button variant="outline" data-id="oqxrr8h61" data-path="src/components/Header.tsx">
                    Sign In
                  </Button>
                </Link>
                <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="rvo2kk450" data-path="src/components/Header.tsx">

                  Get Started
                </Button>
              </div>
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-id="18gc97d7d" data-path="src/components/Header.tsx">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors" data-id="3omu1hrr9" data-path="src/components/Header.tsx">

              {isMenuOpen ? <X size={24} data-id="beqi1ctxe" data-path="src/components/Header.tsx" /> : <Menu size={24} data-id="e26ixj8v7" data-path="src/components/Header.tsx" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen &&
        <div className="md:hidden border-t border-gray-200" data-id="j1jim9ey1" data-path="src/components/Header.tsx">
            <div className="py-4 space-y-4" data-id="jf0t2f6gs" data-path="src/components/Header.tsx">
              {navigation.map((item) =>
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium" data-id="srl8avyzk" data-path="src/components/Header.tsx">

                  {item.name}
                </button>
            )}
              {user ?
            <div className="space-y-3" data-id="db3bpziyd" data-path="src/components/Header.tsx">
                  <div className="flex items-center space-x-2 text-gray-700 px-4" data-id="w8o42s75x" data-path="src/components/Header.tsx">
                    <User className="h-4 w-4" data-id="n0ykxmt0b" data-path="src/components/Header.tsx" />
                    <span className="text-sm font-medium" data-id="jawzqow88" data-path="src/components/Header.tsx">{user.Name || user.Email}</span>
                  </div>
                  <Button
                onClick={async () => {
                  await logout();
                  setIsMenuOpen(false);
                  toast({
                    title: 'Logged out successfully',
                    description: 'You have been logged out of your account.'
                  });
                }}
                variant="outline"
                className="w-full text-gray-700 hover:text-red-600" data-id="ny9ip3718" data-path="src/components/Header.tsx">

                    <LogOut className="h-4 w-4 mr-2" data-id="r6d5hbo6b" data-path="src/components/Header.tsx" />
                    Logout
                  </Button>
                </div> :

            <div className="space-y-3" data-id="siv6q4wvm" data-path="src/components/Header.tsx">
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)} data-id="k07e12d59" data-path="src/components/Header.tsx">
                    <Button variant="outline" className="w-full" data-id="azkf29wcu" data-path="src/components/Header.tsx">
                      Sign In
                    </Button>
                  </Link>
                  <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="hpy2nilpu" data-path="src/components/Header.tsx">

                    Get Started
                  </Button>
                </div>
            }
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Header;