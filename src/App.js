import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Music from "./pages/music/music";
import Band from "./pages/band/band";
import Brand from "./pages/brand/brand";
import Mc from "./pages/mc/mc";
import Birthday from "./pages/birthday/birthday";
import Online from "./pages/online/online";
import Contact from "./pages/contact/contact";
import Family from "./pages/family/family";
import Emma from "./pages/emma/emma";
import Emmaadmin from "./pages/emma/emmaadmin";
import Faajiadmin from "./pages/faajipage/faajipage";
import Video from "./pages/video/video";
import Ticket from "./pages/ticket/ticket";
import BandMembers from "./pages/band-members/band-members";
import ReactGA from "react-ga";

function App() {
  const trackingID = "UA-233387877-1";
  ReactGA.initialize(trackingID);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music text="self" />} />
        <Route path="/listen" element={<Music text="band" />} />
        <Route path="/theohEmGeeband" element={<Band />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/mc" element={<Mc />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/online" element={<Online />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/family" element={<Family />} />
        <Route path="/emmaadmin" element={<Emmaadmin />} />
        <Route path="/faaji" element={<Faajiadmin />} />
        <Route path="/video" element={<Video />} />
        // <Route path="ticket" element={<Ticket />} />
        <Route path="/band-members" element={<BandMembers />} />
        <Route path="/emma" element={<Emma title="Login" text="Create Account" link="/emmaregister" />} />
        <Route path="/emmaregister" element={<Emma title="Register" text="Login" link="/emma" />} />
      </Routes>
    </div>
  );
}

export default App;
