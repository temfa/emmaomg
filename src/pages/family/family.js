import React, { useState, useEffect } from "react";
import "./family.css";
import FamilyPic from "../../assets/family.png";
import Layout from "../../utils/layout";
import Iframe from "../../components/iframe/iframe";
import Loader from "../../components/loader/loader";
import ReactGA from "react-ga";

const Family = () => {
  const [loader, setLoader] = useState(true);
  const hideLoader = () => {
    setLoader(false);
  };
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Layout>
      <div className="family-header">
        <div className="family-header-text">
          <h2>My Family</h2>
          <div className="family-details">
            <p>Subscribe to my family youtube channel </p>
            <div className="family-img-container">
              {loader ? <Loader /> : null}
              <Iframe
                link="https://www.youtube.com/c/TheOhEmGees/"
                title="Our Love for one another | The OhEmGees"
                iframe="https://www.youtube.com/embed/BF_i8pmNMPw"
                action={hideLoader}
              />
              {loader ? <Loader /> : null}
              <Iframe
                link="https://www.youtube.com/yetundevlogs/"
                title="I was soo surprised and I cried again! | Yetundevlogs"
                iframe="https://www.youtube.com/embed/AFStg7VUe3U"
                action={hideLoader}
              />
            </div>
            <div className="family-img-container">
              {loader ? <Loader /> : null}
              <Iframe
                link="https://youtube.com/channel/UCVJAqQ5txAJ5b440b3HJi_w"
                title="SingThatTunewithFeranmi - Episode 3 | EmmaOMG & Daughter"
                iframe="https://www.youtube.com/embed/Rxx7WJtedPA"
                action={hideLoader}
              />
            </div>
          </div>
        </div>
        <div className="family-image">
          <img src={FamilyPic} alt="Family" />
        </div>
      </div>
    </Layout>
  );
};

export default Family;
