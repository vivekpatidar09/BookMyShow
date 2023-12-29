import React, { useState } from 'react'

import "./Movies.css"
import MovieCarosoul from '../Carosoul/MovieCarosoul'

const MoviesData = [ 

  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg",
    title: "Salar : Cease Fire - Part 1",
    certificate:"UA",
    languages:"Hindi, Malayalam , Kannada , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jailer-et00331686-1664432415.jpg",
    title: "Jailer",
    certificate:"UA",
    languages:"Tamil , Malayalam , Kannada , Telugu , Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rdx-et00364397-1689231242.jpg",
    title: "RDX",
    certificate:"UA",
    languages:"Malayalam , Kannada , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/blue-beetle-et00331565-1702638412.jpg",
    title: "Blue Beetle",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/voice-of-sathyanathan-et00363001-1687847837.jpg",
    title: "Voice of Sathyanathan",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadar-2-et00338629-1688724591.jpg",
    title: "Gadar 2: The Katha Continues",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/omg-2-et00361712-1689772587.jpg",
    title: "OMG 2",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/oppenheimer-et00347867-1700808846.jpg",
    title: "Oppenheimer",
    certificate:"UA",
    languages:"Hindi,English"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rocky-aur-rani-kii-prem-kahaani-et00312549-1690269122.jpg",
    title: "Rocky Aur Rani Kii Prem Kahaani",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/barbie-et00072466-1702637926.jpg",
    title: "Barbie",
    certificate:"UA",
    languages:"English"
  
  },
  
  
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ghoomer-et00365396-1691567589.jpg",
    title: "Ghoomer",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/digital-village-et00367000-1691837911.jpg",
    title: "Digital Village",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1696407863.jpg",
    title: "Mission Impossible: Dead Reckoning - Part One",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
    
    
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/corona-dhavan-et00365979-1690958782.jpg",
    title: "Corona Dhavan",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/meg-2-the-trench-et00358316-1702638248.jpg",
    title: "Meg 2: The Trench",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
  
  },
  
  
  
  
  
  ]

function Movies() {
  const [activeBtn, setActivebtn] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false]);
  function multiplestate(index){
   const newActiveBtn = activeBtn.map((element , i)=>{
      if(index === i){
        return !element;
      }
      return false;
    });
    setActivebtn(newActiveBtn);
  }
  return (

    <>
    <div>
      <MovieCarosoul />
    </div>
    <div className='movieMaindiv'>
      <div className='MoviinMumbaiDiv'>
        <h2 className='movieheading'>Movie In Mumbai</h2>
        <div>
          <section className='allbtnslangagae'>

               <button className={activeBtn[0] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(0)}} >English</button>
               <button className={activeBtn[1] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(1)}} >Hindi</button>
               <button className={activeBtn[2] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(2)}} >Marathi</button>
               <button className={activeBtn[3] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(3)}} >Tamil</button>
               <button className={activeBtn[4] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(4)}} >Japannese</button>
               <button className={activeBtn[5] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(5)}} >malyalam</button>
               <button className={activeBtn[6] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(6)}} >Telugu</button>
               <button className={activeBtn[7] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(7)}} >Kannada</button>
               <button className={activeBtn[8] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(8)}} >Garhwali</button>
               <button className={activeBtn[9] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(9)}} >Gujrati</button>
               <button className={activeBtn[10] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(10)}} >Korean</button>
               <button className={activeBtn[11] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(11)}} >Multi langauge</button>
               <button className={activeBtn[12] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(12)}} >Odia</button>
               <button className={activeBtn[13] ? `moviesBtn movieActivebtn`:`moviesBtn`} type="button" onClick={()=>{multiplestate(13)}} >Punjabi</button>
          </section>    
           </div>
           <div className="comingsoonmaindiv">
            <div>
              <h2 className='comingsoon'>Coming Soon</h2>
            </div>
            <div>
              <button className='explorebtn'>Explore Upcoming Movies</button>
            </div>
           </div>
           <div className="mumbaiAllImages">{
      MoviesData.map((x) => {

  
        return (
          <div>
            
            <img className='mubaiImages' src={x.imageLink} alt="" />
            <h2 className='Cardpara' >{x.title}</h2>
            <p className='Cardpara' >{x.certificate}</p>
            <p className='Cardpara' >{x.languages}</p>
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

export default Movies
