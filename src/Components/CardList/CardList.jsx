import React from "react";
import Cards from "../Cards/Cards";

let data = [
  {
    title: "Breaking bad",
    image:
      "https://i.pinimg.com/474x/fe/9b/68/fe9b686f5d90db771e8b1f7e969f30c9.jpg",
    imdb: "IMDb 9.9",
    descr:
      "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts.",
    id: 1,
  },
  {
    title: "The Sopranos",
    image:
      "https://i.pinimg.com/474x/51/8d/f0/518df03f64134dad9f2b81b764b1d9a7.jpg",
    imdb: "IMDb 9",
    descr:
      "Tony Soprano, an Italian-American mafia head based in New Jersey, struggles to manage his family and criminal life and confides his affairs to his psychiatrist Jennifer Melfi.",

    id: 2,
  },
  {
    title: "Peaky blinders",
    image:
      "https://i.pinimg.com/474x/2c/60/57/2c6057aa6f4ca56fa7976d8ab041c3b1.jpg",
    imdb: " IMDb 4",
    descr:
      "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
    id: 3,
  },
  {
    title: "The Last of Us",
    image:
      "https://i.pinimg.com/474x/af/ca/12/afca124bf35229da8841d24ab2ca8c0f.jpg",
    imdb: "IMDb 6",
    descr:
      "Tasked with escorting a teenager across a post-apocalyptic world, a dreaded smuggler joins hands with a young apprentice to fulfil the mission unscathed.",
    id: 4,
  },
];

const CardList = () => {
  return (
    <div>
      <div className="d-flex justify-content-between container mt-5">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
