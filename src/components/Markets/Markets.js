import React from "react";
import ListItem from "../ListItem";

const Markets = () => {
  const data = [
    {
      currency: "USD MOEX",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      rate: "63,52",
      todayChange: "+0.09",
    },
    {
      currency: "EUR MOEX",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      rate: "70,86",
      todayChange: "+0.14",
    },
    {
      currency: "Нефть",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      rate: "64.90",
      todayChange: "+1.69",
    },
  ];
  return (
    <div>
      {/* курсы валют */}

      <ul>
        {data.map((item, id) => {
          return (
            <ListItem key={id}>
              <a href={item.link}>
                {" "}
                <strong>{item.currency}</strong> - {item.rate}
              </a>
              <span style={{color: "#A1A6BE"}}>{item.todayChange}</span>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Markets;
