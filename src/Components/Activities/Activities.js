// import { Accordion } from '@mui/material';
import { useState } from "react";
import "./Activities.css";
import Accordions from "./Accordions";
 
 

const activities = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00352262-bpetysvrwj-portrait.jpg",
    title: "Speed Dating",
    description: "Dating - Dinner..",
    category: "Food Festival",
    price: "₹ 249 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376593-cqefnaxkcy-portrait.jpg",
    title: "Snow Kingdom Indore",
    description: "Snow Kingdom Indore..",
    category: "snow kingdown",
    price: "₹ 95 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxIEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00014607-engdszsccv-portrait.jpg",
    title: "imagica theme Park",
    description: "imagica theme",
    category: "Adventure",
    price: "₹ 565 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310275-qfjwjwnlre-portrait.jpg",
    title: "imagica Water Park",
    description: "imagica Water..",
    category: "Adventure",
    price: "₹ 999 onwards",
  },
];


const categories = [
  "Adventure",
  "Unique Tour",
  "Food Festival",
  "Gaming",
  "Amusement Park",
  "Antiques,Heritage,Museums",
  "Tourist Attractions",
  "Monuments",
   "Navratri",
   "Festivals",
   "Parties",
  "Quizzes and Competitions",
  "Durga Pujja",
]

export default function Activities() {
  const [activeBtn, setActivebtn] = useState([false,false,false,false,false,false,false,false, false,false,false,false,false ]);
  const [newActivitiesArray, setNewActivtiesArray] = useState(activities);

  function multiplestate(index) {
    const newActiveBtn = activeBtn.map((element, i) => {
      if (index === i) {
        return !element;
      }
      return element;
    });
    setActivebtn(newActiveBtn);

    let mapGroupArray = newActiveBtn.map((ele, i) => {
      let filterArray = []
      if(ele){
        filterArray = activities.filter((x) => x.category === categories[i])
      }
      return filterArray;
    })

    mapGroupArray = [
      ...mapGroupArray[0],
      ...mapGroupArray[1],
      ...mapGroupArray[2],
      ...mapGroupArray[3],
      ...mapGroupArray[4],
      ...mapGroupArray[5],
      ...mapGroupArray[6],
      ...mapGroupArray[7],
      ...mapGroupArray[8],
      ...mapGroupArray[9],
      ...mapGroupArray[10],
      ...mapGroupArray[11],
      ...mapGroupArray[12],
    ]

    if (mapGroupArray.length === 0) {
      
      setNewActivtiesArray(activities);
    } else {
      setNewActivtiesArray(mapGroupArray);
    }
  }

  return (
    <>
    
      <div className="singaldiv">
        <img
          className="singalImg"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692181564275_flyzonegandipettrampolinejumpdesktop.jpg"
          alt=""
        />
      </div>
      <div className="maindivs">
        <div className="filtersDiv">
          <h2 className="filter">Filters</h2>
          <div>{<Accordions />}</div>
        </div>
        <div className="Activitiesdiv">
          <h2 className="activities">Activities In Mumbai</h2>
          <div>
          <section className="allbtns">
            <button
              className={
                activeBtn[0]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(0);
              }}
            >
              Adventure
            </button>
            <button
              className={
                activeBtn[1]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(1);
              }}
            >
              Unique Tour
            </button>
            <button
              className={
                activeBtn[2]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(2);
              }}
            >
              Food and Drinks
            </button>
            <button
              className={
                activeBtn[3]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(3);
              }}
            >
              Gaming
            </button>
            <button
              className={
                activeBtn[4]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(4);
              }}
            >
              Amusement Park
            </button>
            <button
              className={
                activeBtn[5]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(5);
              }}
            >
              Antiques,Heritage,Museums
            </button>
            <button
              className={
                activeBtn[6]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(6);
              }}
            >
              Tourist Attractions
            </button>
            <button
              className={
                activeBtn[7]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(7);
              }}
            >
              Monuments
            </button>
            <button
              className={
                activeBtn[8]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(8);
              }}
            >

              Navratri
            </button>
            <button
              className={
                activeBtn[9]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(9);
              }}
            >
              Festivals
            </button>
            <button
              className={
                activeBtn[10]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(10);
              }}
            >
    
              Parties
            </button>
            <button
              className={
                activeBtn[11]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(11);
              }}
            >
          
              Quizzes and Competitions
            </button>
            <button
              className={
                activeBtn[12]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(12);
              }}
            >
      
            Durga Pujja
            </button>
          </section>
          </div>
          <div className="allImages">
            {newActivitiesArray.map((y) => {
              return (
                <div>
                  <img className="Activitiesimages" src={y.imageLink} alt="" />
                  <h2 className="ActivitesPara">{y.title}</h2>
                  <p className="ActivitesPara">{y.description}</p>
                  <p className="ActivitesPara">{y.category}</p>
                  <p className="ActivitesPara">{y.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
