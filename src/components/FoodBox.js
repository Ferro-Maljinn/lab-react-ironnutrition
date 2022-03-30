import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React from 'react';

export function FoodBox(props){
    return (
        <Col>
          <Card
            title={props.food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={props.food.image} height={60} alt='food' />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
              <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
            </p>
            <Button type='primary'> Delete </Button>
          </Card>
        </Col>
      );
}