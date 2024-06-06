import CardStatistic from "@/components/cards/cardStatistic";
import MyCalender from "@/components/calender/calender";
import React from "react";
import Navigator from "@/components/Navigator";

const DashboardPage = (props) => {
  const Navigate = ["Dashboard", "Data"];
  return (
    <>
      <Navigator pageName="Dashboard" items={Navigate} />
      <div className="grid grid-cols-4 gap-[20px]">
        <CardStatistic
          icons={"/vercel.svg"}
          title={"Data Pegawai"}
          jumlah={20}
        />
        <CardStatistic
          icons={"/vercel.svg"}
          title={"Jumlah Ruangan"}
          jumlah={20}
        />
        <CardStatistic
          icons={"/vercel.svg"}
          title={"Jumlah Rapat"}
          jumlah={20}
        />
        <CardStatistic
          icons={"/vercel.svg"}
          title={"Operasional"}
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
