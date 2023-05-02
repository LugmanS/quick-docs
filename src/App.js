import React, { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "./views/Loading";
// import EditorLayout from './views/editor/EditorLayout'
// import LandingPageLayout from './views/landing-page/LandingPageLayout';
const LandingPageLayout = lazy(() =>
  import("./views/landing-page/LandingPageLayout")
)
const EditorLayout = lazy(() => import("./views/editor/EditorLayout"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/editor" element={<EditorLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
