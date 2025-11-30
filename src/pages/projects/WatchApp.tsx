import { Routes, Route, Navigate } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import WatchIndex from './watch/WatchIndex';
import WatchAbout from './watch/WatchAbout';
import WatchContact from './watch/WatchContact';

const WatchApp = () => {
  return (
    <div>
      <Breadcrumb projectName="Watch" />
      <Routes>
        <Route path="/" element={<WatchIndex />} />
        <Route path="/about" element={<WatchAbout />} />
        <Route path="/contact" element={<WatchContact />} />
        <Route path="*" element={<Navigate to="/projects/watch" replace />} />
      </Routes>
    </div>
  );
};

export default WatchApp;
