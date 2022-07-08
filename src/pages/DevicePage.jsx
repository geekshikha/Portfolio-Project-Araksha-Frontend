import React from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const DevicePage = () => {
  // if (deviceList.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h2>Devices</h2>
      <CategoryCard />
    </div>
  );
};

export default DevicePage;
