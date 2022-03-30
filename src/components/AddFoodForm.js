import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

export function AddFoodForm(props) {
  const { addNewFood } = props;
  const [newFood, setNewFood] = useState({
      name: '',
      image: '',
      calories: 0,
      servings: 0
  });


  const handleChange = (event) => {
      const value = event.target.value;
      //spreading new food,
      setNewFood({
          ...newFood, [event.target.name]: value,
      })
      console.log('here new food', newFood)
  }

  const handleSubmit = (elem) => {
    elem.preventDefault();

    addNewFood(newFood)

  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <h3>Name</h3>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={handleChange}
      />
      <h3>Image</h3>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={handleChange}
      />
      <h3>Calories</h3>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={handleChange}
      />
      <h3>Servings</h3>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={handleChange}
      />
      <br></br>
      <button className="btn" type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
