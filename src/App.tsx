import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import React from "react";

export type GithubData = {
  name: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  created_at: string;
  location: string;
  bio: string;
  html_url: string;
  blog: string;
};

function App() {
  const [data, setData] = useState<GithubData>();
  const [cards, setCards] = useState<GithubData[]>([]);

  const removeCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  async function fetchData(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setData(data);
      setCards([...cards, data]);
    } else {
      alert("Username not found");
    }
  }

  return (
    <div>
      <h1 className="flex justify-center mt-5 font-bold text-5xl underline">
        GitHub Finder
      </h1>
      <Form fetchData={fetchData} />
      <div className="flex flex-col-reverse mt-10">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <button
              className="flex items-center justify-center h-6 w-6 rounded-full border-gray-500 font-bold absolute top-1 right-0 p-2 mr-3 bg-gray-300 hover:bg-red-500 "
              onClick={() => removeCard(index)}
            >
              X
            </button>
            <Card data={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
