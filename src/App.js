import React, { useState, useEffect } from "react";
import "./App.css";

const Quotable = () => {
  const images = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyfHxkb2dzfGVufDB8fHx8MTY3MzU2NzcwOQ&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw2fHxkb2dzfGVufDB8fHx8MTY3MzU2NzcwOQ&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1551717743-49959800b1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyNXx8ZG9nc3xlbnwwfHx8fDE2NzM1Njc3MjA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzN3x8ZG9nc3xlbnwwfHx8fDE2NzM1Njc3MjA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw1OHx8ZG9nc3xlbnwwfHx8fDE2NzM2MDY4MDI&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1570021974424-60e83dfee639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMzB8fGRvZ3N8ZW58MHx8fHwxNjczNjA2ODI2&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMzJ8fGRvZ3N8ZW58MHx8fHwxNjczNjA2ODI2&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1543556153-6ca655a62cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxNzR8fGRvZ3N8ZW58MHx8fHwxNjczNjA2ODM4&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520505122395-a21d6d5b6d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxODF8fGRvZ3N8ZW58MHx8fHwxNjczNjA2ODQz&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1560743641-3914f2c45636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMXx8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8fHwxNjczNjI3Mzc1&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1546238232-20216dec9f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzMXx8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8fHwxNjczNjI3Mzk5&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0Nnx8Y3V0ZSUyMGFuaW1hbHN8ZW58MHx8fHwxNjczNjI3NDI2&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1566847438217-76e82d383f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0fHxjdXRlJTIwYW5pbWFsc3xlbnwwfHx8fDE2NzM2MjczNzU&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMDh8fGN1dGUlMjBhbmltYWxzfGVufDB8fHx8MTY3MzYyODMwMg&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1624956741711-9e4001049662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMTF8fGN1dGUlMjBhbmltYWxzfGVufDB8fHx8MTY3MzYyODMwMg&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMjd8fGN1dGUlMjBhbmltYWxzfGVufDB8fHx8MTY3MzYyODM1MQ&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1491930722919-a5fc9ad49a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzNjZ8fGN1dGUlMjBhbmltYWxzfGVufDB8fHx8MTY3MzYyODQyNA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzNHx8ZnVubnklMjBkb2dzfGVufDB8fHx8MTY3MzYyODQ1OQ&ixlib=rb-4.0.3&q=80&w=1080",
    "https://i.pinimg.com/474x/50/4f/2a/504f2a1354e46a9d8df0621c3e748c01.jpg",
    "https://i.pinimg.com/474x/7f/65/de/7f65de79ba1c3a12d58d0382a5c4dfcd.jpg",
    "https://images.unsplash.com/photo-1539981979235-86d7f364f6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwzMXx8ZG9ncyUyMGFuZCUyMGh1bWFuc3xlbnwwfHx8fDE2NzM2MzYzMzU&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    const url = "https://api.adviceslip.com/advice";
    let data = await fetch(url);
    let parsedData = await data.json();
    setQuote(parsedData.slip.advice);
  };

  let image = Math.floor(Math.random() * images.length);

  const myStyle = {
    backgroundImage: `url(${images[image]})`,
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="main" style={myStyle}>
      <div className="box">
        <h1 className="header">{quote}</h1>
        <div className="wrap">
          <button className="button-89" onClick={fetchQuote}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotable;
