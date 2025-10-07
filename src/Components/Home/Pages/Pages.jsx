import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';

const Page = () => {
  const images = [
    { label: 'Journey of KVKs', imgPath: `https://ik.imagekit.io/ataripune/assets/images/Slider%20images/ATARI%20Building.jpg?updatedAt=1756123585619` },
    { label: 'Krishi Vigyan Kendras', imgPath: `https://ik.imagekit.io/ataripune/assets/images/Slider%20images/ATARI%20Building%2007.10.24.png?updatedAt=1756123584613` },
    // { label: 'Agricultural Field Research', imgPath: `${WEBSITE_BASE_URL}/images/DSC_9794.JPG` },
    // { label: 'Farmer with Harvest', imgPath: `${WEBSITE_BASE_URL}/images/DSC_9940.JPG` },
];
  return (
    <div className="container-fluid">
      <div className="row g-3">
        {/* First row: ComponentA (8 cols) and ComponentB (4 cols) */}
        <div className="col-12 col-md-9">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <ComponentA />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <ComponentB />
          </div>
        </div>

        {/* Second row: ComponentC and another ComponentB (4 cols each) */}
        <div className="col-12 col-md-9">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <ComponentC imageData={images}/>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <ComponentD />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
