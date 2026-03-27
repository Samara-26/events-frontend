import { Route, Routes } from "react-router-dom"
import { CreateEventPage, HomePage, SignInPage } from "./pages"
import { EventDetailsPage } from "./pages"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes className="bg-blue-950">
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/create-event" element={
          <ProtectedRoute>
            <CreateEventPage />
          </ProtectedRoute>
        } />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
