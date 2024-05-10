import React from 'react';

// Shared constant styles for repeated Tailwind classes
const headerNavClasses = 'hover:text-violet-800 dark:hover:text-violet-400';
const textColorViolet = 'text-violet-600 dark:text-violet-300';

const MarketPlace = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 flex flex-col items-center justify-center min-h-screen p-4">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

// Header component representing the top navigation and title
const Header = () => {
    return (
        <header className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-violet-700 dark:text-violet-200">MarketPlace</h1>
            <nav>
                <ul className="flex space-x-4 font-medium text-violet-600 dark:text-violet-300">
                    <li><a href="#" className={headerNavClasses}>Home</a></li>
                    <li><a href="#" className={headerNavClasses}>Products</a></li>
                    <li><a href="#" className={headerNavClasses}>About</a></li>
                    <li><a href="#" className={headerNavClasses}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

// MainContent component including the main section of the page
const MainContent = () => {
    return (
        <main className="w-full max-w-4xl mx-auto mt-10 px-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <ImageSection />
                <DescriptionSection />
            </div>
        </main>
    );
}

// ImageSection component for displaying images
const ImageSection = () => {
    return (
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img src="https://c7.alamy.com/comp/M700F4/neon-glowing-bitcoin-btc-in-ultra-violet-colors-with-cryptocurrency-M700F4.jpg" alt="Market Image" className="rounded-lg shadow-lg"/>
        </div>
    );
}

// DescriptionSection component for displaying texts and a button
const DescriptionSection = () => {
    return (
        <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-200">Explore Our Wide Range of Products!</h2>
            <p className={textColorViolet}>From groceries to electronics, find everything you need at MarketPlace. Enjoy the best deals and savings every day!</p>
            <a href="#" className="px-6 py-2 bg-violet-600 text-white rounded font-medium hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:bg-violet-500 dark:hover:bg-violet-600">Shop Now</a>
        </div>
    );
}

// Footer component
const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 py-6 mt-12 text-center border-t border-violet-200 dark:border-violet-700">
            <p className={textColorViolet}>
                © 2023 MarketPlace, Inc. All rights reserved.
            </p>
        </footer>
    );
}

export default MarketPlace;