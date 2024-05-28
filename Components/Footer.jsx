import React from 'react';
import Link from 'next/link';
const Footer = () => {
  const productList = ["market", "ERC20 Token", "Donation"];
  const contactList = [
    { label: "Supportypm@.com", link: "mailto:kathatmonu47@gmail.com" },
    { label: "+91-9827654285", link: "tel:7073577407" },
    { label: "Contact us", link: "#" },
    
  ];
  const usefulLink = ["", "", ""];

  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto King
            </h6>
            <p>
            
              we can use rows and columns here to organize our footer content.
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <ul>
              <li  class="mb-4">
                <a href='https://www.nseindia.com/'>Market</a>
              </li>
              <li  class="mb-4">
                <a href='https://www.binance.com/en-IN/markets/overview'>ERC 20 Token</a>
              </li>
              <li  class="mb-4">
                <a href='http://localhost:3000/donation'>Donation</a>
              </li>
            </ul>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <ul>
              <li  class="mb-4">
                <a href='http://localhost:3000/'>Home</a>
              </li>
              <li  class="mb-4">
                <a href='http://localhost:3000/about'>About us</a>
              </li>
              <li  class="mb-4">
                <a href='http://localhost:3000/about'>Comapany Bio</a>
              </li>
            </ul>
            {usefulLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
  <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
  {contactList.map((contact, index) => (
    <p class="mb-4" key={index + 1}>
      <a href={contact.link}>{contact.label}</a>
    </p>
  ))}
</div>

        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span> 2023 © Copyright:</span>
        <a class="font-semibold" href="https://tailwind-elements.com">
        CryptoThrone
        </a>
      </div>
    </footer>
  );
};

export default Footer;
