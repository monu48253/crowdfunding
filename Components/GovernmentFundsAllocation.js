import React, { useState } from 'react';


const MapContainer = () => {
  const [showGoogleMap, setShowGoogleMap] = useState(false);

  const toggleMap = () => {
    setShowGoogleMap((prev) => !prev);
  };

  const redirectToLink = () => {
    // Redirect to the desired link
    window.location.href = 'https://ejalshakti.gov.in/IMISReports/Reports/Financial/rpt_RWS_StatewiseAllocationReleaseExpenditure_S.aspx?Rep=0&RP=Y';
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">Government Funds Allocation</h2>
      <div className="bg-black rounded-lg shadow-lg p-4">
        {showGoogleMap ? (
          <ComposableMap projection="geoMercator">
            {/* Your map content here */}
          </ComposableMap>
        ) : (
          <div className="animate-text">
            {/* Your XML file content here */}
            <pre>
              {/* Example XML content */}
              {`
              - Statewise Allocation, Release and Expenditure Statement
              `}
            </pre>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={showGoogleMap ? toggleMap : redirectToLink}
          >
            {showGoogleMap ? 'Show XML' : 'Show Map'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
