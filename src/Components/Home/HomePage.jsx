import React from "react";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy  iPhone 14 Pro "
        subtitle="Experience the power of the latest iPhone 14 Pro with our most Pro camera ever."
        link="/product/646e255f928653e4d401da34"
        image={iphone}
      />
      {/*   Featured Products */}
      <HeroSection
        title="Build the ultimate setup "
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your mac mini."
        link="/product/646e255f928653e4d401da3c"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
