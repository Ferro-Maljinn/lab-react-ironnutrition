import 'antd/dist/antd.css';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import { FoodBox } from './components/FoodBox';


function App() {
  const [ allFoods, setAllFoods ] = useState(foods)
  return (
    <div className='App'>
  <FoodBox food={ {
            name: 'Orange',
            calories: 85,
            image: 'https://i.imgur.com/abKGOcv.jpg',
            servings: 1
}} />
      {
       allFoods.map((element) => {
        return (
          <FoodBox food={ element } />
          )
        })
      }
    </div>
  );
}

export default App;