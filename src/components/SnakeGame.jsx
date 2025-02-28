import { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED_LEVELS = [200, 150, 100, 75];

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(SPEED_LEVELS[0]);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  const moveSnake = useCallback(() => {
    if (isGameOver) return;
    setSnake((prev) => {
      const newHead = {
        x: prev[0].x + direction.x,
        y: prev[0].y + direction.y,
      };

      if (checkCollision(newHead, prev)) {
        setIsGameOver(true);
        return prev;
      }

      const newSnake = [newHead, ...prev];
      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateFood());
        setScore((prevScore) => prevScore + 1);
        if (score + 1 < SPEED_LEVELS.length * 5) {
          setSpeed(SPEED_LEVELS[Math.floor((score + 1) / 5)]);
        }
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  }, [direction, food, isGameOver, score]);

  function checkCollision(head, body) {
    if (head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE) {
      return true;
    }
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection =
        e.key === 'ArrowUp' ? { x: 0, y: -1 } :
        e.key === 'ArrowDown' ? { x: 0, y: 1 } :
        e.key === 'ArrowLeft' ? { x: -1, y: 0 } :
        e.key === 'ArrowRight' ? { x: 1, y: 0 } : direction;
      if (Math.abs(newDirection.x) !== Math.abs(direction.x) ||
          Math.abs(newDirection.y) !== Math.abs(direction.y)) {
        setDirection(newDirection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [moveSnake, speed]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="mb-4 font-bold text-xl">Snake Game</div>
      <div className="mb-2 text-lg">Score: {score}</div>
      <div className="relative grid grid-cols-20 grid-rows-20 bg-gray-900 w-[400px] h-[400px]">
        {snake.map((segment, index) => (
          <div key={index} className="absolute bg-green-500 w-5 h-5" style={{ left: segment.x * 20, top: segment.y * 20 }}></div>
        ))}
        <div className="absolute bg-red-500 w-5 h-5" style={{ left: food.x * 20, top: food.y * 20 }}></div>
        {isGameOver && <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl">Game Over</div>}
      </div>
    </div>
  );
}
