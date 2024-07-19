import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/**Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
      {/** Accordion Body  */}
    </div>
  );
};

export default RestaurantCategory;
