import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaceDetail from '../components/PlaceDetail';
import BookmarkList from '../components/BookmarkList';
import MapComponent from '../components/MapComponent';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place/:id" element={<PlaceDetail />} />
      <Route path="/bookmarks" element={<BookmarkList />} />
      <Route path="/map" element={<MapComponent />} />
    </Routes>
  </Router>
);

export default AppRouter;
