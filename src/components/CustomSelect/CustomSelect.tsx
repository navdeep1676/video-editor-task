import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdOutlineCropOriginal } from "react-icons/md";

function CustomSelect({
  label,
  placeholder,
  data = [{ id: 1, lable: "Original" }],
  needIcon,
  className,
}: any) {
  return (
    <div>
      <Label className="font-bold mb-3 block">{label}</Label>
      <div
        className={`last:card rounded-md bg-white drop-shadow-md ${className}`}
      >
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {data.map((item: any) => {
              return (
                <SelectItem key={item.id} className="ps-2" value="original1">
                  <div className="flex items-center">
                    {needIcon && (
                      <MdOutlineCropOriginal className="mr-2 h-4 w-4" />
                    )}
                    {item.lable}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default CustomSelect;
