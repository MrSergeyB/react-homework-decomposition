import React from "react";
import Title from "../Title";
import ListItem from "../ListItem";

const Air = () => {
  const data = [
    {
      text: "Управление как исскуство",
      link:
        "https://yandex.ru/news/story/Koronavirus_podozrevayut_u_170_pacientov_i_vrachej_ufimskoj_RKB--a776709c97ebc11f58e1cf5bdf23a6e1?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.a776709c&msid=1586521042.36594.85681.133054&persistent_id=93721094&stid=oIGnFksccGU3w-nKuX83&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      suggestion: "Успех",
      icon: "info",
    },
    {
      text: "Ночь. Мир в это время",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      suggestion: "earthTV",
      icon: "info",
    },
    {
      text: "Андрей Возн...",
      link:
        "https://yandex.ru/news/story/V_Kaliningradskoj_oblasti_prodlili_na_nedelyu_rezhim_obshhej_samoizolyacii--52a7234966bb70afae7254dedb22ac92?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.52a72349&msid=1586521042.36594.85681.133054&persistent_id=93727653&stid=9U_oeezWkzCKurgrVJZR&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      icon: "info",
    },
  ];

  return (
    <div>
      {/* эфир */}
      <Title title="Эфир" />

      <ul>
        {data.map((item, id) => {
          return (
            <ListItem key={id} style={{textAlign: "left"}}>
              <span
                style={{color: "#72A2FB", fontSize: "1em"}}
                className="material-icons"
              >
                {item.icon}
              </span>
              <a href={item.link}> {item.text}</a>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Air;
