import React from "react";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Student Dashboard */}


          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/task" element={<Task />} />
          <Route path="/logout" element={<Logout />} />

          {/* College Dashboard */}

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
// git push upstream main   -> Bhavesh repo
// git push origin main      -> Self Repo
