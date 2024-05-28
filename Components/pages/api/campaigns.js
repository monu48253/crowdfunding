// pages/api/campaigns.js
import dbConnect from '../../utils/dbConnect'; // Assuming you use a MongoDB database
import Campaign from '../../models/Campaign';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to MongoDB
      const { title, description, amount, deadline, pictureUrl } = req.body;
      const campaign = new Campaign({
        title,
        description,
        amount,
        deadline,
        pictureUrl,
      });
      await campaign.save();
      res.status(201).json({ message: 'Campaign created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
