import { Route, Routes } from "react-router-dom"
import { CreateEventPage, HomePage } from "./pages"
import { EventDetailsPage } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
    </Routes>
  )
}

export default App
