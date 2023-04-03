import React from "react";
import AllDeviceIcon from "../../../../../../public/svg/allDevicesIcon.svg";
import IpadAirIcon from "../../../../../../public/svg/ipadAirIcon.svg";
import IpadIcon from "../../../../../../public/svg/ipadIcon.svg";
import IpadMini from "../../../../../../public/svg/ipadMiniIcon.svg";
import NewKeyboardIcon from "../../../../../../public/svg/newKeyboardIcon.svg";
import ApplepencilIcon from "../../../../../../public/svg/applepencilIcon.svg";
import SubDevicesIcon from "../../../../../../public/svg/subDevicesIcon.svg";

function Header() {
  const Items: {
    id: number;
    icon: any;
    title: string;
  }[] = [
    {
      id: 1,
      icon: AllDeviceIcon,
      title: "همه دستگاه ها",
    },
    {
      id: 2,
      icon: IpadAirIcon,
      title: "آی پد ایر",
    },
    {
      id: 3,
      icon: IpadIcon,
      title: "آی پد",
    },
    {
      id: 4,
      icon: IpadMini,
      title: "آی پد مینی",
    },
    {
      id: 5,
      icon: NewKeyboardIcon,
      title: "کیبورد جدید",
    },
    {
      id: 6,
      icon: ApplepencilIcon,
      title: "Apple Pencil",
    },
    {
      id: 7,
      icon: SubDevicesIcon,
      title: "لوازم جانبی",
    },
  ];
  return (
    <div>
      <div className=" absolute pt-4 bg-slate-100 rounded-3xl w-1700 ">
        <div className=" flex justify-center gap-24">
          {Items.map((item) => (
            <div key={item.id} className=" bg-slate-100 hover:z-10 h-24">
              <div className=" flex justify-center">
                <item.icon />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute z-0 w-1690 mr-1  bg-black h-1 mt-24">
          <br />
        </div>
    </div>
  );
}

export default Header;
