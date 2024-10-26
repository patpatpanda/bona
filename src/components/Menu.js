import React from 'react';

const Menu = () => {
  return (
    <section className="menu-section">
      <h2>Vår Meny</h2>
      <div className="menu-category">
        <h3>Bonnatösens Burgare</h3>
        <p>Våra burgare är gjorda på de bästa råvarorna och tillagade med kärlek.</p>
        <ul>
          <li>Hamburgare Klassisk</li>
          <li>Cheeseburgare Deluxe</li>
          <li>Vegoburgare Grön</li>
        </ul>
      </div>
      <div className="menu-category">
        <h3>Bonnatösen Mackor</h3>
        <p>Våra mackor är gjorda på färskt bröd och fyllda med härliga smaker.</p>
        <ul>
          <li>Räkmacka på rustikt bröd</li>
          <li>Kycklingmacka med pesto</li>
          <li>Vegetarisk Macka med hummus</li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
