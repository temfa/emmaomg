import React, { useState, useEffect } from "react";
import Layout from "../../utils/layout";
import "./band-members.css";
import Adeleye from "../../assets/adeleye.png";
import Akinfolarin from "../../assets/akinfolarin.png";
import Awopeju from "../../assets/awopeju.png";
import Badewa from "../../assets/badewa.png";
import Faji from "../../assets/faji.png";
import Ndubueze from "../../assets/ndubueze.png";
import Olateju from "../../assets/olateju.png";
import Oredolapo from "../../assets/oredolapo.png";
import Osinaya from "../../assets/osinaya.png";
import Oyetunji from "../../assets/oyetunji.png";
import Akeju from "../../assets/akeju.png";
import Akinpelu from "../../assets/akinpelu.png";

const BandMembers = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const nextAction = () => {
    setCount(count + 1);
  };
  const prevAction = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [count]);
  const bandDetails = [
    {
      bio1: `Adeleye popularly known as 'PressPlay' is a seasoned musician who has developed interest in music at a very tender age. He started as a drummer in his home
              church in Ekiti State where he was born.`,
      bio2: "He later picked interest in the accordion as an intrument he had access to in the house, which later led to him playing the Keyboard till date. He has worked with different artistes both home and abroad.",
      bio3: "He is a Music Producer and has produced songs in different genres. He is currently the first pianist and hypeman in the OhEmGeeBand.",
      img: Adeleye,
      name: "Adeleye Olamide Ezekiel",
    },
    {
      bio1: `Akinfolarin Ifetayo Daniel popularly known as "slappypercussionist" is a multi talented entertainer whose repertoire includes Music, content creation and event planning.`,
      bio2: "He was born in Lagos State in the late 80s, he love listening to music, swimming and reading.",
      bio3: "Ifetayo's glamour with entertainment started at the age of 10 when he joined his church choir as an instrumentalist and has performed at numerous events both home and abroad. Though he plays all the percussion instruments but he majors on the talking drum. ",
      img: Akinfolarin,
      name: "Akinfolarin Ifetayo Daniel",
    },
    {
      bio1: `Awopeju Olakunle is a multi-talented musician who discovered his talent from the church choir in the late 90s,he started his career as a drummer and he also sings indigenous music.`,
      bio2: "He is currently a student of Peter kings school of music, a producer and a Song writer.",
      bio3: `He's the second pianist (Aux) for the Ohemgeeband and also the Personal Assistant to the CEO.`,
      img: Awopeju,
      name: "Awopeju Olakunle",
    },
    {
      bio1: `Adegoke Badewa Emmanuel is an accomplished drummer with over 12 years of experience popularly known as PlayfulPappi, He was brought up in Osun State, Nigeria.`,
      bio2: "He has been a music lover since age 7 when He started playing the drum set. His unending passion for music has made him progressed to the level of music production.",
      bio3: `He's the official drummer of the ohemgeeband till date `,
      img: Badewa,
      name: "Adegoke Badewa Emmanuel",
    },
    {
      bio1: `Faji Oladapo Daniel is the Hawaiian Guitarist for the band.`,
      bio2: "He Studied Music in the Polytechnic of Ibadan with a higher diploma, He is happily married with kids and also a lover of God. ",
      bio3: `He has shared the stage Locally and internationally with numerous artistes, and he's the hawaiian guitarist at Daystar church. He teaches music and he's also the Current captain of the band. `,
      img: Faji,
      name: "Faji Oladapo Daniel",
    },

    {
      bio1: `Ndubueze Adaeze was born on the 29th of May, 1997 in Aba, Abia state, she relocated alongside her family to Lagos in 2002 and has forever been in love with music and languages.`,
      bio2: "Ada joined the Ohemgee band as a soprano singer and has since alternated between mid range and high pitch soprano.",
      bio3: `“Omo Igbo ton ko yoruba” as she's referred to by the Ohemgee band fans, has developed a soft spot for the Yoruba culture and music.Ada is a strong Christian who believes that faith, love and Joy should be our watchword as believers. `,
      img: Ndubueze,
      name: "Ndubueze Adaeze",
    },
    {
      bio1: `Ayomiotiitan Olateju was Born in Lagos state, Nigeria.`,
      bio2: "He's a Graduate of Sociology from the phenomenal Lagos state university,Ojo, Lagos. He is the official Bassist of The Ohemgeeband.",
      bio3: ` He's Hobbies are; Reading, Traveling, cooking and creating functional ideas musically and intellectually.  `,
      img: Olateju,
      name: "AYOMIOTIITAN OLATEJU ",
    },
    {
      bio1: `Osinaya Emmanuel is a singer-song writter from Abeokuta Ogun state. He is currently a student of the Music society of Nigeria (Muson). `,
      bio2: `He goes by the stage name Teo, and he has written a few songs like Baby Duro, Sweet love, and Amen to mention a few. Most noticeable is "Baby Duro" which was featured as a soundtrack in the Nollywood movie, "The Men's Club" `,
      bio3: `He is a backing vocalist for the Ohemgeeband. He is also a Script writer outside of music, he is an illustrator, a UX designer, and a web  Developer.`,
      img: Osinaya,
      name: "Osinaya Emmanuel",
    },

    {
      bio1: `Oredolapo Otedola is the Founder/CEO of Oredolapo Otedola Music Production company. He started his music career at the age of four as a Drummer and later moved to Piano before the Guitar finally became is major Instrument.`,
      bio2: "Oredolapo Otedola is from Ondo State, he Studied Computer Science at the Yaba College of Technology.",
      bio3: `He his a Professional Lead Guitar Player and Session Musician with band projects and collaborations with numerous A-list Artist both Local and international.He is a full-time member of The OMG BAND, and the official Guitarist for the Band. `,
      img: Oredolapo,
      name: "Oredolapo Otedola",
    },
    {
      bio1: `Oyetunji Emmannuel popularly known as Altitude was Born in the early 90s in Lagos state, Nigeria. `,
      bio2: "He's a Graduate of Economics from Lagos state University. His Hobbies are football, traveling, reading and music.",
      bio3: `He is the official talking drummer of the OHEMGEEBAND and also works as an experienced and functional Event planner.`,
      img: Oyetunji,
      name: "Oyetunji Emmanuel",
    },
    // {
    //   bio1: `Adegoke Badewa Emmanuel is an accomplished drummer with over 12 years of experience popularly known as PlayfulPappi, He was brought up in Osun State, Nigeria.`,
    //   bio2: "He has been a music lover since age 7 when He started playing the drum set. His unending passion for music has made him progressed to the level of music production.",
    //   bio3: `He's the official drummer of the ohemgeeband till date `,
    //   img: Akeju,
    //   name: "Adegoke Badewa Emmanuel",
    // },
    {
      bio1: `Susan Anike Akinpelu, known as ANIIKE (pronounced aneekeh) is a singer-songwriter born in Lagos, Nigeria.`,
      bio2: "She started out her music career at the young age of 10 in the church choir and then grew more into the music scene by contributing her vocals and other music skills to songs and performances with top music artists and bands before venturing into her long term dream of being a songwriter and artist. ",
      bio3: `On days when she's not fueling her passion as a musician she works in the creative media industry and in project/event management, she is the sonorous voice that belts the ALTO part with the Ohemgee Band.`,
      img: Akinpelu,
      name: "Susan Anike Akinpelu",
    },
  ];
  return (
    <Layout>
      <div className="band-members-header">
        <div className="band-members-text">
          <h2>{bandDetails[count].name}</h2>
          <div className="band-members-details">
            <p>{bandDetails[count].bio1}</p>
            <p>{bandDetails[count].bio2}</p>
            <p>{bandDetails[count].bio3}</p>
          </div>
          <div className="button-actions">
            {count === 0 ? null : <button onClick={prevAction}>Previous Member</button>}

            {bandDetails.length - 1 === count ? null : <button onClick={nextAction}>Next Member</button>}
          </div>
        </div>
        <div className="band-members-img">
          <img src={bandDetails[count].img} alt="band" />
        </div>
      </div>
    </Layout>
  );
};

export default BandMembers;
