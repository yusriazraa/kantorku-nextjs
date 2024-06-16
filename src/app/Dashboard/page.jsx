import CardStatistic from "@/components/cards/cardStatistic";
import MyCalender from "@/components/calender/calender";
import React from "react";
import Navigator from "@/components/Navigator";
import {
  HiOutlineTicket,
  HiOutlineUserCircle,
  HiPaperClip,
} from "react-icons/hi2";

const DashboardPage = (props) => {
  const Navigate = [];
  return (
    <>
      <Navigator pageName="Dashboard" items={Navigate} />
      <div className="grid grid-cols-4 gap-[20px]">
        <CardStatistic
          icons={<HiOutlineUserCircle />}
          title={"Data Pegawai"}
          jumlah={200}
        />
        <CardStatistic
          icons={<HiOutlineUserCircle />}
          title={"Data Pegawai"}
          jumlah={200}
        />
        <CardStatistic
          icons={<HiOutlineTicket />}
          title={"Jumlah Ruangan"}
          jumlah={20}
        />
        <CardStatistic
          icons={<HiOutlineTicket />}
          title={"Jumlah Rapat"}
          jumlah={20}
        />
      </div>
      <div>
        <MyCalender />
      </div>
    </>
  );
};

export default DashboardPage;
