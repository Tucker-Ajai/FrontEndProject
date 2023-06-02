import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/header";
import NavBar from "./Components/navBar";
import ReviewList from "./Components/reviewContainer";
import Homepage from "./Components/homepage";
import Review from "./Components/review";
import { useState } from "react";
import { UserContext } from "./Context/userContext";
import NotFound from "./Components/NoLink";

function App() {
  const [user, setUser] =useState(
      {
        username: "tickle122",
        name: "Tom Tickle",
        avatar_url:
          "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
      }
    );

  return (
    <BrowserRouter>
      <Header />
      <UserContext.Provider value={{user,setUser}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<ReviewList />} />

        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
