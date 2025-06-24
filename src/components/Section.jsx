import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Section = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  async function getData() {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [count]);
  return (
    <div className="flex flex-wrap w-[100%] h-[100vh]  justify-center  mt-[30px]">
      {data &&
        data.map((item) => {
          return (
            <div
              style={{
                color: dark ? "black" : "white",
                backgroundColor: dark ? "white" : "black",
              }}
            >
              <div
                style={{
                color: dark ? "black" : "white",
                backgroundColor: dark ? "white" : "black",
              }}
                key={item.id}
                className=" bg-black text-white border rounded-[10px] h-[450px]  w-[290px] mr-[15px] mb-[20px] mt-[20px] flex flex-col items-center justify-center"
              >
                <p></p>
                <p className=" flex ">Title :- {item.title}</p>

                <img
                  src={item.image}
                  alt=""
                  width={"100px"}
                  className="w-[200px] h-[200px] border "
                />
                <p>Price : ${item.price}</p>
                <p>Rating : {item.rating.rate}</p>
                <p>Catagory : {item.category}</p>
                <div className=" w-[80%] flex justify-between mt-[10px]">
                  <button className="border w-[100px] h-[40px]  transition  duration-400 ease-in-out   hover:text-black hover:bg-white  hover:rounded-[7px]">
                    Buy Now
                  </button>
                  <button className="border  w-[100px] h-[40px]  transition  duration-400 ease-in-out  hover:text-black hover:bg-white  hover:rounded-[7px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Section;
