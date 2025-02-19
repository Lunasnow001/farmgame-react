/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiLoader2Fill } from "react-icons/ri";
import { toast } from "sonner";

const cropsData = [
  { name: "🥕 Carrot", growthTime: 3000, price: 10 },
  { name: "🌽 Corn", growthTime: 5000, price: 20 },
  { name: "🍓 Strawberry", growthTime: 7000, price: 30 },
];

const animalsData = [
  { name: "🐔 Chicken", price: 50, income: 5 },
  { name: "🐄 Cow", price: 100, income: 15 },
];

export default function FarmGame() {
  const [crops, setCrops] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [money, setMoney] = useState(100);
  const [farmSize, setFarmSize] = useState(6);
  const [isdetailsOpen, setIsDetailsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [animalTimers, setAnimalTimers] = useState({});

  const handleDetails = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsDetailsOpen(true);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(
        (prev) => prev + animals.reduce((sum, animal) => sum + animal.income, 0)
      );
      setAnimalTimers((prev) => {
        const newTimers = { ...prev };
        animals.forEach((animal, index) => {
          newTimers[index] = (newTimers[index] || animal.interval) - 1;
          if (newTimers[index] <= 0) newTimers[index] = animal.interval;
        });
        return newTimers;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [animals]);

  const plantCrop = (crop) => {
    if (crops.length < farmSize && money >= crop.price) {
      setCrops((prev) => [
        ...prev,
        { ...crop, plantedAt: Date.now(), harvested: false },
      ]);
      setMoney((prev) => prev - crop.price);
    }
  };

  const harvestCrop = (index) => {
    setMoney((prev) => prev + crops[index].price * 2);
    setCrops((prev) =>
      prev.map((crop, i) =>
        i === index
          ? { ...crop, plantedAt: Date.now(), harvested: false }
          : crop
      )
    );
  };

  const expandFarm = () => {
    if (money != 300) {
      toast("Unable to expand the farm at this time.❗❗");
    } else if (money >= 300) {
      setFarmSize((prev) => prev + 3);
      setMoney((prev) => prev - 300);
    }
  };

  const buyAnimal = (animal) => {
    if (money >= animal.price) {
      setAnimals((prev) => [...prev, animal]);
      setMoney((prev) => prev - animal.price);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-green-100 mx-auto p-4 min-h-screen container">
        <h1 className="mb-4 font-bold text-3xl">Farm Game 🌱</h1>
        <p className="mb-4 text-lg">Money: 💰 {money}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 mb-4 px-4 py-2 rounded text-white"
          onClick={expandFarm}
        >
          Expand Farm (300 💰)
        </button>
        <div className="flex gap-4 mb-6">
          {cropsData.map((crop) => (
            <button
              key={crop.name}
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded text-white"
              onClick={() => plantCrop(crop)}
            >
              Plant {crop.name} ({crop.price} 💰)
            </button>
          ))}
        </div>
        <div className="gap-4 grid grid-cols-3">
          {crops.map((crop, index) => {
            const timeElapsed = Date.now() - crop.plantedAt;
            const isGrown = timeElapsed >= crop.growthTime;

            return (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded text-center"
              >
                <p className="text-xl">{crop.name}</p>
                {isGrown ? (
                  <button
                    className="bg-orange-500 hover:bg-orange-700 mt-2 px-3 py-1 rounded text-white"
                    onClick={() => harvestCrop(index)}
                  >
                    Harvest 🌾 ({crop.price * 2} 💰)
                  </button>
                ) : (
                  <p className="text-gray-500">Growing... ⏳</p>
                )}
              </div>
            );
          })}
        </div>
        <h2 className="mt-6 font-bold text-2xl">Animal Market 🐄</h2>
        <div className="flex gap-4 mt-4">
          {animalsData.map((animal) => (
            <button
              key={animal.name}
              className="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded text-white"
              onClick={() => buyAnimal(animal)}
            >
              Buy {animal.name} ({animal.price} 💰)
            </button>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-xl">Your Animals</h3>
          <div className="gap-4 grid grid-cols-3 mt-2">
            {animals.map((animal, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded text-center"
              >
                <p className="text-xl">{animal.name}</p>
                <p className="text-gray-500">Income: 💰 {animal.income}/30s</p>
                <p className="text-gray-500">
                  Next Income in: {animalTimers[index] || animal.interval} s ⏳
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 mt-6 px-6 py-2 rounded text-white"
          onClick={handleDetails}
          disabled={isLoading}
        >
          {isLoading ? (
            <RiLoader2Fill className="w-8 h-8 text-orange-400 animate-spin" />
          ) : (
            "View Details"
          )}
        </button>
      </div>

      {isdetailsOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-100">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Game Details</h2>
                <button
                  onClick={() => setIsDetailsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoCloseSharp className="w-5 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 text-start">
              <p className="">✅ อัปเกรดฟีเจอร์ใหม่</p>
              <ul className="mb-4 border-b">
                <li className="p-1">
                  ระบบเงิน 💰: ผู้เล่นมีเงินเริ่มต้น 100 บาท
                  และสามารถใช้เงินซื้อพืชและสัตว์เลี้ยง
                </li>
                <li className="p-1">
                  ระบบส่งของ 🚜: เมื่อเก็บเกี่ยวพืชจะได้รับเงินเพิ่ม
                </li>
                <li className="p-1">
                  ระบบสะสมเงิน 🏦: ได้รับเงินจากการเก็บเกี่ยวเพื่อซื้อของเพิ่ม
                </li>
                <li className="p-1">ขยายฟาร์ม 🌾: ใช้เงินขยายพื้นที่ปลูกพืช</li>
              </ul>
              <p className="p-2">✅ เพิ่มฟีเจอร์ใหม่</p>
              <ul>
                <li className="p-1">
                  ตลาดสัตว์เลี้ยง 🐄: ซื้อไก่และวัวเพื่อสร้างรายได้เพิ่ม
                </li>
                <li className="p-1">
                  ระบบสะสมรายได้ 💰: สัตว์เลี้ยงสร้างรายได้ทุก 30 วินาที
                </li>
                <li className="p-1">
                  การขยายฟาร์ม 🌾: ใช้เงินขยายพื้นที่สำหรับพืช
                </li>
              </ul>
            </div>
            <div className="flex justify-end space-x-2 bg-gray-50 px-6 py-4 rounded-b-lg">
              <button
                className="bg-white hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded text-gray-700"
                onClick={() => setIsDetailsOpen(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
