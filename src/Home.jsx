import React, { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import backside from './assets/backside.png'
import main from './assets/main.png'
import left from './assets/left.png'
import right from './assets/right.png'
import center from './assets/center.gif'
import leftArrow from './assets/leftArrow.svg'
import rightArrow from './assets/rightArrow.svg'
import dots from './assets/dots.svg'
import background from './assets/background.jpg'
import paraImage from './assets/paraImage.png'
import image_1 from './assets/image_1.png'
import image_2 from './assets/image_2.png'
import image_3 from './assets/image_3.png'
import image_4 from './assets/image_4.png'
import image_5 from './assets/image_5.png'
import image_6 from './assets/image_6.png'
import image_7 from './assets/image_7.png'
import image_8 from './assets/image_8.png'
import sofa from './assets/Sofa.png'
import back from './assets/back.jpg'
import Head from './assets/Head.png'
import alpha_1 from './assets/alpha_1.png'
import alpha_2 from './assets/alpha_2.png'
import frames from './assets/frames.png'
import card_1 from './assets/card_1.png'
import card_2 from './assets/card_2.png'
import discord from './assets/discord.svg'
import boat from './assets/boat.svg'
import x from './assets/x.svg'


const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [focusCollection, setFocusCollection] = useState(false);



  const [scrolled, setScrolled] = useState(false);

  // Ye useEffect add karo scroll detection ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const images = [center, left, right];

  const total = images.length;

  const leftImage = images[(current - 1 + total) % total];
  const centerImage = images[current];
  const rightImage = images[(current + 1) % total];


  const [showAlert, setShowAlert] = useState(false);

  const handleConnect = () => {
    setShowAlert(true);

    // 3 second ke baad alert hide ho jaye
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <>
      <div className="w-full min-h-screen relative bg-blac overflow-hidden text-white font-sen">

        {/* ========== HEADER SECTION ========== */}
        <header className={`fixed top-0 left-0 right-0 z-50 border-white/10 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'
          }`}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

              {/* Logo */}
              <a href="/">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-cover mix-blend-screen"
                  alt="CB Club Logo"
                />
              </div>
              </a>

              {/* Desktop Navigation - Hidden on mobile/tablet */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm xl:text-base">
                <a href="/" className="relative border border-white px-4 py-2  text-yellow-600 hover:text-yellow-500 transition-colors font-medium">
                  Home
                </a>
                <a href="#story" className="relative text-gray-500 hover:text-white transition-colors font-medium">
                  Our Story
                </a>
                <a href="#collection" className="relative text-gray-500 hover:text-white transition-colors font-medium">
                  Collection
                </a>
                <a href="#roadmap" className="relative text-gray-500 hover:text-white transition-colors font-medium">
                  Roadmap
                </a>
                <a href="#team" className="relative text-gray-500 hover:text-white transition-colors font-medium">
                  Team
                </a>
                <a href="#community" className="relative text-gray-500 hover:text-white transition-colors font-medium">
                  Community
                </a>
              </nav>

              {/* Connect Wallet Button - Desktop */}
              <div className="relative min-h-screen bg-blac text-white flex flex-col items-center justify-center">
                {/* Connect Wallet Button */}
                <button
                  onClick={handleConnect}
                  className="md:flex items-center cursor-pointer active:scale-95 active:shadow-inner transition-all duration-150 justify-center border border-white px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Connect Wallet
                </button>

                {/* Custom Alert */}
                {showAlert && (
                  <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-6 py-3 rounded shadow-lg animate-slideDown z-50">
                    Wallet Connected Successfully!
                  </div>
                )}

                {/* Tailwind Animation */}
                <style>
                  {`
          @keyframes slideDown {
            0% { transform: translate(-50%, -100%); opacity: 0; }
            100% { transform: translate(-50%, 0); opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.5s ease forwards;
          }
        `}
                </style>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="lg:hidden border-t border-white/10 py-4 space-y-3">
                <a href="/" className="block text-yellow-600 hover:text-yellow-500 transition-colors font-medium py-2">
                  Home
                </a>
                <a href="#story" className="block text-gray-500 hover:text-white transition-colors font-medium py-2">
                  Our Story
                </a>
                <a href="#collection" className="block text-gray-500 hover:text-white transition-colors font-medium py-2">
                  Collection
                </a>
                <a href="#roadmap" className="block text-gray-500 hover:text-white transition-colors font-medium py-2">
                  Roadmap
                </a>
                <a href="#team" className="block text-gray-500 hover:text-white transition-colors font-medium py-2">
                  Team
                </a>
                <a href="#community" className="block text-gray-500 hover:text-white transition-colors font-medium py-2">
                  Community
                </a>
                <button
                  onClick={handleConnect}
                  className="md:flex items-center cursor-pointer active:scale-95 active:shadow-inner transition-all duration-150 justify-center border border-white px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </header>

        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[100vh] sm:min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-32 pb-32 sm:pb-40 lg:pb-48 px-4">

          {/* Background Image - Full width, responsive height */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={background}
              className="w-full h-full object-cover"
              alt=""
            />

            {/* 🔥 Enhanced Dark Gradient Overlay */}
            <div className="absolute inset-0 
    bg-gradient-to-t 
    from-black 
    via-black/85 
    to-black/40">
            </div>
          </div>


<img
  src={backside}
  className="absolute -top-3 sm:-top-5 lg:-top-3 
  left-1/2 -translate-x-1/2 
  w-[90%] sm:w-[70%] md:w-[60%] lg:w-[1400px] 
  max-w-[1500px] 
  h-auto opacity-[0.05] mix-blend-screen pointer-events-none"
  alt=""
/>


          {/* Hero Content - Perfectly centered */}
          <div className="relative z-10 text-center max-w-7xl mx-auto w-full px-4 md:pb-140 md:pt-30 sm:pt-0">

            {/* Main Heading - Responsive font sizes */}
            <h1 className="text-[clamp(2rem,8vw,5rem)] sm:text-[clamp(3rem,10vw,5rem)] lg:text-[80px] tracking-tight leading-[100%] uppercase font-black font-archivo-black mb-6 sm:mb-8">
              Welcome to CB Club
            </h1>

            {/* Subheading - Centered with max width */}
            <p className="mx-auto max-w-[90%] sm:max-w-[650px] text-sm sm:text-base lg:text-xl leading-[150%] uppercase text-gray-500 mb-8 sm:mb-10 lg:mb-12">
              Our First Series of 5,000 unique hand drawn NFTs, <br /> representing our CB Members.
            </p>

            {/* CTA Button - Centered */}
            <div className="flex justify-center">
              <a href="#collection">
                <button className="bg-[#e1bf7f] cursor-pointer hover:bg-yellow-500 border border-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-black transition-all duration-300 hover:scale-105">
                  Explore Collection
                </button>
              </a>
            </div>
          </div>

          {/* NFT Carousel - Positioned at bottom, centered */}
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-0 right-0 w-full px-4">
            <div className="max-w-6xl mx-auto relative">

              {/* Left Arrow */}
              <button onClick={prevSlide} className="absolute cursor-pointer left-0 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hover:scale-110 transition-transform">
                <img src={leftArrow} alt="Previous" className="w-full h-full" />
              </button>

              {/* NFT Images Container - Centered with flex */}
              <div className="flex items-center justify-center gap-0 sm:gap-1 lg:gap-2 relative">

                {/* Left NFT - Hidden on small screens */}
                <img
                  src={leftImage}
                  className="hidden sm:block w-20 sm:w-28 md:w-36 lg:w-[166px] 
               h-auto object-cover opacity-80 
               hover:opacity-100 transition-opacity 
               -mr-6 md:-mr-10 lg:-mr-12 
               translate-y-4 z-0"
                  alt="NFT Left"
                />

                {/* Center Main NFT - Always visible, largest */}
                <div className="relative z-10">
                  <img
                    src={centerImage}
                    className="absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 
               w-[150px] sm:w-[180px] md:w-[220px] lg:w-[220px] 
               h-[200px] sm:h-[240px] md:h-[290px] lg:h-[310px]
               object-cover z-20 transition-all duration-300"
                    alt="NFT Center Overlay"
                  />

                  <img
                    src={main}
                    className="relative w-[180px] sm:w-[220px] md:w-[150px] lg:w-[318px] 
               h-auto object-contain shadow-2xl"
                    alt="NFT Main"
                  />
                </div>


                {/* Right NFT - Hidden on small screens */}
                <img
                  src={rightImage}
                  className="hidden sm:block w-20 sm:w-28 md:w-36 lg:w-[166px] 
               h-auto object-cover opacity-80 
               hover:opacity-100 transition-opacity 
               -ml-6 md:-ml-10 lg:-ml-12 
               translate-y-4 z-0"
                  alt="NFT Right"
                />
              </div>


              {/* Right Arrow */}
              <button onClick={nextSlide} className="absolute cursor-pointer right-0 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hover:scale-110 transition-transform">
                <img src={rightArrow} alt="Next" className="w-full h-full" />
              </button>

              {/* Dots Indicator - Centered below carousel */}
              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                <div className="w-20 h-20 rounded-full bg-whit">
                  <img src={dots} alt="" />
                </div>
                {/* <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div> */}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[62px] relative bg-black border-white border-[1px] overflow-hidden text-left text-white font-sen">
          {/* Marquee Container */}
          <div className="absolute top-[18px] left-0 w-[2500px] h-6 shrink-0 animate-marquee">

            {/* Our Story Items */}
            <b className="absolute top-[3px] left-[16px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[296px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[576px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[856px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[1136px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[1416px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[1696px] leading-[100%]">Our Story</b>
            <b className="absolute top-[3px] left-[1976px] leading-[100%]">Our Story</b>

            {/* CB Club NFTs Text */}
            <b className="absolute top-[3px] left-[140px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[420px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[700px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[980px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1260px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1540px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1820px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[2100px] leading-[100%] text-gray-400">CB Club NFTs</b>

            {/* Vertical Separators */}
            <div className="absolute top-[-0.5px] left-[123.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[279.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[403.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[559.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[683.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[839.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[963.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1119.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1243.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1399.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1523.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1679.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1803.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1959.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[2083.5px] border-r border-white h-[25px]" />

          </div>
        </div>


        <section
          id="story"
          className="relative bg-black w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-20"
        >

          {/* Left Vertical Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[8%] border-l-2 border-dashed border-white/40"></div>

          {/* Right Vertical Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-[8%] border-r-2 border-dashed border-white/40"></div>

          <div className="max-w-[1064px] mx-auto">
            <p className="text-center sm:text-left text-[clamp(1.125rem,3vw,2.0625rem)] sm:text-[28px] lg:text-[33px] tracking-tight leading-[150%] uppercase text-gray-500">
              When you purchase your CB Member, you’re welcomed to our family. This isn’t just another jpeg you own now - You’ve officially become a member which means you now have access our one and only CB club. CB Club has tons of benefits and offerings which will only get better, bigger over time. You can now use your member as your twitter and other social media profile pictures.
            </p>
          </div>

          <img
            src={paraImage}
            className="hidden lg:block absolute top-0 pt-23 mr-20 right-[10%] xl:right-[15%] w-[140px] lg:w-[185.2px] h-auto object-contain opacity-80"
            alt=""
          />
        </section>


        {/* ========== COLLECTION SECTION ========== */}
        {/* ========== COLLECTION SECTION ========== */}
        <div className="w-full h-[62px] relative bg-black border-white border-solid border-[1px] box-border overflow-hidden text-left text-num-20 text-white font-sen">
          <div className="absolute top-[18px] left-0 flex animate-marquee-right whitespace-nowrap">

            {/* First Set */}
            <div className="flex items-center shrink-0">
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
            </div>

            {/* Second Set (Duplicate) */}
            <div className="flex items-center shrink-0">
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Collection</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
            </div>

          </div>
        </div>

        {/* ========== Animation ========== */}
        <style>
          {`
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee-right {
  animation: marquee-right 20s linear infinite;
}
`}
        </style>
        <section
          id="collection"
          className={`relative w-full py-16 sm:py-20 bg-black lg:py-24 px-4 sm:px-6 lg:px-20 transition-all duration-500 ${focusCollection ? "z-50" : ""
            }`}
        >
          {/* 🔥 Background Blur Overlay */}
          {focusCollection && (
            <div
              onClick={() => setFocusCollection(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500"
            ></div>
          )}

          <div
            className={`max-w-[1440px] mx-auto relative transition-all duration-500 ${focusCollection ? "relative z-50" : ""
              }`}
          >
            {/* ================= GRID ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative">

              {[image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8].map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-900 overflow-hidden relative group hover:outline hover:outline-2 hover:outline-yellow-500 transition-all duration-300"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={`NFT ${index + 1}`}
                  />

                  {/* View All Button only on Image 2 */}
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        onClick={() => setFocusCollection(true)}
                        className="w-20 h-20 cursor-pointer sm:w-24 sm:h-24 backdrop-blur-md rounded-full bg-gray-300/80 border border-gray-200 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <span className="text-black font-bold text-sm sm:text-base">
                          View All
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ================= BUTTON ================= */}
            <div className="relative mt-12 sm:mt-16">

              <div className="hidden lg:block absolute top-0 bottom-0 left-[8%] border-l-2 border-dashed border-white/40 pointer-events-none"></div>
              <div className="hidden lg:block absolute top-0 bottom-0 right-[8%] border-r-2 border-dashed border-white/40 pointer-events-none"></div>

              <div className="flex justify-center">
                <div className="relative text-center font-space-grotesk">

                  <div className="absolute inset-0 blur-2xl rounded-full bg-[#e1bf7f]/60"></div>

                  <button
                    onClick={() => setFocusCollection(true)}
                    className="relative cursor-pointer bg-[#e1bf7f] border border-black px-10 sm:px-14 py-4 font-bold text-black tracking-tight hover:scale-105 transition-transform duration-300"
                  >
                    View Collection
                  </button>

                </div>
              </div>
            </div>

            {/* 🔥 Close Button */}
            {focusCollection && (
              <button
                onClick={() => setFocusCollection(false)}
                className="fixed top-6 cursor-pointer right-6 bg-white text-black px-5 py-2 rounded font-bold z-50 hover:scale-105 transition"
              >
                Close
              </button>
            )}
          </div>
        </section>


        {/* ========== ROADMAP SECTION ========== */}
        <div className="w-full h-[62px] relative bg-black border-white border-[1px] overflow-hidden text-left text-white font-sen">
          {/* Marquee Container */}
          <div className="absolute top-[18px] left-0 w-[2500px] h-6 shrink-0 animate-marquee">

            {/* Our Story Items */}
            <b className="absolute top-[3px] left-[16px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[296px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[576px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[856px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[1136px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[1416px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[1696px] leading-[100%]">roadmap</b>
            <b className="absolute top-[3px] left-[1976px] leading-[100%]">roadmap</b>

            {/* CB Club NFTs Text */}
            <b className="absolute top-[3px] left-[140px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[420px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[700px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[980px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1260px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1540px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1820px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[2100px] leading-[100%] text-gray-400">CB Club NFTs</b>

            {/* Vertical Separators */}
            <div className="absolute top-[-0.5px] left-[123.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[279.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[403.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[559.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[683.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[839.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[963.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1119.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1243.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1399.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1523.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1679.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1803.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1959.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[2083.5px] border-r border-white h-[25px]" />

          </div>
        </div>


        {/* Wrapper div jo puri screen ko black karegi left-to-right */}
        <div className="w-full bg-black">
          <section id="roadmap" className="relative w-full mx-auto max-w-6xl custom-dashed px-6 py-0">
            <div className="max-w-[630px] mx-auto relative">

              {/* Vertical Dashed Line */}
              <div className="absolute left-4 sm:left-8 lg:left-1/2 top-0 h-[calc(100%-160px)] w-px custom border-[#FFFFFF66]"></div>

              {/* Roadmap Phases */}
              <div className="space-y-0">

                {/* Phase 1 */}
                <div className="relative">
                  <div className="h-32 sm:h-40"></div>
                  <div className="flex justify-center relative z-10">
                    <div className="bg-white text-black px-6 sm:px-8 py-3 font-bold text-sm sm:text-base">
                      Phase 1
                    </div>
                  </div>
                  <div className="h-10 sm:h-12"></div>
                  <div className="relative bg-black border border-gray-600 p-6 sm:p-8 mx-4 sm:mx-0">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
                      alt=""
                    />
                    <ul className="relative z-10 space-y-3 text-sm sm:text-base text-gray-500 list-disc pl-5">
                      <li>5,000 fresh young members dropped</li>
                      <li>Live Prelist Whitelist - 0.15 eth</li>
                      <li>Ownership and rights given to the consumer over their nft</li>
                      <li>Lounge Club: Members only hangouts, exclusive priority to concerts, events etc</li>
                      <li>Additional benefits throughout roadmap progressions</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative">
                  <div className="h-32 sm:h-40"></div>
                  <div className="flex justify-center relative z-10">
                    <div className="bg-white text-black px-6 sm:px-8 py-3 font-bold text-sm sm:text-base">
                      Phase 2
                    </div>
                  </div>
                  <div className="h-10 sm:h-12"></div>
                  <div className="relative bg-black border border-gray-600 p-6 sm:p-8 mx-4 sm:mx-0">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
                      alt=""
                    />
                    <ul className="relative z-10 space-y-3 text-sm sm:text-base text-gray-500 list-disc pl-5">
                      <li>All Holders will be Airdropped a random key 🔑</li>
                      <li>Every single member will receive a random key...</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3 & 4 (Same logic applies) */}
                {/* ... baaki phases bhi isi tarah aayenge ... */}

                {/* Phase 3 */}
                <div className="relative">
                  <div className="h-32 sm:h-40"></div>
                  <div className="flex justify-center relative z-10">
                    <div className="bg-white text-black px-6 sm:px-8 py-3 font-bold text-sm sm:text-base">
                      Phase 3
                    </div>
                  </div>
                  <div className="h-10 sm:h-12"></div>
                  <div className="relative bg-black border border-gray-600 p-6 sm:p-8 mx-4 sm:mx-0">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
                      alt=""
                    />
                    <ul className="relative z-10 space-y-3 text-sm sm:text-base text-gray-500 list-disc pl-5">
                      <li>The development of our Music & Movies segment. We will release our Coke Girls collection.</li>
                      <li>
Both of the collections will star in our
<br />
   a. CB Clubs Will Walk of Frame
 <br />
   b. CB Club Nft Show
 
  </li>
            
                    
                    </ul>
                  </div>
                </div>
                                {/* Phase 4 */}
                <div className="relative">
                  <div className="h-32 sm:h-40"></div>
                  <div className="flex justify-center relative z-10">
                    <div className="bg-white text-black px-6 sm:px-8 py-3 font-bold text-sm sm:text-base">
                      Phase 4
                    </div>
                  </div>
                  <div className="h-10 sm:h-12"></div>
                  <div className="relative bg-black border border-gray-600 p-6 sm:p-8 mx-4 sm:mx-0">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
                      alt=""
                    />
                    <ul className="relative z-10 space-y-3 text-sm sm:text-base text-gray-500 list-disc pl-5">
                      <li className="mb-0">Music and Entertainment segment.</li>
<li className="mb-0">We will proceed with the development of CB Club Animated Movie, and the cast of the movie will be selected from the CB NFT collection.</li>
<li>This will further raise the credibility of the NFT and have a rare title of a Movie Star. This will boost the NFT price value and further rewards wil be offered to the NFT holder.</li>
                    </ul>
                  </div>
                </div>
                {/* Bottom Spacing */}
                <div className="h-32 sm:h-40"></div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full h-[62px] bg-black relative border-white border-[1px] overflow-hidden text-left text-white font-sen">
          {/* Marquee Container */}
          <div className="absolute top-[18px] left-0 w-[2500px] h-6 shrink-0 animate-marquee">

            {/* Our Story Items */}
            <b className="absolute top-[3px] left-[16px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[296px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[576px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[856px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[1136px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[1416px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[1696px] leading-[100%]">the Lounge</b>
            <b className="absolute top-[3px] left-[1976px] leading-[100%]">the Lounge</b>

            {/* CB Club NFTs Text */}
            <b className="absolute top-[3px] left-[140px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[420px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[700px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[980px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1260px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1540px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1820px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[2100px] leading-[100%] text-gray-400">CB Club NFTs</b>

            {/* Vertical Separators */}
            <div className="absolute top-[-0.5px] left-[123.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[279.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[403.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[559.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[683.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[839.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[963.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1119.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1243.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1399.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1523.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1679.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1803.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1959.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[2083.5px] border-r border-white h-[25px]" />

          </div>
        </div>

        <div>

          <section className="relative  w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-20 overflow-hidden">

            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 -z-10">
              <img
                src={back}
                alt="Background"
                className="w-full h-full object-cover opacity-15"
              />

              {/* Dark overlay to make it blackish */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* Top subtle gradient */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

              {/* Bottom gradient - stronger */}
              <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
            </div>

            {/* Top blur effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 
  w-[500px] h-[200px] 
  bg-yellow-500/15 
  blur-[120px] 
  -z-10">
            </div>


            <div className="flex justify-center  mt-12 sm:mt-16 lg:mt-20">
              <img
                className="w-full max-w-[414px] h-auto object-cover rounded-lg"
                src={sofa}
                alt="CB Lounge Preview"
              />
            </div>


            <div className="max-w-[1064px] mx-auto relative z-10">

              {/* Section Title */}
              <h2 className="text-center text-[clamp(2.5rem,8vw,5rem)]  sm:text-[60px] lg:text-[80px] tracking-tight leading-[100%] uppercase font-black font-archivo-black mb-12 sm:mb-16 lg:mb-20">
                The CB Lounge
              </h2>

              {/* Section Description */}
              <p className="text-center text-[clamp(1.25rem,4vw,2.25rem)] sm:text-[30px] lg:text-[36px] tracking-tight leading-[120%] uppercase text-gray-500 mx-auto">
                CB Lounge will open up once the whitelist has been completed. It will contain a series of events only
                accessible to those who have at least 1 Member.
                <br /><br />
                Each NFT holder will be able to express their freedom of speech through rap, art or something every hour.
                A collaborative experiment for the crypto industry.
              </p>

            </div>
          </section>
        </div>

        {/* ========== TEAM SECTION ========== */}
        <div className="w-full h-[62px] relative bg-black border-white border-[1px] overflow-hidden text-left text-white font-sen">
          {/* Marquee Container */}
          <div className="absolute top-[18px] left-0 w-[2500px] h-6 shrink-0 ">

            {/* Our Story Items */}
            <b className="absolute top-[3px] left-[16px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[296px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[576px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[856px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[1136px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[1416px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[1696px] leading-[100%]">Team</b>
            <b className="absolute top-[3px] left-[1976px] leading-[100%]">Team</b>

            {/* CB Club NFTs Text */}
            <b className="absolute top-[3px] left-[140px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[420px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[700px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[980px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1260px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1540px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1820px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[2100px] leading-[100%] text-gray-400">CB Club NFTs</b>

            {/* Vertical Separators */}
            <div className="absolute top-[-0.5px] left-[123.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[279.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[403.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[559.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[683.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[839.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[963.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1119.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1243.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1399.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1523.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1679.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1803.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1959.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[2083.5px] border-r border-white h-[25px]" />

          </div>
        </div>

        <section id="team" className="relative bg-black w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-20">

          {/* 🔥 Side Dashed Borders */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[9%] border-l-2 border-dashed border-white/30 pointer-events-none"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 right-[9%] border-r-2 border-dashed border-white/30 pointer-events-none"></div>

          <div className="max-w-[1064px] mx-auto">

            {/* Team Header - Centered */}
            <div className="text-center border-[#FFFFFF66] border-solid border-[1px] box-border mb-12 pb-12 sm:mb-16 lg:mb-20">
              <div className="flex justify-center mb-6">
                <img
                  className="w-20 h-[58px] sm:w-28 sm:h-14 object-cover opacity-50 mix-blend-screen"
                  src={Head}
                  alt=""
                />
              </div>
              <h2 className="w-[246px] h-9 relative text-4xl tracking-[-0.03em] leading-[100%] uppercase font-archivo-black text-white text-center inline-block">
                The Bosses
              </h2>
              <p className="text-base sm:text-lg lg:text-xl tracking-tight leading-[120%] uppercase text-gray-500 max-w-[442px] mx-auto">
                Meet the masterminds behind the executive CB collection of hand drawn nfts for our exclusive members
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

              {/* ✅ Alpha 1 */}
              <div className="relative h-[464px] bg-gradient-to-br from-black to-[#202020] border border-[#FFFFFF66] overflow-hidden group">

                {/* TEXT (UNCHANGED) */}
                <div className="p-8 sm:p-10 relative z-10">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-2 font-archivo-black">
                    CBZ<span className="text-xl sm:text-2xl">ay</span>
                  </h3>
                  <p className="text-lg sm:text-xl uppercase font-bold text-gray-500 mb-6">
                    Marketing Expert
                  </p>
                </div>

                {/* IMAGE RIGHT SIDE */}
                <img
                  src={alpha_1}
                  className="absolute bottom-0 right-0 w-[360px] h-[360px] object-cover"
                  alt="CBZay - Marketing Expert"
                />
              </div>

              {/* ✅ Alpha 2 */}
              <div className="relative h-[464px] bg-gradient-to-br from-black to-[#202020] border border-[#FFFFFF66] overflow-hidden group">

                {/* TEXT (UNCHANGED) */}
                <div className="p-8 sm:p-10 relative z-10">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-2 font-archivo-black">
                    CBZ<span className="text-xl sm:text-2xl">ak</span>
                  </h3>
                  <p className="text-lg sm:text-xl uppercase font-bold text-gray-500 mb-6">
                    Lead Developer
                  </p>
                </div>

                {/* IMAGE RIGHT SIDE */}
                <img
                  src={alpha_2}
                  className="absolute bottom-0 right-0 w-[360px] h-[360px] object-cover"
                  alt="CBZak - Lead Developer"
                />
              </div>

            </div>
          </div>
        </section>



        {/* ========== FAQ SECTION ========== */}
        <div className="w-full h-[62px] relative bg-black border-white border-[1px] overflow-hidden text-left text-white font-sen">
          {/* Marquee Container */}
          <div className="absolute top-[18px] left-0 w-[2500px] h-6 shrink-0 ">

            {/* Our Story Items */}
            <b className="absolute top-[3px] left-[16px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[296px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[576px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[856px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[1136px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[1416px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[1696px] leading-[100%]">FAQ</b>
            <b className="absolute top-[3px] left-[1976px] leading-[100%]">FAQ</b>

            {/* CB Club NFTs Text */}
            <b className="absolute top-[3px] left-[140px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[420px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[700px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[980px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1260px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1540px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[1820px] leading-[100%] text-gray-400">CB Club NFTs</b>
            <b className="absolute top-[3px] left-[2100px] leading-[100%] text-gray-400">CB Club NFTs</b>

            {/* Vertical Separators */}
            <div className="absolute top-[-0.5px] left-[123.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[279.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[403.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[559.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[683.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[839.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[963.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1119.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1243.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1399.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1523.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1679.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1803.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[1959.5px] border-r border-white h-[25px]" />
            <div className="absolute top-[-0.5px] left-[2083.5px] border-r border-white h-[25px]" />

          </div>
        </div>

        <section id="faq" className="relative bg-black w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-20">

          {/* 🔥 Side Dashed Borders */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[12%] border-l-2 border-dashed border-white/30 pointer-events-none"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 right-[12%] border-r-2 border-dashed border-white/30 pointer-events-none"></div>

          <div className="max-w-[850px] mx-auto">

            {[
              {
                question: "This is a question that is frequently asked by the Users",
                answer:
                  "The CB Collection is an exclusive set of hand drawn NFTs for our premium members. Each NFT holder will be able to express their freedom of speech through rap, art or something every hour. A collaborative experiment for the crypto industry."
              },
              {
                question: "How do I join the whitelist?",
                short: "Steps to become a verified member.",
                answer:
                  "To join the whitelist, you need to follow our official channels and complete the registration process. Only verified users will gain access to exclusive drops and events."
              },
              {
                question: "What utilities do members get?",
                short: "Benefits of holding an NFT.",
                answer:
                  "Members gain access to private events, creative collaborations, and exclusive community discussions inside the CB Lounge."
              },
              {
                question: "Can I resell my NFT?",
                short: "Understanding ownership rights.",
                answer:
                  "Yes, NFTs are fully transferable and can be resold on supported marketplaces depending on platform rules and royalty structure."
              },
              {
                question: "Can I resell my NFT?",
                answer:
                  "Yes, NFTs are fully transferable and can be resold on supported marketplaces depending on platform rules and royalty structure."
              }
            ].map((item, index) => {
              const [openIndex, setOpenIndex] = useState(null);
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-t border-gray-700">

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full cursor-pointer text-left py-8 sm:py-10 lg:py-12 focus:outline-none"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl leading-[100%] uppercase mb-3 sm:mb-4">
                      {item.question}
                    </h3>

                    <p className="text-xs sm:text-sm leading-[100%] uppercase text-gray-500">
                      {item.short}
                    </p>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm sm:text-base leading-[150%]">
                      {item.answer}
                    </p>
                  </div>

                </div>
              );
            })}

            <div className="border-t border-gray-700"></div>

          </div>
        </section>


        {/* ========== JOIN US CTA SECTION ========== */}
        <div className="w-full h-[62px] bg-black relative border-white border-solid border-[1px] box-border overflow-hidden text-left text-num-20 text-white font-sen">
          <div className="absolute top-[18px] left-0 flex animate-marquee-right whitespace-nowrap">

            {/* First Set */}
            <div className="flex items-center shrink-0">
              <b className="px-4 leading-[100%] text-gray-400">CBJoin Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CBJoin Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CBJoin Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
            </div>

            {/* Second Set (Duplicate) */}
            <div className="flex items-center shrink-0">
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%] text-gray-400">CB Club NFTs</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
              <b className="px-4 leading-[100%]">Join Us</b>
              <div className="border-white border-solid border-r-[1px] h-6" />
            </div>

          </div>
        </div>

        {/* ========== Animation ========== */}
        <style>
          {`
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee-right {
  animation: marquee-right 20s linear infinite;
}
`}
        </style>

        <section className="relative w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16">

          {/* 🔥 Side Dashed Borders - Perfect Full Height */}
          <div className="absolute inset-y-0 left-10 sm:left-16 lg:left-28 border-l-2 border-dashed border-[#FFFFFF66] pointer-events-none"></div>
          <div className="absolute inset-y-0 right-10 sm:right-16 lg:right-28 border-r-2 border-dashed border-[#FFFFFF66] pointer-events-none"></div>

          <div className="relative max-w-[900px] pt-20 pb-20 mx-auto">

            {/* Wrapper */}
            <div className="relative">

              {/* ✅ FRAME IMAGE */}
              <div className="absolute inset-0 -m-4 sm:-m-6 lg:-m-16 pointer-events-none z-0">
                <img
                  src={frames}
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>

              {/* CTA BOX */}
              <div className="relative z-10 flex flex-col
        min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]
        [background:linear-gradient(180deg,_#ffe0a7,_#5e4518)]
        p-6 sm:p-10 lg:p-12
        shadow-[0px_8px_9px_-3px_rgba(255,255,255,0.5)_inset]">

                {/* Title */}
                <h2 className="text-center text-[clamp(1.5rem,4.5vw,2.5rem)]
          sm:text-[36px] lg:text-[42px]
          tracking-tight leading-[120%] uppercase
          font-black font-archivo-black text-black mb-6 sm:mb-8">
                  Become a Part of Our Exclusive Group
                </h2>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
                  <a href="https://www.x.com" alt="" target='_blank'>
                  <div className="w-9 h-9 cursor-pointer sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <img src={x} className="w-4 h-4 sm:w-5 sm:h-5" alt="X" />
                  </div>
                  </a>
                  <a href="https://www.discord.com" target='_blank'>
                  <div className="w-9 h-9 cursor-pointer sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <img src={discord} className="w-4 h-4 sm:w-5 sm:h-5" alt="Discord" />
                  </div>
                  </a>
                  <a href="https://www.al-dhow.com/" target='_blank'>
                  <div className="w-9 cursor-pointer h-9 sm:w-10 sm:h-10 bg-black border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <img src={boat} className="w-4 h-4 sm:w-5 sm:h-5" alt="Boat" />
                  </div>
                  </a>
                </div>

                {/* Bottom Images */}
                <div className="flex flex-col sm:flex-row items-end justify-center
          gap-5 sm:gap-6 lg:gap-8 mt-auto">

                  <div className="w-full max-w-[200px] sm:max-w-[230px] aspect-square overflow-hidden rounded-lg">
                    <img src={card_1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Card 1" />
                  </div>

                  <div className="w-full max-w-[200px] sm:max-w-[230px] aspect-square overflow-hidden rounded-lg">
                    <img src={card_2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Card 2" />
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>




        {/* ========== FOOTER ========== */}
        <footer className="relative bg-black border-t border-white py-8 sm:py-10 lg:py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl tracking-[0.1em] leading-[100%] uppercase text-gray-400">
              ©2026 CB Club Exclusive.
            </p>
          </div>
        </footer>

        {/* ========== ANIMATIONS ========== */}
        <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #666;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
      </div>


    </>
  )
}

export default Home;
