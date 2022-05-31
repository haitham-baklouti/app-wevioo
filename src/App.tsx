import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/detailPost/detail';
import Post from './pages/post/post';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
