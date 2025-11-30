import { useState } from 'react';
import { User, ShoppingBag, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-background border-b border-neutral-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary tracking-wide cursor-pointer" onClick={() => navigate('/home')}>
          TIMEPIECE
        </div>

        {/* Navigation - hidden on small screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => navigate('/home')}>Home</a>
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => scrollToSection('shop')}>Shop</a>
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => scrollToSection('watchblog')}>Blog</a>
          <div className="relative">
            <button 
              onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
              className="flex items-center text-primary hover:text-coral transition-colors"
            >
              Other
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isOtherDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 border border-neutral-border">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-primary hover:text-coral hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    handleNavigation('/about');
                    setIsOtherDropdownOpen(false);
                  }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-primary hover:text-coral hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    handleNavigation('/contact');
                    setIsOtherDropdownOpen(false);
                  }}
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={handleSignOut}>Sign Out</a>
        </nav>

        <div className="flex items-center space-x-6">
          <LogOut 
            className="w-6 h-6 text-muted cursor-pointer hover:text-coral transition-colors" 
            onClick={handleSignOut}
          />
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-muted cursor-pointer hover:text-coral transition-colors" />
            <span className="absolute -top-2 -right-2 bg-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <User className="w-6 h-6 text-muted cursor-pointer hover:text-coral transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;
