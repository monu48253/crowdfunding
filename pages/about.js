import React, { useState } from 'react';

const About = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      category: 'General',
      qas: [
        { question: 'What type of language is Solidity?', answer: 'Solidity is a statically-typed high-level object-oriented programming language designed for developing smart contracts that run on Ethereum Virtual Machine (EVM).' },
        { question: 'What are the different Ether units available in Solidity?', answer: 'The different ether units available in Solidity are wei, kwei, gwei, mwei, microether, milliether, ether.' }
      ]
    },
    {
      category: 'Technical',
      qas: [
        { question: 'Can Solidity functions accept multiple parameters?', answer: 'Yes, Solidity functions can accept multiple parameters separated by commas.' },
        { question: 'What are gas and gas limit in Ethereum?', answer: 'Gas is the unit that measures the amount of computational effort required to execute operations, whereas the gas limit is the maximum amount of gas a transaction can consume.' }
      ]
    },
    {
      category: 'Billing',
      qas: [
        { question: 'What payment methods do you accept?', answer: 'We accept Ethereum, Bitcoins, and other cryptocurrencies.' },
        { question: 'How do I view my invoice?', answer: 'You can view your invoice in the billing section of your account.' }
      ]
    }
  ];

  const members = [
    { name: 'Monu Kathat', photo: 'https://images.pexels.com/photos/25068508/pexels-photo-25068508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Gaikwad Pranav', photo: 'https://images.pexels.com/photos/25068437/pexels-photo-25068437.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Ganesh Khedkar', photo: 'https://images.pexels.com/photos/25068524/pexels-photo-25068524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Yash Chaudhari', photo: 'https://images.pexels.com/photos/25068525/pexels-photo-25068525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="questions-container">
        {questions.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2>{section.category} Questions</h2>
            {section.qas.map((qa, index) => (
              <div key={index} className="mb-4">
                <div className={`question p-4 bg--800 rounded-lg ${activeQuestion === `${sectionIndex}-${index}` ? 'bg-black-200' : 'bg-black'}`} onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}>
                  <h3 className="question-title text-xl font-semibold cursor-pointer">{qa.question}</h3>
                  <div className={`answer mt-2 ${activeQuestion === `${sectionIndex}-${index}` ? 'active' : ''}`}>
                    {qa.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="members-section mt-12">
        <h2>Our Team</h2>
        <div className="members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="member text-center">
              <img src={member.photo} alt={member.name} className="member-photo rounded-full mb-4" />
              <p className="member-name text-lg font-semibold">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
