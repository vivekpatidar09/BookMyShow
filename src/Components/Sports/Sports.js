import React, { useState } from "react";
import './Sports.css'


const sportsImages = [
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAxIEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00343705-nmjfmywpzk-portrait.jpg",
    title: "Chatrapati Shivaji Maharaj Marathon",
    description: "Bandra Fort Garden:..",
    category: "Runningf",
    price: "999 On wards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00339877-nsljauckpe-portrait.jpg",
    title: "Monsoon Mumbai Midnight Cycling",
    description: "Meeting point, Mahalax.",
    price: "Cycling",
    pa: "685 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00360333-nelhudfswy-portrait.jpg",
    title: " Aamchi Mumbai Half Marathon - 4th Edition",
    description: "Bandra Fort Garden:...",
    category: "5k",
    price: "790 onwards",
  },

];

export default function Sports(){
  const [activeBtn, setActivebtn] = useState([false,false,false,false,false,false,false,false])
  function multiplestate(index){
    const newActiveBtn = activeBtn.map((element, i)=>{
      if(index === i){
        return !element;
      }return false;
    })
    setActivebtn(newActiveBtn);
  }
  return(
    <>
    <div className='maindivs'>
           <div className='Activitiesdiv'>
           <h2 className='activities'>Sports In Mumbai</h2>
             <section className='btn_section'>
               <button className={activeBtn[0] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(0)}} >Cricket</button>
               <button className={activeBtn[1] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(1)}} >Online Games</button>
               <button className={activeBtn[2] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(2)}} >Chess</button>
               <button className={activeBtn[3] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(3)}} >Running</button>
               <button className={activeBtn[4] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(4)}} >E-Sports</button>
               <button className={activeBtn[5] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(5)}} >Cycling</button>
               <button className={activeBtn[6] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(6)}} >Motorsports</button>
               <button className={activeBtn[7] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(7)}}>Online Sports</button>
               
           </section>
          <div className='allImages'>
          {
             sportsImages.map((x) =>{
                  return(
                    

                   <div>
                       <img className='Activitiesimages' src={x.imageLink} alt="" />
                       <h2 className='ActivitesPara'>{x.title}</h2>
                       <p className='ActivitesPara'>{x.description}</p>
                       <p className='ActivitesPara'>{x.category}</p>
                       <p className='ActivitesPara'>{x.price}</p>
                   </div>

               
                  )
             })
         }
          </div>

          </div>
      
       </div>
    
    
    </>

  );
}