/* eslint-disable @next/next/no-img-element */
"use client";
import { CardInterface } from "@/redux/context/tableSlice";
import React from "react";

export default function Card({ cards }: { cards: CardInterface[] }) {
  return (
    <div className={`w-52 h-72 bg-gray-300  p-1 rounded-md grid grid-cols-4`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-white rounded-lg p-2"
        >
          <img
            src={card.img}
            alt={`Imagen ${index + 1}`}
            className="max-h-16 max-w-full"
          />
        </div>
      ))}
    </div>
  );
}
