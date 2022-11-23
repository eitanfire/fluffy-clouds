import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TheTeachersLounge from './pages/TheTeachersLounge';
import HomePage from './pages/HomePage';
import PremiumContent from './features/lessonplans/PremiumContent';
import LessonPlansDirectoryPage from './pages/LessonPlansDirectoryPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header className='col col-12' />
        <LessonPlansDirectoryPage />
        <TheTeachersLounge />
        {/* <Routes>
<Route path='/' element={<HomePage />} /> */}
{/* <Route path='contact' element={<ContactPage />} />
<Route path='free' element={<FreeContent />} /> */}
{/* <Route path='paid' element={<PremiumContent />} />
<Route path='lounge' element={<TheTeachersLounge />} />
</Routes> */}
        <Footer />
    </div>
  );
}

export default App;
