import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Invest Smarter <br />
            <span className="text-blue-500">Grow Faster</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Start your investment journey with expert guidance and innovative tools.
            Build wealth with confidence using our advanced platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Start Investing
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-8 pt-8">
            <div className="text-white">
              <div className="text-3xl font-bold">$2.5B+</div>
              <div className="text-gray-400">Assets Managed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/investment-chart.svg"
                alt="Investment Growth Chart"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 