import React from "react";
import Title from "../Title";
import ListItem from "../ListItem";
const FrequentlyVisited = () => {
  const data = [
    {
      text: "о сталинках",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      category: "Недвижимость",
    },
    {
      text: "люстры и светильники",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      category: "Маркет",
    },
    {
      text: "привод 4x4 до 500 000",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      category: "Авто.ру",
    },
  ];
  return (
    <div>
      {/* посещаемое */}
      <Title title="Посещаемое" />
      <ul>
        {data.map((item, id) => {
          return (
            <ListItem key={id}>
              <a href={item.link}>
                {" "}
                <strong>{item.category}</strong> - {item.text}
              </a>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default FrequentlyVisited;
