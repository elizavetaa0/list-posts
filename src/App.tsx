import { Route, Routes } from 'react-router-dom';
import { PostDetails, PostList } from './components';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/posts/:id/' element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
