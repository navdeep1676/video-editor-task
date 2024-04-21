import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { Button } from "../ui/button";

function CustomTooltip({ icon, title, tip, className }: any) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="secondary"
          className={`bg-white flex items-center gap-3 hover:bg-secondary ${className}`}
        >
          {icon} {title}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-black text-white  rounded-sm px-1">
        <p>{tip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default CustomTooltip;
