import AppHeader from "../appHeader/AppHeader";
import { MainPage, CharactersPage, CollectionPage, Page404 } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <div className="app">
            <AppHeader />
            <main>
               <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/character" element={<CharactersPage />} />
                  <Route path="/collection" element={<CollectionPage />} />
						<Route path="*" element={<Page404 />} />
               </Routes>
            </main>
         </div>
      </Router>
   );
};

export default App;
