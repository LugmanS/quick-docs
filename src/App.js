import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EditorLayout from './views/editor/EditorLayout'
import LandingPageLayout from './views/landing-page/LandingPageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPageLayout/>} />
        <Route path='/editor' element={<EditorLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App