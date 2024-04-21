"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiMic, FiScissors, FiUserPlus, FiVideo } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineElectricBolt } from "react-icons/md";
import {
  IoIosHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import Image from "next/image";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Page() {
  const videoData = [
    {
      id: 1,
      name: "Project 1",
      videoLink: "http://www.w3schools.com/html/mov_bbb.mp4",
      status: "Draft",
      duration: "30 M",
    },
    {
      id: 2,
      name: "Project 2",
      videoLink: "http://www.w3schools.com/html/mov_bbb.mp4",
      status: "Draft",
      duration: "30 M",
    },
    {
      id: 3,
      name: "Project 3",
      videoLink: "http://www.w3schools.com/html/mov_bbb.mp4",
      status: "Draft",
      duration: "30 M",
    },
  ];

  const popTemplates = [
    {
      id: 1,
      name: "img1",
      imageLink:
        "https://s.tmimgcdn.com/scr/1200x750/262900/business-agency-corporate-service-social-media-post-design-template-58_262935-original.jpg",
    },
    {
      id: 2,
      name: "img2",
      imageLink:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-business-presentation-templates_23-2149271664.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais",
    },
    {
      id: 3,
      name: "img3",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBcrhRPcdPHw4JCIyTAHJaeNvDIUVkJtx7Q&usqp=CAU",
    },
    {
      id: 4,
      name: "img4",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bm-bt0Dxm6SO9cMYDahqyZIIyb6myhWJdQ&usqp=CAU",
    },
  ];
  return (
    <div className="flex">
      <DashboardSidebar />
      <ScrollArea
        style={{ width: "calc(100vw - 318px)" }}
        className="min-h-[100vh]  fixed left-[300px]"
      >
        <div className="bg-[#f5f6fa] w-full min-h-[100vh] p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white "
                  placeholder="Search "
                  required
                />
              </div>
              <Link
                className=" bg-red-600 p-1 px-2 rounded-md text-white"
                href={"/editor"}
              >
                Go to Editor
              </Link>
            </div>
            <div className="flex items-center gap-3 ">
              <div>
                <Button
                  className="flex items-center gap-3 text-black bg-[#fff1dd]"
                  variant="secondary"
                >
                  Upgrade <MdOutlineElectricBolt color="#ffa31a" />
                </Button>
              </div>
              <div>
                <Button
                  className="flex items-center gap-3 text-black bg-[#eeeef0]"
                  variant="secondary"
                >
                  Invite <FiUserPlus />
                </Button>
              </div>
              <div>
                <IoIosHelpCircleOutline size={30} />
              </div>
              <div>
                <IoMdNotificationsOutline size={30} />
              </div>
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl">
              Let&apos;s Create Some <b>Videos</b>
            </h1>
            <div className="flex flex-wrap gap-5 items-center mt-3">
              <div className="flex gap-3 items-center cursor-pointer p-3 drop-shadow bg-white hover:text-[#9d45ff] rounded-md">
                <div className="bg-[#c899fd1a] p-2 rounded-md block ">
                  <FiScissors color="#9d45ff" />
                </div>
                Create Project
              </div>

              <div className="flex gap-3 items-center p-3 cursor-pointer drop-shadow hover:text-[#0098fd] bg-white rounded-md">
                <div className="bg-[#eff9ff] p-2 rounded-md block ">
                  <FiMic color="#0098fd" />
                </div>
                Create Project
              </div>
              <div className="flex gap-3 items-center cursor-pointer p-3 hover:text-[#ff646a] drop-shadow bg-white rounded-md">
                <div className="bg-[#ff6a701a] p-2 rounded-md block ">
                  <FiVideo color="#ff646a" />
                </div>
                Record Videos
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center ">
              <h2 className=" font-semibold">My Recend Videos</h2>
              <Link className="flex items-center gap-1" href={"/all-videos"}>
                All Videos <IoIosArrowForward />
              </Link>
            </div>
            <div className="flex items-center gap-3 flex-wrap py-3">
              {videoData.map((item: any) => {
                return (
                  <div key={item.name} className="flex flex-col">
                    <div className="relative">
                      <video
                        className="rounded-md w-auto h-[200px]"
                        src={item.videoLink}
                      ></video>
                      <span className="absolute bottom-2 right-2 bg-[#00000090] text-white rounded-sm p-1 text-[12px]">
                        {item.duration}
                      </span>
                      <span className="absolute top-2 right-2 bg-[#ed8e4581] text-white font-semibold rounded-sm  px-2 text-[12px]">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-[14px] font-semibold mt-2">
                      {item.name}
                    </h4>
                    <p className="text-[12px]">10 Minutes Ago</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center ">
              <h2 className=" font-semibold">Start with Popular Templates</h2>
              <Link className="flex items-center gap-1" href={"/all-videos"}>
                See All <IoIosArrowForward />
              </Link>
            </div>
            <div className="flex items-center gap-3 flex-wrap py-3">
              {popTemplates?.map((item: any) => {
                return (
                  <div key={item.name} className="flex flex-col cursor-pointer">
                    <div>
                      <Image
                        width={200}
                        height={150}
                        quality={100}
                        alt="img"
                        className="rounded-md w-auto h-[150px]"
                        src={item?.imageLink}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
1;
