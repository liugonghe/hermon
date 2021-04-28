import React, { useState, useEffect, createContext } from 'react';
import Mock from 'mockjs';

import Pokemon from './pokemon';
import './index.css';

export const ProviderContext = createContext('provider');

function App() {
  const [mockData, setMockData] = useState([]);

  const initData = () => {
    const animal = Mock.mock({
      "number|1-100": 100,
      "name|1": ['Tom', 'Jack', 'Michael'],
      "kind|1": ['cat', 'mouse', 'tiger'],
    });

    const city = Mock.mock({
      "object|2": {
        "310000": "广州",
        "320000": "杭州",
        "330000": "苏州",
        "340000": "郑州"
      }
    });

    const hero = Mock.mock({
      "object|2": {
        "艾欧尼亚": "刀锋意志",
        "诺克萨斯": "德莱文",
        "德玛西亚": "拉克丝",
        "钢铁烈阳": "皎月女神"
      }
    });
    const data = [animal, city.object, hero.object];
    setMockData(data);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <ProviderContext.Provider value={{ mockData, setMockData }}>
      <Pokemon />
    </ProviderContext.Provider>
  );
}

export default App;
