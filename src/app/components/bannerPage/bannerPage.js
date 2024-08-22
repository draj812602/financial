import React, { useState, useEffect } from "react";

const bannerPage = () => {
  const [animationClass, setAnimationClass] = useState("animate");

  useEffect(() => {
    const startAnimation = () => {
      setAnimationClass("animate");
      // Trigger fade-out after text has been visible for 5 seconds
      setTimeout(() => {
        setAnimationClass("fade-out");
      }, 5000); // Visible duration

      // Restart animation after 7 seconds (5s visible + 2s animation duration)
      setTimeout(() => {
        setAnimationClass("animate");
      }, 7000); // Restart animation
    };

    startAnimation();
    // Call the startAnimation function every 7 seconds
    const interval = setInterval(startAnimation, 7000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container text-center text-dark">
      <h1 className={`animated-text ${animationClass}`}>
        Kya aapne crorepati ka safar start kiya?
      </h1>
      <h2 className={`animated-text ${animationClass}`}>
        Did you start your journey to the millioner?
      </h2>
    </div>
  );
};

export default bannerPage;
