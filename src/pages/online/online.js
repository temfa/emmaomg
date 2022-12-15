import React, { useState, useEffect } from "react";
import "./online.css";
import Layout from "../../utils/layout";
import Emma from "../../assets/emma7.png";
import Loader from "../../components/loader/loader";
import ReactGA from "react-ga";

const Online = () => {
  const [loader, setLoader] = useState(true);
  const hideLoader = () => {
    setLoader(false);
  };
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Layout>
      <div className="online-header">
        <div className="online-header-text">
          <h2>OhEmGee Comedy</h2>
          <div className="online-details">
            <p>Sit back, relax and enjoy content from my comedy channel</p>
            <div className="online-img-container">
              <div className="online-iframe">
                {loader ? <Loader /> : null}
                <div
                  onClick={() => {
                    window.location.href = "https://youtu.be/lDMm5_i-XYI";
                  }}></div>
                <iframe
                  src="https://www.youtube.com/embed/lDMm5_i-XYI"
                  title="The False Prophet | EMMAOMG | BAE_U | MS PEPO | OHEMGEE COMEDY"
                  frameborder="0"
                  onLoad={() => {
                    hideLoader();
                  }}></iframe>
              </div>
              <div className="online-iframe">
                {loader ? <Loader /> : null}
                <div
                  onClick={() => {
                    window.location.href = "https://youtu.be/Sd_Ct-9xFW4";
                  }}></div>
                <iframe
                  src="https://www.youtube.com/embed/Sd_Ct-9xFW4"
                  title="When I told my daughter to take life seriously | EmmaOMG | OHEMGEE COMEDY"
                  frameborder="0"
                  onLoad={() => {
                    hideLoader();
                  }}></iframe>
              </div>
            </div>
            <div className="online-img-container">
              <div className="online-iframe">
                {loader ? <Loader /> : null}
                <div
                  onClick={() => {
                    window.location.href = "https://youtu.be/s0cQgHCpyNw";
                  }}></div>
                <iframe
                  src="https://www.youtube.com/embed/s0cQgHCpyNw"
                  title="Carry Me Dey Go My Husband House | EMMAOMG | VANDORA | OHEMGEE COMEDY"
                  frameborder="0"
                  onLoad={() => {
                    hideLoader();
                  }}></iframe>
              </div>
              <div className="online-iframe">
                {loader ? <Loader /> : null}
                <div
                  onClick={() => {
                    window.location.href = "https://youtu.be/NtN84qze25M";
                  }}></div>
                <iframe
                  src="https://www.youtube.com/embed/NtN84qze25M"
                  title="When children's questions make parents nervous | EmmaOMG | YetundeVlogs | OHEMGEE COMEDY"
                  frameborder="0"
                  onLoad={() => {
                    hideLoader();
                  }}></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="online-pic">
          <img src={Emma} alt="Emma" />
        </div>
      </div>
    </Layout>
  );
};

export default Online;
