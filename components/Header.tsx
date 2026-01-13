import React, { useState } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NavigationPage } from '../types';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '首頁', value: NavigationPage.HOME },
    { label: '新住民新聞', value: NavigationPage.NEWS },
    { label: '創業資源與補助', value: NavigationPage.RESOURCES },
    { label: '課程資訊', value: NavigationPage.COURSES },
    { label: '關於協會', value: NavigationPage.ABOUT },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick(NavigationPage.HOME)}
          >
            <div className="bg-orange-600 p-2 rounded-lg mr-3">
              <HeartHandshake className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 tracking-wide">新住民創業加油讚</h1>
              <p className="text-xs text-gray-500">台灣新住民產業協會</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-base font-medium transition-colors duration-200 ${
                  currentPage === item.value
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-left text-lg font-medium ${
                  currentPage === item.value ? 'text-orange-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;