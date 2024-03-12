import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalIems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.length < 1 ? (
              <p className="no-items">There are no items in your Bag... </p>
            ) : (
              <>
                {finalIems.map((item) => (
                  <BagItem key={item.id} item={item} />
                ))}
              </>
            )}
          </div>
          {bagItems.length >= 1 ? <BagSummary /> : null}
        </div>
      </main>
    </>
  );
};

export default Bag;
