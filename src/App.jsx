// App.jsx
import CVBuilder from './components/CVBuilder';
import { FacebookLogo, TelegramLogo, GithubLogo, FileText } from 'phosphor-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile & Tablet Warning */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen p-4 text-center bg-white">
        <svg
          className="w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Peringatan!</h2>
        <p className="text-gray-600 mb-2">Aplikasi ini hanya dapat diakses pada layar Desktop.</p>
        <p className="text-sm text-gray-500">Silakan buka aplikasi ini menggunakan laptop atau komputer Anda.</p>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        <nav className="bg-white shadow-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-left items-center">
              <h1 className="text-3xl font-bold py-6 px-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Righteous'] hover:scale-105 transition-transform">
                CV-Generator
              </h1>
              <div className="ml-auto flex items-center">
                <FacebookLogo
                  size={24}
                  className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  onClick={() => window.open('https://www.facebook.com/feyfry35', '_blank')}
                />
                <TelegramLogo
                  size={24}
                  className="text-blue-600 hover:text-blue-800 transition-colors ml-4 cursor-pointer"
                  onClick={() => window.open('https://t.me/feyfry', '_blank')}
                />
                <GithubLogo
                  size={24}
                  className="text-blue-600 hover:text-blue-800 transition-colors ml-4 cursor-pointer"
                  onClick={() => window.open('https://github.com/feyfry', '_blank')}
                />
                <div
                  className="flex items-center ml-4 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors"
                  onClick={() => window.open('/file/MyCv.pdf', '_blank')}
                >
                  <FileText size={24} />
                  <span className="ml-1">Contoh CV</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4">
          <CVBuilder />
        </div>
      </div>
    </div>
  );
}

export default App;