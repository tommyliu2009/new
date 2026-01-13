import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { NavigationPage, NewsItem, CourseItem, ResourceItem } from './types';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Users,
  CheckCircle,
  Phone,
  Globe,
  ExternalLink
} from 'lucide-react';

// Mock Data
const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: '2024 新住民創業加速器計畫開跑',
    date: '2024-05-20',
    category: '活動公告',
    summary: '協助新住民運用數位工具行銷，提升品牌能見度，總獎金高達30萬元。'
  },
  {
    id: 2,
    title: '微型創業鳳凰貸款說明會 - 台北場',
    date: '2024-06-01',
    category: '補助資訊',
    summary: '勞動部主辦，專人解說貸款資格與申請流程，歡迎新住民朋友踴躍報名。'
  },
  {
    id: 3,
    title: '新住民產業協會會員大會圓滿落幕',
    date: '2024-04-15',
    category: '協會新聞',
    summary: '感謝各界支持，本次大會確認了年度重點推動項目：餐飲輔導與電商轉型。'
  }
];

const COURSES: CourseItem[] = [
  {
    id: 1,
    title: '新住民電商行銷實戰班',
    date: '2024-07-10 ~ 2024-07-30',
    location: '線上直播 / 台北市中山區',
    instructor: '張艷君 理事長',
    status: 'Open'
  },
  {
    id: 2,
    title: '餐飲創業與法規實務',
    date: '2024-08-05',
    location: '台中市新住民服務中心',
    instructor: '李專業 顧問',
    status: 'Upcoming'
  },
  {
    id: 3,
    title: '手機攝影與短影音製作',
    date: '2024-06-15',
    location: '高雄市社會局',
    instructor: '王影像 老師',
    status: 'Closed'
  }
];

const RESOURCES: ResourceItem[] = [
  {
    id: 1,
    title: '微型創業鳳凰貸款',
    provider: '勞動部',
    amount: '最高 200 萬元',
    deadline: '隨時受理',
    description: '低利率、免保人、前兩年免利息，提供創業諮詢輔導。'
  },
  {
    id: 2,
    title: '新住民發展基金補助',
    provider: '內政部',
    amount: '依計畫內容核定',
    deadline: '1月、4月、7月、10月之20日',
    description: '補助新住民及其子女之技藝學習、創業研習及社會參與活動。'
  },
  {
    id: 3,
    title: '地方型SBIR',
    provider: '各縣市政府',
    amount: '最高 100 萬元',
    deadline: '3月~8月各縣巿不同',
    description: '協助中小企業運用政府資源進行創新研發，提升產業競爭力。'
  }
];

const MEDIA_SOURCES = [
  {
    name: '透傳媒',
    description: '深入報導新住民議題，傳遞多元文化價值，提供最即時的新聞資訊。',
    url: 'https://tou-news.com/archives/category/%e6%96%b0%e4%bd%8f%e6%b0%91%e6%96%b0%e8%81%9e',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-100'
  },
  {
    name: '新女力傳媒',
    description: '關注女性與新住民權益，展現新時代女性力量，分享創業與生活故事。',
    url: 'https://newwoman.com.tw/archives/category/%e6%96%b0%e4%bd%8f%e6%b0%91%e6%96%b0%e8%81%9e',
    color: 'bg-rose-50 text-rose-800 border-rose-100'
  }
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>(NavigationPage.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case NavigationPage.NEWS:
        return (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-4">新住民新聞天地</h2>
            
            {/* External Media */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                推薦媒體專區
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MEDIA_SOURCES.map((media, index) => (
                  <div key={index} className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-all ${media.color}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{media.name}</h4>
                        <p className="text-sm opacity-90">{media.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 opacity-60 flex-shrink-0 ml-2" />
                    </div>
                    <a 
                      href={media.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-bold hover:underline"
                    >
                      前往閱讀 <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal News */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                協會公告與活動
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {LATEST_NEWS.map((news) => (
                  <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                    <div className="h-48 bg-gray-200 relative">
                      <img 
                        src={`https://picsum.photos/400/300?random=${news.id}`} 
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                        {news.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">{news.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{news.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case NavigationPage.RESOURCES:
        return (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-4">創業資源與補助</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESOURCES.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{item.provider}</span>
                    <span className="text-gray-500 text-sm">截止: {item.deadline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-orange-600">{item.amount}</p>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <button className="w-full bg-orange-50 outline outline-1 outline-orange-200 text-orange-700 font-medium py-2 rounded-lg hover:bg-orange-100 transition-colors">
                    了解更多
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case NavigationPage.COURSES:
        return (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-4">課程培訓資訊</h2>
            <div className="space-y-6">
              {COURSES.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between border-l-4 border-orange-400">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        course.status === 'Open' ? 'bg-green-100 text-green-700' :
                        course.status === 'Closed' ? 'bg-gray-200 text-gray-600' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {course.status === 'Open' ? '報名中' : course.status === 'Closed' ? '已截止' : '即將開放'}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 mt-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{course.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{course.location}</span>
                      </div>
                      <div className="flex items-center sm:col-span-2">
                        <Users className="w-4 h-4 mr-2 text-orange-500" />
                        <span>講師：{course.instructor}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-auto">
                    <button 
                      disabled={course.status === 'Closed'}
                      className={`w-full md:w-auto px-6 py-2 rounded-lg font-medium transition-colors ${
                        course.status === 'Open' 
                          ? 'bg-orange-600 text-white hover:bg-orange-700' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {course.status === 'Open' ? '立即報名' : '詳情查看'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case NavigationPage.ABOUT:
        return (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-4">關於台灣新住民產業協會</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
               <p className="text-lg text-gray-700 leading-8 mb-6">
                 台灣新住民產業協會成立的宗旨，在於整合產官學資源，建立一個屬於新住民的創業交流平台。我們深知異鄉打拼的不易，因此致力於提供全方位的支持系統，從技能培訓、資金取得、法律諮詢到市場行銷，陪伴每一位新住民朋友實現創業夢想。
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                 <div className="bg-orange-50 p-6 rounded-xl">
                   <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                     <Award className="w-6 h-6 mr-2" />
                     核心使命
                   </h3>
                   <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-500 mr-2 shrink-0 mt-0.5"/> 提升新住民經濟自主能力</li>
                     <li className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-500 mr-2 shrink-0 mt-0.5"/> 推動多元文化產業發展</li>
                     <li className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-500 mr-2 shrink-0 mt-0.5"/> 建構新住民創業生態圈</li>
                   </ul>
                 </div>
                 <div className="bg-blue-50 p-6 rounded-xl">
                   <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                     <Phone className="w-6 h-6 mr-2" />
                     聯絡我們
                   </h3>
                   <div className="space-y-4">
                     <div>
                       <p className="text-sm text-blue-600 font-bold">理事長</p>
                       <p className="text-lg text-gray-800">張艷君</p>
                     </div>
                     <div>
                       <p className="text-sm text-blue-600 font-bold">聯絡電話</p>
                       <a href="tel:0981038768" className="text-lg text-gray-800 hover:text-orange-600">0981-038768</a>
                     </div>
                     <div>
                       <p className="text-sm text-blue-600 font-bold">電子郵件</p>
                       <a href="mailto:agi99@kimo.com" className="text-lg text-gray-800 hover:text-orange-600">agi99@kimo.com</a>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        );

      case NavigationPage.HOME:
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-orange-100 to-white overflow-hidden">
              <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                      新住民創業首選平台
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-6 leading-tight">
                      夢想不分國界 <br />
                      <span className="text-orange-600">創業路上我們陪您</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                      台灣新住民產業協會提供最完整的創業資源整合，無論是資金補助、技能課程或是法規諮詢，我們都是您最堅強的後盾。
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setCurrentPage(NavigationPage.RESOURCES)}
                        className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-shadow shadow-lg flex items-center justify-center"
                      >
                        尋找創業補助
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Placeholder Image */}
                    <img 
                      src="https://picsum.photos/600/400" 
                      alt="新住民創業交流" 
                      className="rounded-2xl shadow-2xl z-10 relative"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">為什麼選擇我們？</h2>
                  <p className="mt-4 text-gray-500">針對新住民需求量身打造的服務內容，解決您創業路上的痛點。</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 bg-orange-50 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-orange-200 rounded-xl flex items-center justify-center mb-6">
                      <BookOpen className="text-orange-700 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">專業課程培訓</h3>
                    <p className="text-gray-600">從烘焙餐飲到電商行銷，提供多元化的實戰課程，強化您的創業技能。</p>
                  </div>
                  <div className="p-8 bg-blue-50 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-blue-200 rounded-xl flex items-center justify-center mb-6">
                      <Award className="text-blue-700 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">補助計畫輔導</h3>
                    <p className="text-gray-600">協助媒合政府與民間資源，手把手指導計畫書撰寫，提高過件率。</p>
                  </div>
                  <div className="p-8 bg-green-50 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-green-200 rounded-xl flex items-center justify-center mb-6">
                      <Users className="text-green-700 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">社群人脈連結</h3>
                    <p className="text-gray-600">加入協會大家庭，與前輩交流經驗，共享資源，創業路上不孤單。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-10">
                  <h2 className="text-3xl font-bold text-gray-900">最新消息</h2>
                  <button onClick={() => setCurrentPage(NavigationPage.COURSES)} className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                    查看更多 <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {LATEST_NEWS.map((news) => (
                    <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 bg-gray-200 relative">
                        <img 
                          src={`https://picsum.photos/400/300?random=${news.id}`} 
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                          {news.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">{news.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{news.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action (CTA) */}
            <div className="bg-gray-900 py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">準備好開始您的創業旅程了嗎？</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  不要讓疑問阻礙您的腳步，立即聯繫台灣新住民產業協會，讓我們助您一臂之力。
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentPage(NavigationPage.ABOUT)}
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
                  >
                    聯絡協會
                  </button>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;