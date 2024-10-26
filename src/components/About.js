import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Om Oss</h2>
        <p>
          Bonnatösen är en plats där kärlek till mat och gemenskap möts. Med rötter djupt förankrade i tradition och en passion för kvalitativa råvaror, strävar vi efter att skapa oförglömliga smakupplevelser för varje besökare.
        </p>
        <p>
          Vår resa började med en enkel idé - att skapa mat med hjärta och själ, inspirerat av lokala ingredienser och en känsla av tillhörighet. Vi välkomnar dig att dela vår passion för mat, glädje och gemenskap.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/bonna.webp" alt="Bild som representerar Bonnatösen" />
      </div>
    </section>
  );
};

export default About;
