import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabProvider } from "./contexts/tabContext";
import { UserProvider } from "./contexts/userContext";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <UserProvider>
      <TabProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TabProvider>
    </UserProvider>
  );
}

export default App;
