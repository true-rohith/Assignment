import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Constants";
import axios from "axios";

const ItemPage = () => {
  const params = useParams();

  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchItem = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/${params.beerItem}`);
      setItem(res.data[0]);
      console.log(res.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className=" bg-cyan-200 w-full h-full sm:h-[100vh]">
      <Link className="flex items-center" to={"/"}>
        <IoIosArrowRoundBack size={40} />
        <p className="text-[20px]">Back</p>
      </Link>
      {loading && (
        <h1 className="text-[40px] text-gray-600 text-center ">Loading...</h1>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img
          className="h-[80vh] m-[20px]"
          src={item.image_url}
          alt={item.name}
        />

        <div className="w-full sm:w-[60vw] bg-cyan-100 m-[20px] sm:rounded-md">
          <h1 className="font-[1000] text-center text-[60px] mb-[40px] text-red-500">
            {item.name}
          </h1>
          <p className="m-[10px] text-center text-[20px] ">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
