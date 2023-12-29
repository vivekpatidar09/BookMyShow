import { useState } from "react";
import "./Plays.css";

const PlaysData = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00344682-ykwteqkvrd-portrait.jpg",
    title: "Peggy Pane, Oh! What a Pain!!!",
    description: "The Forum - Celebration and Convention: Ahmedabad",
    languages: "English",
    price: "₹ 250 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377836-ukwxetdnas-portrait.jpg",
    title: "Massage (A Hindi Play)",
    description: "Mangalbaug and Bucky Galleries: Ahmedabad",
    languages: "Hindi",
    price: "₹ 500",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357304-wtunxrjvdd-portrait.jpg",
    title: "Patra Mitro",
    description: "Prayogshala: Ahmedabad",
    languages: "Gujarati",
    price: "₹ 500",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00365634-krhwxbapqn-portrait.jpg",
    title: "Khane Main Kya Banau!!!",
    description: "The Forum - Celebration and Convention: Ahmedabad",
    languages: "Hindi",
    price: "₹ 250 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381679-xkpzzgqhud-portrait.jpg",
    title: "Peggy Pane, Oh! What a Pain!!!",
    description: "The Forum - Celebration and Convention: Ahmedabad",
    languages: "English",
    price: "₹ 250 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358308-lzblaesgjq-portrait.jpg",
    title: "Massage (A Hindi Play)",
    description: "Mangalbaug and Bucky Galleries: Ahmedabad",
    languages: "Hindi",
    price: "₹ 500",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381504-gdyskdtglz-portrait.jpg",
    title: "Patra Mitro",
    description: "Prayogshala: Ahmedabad",
    languages: "Gujarati",
    price: "₹ 500",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379683-stwnqgwlkr-portrait.jpg",
    title: "Khane Main Kya Banau!!!",
    description: "The Forum - Celebration",
    languages: "Hindi",
    price: "₹ 250 onwards",
  },

  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380908-dcezsduqfd-portrait.jpg",
    title: "Massage (A Hindi Play)",
    description: "Mangalbaug and Bucky Galleries: Ahmedabad",
    languages: "Hindi",
    price: "₹ 500",
  },
];

export default function Plays() {
  const [activeBtn, setActivebtn] = useState([false, false, false, false]);
  function multiplestate(index) {
    const newActiveBtn = activeBtn.map((element, i) => {
      if (index === i) {
        return !element;
      }
      return false;
    });
    setActivebtn(newActiveBtn);
  }
  return (
    <>
      <div className="maindivs">

        <div className="Activitiesdiv">
          <h2 className="activities">Plays In Mumbai</h2>
          <section className="btn_section">
            <button
              className={activeBtn[0] ? `playBtn activePlayBtn ` : `playBtn`}
              onClick={() => {
                multiplestate(0);
              }}
            >
              Theatre
            </button>
            <button
              className={activeBtn[1] ? `playBtn activePlayBtn ` : `playBtn`}
              onClick={() => {
                multiplestate(1);
              }}
            >
              Storyteling
            </button>
            <button
              className={activeBtn[2] ? `playBtn activePlayBtn ` : `playBtn`}
              onClick={() => {
                multiplestate(2);
              }}
            >
              Monolouge
            </button>
            <button
              className={activeBtn[3] ? `playBtn activePlayBtn ` : `playBtn`}
              onClick={() => {
                multiplestate(3);
              }}
            >
              Puppyetry
            </button>
          </section>
          <div className="allImages">
            {PlaysData.map((x) => {
              return (
                <div>
                  <img className="Activitiesimages" src={x.imageLink} alt="" />
                  <h2 className="ActivitesPara">{x.title}</h2>
                  <p className="ActivitesPara">{x.description}</p>
                  <p className="ActivitesPara">{x.languages}</p>
                  <p className="ActivitesPara">{x.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
