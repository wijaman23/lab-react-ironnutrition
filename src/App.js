import './App.css'
import foodsData from './foods.json';
import { useState } from 'react';
import BoxFood from './components/BoxFood';
import { Row, Divider } from 'antd';
import SearchFood from './components/SearchFood';
import NewFood from './components/NewFodd'

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [search, setSearch] = useState('');

  const createFood = (food) => {
    const updatedFoods = [food, ...foodsData];
    setFoods(updatedFoods);
  };

  const deleteFood = (foodName) => {
    let filterFood = foods.filter((food) => food.name !== foodName);
    setFoods(filterFood);
  };
  return (
    <div className='mt-4'>
      <div className='container-food-top'>
        <div className='container-food-imput'>
          <SearchFood search={search} setSearch={setSearch} />
        </div>
        <NewFood createFood={createFood}/>
      </div>
      <Divider>Food List</Divider>
      <div className="container-food">
        <Row>
        {foods
          .filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
          .map((foods, index) => {
            return (
              <div key={index} className="me-5 mb-4">
                <BoxFood food={foods} deleteFood={deleteFood} />
              </div>
            );
          })}
        </Row>
        {foods.length === 0 ? (
          <div className='m-5'>
            <h3 className='m-5'>Oops! Nothing to see content here</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
