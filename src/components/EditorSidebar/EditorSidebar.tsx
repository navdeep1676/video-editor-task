"use client";
import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { BsCircleHalf } from "react-icons/bs";
import { CiText } from "react-icons/ci";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { MdAudiotrack, MdMenu } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";
import { SiUnderscoredotjs } from "react-icons/si";
import { SlCamrecorder } from "react-icons/sl";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

function EditorSidebar() {
  const [active, setActive] = useState(0);
  const data = [
    {
      id: 0,
      name: "",
      icon: (
        <Popover>
          <PopoverTrigger>
            <MdMenu />
          </PopoverTrigger>
          <PopoverContent side="right" alignOffset={15}>
            <h1 className="text-3xl font-bold">Veed.Io</h1>
            <Separator className="my-3" />
            <div className="flex flex-col gap-3">
              <Link href={"/help"}>Help</Link>
              <Link href={"/help"}>Language</Link>
              <Link href={"/help"}>Keyboard Shortcuts</Link>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      id: 1,
      name: "Search",
      icon: (
        <FaSearch
          className={`${
            active !== 0 && active === 1
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 2,
      name: "Settings",
      icon: (
        <RiSettingsFill
          className={`${
            active !== 0 && active === 2
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 3,
      name: "Media",
      icon: (
        <FaPlus
          className={`${
            active !== 0 && active === 3
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 4,
      name: "Audio",
      icon: (
        <MdAudiotrack
          className={`${
            active !== 0 && active === 4
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 5,
      name: "Subtitles",
      icon: (
        <SiUnderscoredotjs
          className={`${
            active !== 0 && active === 5
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 6,
      name: "Text",
      icon: (
        <CiText
          className={`${
            active !== 0 && active === 6
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
          size={30}
        />
      ),
    },
    {
      id: 7,
      name: "Elements",
      icon: (
        <RiSettingsFill
          className={`${
            active !== 0 && active === 7
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1  `}
          color="white"
        />
      ),
    },
    {
      id: 8,
      name: "Record",
      icon: (
        <SlCamrecorder
          className={`${
            active !== 0 && active === 8
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1 `}
          color="white"
        />
      ),
    },
    {
      id: 9,
      name: "Transitions",
      icon: (
        <>
          <div
            className={`${
              active !== 0 && active === 9
                ? "bg-[#3b82f690] rounded-full"
                : "bg-[#86878a] rounded-md"
            }  w-[25px] h-[25px] p-1  flex justify-center items-center`}
          >
            <BiSolidLeftArrow color="white" spacing={0} />
            <BiSolidRightArrow color="white" spacing={0} />
          </div>
        </>
      ),
    },
    {
      id: 10,
      name: "Filters",
      icon: (
        <BsCircleHalf
          className={`${
            active !== 0 && active === 10
              ? "bg-[#3b82f690] rounded-full"
              : "bg-[#86878a] rounded-md"
          }  w-[25px] h-[25px] p-1 `}
          color={"white"}
        />
      ),
    },
  ];
  return (
    <aside className="flex flex-col  w-[85px]">
      <ScrollArea className="h-[90vh] rounded-md border p-2">
        <div className="flex flex-col gap-3">
          {data &&
            data.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className="flex flex-col justify-center items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`${
                      active !== 0 && active === item.id
                        ? "bg-[#0098fd]"
                        : "bg-white hover:bg-[#86878a30] "
                    } toggle relative z-20 flex justify-center items-center w-[45px] h-[45px]  p-2   rounded-full `}
                  >
                    {item?.icon}
                  </div>
                  <p className="text-[12px]">{item?.name}</p>
                </div>
              );
            })}
        </div>
      </ScrollArea>
      <div
        style={{ height: "calc(100vh - 92vh)" }}
        className="flex  flex-col justify-center items-center gap-2 mt-2 cursor-pointer"
      >
        <div className="toggle flex justify-center items-center w-[45px] h-[45px] hover:bg-[#86878a30]  p-2   rounded-full ">
          <IoMdHelp
            className="bg-[#86878a] w-[25px] h-[25px] p-1 rounded-md "
            color="white"
          />
        </div>
        <p className="text-[12px]">Help</p>
      </div>
    </aside>
  );
}

export default EditorSidebar;
