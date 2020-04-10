import React from "react";
import Title from "../Title";
import ListItem from "../ListItem";

const Weather = () => {
  const data = [
    {
      icon: "cloud",
      link:
        "https://yandex.ru/news/story/Koronavirus_podozrevayut_u_170_pacientov_i_vrachej_ufimskoj_RKB--a776709c97ebc11f58e1cf5bdf23a6e1?from=main_portal&lang=ru&lr=10636&mlid=1586520060.glob_225.a776709c&msid=1586521042.36594.85681.133054&persistent_id=93721094&stid=oIGnFksccGU3w-nKuX83&t=1586520060&utm_medium=topnews_news&utm_source=morda_desktop&wan=1",
      temperature: "+17",
      morningTemperature: "Утром +17",
      dayTemperature: "днём +20",
    },
  ];
  return (
    <div>
      {/*  Погода */}
      <Title title="Погода" />
      <ul>
        {data.map((item, id) => {
          return (
            <ListItem key={id}>
              <span
                style={{color: "#A5C6F1", fontSize: "3em"}}
                className="material-icons"
              >
                {item.icon}
              </span>
              <a href={item.link}> {item.temperature}</a>

              <div>
                <p>{item.morningTemperature}</p>
                <p>{item.dayTemperature}</p>
              </div>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Weather;
