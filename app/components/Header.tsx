import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            InvestWise
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="#investments" className="text-white hover:text-blue-400 transition-colors">
              Investments
            </Link>
            <Link href="#about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div className="md:hidden">
          {/* Add mobile menu items here */}
        </div>
      </nav>
    </header>
  );
};

export default Header; 