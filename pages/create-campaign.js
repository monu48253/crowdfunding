// pages/campaign-progress.js

import React from 'react';
import GovernmentFundsAllocation from '/Components/GovernmentFundsAllocation';

const campaigns = [
  { id: 1, name: 'Campaign 1', image: 'https://images.pexels.com/photos/7566369/pexels-photo-7566369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', progress: 75 },
  { id: 2, name: 'Campaign 2', image: 'https://images.pexels.com/photos/7580843/pexels-photo-7580843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', progress: 50 },
  { id: 3, name: 'Campaign 3', image: 'https://media.istockphoto.com/id/1396081649/photo/indian-rupee-money-finance-budget-tax-pie-chart.jpg?s=1024x1024&w=is&k=20&c=pA8e8Za52Bjy_49he9f8ku9npLPiNvn734LxxiZStRY=', progress: 90 },
  // Add more campaign data as needed
];

const CampaignProgress = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">Campaign Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={campaign.image} alt={campaign.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">{campaign.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Progress: {campaign.progress}%</p>
            </div>
          ))}
        </div>
      </div>
      <GovernmentFundsAllocation />
    </div>
  );
};

export default CampaignProgress;
