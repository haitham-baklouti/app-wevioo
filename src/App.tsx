import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Post from './pages/post/post';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
