import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CharactersInfo from "./Pages/CharacterInfo";
import Characters from "./Pages/Characters";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharactersInfo />} />
        <Route path="*" element={<div>not found page</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
