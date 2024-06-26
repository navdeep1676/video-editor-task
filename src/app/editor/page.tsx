"use client";
import { usePathname } from "next/navigation";

import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Label } from "@/components/ui/label";

import { IoMdCheckmark } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FiUserPlus, FiScissors } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { Slider } from "@/components/ui/slider";
import { useEffect, useRef, useState } from "react";
import CustomTooltip from "@/components/CustomTooltip/CustomTooltip";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import Link from "next/link";
import Image from "next/image";
import CustomSlider from "@/components/CustomSlider/CustomSlider";

export default function Page() {
  const [resizePercentage, setResizePercentage] = useState(10);
  const videoRef = useRef(null);
  const pathname: any = usePathname();

  const cref = useRef(null);
  const [frames, setFrames] = useState([]);
  // Function to capture frames from the video
  const captureFrames = async () => {
    const video: any = videoRef.current;
    const canvas: any = cref.current;
    const ctx: any = canvas?.getContext("2d");
    const capturedFrames: any = [];
    canvas.width = video.width;
    canvas.height = video.height;

    // Iterate over the video duration and capture frames
    for (let i = 0; i < video.duration; i += 10) {
      video.currentTime = i;
      await new Promise((resolve: any) => {
        video.onseeked = () => {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const frameDataUrl = canvas.toDataURL("image/jpeg");
          capturedFrames.push({ src: frameDataUrl, time: i });
          resolve();
        };
      });
    }

    setFrames(capturedFrames);
  };
  useEffect(() => {
    if (pathname !== "/editor") {
      return;
    }
    captureFrames();
    setTimeout(() => {
      captureFrames();
    }, 2000);
  }, [pathname]);
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[100vh] max-w-[100vw] rounded-lg border"
    >
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup
          onResize={(e) => e.preventDefault()}
          className="min-h-[100%]"
          direction="horizontal"
        >
          <ResizablePanel defaultSize={30} className="">
            <ScrollArea className="h-full p-4">
              <div className="flex gap-4 items-center mb-5">
                <h1 className="font-bold ">Project Settings</h1>
                <Link
                  className=" bg-red-600 p-1 px-2 rounded-md text-white"
                  href={"/"}
                >
                  Go to Home
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <CustomSelect
                  label={"Size"}
                  placeholder={"Search ..."}
                  needIcon={true}
                  className="p-5"
                />
                <div>
                  <Label className="font-bold mb-3 block">Background</Label>
                  <div className="card rounded-md bg-white drop-shadow-md  p-5">
                    <RadioGroup defaultValue="option-one">
                      <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            className="text-[#3b82f6]"
                            value="option-one"
                            id="option-one"
                          />
                          Color
                        </div>
                        <Label htmlFor="option-one">#000000</Label>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            className="text-[#3b82f6]"
                            value="option-two"
                            id="option-two"
                          />
                          Image
                        </div>
                        <Label htmlFor="option-two">Upload</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div>
                  <Label className="font-bold mb-3 block">Duration</Label>
                  <div className="card rounded-md bg-white drop-shadow-md  p-5">
                    <RadioGroup defaultValue="option-one">
                      <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            className="text-[#3b82f6]"
                            value="option-one"
                            id="option-one"
                          />{" "}
                          Automatic
                        </div>
                        <Label htmlFor="option-one"></Label>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            className="text-[#3b82f6]"
                            value="option-two"
                            id="option-two"
                          />
                          Fixed
                        </div>
                        <Label htmlFor="option-two">00:05:06</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <CustomSelect
                  label={"Frames Per Second"}
                  placeholder={"Search ..."}
                  data={[
                    { id: 1, lable: 10 },
                    { id: 2, lable: 20 },
                    { id: 3, lable: 30 },
                    { id: 4, lable: 40 },
                    { id: 5, lable: 50 },
                  ]}
                  needIcon={false}
                  className="p-1"
                />
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle disabled />
          <ResizablePanel
            className="bg-[#f5f6fa40] min-h-full flex flex-col gap-4 p-4"
            defaultSize={70}
          >
            <div className="flex justify-between items-center">
              <h4 className=" text-lg">Project Name</h4>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-6">
                  <BsArrow90DegLeft />
                  <BsArrow90DegRight />
                </div>
                <div className="w-[2px] h-[40px] bg-secondary block mx-3"></div>
                <Button
                  className="flex items-center gap-3 text-black bg-[#f7f7f8]"
                  variant="secondary"
                >
                  Invite <FiUserPlus />
                </Button>
                <Button
                  className="flex items-center gap-3 bg-black hover:bg-black text-white"
                  variant="secondary"
                >
                  Save <IoMdCheckmark />
                </Button>
              </div>
            </div>
            <div className="flex  mx-16">
              <video
                className="w-full  m-3"
                style={{ height: `calc(100% - ${resizePercentage + 5}%)` }}
                width={200}
                height={200}
                ref={videoRef}
              >
                <source src="/v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        onResize={(e) => {
          setResizePercentage(e);
        }}
        defaultSize={35}
      >
        <div className="flex h-full p-3 flex-col gap-3">
          <div className="flex justify-between gap-3 items-center">
            <div>
              <TooltipProvider>
                <div className="flex items-center gap-4">
                  <CustomTooltip
                    title="Split"
                    tip="Split the video"
                    icon={<FiScissors />}
                  />
                  <CustomTooltip
                    title=" Add Media"
                    tip="Add Media to Project"
                    icon={<CiCirclePlus />}
                  />
                  <CustomTooltip
                    title=" Voice Over"
                    tip="Add Voice to video"
                    icon={<MdOutlineKeyboardVoice />}
                  />
                </div>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                <div className="flex items-center gap-1">
                  <CustomTooltip
                    title=""
                    tip="Skip 1 Frame Backward"
                    className=" rounded-full"
                    icon={<IoPlayBackSharp />}
                  />
                  <CustomTooltip
                    title=""
                    tip="Play Video"
                    className=" rounded-full"
                    icon={<IoIosPlay size={32} />}
                  />
                  <CustomTooltip
                    title=""
                    tip="Skip 1 Frame Forward"
                    className=" rounded-full"
                    icon={<IoPlayForwardSharp />}
                  />
                </div>
              </TooltipProvider>
              <div className="flex items-center gap-3">
                <span>00:00:02</span>
                <span>/</span>
                <span>08:05:33</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineSpeakerWave />
              <div className="w-[2px] h-[20px] bg-secondary block mx-3"></div>
              <div className="flex items-center gap-1">
                <AiOutlineZoomIn />
                <div className="w-[140px] mx-2">
                  <Slider />
                </div>
                <AiOutlineZoomOut />

                <div>
                  <TooltipProvider>
                    <CustomTooltip
                      title=" Fit"
                      tip="Fit Timeline to Screen (0)"
                      className=" rounded-full"
                      icon={""}
                    />
                  </TooltipProvider>
                </div>
                <div className="w-[2px] h-[20px] bg-secondary block mx-3"></div>
                <GoGear />
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <canvas ref={cref} hidden id="canvas"></canvas>
              <CustomSlider />
              <div
                className="flex px-3 timeseekbar"
                style={{ overflowX: "scroll", overflowY: "hidden" }}
              >
                {frames.map((frame: any, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-start flex-col"
                  >
                    <p className="relative left-[-10px]">{frame.time} s</p>
                    <div className="lines flex justify-between w-full">
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                      <span className="w-[2px] h-[10px] bg-black block"></span>
                    </div>
                    <div className="w-[120px] mt-2">
                      <Image
                        width={200}
                        height={100}
                        key={index}
                        src={frame.src}
                        alt={`Frame ${index}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
