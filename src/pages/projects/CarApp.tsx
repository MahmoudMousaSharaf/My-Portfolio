import { Routes, Route, Navigate } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import CarIndex from './car/CarIndex';
import CarInventory from './car/CarInventory';
import CarDetail from './car/CarDetail';
import CarServices from './car/CarServices';
import CarAbout from './car/CarAbout';
import CarContact from './car/CarContact';

const CarApp = () => {
  return (
    <div>
      <Breadcrumb projectName="Car" />
      <Routes>
        <Route path="/" element={<CarIndex />} />
        <Route path="/inventory" element={<CarInventory />} />
        <Route path="/inventory/:id" element={<CarDetail />} />
        <Route path="/services" element={<CarServices />} />
        <Route path="/about" element={<CarAbout />} />
        <Route path="/contact" element={<CarContact />} />
        <Route path="*" element={<Navigate to="/projects/car" replace />} />
      </Routes>
    </div>
  );
};

export default CarApp;
