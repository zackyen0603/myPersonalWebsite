"use client";

// app/page.tsx
import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { newsItems } from '../data/newsItems';
import { projects } from '../data/projects';
import { useState, useEffect, useMemo } from 'react';

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 使用 useEffect 來處理初始化
  useEffect(() => {
    // 檢查本地存儲中的深色模式設置
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // 保存深色模式設置到本地存儲
      localStorage.setItem('darkMode', isDarkMode.toString());
      // 更新 HTML 標籤的 class
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, mounted]);

  // 將新聞排序邏輯移到組件外部，確保服務器端和客戶端產生相同的結果
  const sortedNewsItems = useMemo(() => {
    return [...newsItems].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const filteredProjects = useMemo(() => {
    return selectedTag
      ? projects.filter(project => project.tags.includes(selectedTag))
      : projects;
  }, [selectedTag]);

  // 避免服務器端渲染和客戶端渲染不匹配
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 深色模式切換按鈕 */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="切換深色模式"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>

        {/* 首頁區塊 */}
        <section id="home" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="md:flex p-8">
            {/* 左側：照片、連結和自我介紹 */}
            <div className="md:w-1/3 pr-8">
              {/* 照片區域 */}
              <div className="w-full max-w-xs mx-auto">
                <div className="aspect-square overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
                  <Image
                    src="/images/photo.jpeg"
                    alt="個人照片"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    priority
                  />
                </div>
                <div className="text-center mt-6">
                  <div className="flex justify-center items-baseline gap-3">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                      顏維新
                    </h1>
                    <span className="text-xl text-gray-600 dark:text-gray-300">Wei-Hsin Yen</span>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-2 flex justify-center items-center">
                    軟體工程師
                    <a href="https://github.com/zackyen0603" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-400 hover:text-gray-200">
                      <Image src="/github-mark/github-mark-white.svg" alt="GitHub" width={24} height={24} />
                    </a>
                  </p>
                </div>
              </div>

              {/* 自我介紹和按鈕 */}
              <div className="text-gray-600 dark:text-gray-300 space-y-6 mt-8">
                <p>
                  畢業於國立中央大學資訊工程學系研究所，對軟體開發和技術充滿熱情。
                </p>
                <div className="flex flex-row space-x-4 justify-center">
                  <a 
                    href="mailto:zack09955189@gmail.com"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all text-center"
                  >
                    聯絡我
                  </a>
                  <a 
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full shadow-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-center"
                  >
                    英文履歷
                  </a>
                </div>
              </div>
            </div>

            {/* 右側：學經歷與技能 */}
            <div className="md:w-2/3 md:border-l border-gray-200 dark:border-gray-700 md:pl-8 mt-8 md:mt-0">
              <div className="text-gray-600 dark:text-gray-300 space-y-6">
                {/* 上方兩欄：學歷和語言檢定 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* 左欄：學歷 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">學歷</h3>
                    <div className="relative space-y-2 before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500">
                      <div className="relative pl-8">
                        <span className="absolute left-0 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -translate-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        <div className="p-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">中央大學</h4>
                            <span className="text-xs text-indigo-500 dark:text-indigo-400">2022/9 ~ 2024/7</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">資訊工程研究所碩士</p>
                        </div>
                      </div>

                      <div className="relative pl-8">
                        <span className="absolute left-0 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -translate-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        <div className="p-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">明治大学</h4>
                            <span className="text-xs text-indigo-500 dark:text-indigo-400">2018/9 ~ 2019/2</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">交換學生</p>
                        </div>
                      </div>

                      <div className="relative pl-8">
                        <span className="absolute left-0 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -translate-x-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        <div className="p-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">國立臺灣師範大學</h4>
                            <span className="text-xs text-indigo-500 dark:text-indigo-400">2016/9 ~ 2022/6</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">資訊工程學系與地理學系雙主修</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 右欄：語言檢定 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">語言檢定</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                      <li>英語 : TOEIC 885 金色證書</li>
                      <li>日語 : JLPT N1</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">興趣愛好</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      除了程式開發外，我也熱愛運動，特別是棒球。在大學時期曾經是校隊的投手，
                      這些經歷培養了我的團隊合作精神和抗壓能力。
                    </p>
                  </div>
                </div>


                {/* 下方：技術專長 */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">技術專長</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 左側技能 */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">程式語言</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm">C</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm">C++</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm">Java</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm">Python</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">系統與開發</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm">Linux</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm">Shell Script</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm">Git</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full text-sm">Docker</span>
                        </div>
                      </div>
                    </div>

                    {/* 右側技能 */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">網頁開發</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">Next.js</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">HTML</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">PHP</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">JavaScript</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 rounded-full text-sm">TypeScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 工作經驗區塊 */}
        <section id="experience" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">工作經驗</h2>
              <span className="text-lg text-gray-500 dark:text-gray-400">Work Experience</span>
            </div>
            <div className="relative space-y-4 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
                  <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">2023/2 ~ 2023/7 ・6個月</span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      Python 程式設計助教
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">國立中央大學資訊工程學系</span>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                    <li>協助學生學習 Python 語言的基礎行為（變數、控制流程、物件導向），教授程式開發環境的設置、版本控制（Git）與除錯等技術。</li>
                    <li>建立課堂上的線上Python程式碼批改系統 (Online Judge)。</li>
                    <li>負責批改課堂作業並提供學生回饋，負責 課堂測驗與 期末團隊專案的評分。</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
                  <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">2022/9 ~ 2023/2 ・6個月</span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      編譯器課程助教
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">國立中央大學資訊工程學系</span>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                    <li>指導學生使用 LEX 及 Yacc 進行詞法分析、語法分析、IR 轉換與最佳化</li>
                    <li>協助批改與測試學生的編譯器專案</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 專案經驗區塊 */}
        <section id="projects" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">專案經驗</h2>
              <span className="text-lg text-gray-500 dark:text-gray-400">Projects</span>
            </div>

            {/* 標籤篩選按鈕 */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full ${
                  selectedTag === null
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                全部
              </button>
              {Array.from(new Set(projects.flatMap(p => p.tags))).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full ${
                    selectedTag === tag
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* 專案列表 */}
            <div className="grid md:grid-cols-2 gap-8">

              {filteredProjects.map(project => (
                <article key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                      {project.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      專案開發時間 : {project.startDate} - {project.endDate}
                    </p>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600"
                    >
                      查看專案
                    </a>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
        
        {/* 新聞區塊 */}
        <section id="news" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">棒球相關</h2>
              <span className="text-lg text-gray-500 dark:text-gray-400">Baseball</span>
              <Link 
                href="/news" 
                className="ml-auto px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all text-sm"
              >
                查看更多
              </Link>
            </div>

            {/* 新聞列表 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedNewsItems.map((news) => (
                <article 
                  key={news.id} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-indigo-600 dark:text-indigo-400">{news.category}</span>
                      <time 
                        dateTime={news.date}
                        className="text-sm text-gray-500 dark:text-gray-400"
                      >
                        {news.date}
                      </time>
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
                    
                    <div className="mt-auto flex justify-between items-center">
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
        </section>

        {/* 聯絡方式區塊 */}
        <section id="contact" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">聯絡方式</h2>
              <span className="text-lg text-gray-500 dark:text-gray-400">Contact</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 justify-center">
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Email:</span>
                <a href="mailto:zack09955189@gmail.com" className="ml-2 text-blue-500 dark:text-blue-400 hover:underline">zack09955189@gmail.com</a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/wei-hsin-yen" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 dark:text-blue-400 hover:underline">linkedin.com/in/wei-hsin-yen</a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium">GitHub:</span>
                <a href="https://github.com/zackyen0603" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 dark:text-blue-400 hover:underline">github.com/zackyen0603</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
