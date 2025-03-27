import React, { useEffect, useState } from "react";
import { MdModeNight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Get_ID } from "../Services/GetId.jsx";

const Body = () => {
  const [data, getData] = useState();
  const [search, getSearch] = useState("Shaquib2802");
  const [theme, setTheme] = useState("Light");

  const DataApi = async () => {
    const response = await Get_ID(search);
    console.log("API Response:", response);
    getData(response?.data);
  };
  const handleSearch = () => {
    DataApi(search);
  };

  useEffect(() => {
    console.log("Calling API...");
    DataApi();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="dark:bg-[#4B6A9B] bg-[#F6F8FF]  h-[100vh]">
      <div className="lg:mx-[27%] mx-[10%] py-2 hidden md:block">
        <div className="flex items-center  justify-between py-3 ">
          <div className="dark:text-white font-1 font-semibold text-xl text-[#4B6A9B]">
            DevDetective
          </div>
          <button
            onClick={handleThemeSwitch}
            className="flex  items-center gap-x-3 border-2  rounded-xl p-1 "
          >
            <div className="text-xs font-1 dark:text-white text-[#4B6A9B] font-semibold tracking-wider">
              {theme === "dark" ? "Light" : "Dark"}
            </div>
            <div className="">
              <MdModeNight className="rotate-[120deg] dark:text-white text-[#697C9A] text-xl" />
            </div>
          </button>
        </div>
        <div className="bg-white rounded-xl gap-x-36 justify-between shadow-xl items-center p-3 my-4 flex ">
          <div className="flex gap-x-3 w-[80%]">
            <div className="">
              <IoSearchOutline className="text-[#0B7FFF] text-xl " />
            </div>
            <input
              type="text"
              placeholder="Enter a GitHub username..."
              value={search}
              onChange={(e) => getSearch(e.target.value)}
              className="w-[70%] placeholder:text-[#4B6A9B] text-sm  font-1 outline-none "
            />
          </div>
          <div className="w-[20%] ">
            <button
              type="submit"
              onClick={handleSearch}
              className="font-1 font-semibold text-sm bg-[#0079ff] text-white px-4 py-2 rounded-md "
            >
              Search{" "}
            </button>
          </div>
        </div>
        <div className="flex bg-white rounded-md shadow-md gap-x-5 p-7">
          <div className=" w-[20%]">
            <img className="w-[90%] " src={data?.avatar_url} alt="" />
          </div>
          <div className=" w-[80%]">
            <div className="flex items-center justify-between ">
              <div className="font-semibold font-1 text-xl ">{data?.name}</div>
              <div className="text-xs text-[#4B6A9B] font-1 ">
                Joined {formatDate(data?.created_at)}
              </div>
            </div>
            <div className="text-blue-500 font-1 underline text-sm ">
              <a href="https://github.com/nk7318">@{data?.login}</a>{" "}
            </div>
            <div className="flex flex-col gap-y-2 my-2">
              <div className="text-xs text-[#788FB4] font-1">{data?.bio}</div>
            </div>

            <div className="grid grid-cols-3 text-center py-4 my-6 bg-[#F6F8FF] rounded-lg shadow-md ">
              <div className="flex flex-col ">
                <div className="text-[#4B6A9B] text-[65%] font-1 ">Repos</div>
                <div className="font-1">{data?.public_repos}</div>
              </div>
              <div className="flex flex-col ">
                <div className="text-[#4B6A9B] text-[65%] font-1 ">
                  Followers
                </div>
                <div className="font-1">{data?.followers}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#4B6A9B] text-[65%] font-1 ">
                  Following
                </div>
                <div className="font-1">{data?.following}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 p-3 gap-5  ">
              <div className="flex gap-x-2 mx-auto">
                <div>
                  <FaLocationDot className="text-[#4B6A9B]" />
                </div>
                <div className="font-1 text-xs ">Location</div>
              </div>
              <div className="flex gap-x-2  mx-auto">
                <div>
                  <FaLink className="text-[#A4B4CC]" />
                </div>
                <div className="font-1 text-xs ">Location</div>
              </div>
              <div className="flex gap-x-2  mx-auto">
                <div>
                  <FaTwitter className="text-[#A4B4CC]" />
                </div>
                <div className="font-1 text-xs  underline text-gray-500">
                  Not Available
                </div>
              </div>
              <div className="flex gap-x-2  mx-auto">
                <div>
                  <HiOutlineBuildingOffice2 className="text-[#4B6A9B]" />
                </div>
                <div className="font-1 text-xs "> Not Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden mx-[5%] pt-4">
        <div className="flex items-center  justify-between  ">
          <div className=" font-1 dark:text-white font-semibold text-xl text-[#4B6A9B]">
            DevDetective
          </div>
          <div className="flex  items-center gap-x-3 ">
            <button
              onClick={handleThemeSwitch}
              className="text-xs font-1 dark:text-white text-[#4B6A9B] font-semibold tracking-wider"
            >
              DARK
            </button>
            <div className="">
              <MdModeNight className="rotate-[120deg] dark:text-white text-[#697C9A] text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl  justify-between shadow-xl items-center p-3 my-4 flex ">
          <div className="flex gap-x-3 w-[70%]    ">
            <div className="">
              <IoSearchOutline className="text-[#0B7FFF] text-xl " />
            </div>
            <input
              type="text"
              placeholder="Enter a GitHub username..."
              value={search}
              onChange={(e) => getSearch(e.target.value)}
              className=" placeholder:text-[#4B6A9B] text-sm pl-1  outline-none  font-1  "
            />
          </div>
          <div className="w-[30%] ">
            <button
              type="submit"
              onClick={handleSearch}
              className="font-1 font-semibold text-sm bg-[#0079ff] text-white px-4 py-2 rounded-md "
            >
              Search{" "}
            </button>
          </div>
        </div>
        <div className="bg-white my-3 shadow-xl rounded-xl ">
          <div className="flex item-center gap-x-5 mx-10 py-4">
            <div>
              <img className="w-20 h-20" src={data?.avatar_url} alt="" />
            </div>
            <div className="flex gap-y-2 flex-col">
              <div className="font-1 font-semibold">{data?.name}</div>
              <a
                className=" text-blue-500 font-1 underline"
                href={data?.html_url}
              >
                @{data?.login}
              </a>{" "}
              <div className="text-xs text-[#4B6A9B] font-1 ">
                Joined {formatDate(data?.created_at)}
              </div>
            </div>
          </div>
          <div className="font-1 mx-5 my-5 text-sm text-gray-400">
            {data?.bio}
          </div>

          <div className="grid grid-cols-3 mx-5 text-center  my- bg-[#F6F8FF] rounded-lg shadow-md ">
            <div className="flex flex-col ">
              <div className="text-[#4B6A9B] text-[65%] font-1 ">Repos</div>
              <div className="font-1">{data?.public_repos}</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-[#4B6A9B] text-[65%] font-1 ">Followers</div>
              <div className="font-1">{data?.followers}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[#4B6A9B] text-[65%] font-1 ">Following</div>
              <div className="font-1">{data?.following}</div>
            </div>
          </div>
          <div className="flex py-3 gap-y-2 flex-col mx-5">
            <div className="flex items-center gap-x-2">
              <div>
                <FaLocationDot className="text-[#4B6A9B]" />
              </div>
              <div className="font-1 text-sm  text-gray-500">
                {data?.location}
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <FaLink className="text-[#4B6A9B]" />
              </div>
              <div className="font-1 text-sm  text-gray-400 underline">
                Not Available
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <FaTwitter className="text-[#4B6A9B]" />
              </div>
              <div className="font-1 text-sm  text-gray-400 underline">
                Not Available
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <HiOutlineBuildingOffice2 className="text-[#4B6A9B]" />
              </div>
              <div className="font-1 text-sm  text-gray-400 underline">
                Not Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
