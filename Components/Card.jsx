import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  const calculateProgressWidth = (amountCollected, target, deadline) => {
    const totalDays = new Date(deadline).getTime() - new Date().getTime();
    const progressDays = Math.max(0, totalDays / (1000 * 3600 * 24));
    const progress = (amountCollected / target) * 100;
    return Math.min(progress, (100 - progressDays)).toFixed(2);
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5">{title}</p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full">
        {allcampaign?.map((campaign, i) => (
          <div
            onClick={() => {
              setDonate(campaign);
              setOpenModel(true);
            }}
            key={i + 1} // Use a unique key, ideally campaign.id
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded"
          >
            <img
              src={
                campaign.image ||
                "https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className="object-cover w-full h-64 rounded"
              alt={campaign.title || "Campaign Image"}
            />
            <div className="py-5 pl-2">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5 text-black">
                  {campaign.title}
                </p>
              </a>
              <p className="mb-4 text-gray-700 text-black">{campaign.description}</p>
              <div className="flex space-x-4 text-black">
                <p className="font-semibold">Target: {campaign.target} ETH</p>
                <p className="font-semibold">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  "--progress-width": `${calculateProgressWidth(
                    campaign.amountCollected,
                    campaign.target,
                    campaign.deadline
                  )}%`,
                  width: `${calculateProgressWidth(
                    campaign.amountCollected,
                    campaign.target,
                    campaign.deadline
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
