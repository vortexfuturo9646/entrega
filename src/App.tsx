import { useEffect, useState } from 'react';
import { Heart, Sparkles, Download } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Dispara evento de compra assim que a página carrega
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {value: 10.00, currency: 'BRL'});
    }
  }, []);

  const handleButtonClick = () => {
    // Apenas abre o link do Drive
    window.open("https://drive.google.com/drive/folders/1WM_2ylYu7sO99czqaBxy37ChRjgSHYC2?usp=sharing", "_blank");
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // useEffect(() => {
  //   const redirectTimer = setTimeout(() => {
  //     window.location.href = "https://drive.google.com/drive/folders/1WM_2ylYu7sO99czqaBxy37ChRjgSHYC2?usp=sharing";
  //   }, 5000);

  //   return () => clearTimeout(redirectTimer);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-20 w-4 h-4 text-pink-300 animate-bounce delay-300" />
        <Heart className="absolute top-32 right-32 w-3 h-3 text-purple-300 animate-bounce delay-700" />
        <Sparkles className="absolute bottom-40 left-16 w-5 h-5 text-pink-400 animate-pulse delay-1000" />
        <Sparkles className="absolute top-40 right-20 w-4 h-4 text-purple-400 animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className={`relative z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Profile image with enhanced styling */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-lg opacity-30 scale-110 animate-pulse"></div>
          <img 
            src="https://files.chefexpress.site/vortex/fotodeperfil.jpg" 
            alt="Foto de Larissa Souza"
            className="relative w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-pink-200 transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 shadow-lg">
            <Heart className="w-4 h-4 text-white animate-pulse" />
          </div>
        </div>
        
        {/* Name with gradient text */}
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
          Larissa Souza
        </h1>
        
        {/* Subtitle with animation */}
        <div className="mb-8 space-y-2">
          <p className="text-lg text-gray-700 max-w-md leading-relaxed font-medium">
            Liberando agora os meus conteúdos para você amor...
          </p>
          <div className="flex items-center justify-center space-x-2 text-pink-500">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span className="text-sm font-semibold">Conteúdo Exclusivo</span>
            <Sparkles className="w-4 h-4 animate-spin" />
          </div>
        </div>

        {/* Call to action button */}
        <div className="space-y-4">
          <button 
            onClick={handleButtonClick}
            className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto animate-pulse"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Acessar Conteúdos</span>
            <Heart className="w-5 h-5 group-hover:animate-pulse" />
          </button>
          
          <p className="text-sm text-gray-500 animate-pulse">
            ✨ Clique para acessar agora mesmo ✨
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Bottom decorative text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 animate-pulse">
        Feito com 💖 especialmente para você
      </div>
    </div>
  );
}

export default App;