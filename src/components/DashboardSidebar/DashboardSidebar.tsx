import React from "react";
import { Button } from "../ui/button";
import { FaPlus, FaRegFolder } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";
import { TbBrandAirtable, TbTemplate } from "react-icons/tb";

function DashboardSidebar() {
  return (
    <aside className="w-[300px] p-3">
      <h1 className="text-4xl font-extrabold">VEED.IO</h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center my-5">
          <div className="img-holder rounded-md flex justify-center items-center w-[50px] h-[50px] bg-[green] text-white">
            N
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold">Navdeep</h3>
            <p className="text-[12px]">Free Plan</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <Button className="flex justify-between items-center w-full bg-[#0098fd] rounded-md">
              New Video <FaPlus />
            </Button>
          </div>

          <div>
            <Button className="flex justify-start items-center gap-4 w-full bg-white hover:bg-secondary text-black rounded-md">
              <RiHome6Line /> New Video
            </Button>
          </div>
          <div>
            <Button className="flex justify-start items-center gap-4 w-full bg-white hover:bg-secondary text-black rounded-md">
              <TbTemplate /> Templates
            </Button>
          </div>
          <div>
            <Button className="flex justify-start items-center gap-4 w-full bg-white hover:bg-secondary text-black rounded-md">
              <FaRegFolder /> All Videos
            </Button>
          </div>
          <div>
            <Button className="flex justify-start items-center gap-4 w-full bg-white hover:bg-secondary text-black rounded-md">
              <RiHome6Line /> Podcasts & Shows
            </Button>
          </div>
          <div>
            <Button className="flex justify-start items-center gap-4 w-full bg-white hover:bg-secondary text-black rounded-md">
              <TbBrandAirtable /> Brand Kit
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
