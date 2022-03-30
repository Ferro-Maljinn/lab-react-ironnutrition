import 'antd/dist/antd.css';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import { FoodBox } from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'


function App() {
  const [ allFoods, setAllFoods ] = useState(foods);
  function handleAddFood (newFood) {
    console.log('connected', newFood)
    const newFoodList = [newFood, ...allFoods]
    setAllFoods(newFoodList);
  }
  return (
    <div className="App">
      <AddFoodForm addNewFood = {handleAddFood} />

      {allFoods.map((element) => {
        return <FoodBox food={element} />;
      })}
    </div>
  );
}

export default App;