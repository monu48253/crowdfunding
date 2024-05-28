import React, { useState, useEffect } from "react";

const Popup = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationsData, setAllDonationData] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const donationsListData = getDonations(donate.pId);
    const fetchDonationData = async () => {
      const donationData = await donationsListData;
      setAllDonationData(donationData);
    };

    fetchDonationData();
    setShowPopup(true);

    return () => {
      setShowPopup(false);
    };
  }, [donate.pId, getDonations]);

  return (
    <>
      <div
        className={`popup-overlay ${showPopup ? "popup-show-overlay" : ""}`}
      >
        <div className={`popup-card ${showPopup ? "popup-show" : ""}`}>
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="popup-title">{donate.title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setOpenModel(false)}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                &times;
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {donate.description}
            </p>
            <input
              onChange={(e) => setAmount(e.target.value)}
              placeholder="amount"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
            />
            {allDonationsData?.map((donate, i) => (
              <p
                key={i}
                className="my-4 text-slate-500 text-lg leading-relaxed"
              >
                {i + 1}: {donate.donation} {donate.donator.slice(0, 35)}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setOpenModel(false)}
            >
              Close
            </button>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => createDonation()}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
