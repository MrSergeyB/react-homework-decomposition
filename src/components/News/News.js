import React from "react";
import Title from "../Title";
import ListItem from "../ListItem";

const News = () => {
  const data = [
    {
      text: "Коронавирус подозревают у 170 пациентов и врачей уфимской РКБ",
      link:
        "https://yandex.ru/news/story/Koronavirus_podozrevayut_u_170_pacientov_i_vrachej_ufimskoj_RKB--a776709c97ebc11f58e1cf5bdf23a6e1?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.a776709c&msid=1586521042.36594.85681.133054&persistent_id=93721094&stid=oIGnFksccGU3w-nKuX83&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      icon: "accessibility_new",
    },
    {
      text: "Правительство приобрело пакет акций Сбербанка",
      link:
        "https://yandex.ru/news/story/Pravitelstvo_priobrelo_paket_akcij_Sberbanka--1efce3cdca6ee69e26ad98048c6132bb?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.1efce3cd&msid=1586521042.36594.85681.133054&persistent_id=93681583&stid=GIiMLXrOSI4WEOKFwL-7&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      icon: "android",
    },
    {
      text:
        "В Калининградской области продлили на неделю режим общей самоизоляции",
      link:
        "https://yandex.ru/news/story/V_Kaliningradskoj_oblasti_prodlili_na_nedelyu_rezhim_obshhej_samoizolyacii--52a7234966bb70afae7254dedb22ac92?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.52a72349&msid=1586521042.36594.85681.133054&persistent_id=93727653&stid=9U_oeezWkzCKurgrVJZR&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      icon: "alarm_add",
    },
  ];

  return (
    <div>
      {/* новостной блок */}
      <Title title="Сейчас в СМИ" />

      <ul>
        {data.map((item, id) => {
          return (
            <ListItem key={id}>
              <span className="material-icons">{item.icon}</span>
              <a href={item.link}> {item.text}</a>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
