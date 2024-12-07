import React from "react";
import "./Hero.css";
import HeroTile from "./HeroTile/HeroTile";
import HeroChart from "./HeroChart/HeroChart";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-tile-container">
        <HeroTile isExpense={false} />
        <HeroTile isExpense={true} />
      </div>
      <div>
        <HeroChart />
      </div>
    </div>
  );
};

export default Hero;
