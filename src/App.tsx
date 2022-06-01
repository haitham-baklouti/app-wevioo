import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/detailPost/detail';
import Post from './pages/post/post';

function App() {

  return (
    <div className='App'>
      {/* pour garder le UI sync  */}
      <BrowserRouter>
        <Routes>
          {/* route pour accéder à la page list des post */}
          <Route path="/" element={<Post />} />
          {/* route pour accéder à la page détail */}
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
