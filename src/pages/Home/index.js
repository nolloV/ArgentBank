import "./home.css";
import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import logoChat from "../../assets/icon-chat.png";
import logoMoney from "../../assets/icon-money.png";
import logoSecurity from "../../assets/icon-security.png";

function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <Features
          src={logoChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />

        <Features
          src={logoMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />

        <Features
          src={logoSecurity}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default Home;
