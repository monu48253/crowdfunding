import React from 'react';

const ProjectPage = () => {
  // Define the Google link
  const googleLink = 'https://www.irjmets.com/uploadedfiles/paper/issue_5_may_2023/39833/final/fin_irjmets1684834623.pdf';

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      {/* Background blend image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, black, black)", height: "105%", width: "100%" }}></div>
      {/* Heading and Subheading */}
      <div className="bg-white-900 bg-opacity-75 shadow-lg rounded-lg p-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          How Can Crowdfunding Help You
        </h1>
        <h2 className="text-lg md:text-xl font-semibold mb-8 text-gray-300">
          "Empower Change, One Transaction at a Time: Transforming Dreams into Reality Through Secure and Transparent Fund Allocation with Solidity."
        </h2>
        {/* Card with content */}
        <div className="mt-12 w-full max-w-6xl">
          <div className="flex justify-between">
            <div className="w-1/6 border-r border-dotted border-gray-700 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">25000+ Patients Funded</p>
            </div>
            <div className="w-1/6 border-r border-dotted border-gray-700 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">24/7 Personalized Expert Assistance</p>
            </div>
            <div className="w-1/6 border-r border-dotted border-gray-700 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">30 Lakh+ Donor Community</p>
            </div>
            <div className="w-1/6 border-r border-dotted border-gray-700 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">Fast Review of Fundraisers</p>
            </div>
            <div className="w-1/6 border-r border-dotted border-gray-700 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">Indian Tax Benefits</p>
            </div>
            <div className="w-1/6 bg-black p-4 rounded-lg">
              <p className="text-center text-white font-semibold">Supported in all Systems</p>
            </div>
          </div>
        </div>
        {/* Button for more detail with Google link */}
        <a href={googleLink} target="_blank" rel="noopener noreferrer" className="bg-black-700 text-white font-semibold py-3 px-5 mt-24 rounded-lg hover:bg-gray-600 transition duration-800">More Detail</a>
      </div>
    </div>
  );
};

export default ProjectPage;
