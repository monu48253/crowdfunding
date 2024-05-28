import React, { useState } from 'react';

// News component
const News = () => {
  // Define the news content and URLs
  const newsData = [
    {
      title: "Web3: The Future of the Internet",
      source: "TechCrunch",
      url: "https://www.nseindia.com/"
    },
    {
      title: "Blockchain Technology Explained",
      source: "Forbes",
      url: "https://www.binance.com/en-IN/markets/overview"
    },
    // Add more news articles
  ];

  return (
    <div className="mt-16 bg-white-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <ul>
        {newsData.map((news, index) => (
          <li key={index} className="mb-4">
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {news.title}
            </a>
            <span className="ml-2 text-gray-500 text-sm">({news.source})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

 

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const imageCardsData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Event 1",
      description: "Description for event 1",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1555293442-818eb55f7ca0?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Event 2",
      description: "Description for event 2",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Charity",
      description: "Description for event 3",
    },
    {
      imageSrc: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Event 4",
      description: "Description for event 4",
    },
    {
      imageSrc: "https://images.pexels.com/photos/6781365/pexels-photo-6781365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Event 5",
      description: "Description for event 5",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Event 6",
      description: "Description for event 6",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageCardsData.map((card, index) => (
          <div 
            key={index}
            className={`bg-black shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img src={card.imageSrc} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              {activeIndex === index && (
                <div className="text-gray-600 transition-opacity duration-500 ease-in-out">
                  {card.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <News />
    </div>
  );
};

export default Events;
