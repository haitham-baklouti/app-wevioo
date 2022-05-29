import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Post from './pages/post/post';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
