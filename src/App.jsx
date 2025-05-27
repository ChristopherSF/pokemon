import './styles/app.scss'
import { Routes, Route, Link } from 'react-router-dom';
import Search from './pages/search/search.page.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
