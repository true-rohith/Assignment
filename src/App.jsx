import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { BASE_URL } from "./Constants";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import { Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setItems(res.data);
      // console.log(res.data);
      // console.log(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="p-[20px] w-full text-center">
        <SearchBar />

        {loading && <h1 className="text-[40px] text-gray-600 ">Loading....</h1>}

        <div className="flex flex-wrap w-full justify-evenly">
          {items.map((itr) => {
            return (
              <Link key={itr.id} to={`/item/${itr.id}`}>
                <Card item={itr} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
