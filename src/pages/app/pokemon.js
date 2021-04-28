/*
 * @Author: your name
 * @Date: 2021-04-28 22:28:57
 * @LastEditTime: 2021-04-28 23:56:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /pokemon-demo/src/pages/app/pokemon.js
 */

import React, { useState, useEffect, useContext } from 'react';
import { ProviderContext } from './index';


const getCardElement = (item, key = 0) => {
  const cardChild = [];
  for(let key in item) {
    cardChild.push(
      <p key={item[key]} className="card-item">
        <span>{key}：</span>
        <span>{item[key]}</span>
      </p>
    )
  }
  return <div className="row-card" key={key}>{cardChild}</div>;
}

export default function Pokemon() {
  const { mockData } = useContext(ProviderContext);
  const [cards, setCard] = useState([]);
  const [randomCard, setRandomCard] = useState([]);

  const initCard = () => {
    if(Array.isArray(mockData)) {
      const renderCards = mockData.map(getCardElement);
      setCard(renderCards);
    }
  }

  const getRandomCard = () => {
    const index = Math.floor(Math.random() * 3);
    const data  = mockData[index] || {};
    return [getCardElement(data)]
  }

  const onChangeRandomCard = () => {
    if(Array.isArray(mockData)) {
      const randomCard = getRandomCard();
      setRandomCard(randomCard);
    }
  }

  useEffect(() => {
    initCard();
    onChangeRandomCard();
  }, [mockData]);

  return (
    <>
      <head className="stick-head">head</head>
      <div className="card-container"> 
        {cards}
        {randomCard}
      </div>
      <button 
        className="float-right marginR-16" 
        onClick={onChangeRandomCard}
      >
        pokemon button
      </button>
    </>
  );
}

