import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Hero, Card, Popup } from "../Components";





const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();
  /*const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);*/

  useEffect(() => {
    const getCampaignsData = getCampaigns();
      const userCampaignsData =  getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
   };
    
  }, []);

   //Donate Popup Model
   const [openModel, setOpenModel] =useState(false);
   const[donateCampaign,setDonateCampaign] = useState();

   console.log(donateCampaign);
   return (
  
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaigns"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Created Campaigns"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <Popup
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
