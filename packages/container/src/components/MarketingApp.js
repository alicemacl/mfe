import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  //runs once 
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
