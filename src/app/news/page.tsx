'use client';
import Image from 'next/image';
import { newsItems } from '../../data/newsItems';
import { useState } from 'react';

export default function NewsPage() {
  const [sortBy, setSortBy] = useState('date');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // 獲取所有唯一的分類標籤
  const allCategories = Array.from(
    new Set(newsItems.flatMap(news => news.category))
  );

  // 新增時間軸資料
  const timelineData = [
    { year: '2023', event: [
        '一百一十二學年度全國大專院校棒球運動聯賽（一般組）中央大學棒球隊 : 全國第五名',
      ] },
    { year: '2022', event: '一百一十一學年度全國大專院校棒球運動聯賽（一般組）中央大學棒球隊 : 全國十六強' },
    { year: '2021', events: [
      '第四屆大專校院系際盃棒球爭霸賽 師大地理代表隊',
      '110年臺北市學生棒球秋季聯賽（大專乙組）台灣師大棒球隊 ： 第二名',
      '一百一十學年度全國大專院校棒球運動聯賽（一般組）台灣師大棒球隊 ： 全國第五名'
    ]},
    { year: '2020', events: [
      '第三屆大專校院系際盃棒球爭霸賽 師大地理代表隊',
      '109年臺北市學生棒球秋季聯賽（大專乙組）台灣師大棒球隊',
      '一百零九學年度全國大專院校棒球運動聯賽（一般組）台灣師大棒球隊 : 全國十六強'
    ]},
    { year: '2019', events: [
      '2019年國際乙組成棒錦標賽 台灣乙組成棒代表隊（白）',
      '108年臺北市學生棒球聯賽（大專乙組）台灣師大棒球隊',
      '一百零八學年度全國大專院校棒球運動聯賽（一般組）台灣師大棒球隊',
      '2019年亞太區職棒OB暨乙組成棒錦標賽 祐電精密棒球隊'
    ]},
    { year: '2017', events: [
      '第一屆海峽兩岸學生棒球聯賽（大學甲組）台灣師大棒球隊',
      '一百零六學年度全國大專院校棒球運動聯賽（公開組二級）台灣師大棒球隊'
    ]},
    { year: '2016', event: '一百零五學年度全國大專院校棒球運動聯賽（公開組二級）台灣師大棒球隊' },
    { year: '2015', events: [
      '臺北市103學年度教育盃三級學生棒球錦標賽（青棒組）建國中學青棒隊',
      '2015年北中南桃四聯盟主爭霸戰 北區高中棒球聯會代表隊'
    ]},
    { year: '2014', events: [
      '臺北市102學年度教育盃三級學生棒球錦標賽（青棒組）建國中學青棒隊',
      '第二屆黑豹旗全國高中棒球大賽 建國中學青棒隊'
    ]},
    { year: '2013', event: '第一屆黑豹旗全國高中棒球大賽 建國中學青棒隊' }
  ];

  // 基本資料區塊
  const BasicInfo = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 relative overflow-hidden">
      {/* 背景圖片 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/player2.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(0.8)',
          transform: 'scale(1.0)', // 避免模糊效果在邊緣產生透明區域
        }}
      />
      
      {/* 內容區塊 */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* 左側：照片和姓名 */}
          <div className="w-full md:w-1/3">
            <div className="w-300 h-400  overflow-hidden rounded-lg border-4 border-gray-200 dark:border-gray-700 mb-4">
              <Image
                src="/images/player1.jpeg"
                alt="球員相片"
                width={900}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 右側：詳細資料 */}
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-3">
            <div className="col-span-2 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">#78 顏維新</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Wei-Hsin Yen</p>
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <span className="text-gray-900 dark:text-gray-100 text-xl">Taiwan | Age: 26</span>
                </div>
              </div>
            </div>
            
            {/* 資料欄位 */}
            <InfoItem label="出生日期" value="1998年06月03日" />
            <InfoItem label="投打習慣" value="左投右打" />
            <InfoItem label="守備位置" value="P 1B OF" />
            <InfoItem label="最高學歷" value="國立中央大學資訊工程所" />
            <InfoItem label="最快球速" value="130km/h" />
            <InfoItem label="目前狀態" value="待業中" />
          </div>
        </div>
      </div>
    </div>
  );

  // 新增 InfoItem 元件
  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-gray-900 dark:text-gray-100 text-lg font-semibold">{value}</p>
    </div>
  );

  // 經歷區塊
  const Experience = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // 新增背景模糊效果
    const backgroundStyle = {
      backgroundImage: "url('/images/player3.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(5px) brightness(0.7)',
      transform: 'scale(1.0)',
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 relative overflow-hidden">
        {/* 背景圖片 */}
        <div 
          className="absolute inset-0 z-0"
          style={backgroundStyle}
        />
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center relative z-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">經歷</h2>
          <svg 
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* 經歷與時間軸 */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">經歷</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 relative z-10">
            <li className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">台北市立建國中學青棒隊</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">2013-2016</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">國立臺灣師範大學甲二級棒球隊</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">2016-2018</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">國立臺灣師範大學乙組棒球隊</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">2019-2022</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">國立中央大學棒球隊</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">2022-2024</span>
            </li>
          </ul>

          {/* 詳細時間軸 */}
          {isOpen && (
            <div className="mt-6 border-t pt-4 relative z-10">
              <div className="relative">
                {/* 垂直線 */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                {/* 時間軸項目 */}
                <div className="space-y-6">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      {/* 圓點 */}
                      <div className="absolute left-3 -translate-x-1/2 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                      
                      {/* 年份 */}
                      <div className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {item.year}
                      </div>
                      
                      {/* 事件 */}
                      {Array.isArray(item.events) ? (
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-gray-600 dark:text-gray-300">
                              {event}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-gray-600 dark:text-gray-300">
                          {item.event}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-baseline mb-8">
        <div className="flex items-baseline gap-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">棒球生涯</h1>
          <span className="text-lg text-gray-500 dark:text-gray-400">Baseball Career</span>
        </div>
        

      </div>

      {/* 基本資料和經歷區塊並排 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <BasicInfo />
        <Experience />
      </div>

      {/* 分類標籤 */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedCategory === 'all'
              ? 'bg-indigo-600 text-white dark:bg-indigo-400'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          全部
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white dark:bg-indigo-400'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">棒球相關報導</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="date">依日期排序</option>
          <option value="title">依標題排序</option>
        </select>
      </div>


      {/* 新聞列表 */}
      <div className="space-y-8">
        {newsItems
          .filter(news => selectedCategory === 'all' || news.category.includes(selectedCategory))
          .sort((a, b) => {
            switch (sortBy) {
              case 'date':
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              case 'title':
                return a.title.localeCompare(b.title);
              default:
                return 0;
            }
          })
          .map((news) => (
            <article key={news.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-wrap gap-2">
                    {news.category.map((cat, index) => (
                      <span key={index} className="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{news.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{news.description}</p>
                
                {news.keywords && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {news.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-300"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">來源：{news.source}</span>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                  >
                    閱讀更多
                  </a>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
