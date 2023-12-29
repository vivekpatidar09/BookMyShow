// import { Link } from 'react-router-dom';
import { useState } from "react";
import "./Events.css";

const MoviesData = [
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381344-cwmuvjpfup-portrait.jpg",
    title: "Indore Music Festival",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00372983-hbzeumwdnf-portrait.jpg",
    title: "Sunburn Arena Ft. Dimitri Vegas &Like Mike-Chennai",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373699-ujzruvlzek-portrait.jpg",
    title: "Abhishek Upmanya",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA1IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-catlmtffuj-portrait.jpg",
    title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358468-jmqruklrzw-portrait.jpg",
    title: "Ramkumar Paathi Annachi Meethi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361405-layduavvwg-portrait.jpg",
    title: "FaltuGiri",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00348373-cdnuqpfylm-portrait.jpg",
    title: "Jagane Thandhiram - Tamil Standup Comedy",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363551-kwcphgcvyn-portrait.jpg",
    title: "MindFool India Tour - Vir Das",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMSBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00368676-wwamdueyav-portrait.jpg",
    title: "Praveen Kumar - Family Man Return",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377296-dzwxmeahuz-portrait.jpg",
    title: "AANSPLAINING by Karthik Kumar - TOUR 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135711-mnyvsrjgvq-portrait.jpg",
    title: "Sunburn Goa 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00328846-npnudatgvp-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA0IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00329412-bhskpnnmqe-portrait.jpg",
    title: "Kal ki chinta",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00337346-zpbderyunn-portrait.jpg",
    title: "Gem of a person",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Indore",
  },

];

function Events() {
    const [activeBtn ,setActivebtn] = useState([false,false,false,false,false,false,false,false]);
    function multiplestate(index){
        const newActiveBtn = activeBtn.map((element ,i)=>{
            if(index === i){
                return !element;
            }
            return false;
        });
        setActivebtn(newActiveBtn);
    }
  return (
    <>
    
      {/* main container start */}
      <div className="singaldiv">
        <img className="singalImg"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693217899163_jonitadesktop.jpg"
          alt=""
        />
      </div>
    <div className="maindivs">
        <div className='Activitiesdiv'>
           <h2 className='activities'>Event In Mumbai</h2>
           <div>
           <section className="btn_section">
          <button className={activeBtn[0] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(0)}}>Online Streaming Events</button>
          <button className={activeBtn[1] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(1)}}>Workshop</button>
          <button className={activeBtn[2] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(2)}}>Comedy Shows</button>
          <button className={activeBtn[3] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(3)}}>Music Shows</button>
          <button className={activeBtn[4] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(4)}}>Kids</button>
          <button className={activeBtn[5] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(5)}}>Meetups</button>
          <button className={activeBtn[6] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(6)}}>Spirituality</button>
          <button className={activeBtn[7] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(7)}}>Exhibitions</button>
        </section>
           </div>
           <div className="allImages">{
      MoviesData.map((x) => {

  
        return (
          <div>
            
            <img className='eventImages' src={x.imageLink} alt="" />
            <h2 className='Cardpara' >{x.title}</h2>
            <p className='Cardpara' >{x.catagory}</p>
            <p className='Cardpara' >{x.location}</p>
          </div>
        )
      }
      )
    }
      </div>
      </div>
    </div>
    
      </>
  )
}

export default Events;
