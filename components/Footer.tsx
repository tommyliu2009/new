import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">台灣新住民產業協會</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              致力於協助新住民朋友在台灣落地生根，透過創業輔導、資源媒合與專業課程，打造共融共榮的產業環境。
            </p>
          </div>

          {/* Contact Info - Highlighted */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 text-white">聯絡方式</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <User className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-gray-200">張艷君 理事長</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3" />
                <a href="tel:0981038768" className="text-gray-200 hover:text-white transition-colors">
                  0981-038768
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <a href="mailto:agi99@kimo.com" className="text-gray-200 hover:text-white transition-colors">
                  agi99@kimo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links / Mission */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">服務項目</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 創業諮詢與輔導</li>
              <li>• 政府補助申請協助</li>
              <li>• 專業技能培訓課程</li>
              <li>• 產業交流媒合</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 台灣新住民產業協會. All rights reserved.</p>
          <p className="mt-2">新住民創業加油讚 - 讓夢想在台灣起飛</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;