import React, { useState } from "react";
import "./band.css";
import Emma5 from "../../assets/emma5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LayoutHome from "../../utils/layoutHome";
import { NavLink } from "react-router-dom";
import Iframe from "../../components/iframe/iframe";
import Loader from "../../components/loader/loader";
AOS.init();

const Band = () => {
  window.onbeforeunload = (e) => {
    window.scrollTo(0, 0);
  };
  const [loader, setLoader] = useState(true);
  const hideLoader = () => {
    setLoader(false);
  };
  return (
    <LayoutHome>
      <div className="band-header">
        <div className="band-header-text">
          <h2>The OhEmGee Band</h2>
          <p>
            I lead an amazing band called "The OhEmGee Band". We host an annual show called "Faaji Friday " every December by God's grace. See videos and pictures from some of the
            previous editions below.
          </p>
          <p>We also play at social events, see some videos below.</p>
          <div className="band-action">
            <NavLink to="/contact">Make a Booking</NavLink>
            <NavLink to="/band-members">Meet the Band Members</NavLink>
            <NavLink to="/listen">Listen to our Songs</NavLink>
          </div>
        </div>
        <div className="band-emma">
          <div className="band-iframe">
            {loader ? <Loader /> : null}
            <Iframe
              link="https://youtu.be/S68xXO2A8os"
              iframe="https://www.youtube.com/embed/S68xXO2A8os"
              title="The Celebrant's Entrance | EmmaOMG & The OhEmGee Band"
              action={hideLoader}
            />
          </div>
          <div className="band-iframe">
            {loader ? <Loader /> : null}
            <Iframe
              link="https://youtu.be/nmJqZFWpEIk"
              title="A little Wedding AfterParty | The OhEmGee Band"
              iframe="https://www.youtube.com/embed/nmJqZFWpEIk"
              action={hideLoader}
            />
            {loader ? <Loader /> : null}
            <Iframe
              link="https://youtu.be/Xy9RqIBCSoU"
              title="Live Performance at The CoolFm Easter Praise Jam | EmmaOMG | The OhEmGee Band"
              iframe="https://www.youtube.com/embed/Xy9RqIBCSoU"
              action={hideLoader}
            />
          </div>
          <div className="band-iframe">
            {loader ? <Loader /> : null}
            <Iframe
              link="https://youtu.be/gm_EY2R5Kg8"
              title="Groovy worship with EmmaOMG and The OhEmGee Band"
              iframe="https://www.youtube.com/embed/gm_EY2R5Kg8"
              action={hideLoader}
            />
            {loader ? <Loader /> : null}
            <Iframe link="https://youtu.be/yMAAYc897fw" title="Meet The OhEmGee Band Members | EmmaOMG" iframe="https://www.youtube.com/embed/yMAAYc897fw" action={hideLoader} />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Band;
