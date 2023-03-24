import './App.scss';
import Upload from './components/chaine_upload/UploadForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/upload" element={<Upload />} />


        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
