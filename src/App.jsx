import { useState, useEffect } from "react";
import CarList from "./CarList";

import MOCK_DATA from './MOCK_DATA.json';

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
}
const data = MOCK_DATA;

function App() {


  const [searchTerm, setSearchTerm] = useState('');
  const [carList, setCarList] = useState(data);


  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data);
      setCarList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);



  return (
    <div className="container mx-auto font-mono">
      <div className="text-3xl text-center py-3">Живой Поиск</div>
      <div className="flex justify-center flex-col align-middle">
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск машины по модели"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
          srtyle={{
            width: '600px',
          }}
        />
        <CarList carList={carList} />
      </div>
    </div>
  );
}

export default App;
