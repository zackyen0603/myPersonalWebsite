import Image from 'next/image';
import { newsItems } from '../../data/newsItems';

export default function NewsPage() {
  return (
    <div className="p-8">
      <div className="flex items-baseline gap-3 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">新聞列表</h2>
        <span className="text-lg text-gray-500 dark:text-gray-400">News</span>
      </div>

      <div className="space-y-8">
        {newsItems.map((news) => (
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
                <span className="text-sm text-indigo-600 dark:text-indigo-400">{news.category}</span>
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
