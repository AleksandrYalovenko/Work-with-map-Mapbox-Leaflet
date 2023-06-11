import './App.css';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import { Main } from './views/main';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { AddPetForm as MapboxForm } from './maps/mapbox/add-pet-form';
import { AddPetForm as LeafletForm } from './maps/leaflet/add-pet-form';

mapboxgl.accessToken =
  'pk.eyJ1IjoieWFhbGxlb24iLCJhIjoiY2xpcXlyZjV1MDVlejNmb3RjM2s4a3NtOCJ9.7fE6DvqPHXXgUb9T-Dj75Q';

const App: React.FC = () => {
  return (
    <div className='app p-5'>
      Find my pet
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link> |{' '}
          <Link to='/add-mapbox'>Add via Mapbox</Link> |{' '}
          <Link to='/add-leaflet'>Add via Leaflet</Link>
        </nav>
        <Routes>
          <Route
            path='/add-mapbox'
            element={<MapboxForm />}
          />
          <Route
            path='/add-leaflet'
            element={<LeafletForm />}
          />
          <Route
            path='/'
            element={<Main />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
