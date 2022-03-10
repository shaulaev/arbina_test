import React from "react";
import { useSelector } from "react-redux";
import cl from "./Content.module.css";

export default function Content() {
  const allList = useSelector((state) => state.list);
  const srch = useSelector((state) => state.search);

  console.log(srch);

  const filtered = allList.filter((item) => {
    return item.name.toLowerCase().includes(srch && srch.toLowerCase());
  });

  return (
    <div className={cl.content}>
      <div className={cl.blockList}>
        {srch
          ? filtered.map((item) => {
              return <div className={cl.list}>{item.name}</div>;
            })
          : allList.map((item) => {
              return <div className={cl.list}>{item.name}</div>;
            })}
      </div>
    </div>
  );
}
