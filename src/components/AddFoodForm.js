import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

export function AddFoodForm(props) {
  const { addNewFood } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const nameHandler = (elem) => setName(elem.target.value);
  const imageHandler = (elem) => setImage(elem.target.value);
  const caloriesHandler = (elem) => setCalories(elem.target.value);
  const servingsHandler = (elem) => setServings(elem.target.value);

  const handleSubmit = (elem) => {
    elem.preventDefault();
    let newFood = {
      name,
      image,
      calories,
      servings,
    };
    addNewFood(newFood)

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <h3>Name</h3>
      <Input name="name" value={name} type="text" onChange={nameHandler} />
      <h3>Image</h3>
      <Input name="image" value={image} type="text" onChange={imageHandler} />
      <h3>Calories</h3>
      <Input
        name="calories"
        value={calories}
        type="number"
        onChange={caloriesHandler}
      />
      <h3>Servings</h3>
      <Input
        name="servings"
        value={servings}
        type="number"
        onChange={servingsHandler}
      />
      <br></br>
      <button className="btn" type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
