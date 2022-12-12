import React from "react";
import "./music.css";
import Apple from "../../assets/apple.png";
import Audiomack from "../../assets/audiomack.png";
import Boomplay from "../../assets/boomplay.png";
import Itunes from "../../assets/itunes.png";
import Youtube from "../../assets/youtube.png";
import Spotify from "../../assets/spotify";
import Amazon from "../../assets/amazon.png";
import Tidal from "../../assets/tidal.png";
import Deezer from "../../assets/deezer.png";
import Shazam from "../../assets/shazam.png";
import KKBOX from "../../assets/kkbox.png";
import Emma4 from "../../assets/emma4.png";
import Band from "../../assets/band.JPG";
import Layout from "../../utils/layout";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Music = ({ text }) => {
  return (
    <Layout>
      <div className="music-header">
        <div className="music-header-text">
          <h2>{text === "self" ? "My Music" : text === "band" ? "OhEmGee Band Music" : null}</h2>
          <div className="music-details">
            <p data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
              {text === "self"
                ? `I have a number of singles and albums available on all online music stores. Click below to follow me and listen to my songs on your preferred platform (you can also search for EmmaOMG on your preferred platform in case you don't find it below)`
                  ? text === "band"
                  : `Click below to follow the band and listen on your preferred platform (you can also search for OhEmGee Band on your preferred platform in case you don't find it below)`
                : null}
            </p>
            <div className="music">
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={text === "self" ? "https://www.youtube.com/user/EmmaOhMaGod" : text === "band" ? "https://www.youtube.com/channel/UCrDZKma0-6rwIOS06W91uEQ" : null}
                  target="_blank">
                  <img src={Youtube} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self"
                      ? "https://open.spotify.com/artist/5S7enRZZovhy4FeyjhO8Td"
                      : text === "band"
                      ? "https://open.spotify.com/artist/0IOcTumhI9iYAbFJEerdvx?si=Y1fMKKBcRqqEy3USOTpLbg"
                      : null
                  }
                  target="_blank">
                  <img src={Spotify} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self"
                      ? "https://music.apple.com/us/artist/emmaomg/1156056549"
                      : text === "band"
                      ? "https://music.apple.com/us/artist/the-ohemgee-band/1472853923"
                      : null
                  }
                  target="_blank">
                  <img src={Apple} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self"
                      ? "https://www.amazon.com/s?k=EmmaOMG&i=digital-music&crid=177P0TVZ34UXV&sprefix=emmaomg+and+the+ohemgee+band%2Cdigital-music%2C215&ref=nb_sb_noss"
                      : text === "band"
                      ? "https://www.amazon.com/music/player/artists/B07V2RZV5K/the-ohemgee-band"
                      : null
                  }
                  target="_blank">
                  <img src={Amazon} alt="Music" />
                </a>
              </div>
            </div>
            <div className="music">
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self"
                      ? "https://tidal.com/browse/artist/8149167?utm_source=Google&utm_medium=Paid&utm_campaign=17095343963&utm_term&gclid=CjwKCAjw7cGUBhA9EiwArBAvouOxRLIJbY2TyNINad5-SNE_YlTwAikru9BTogKKpm_X3MX9SeL_4RoCfQ8QAvD_BwE&gclid=CjwKCAjw7cGUBhA9EiwArBAvouOxRLIJbY2TyNINad5-SNE_YlTwAikru9BTogKKpm_X3MX9SeL_4RoCfQ8QAvD_BwE&utm_content&placement"
                      : text === "band"
                      ? "https://tidal.com/browse/artist/16271917"
                      : null
                  }
                  target="_blank">
                  <img src={Tidal} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a href={text === "self" ? "https://www.deezer.com/en/artist/11072362" : text === "band" ? "https://www.deezer.com/en/artist/11072362" : null} target="_blank">
                  <img src={Deezer} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self" ? "https://www.shazam.com/artist/emmaomg/1156056549" : text === "band" ? "https://www.shazam.com/gb/artist/the-ohemgee-band/1472853923" : null
                  }
                  target="_blank">
                  <img src={Shazam} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self" ? "https://www.kkbox.com/tw/en/artist/5Ybm71MRDF8kq8zwZo" : text === "band" ? "https://www.kkbox.com/sg/en/artist/XXbP8no6vXP51iiFUo" : null
                  }
                  target="_blank">
                  <img src={KKBOX} alt="Music" />
                </a>
              </div>
            </div>
            <div className="musics">
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={text === "self" ? "https://www.boomplay.com/share/artist/456613" : text === "band" ? "https://www.boomplay.com/artists/3521213?from=search" : null}
                  target="_blank">
                  <img src={Boomplay} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-right" data-aos-duration="2000" data-aos-once="true">
                <a href="https://audiomack.com/emmaomg" target="_blank">
                  <img src={Audiomack} alt="Music" />
                </a>
              </div>
              <div data-aos="slide-left" data-aos-duration="2000" data-aos-once="true">
                <a
                  href={
                    text === "self"
                      ? "https://music.apple.com/us/artist/emmaomg/1156056549"
                      : text === "band"
                      ? "https://music.apple.com/ng/artist/the-ohemgee-band/1472853923"
                      : null
                  }
                  target="_blank">
                  <img src={Itunes} alt="Music" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="music-emma">
          <img src={text === "self" ? Emma4 : text === "band" ? Band : null} alt="Emma" />
        </div>
      </div>
    </Layout>
  );
};

export default Music;
