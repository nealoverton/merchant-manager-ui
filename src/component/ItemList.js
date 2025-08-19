import { useEffect, useState } from "react";
import { fetchItemList } from "../service/itemService";

export default function ItemList() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadItemList();
  }, []);

  const loadItemList = async () => {
    try {
      setLoading(true);
      const response = await fetchItemList();
      console.log(response);
      setItemList(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      {loading
        ? null
        : itemList.map((item) => {
            return <p>{item.index}</p>;
          })}
    </div>
  );
}
