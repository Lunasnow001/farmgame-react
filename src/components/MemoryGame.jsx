/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const cardsArray = [
  "🐶",
  "🐱",
  "🐰",
  "🐼",
  "🦊",
  "🐻",
  "🐶",
  "🐱",
  "🐰",
  "🐼",
  "🦊",
  "🐻",
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffle([...cardsArray]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatched([...matched, cards[firstIndex]]);
      }
      setTimeout(() => setFlipped([]), 500);
    }
  }, [flipped]);

  const handleClick = (index) => {
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-100 h-screen">
      <h1 className="mb-4 font-bold text-3xl">Memory Match Game</h1>
      <div className="gap-4 grid grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center text-2xl bg-white border rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
              flipped.includes(index) || matched.includes(card)
                ? ""
                : "bg-gray-400"
            }`}
            onClick={() => handleClick(index)}
          >
            {(flipped.includes(index) || matched.includes(card)) && card}
          </div>
        ))}
      </div>
      {matched.length === cardsArray.length / 2 && (
        <h2 className="mt-4 font-bold text-2xl">🎉 คุณชนะแล้ว! 🎉</h2>
      )}
    </div>
  );
}
