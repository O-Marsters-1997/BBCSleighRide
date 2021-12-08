import './App.css';
import BBCSleighRide from './containers/BBCSleighRide';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import QuizContainer from './containers/QuizContainer';
import MapContainer from './containers/MapContainer';
import ErrorPage from './components/ErrorPage';
import {useState, useEffect} from 'react';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])


  return (

    <Router>

      <Header />

          <Routes>
            <Route path="/" element={<BBCSleighRide />} />
            <Route path="/map" element={<MapContainer />} />
            <Route path="/quiz" element={<QuizContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

      <Footer />


    </Router>
  );
}

export default App;
