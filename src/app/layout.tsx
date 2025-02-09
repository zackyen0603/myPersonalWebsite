import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "顏維新的個人網站",
  description: "這是我的個人網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="bg-gray-900 shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex space-x-8 h-16 items-center">
              <li>
                <Link 
                  href="/#home" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  關於我
                </Link>
              </li>
              <li>
                <Link 
                  href="/#experience" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  工作經驗
                </Link>
              </li>
              <li>
                <Link 
                  href="/#projects" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  專案經驗
                </Link>
              </li>
              <li>
                <Link 
                  href="/#baseball" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  棒球
                </Link>
              </li>
              {/* <li>
                <Link 
                  href="/#contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  聯絡方式
                </Link>
              </li> */}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
