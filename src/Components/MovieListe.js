import React, { useState } from 'react'
import MovieCard from './MovieCard';
import ReactStars from "react-rating-stars-component";
import AddModal from './AddModal';


function MovieListe() {
    
const [Liste, setListe] = useState
    (
        [
        {
    
        name:'Superman Vs Batman',
        image:"https://i.pinimg.com/736x/60/c0/9e/60c09e3183cdd9672f8589bfa5cdf2fe.jpg",
        rating:4,
        year:2016,
        overview:"It's been nearly two years since Superman's (Henry Cavill) colossal battle with Zod (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne (Ben Affleck). Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the Man of Steel",
        url:"https://www.youtube.com/watch?v=0WWzgGyAH6Y"
        },
        {
          
          name:'Venom',
          image:"https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875",
          rating:3,
          year:2021,
          overview:"Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror",
          url:"https://www.youtube.com/watch?v=u9Mv98Gr5pY"
          },
          {
            
            name:'Blade Runner 2049',
            image:"https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg",
            rating:5,
            year:2017,
            overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years",
            url:"https://www.youtube.com/watch?v=gCcx85zbxz4"
            },

            {
            
              name:'The Witcher',
              image:"https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
              rating:1,
              year:2021,
              overview:"The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.",
              url:"https://www.youtube.com/watch?v=ndl1W4ltcmg"
              },

              {
            
                name:'Breaking Bad',
                image:"https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                rating:5,
                year:2008,
                overview:"Premise. Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer.",
                url:"https://www.youtube.com/watch?v=lrcqbavlbyQ"
              },

                {
            
                  name:'The Sopranos',
                  image:"https://m.media-amazon.com/images/I/612qRKpx5VL._AC_SY679_.jpg",
                  rating:5,
                  year:1999,
                  overview:"Premise. Primarily set in New Jersey and New York City, the series follows Tony Soprano, a New Jersey-based Italian-American mobster, who tries to balance his family life with his role as boss of the Soprano family.",
                  url:"https://www.youtube.com/watch?v=u9qpFgAa52U"
                },

                  {
            
                    name:'Better Call Saul',
                    image:"https://cdn.europosters.eu/image/750/posters/better-call-saul-paint-i47519.jpg",
                    rating:2,
                    year:2014,
                    overview:"Better Call Saul follows the transformation of James McGill (Bob Odenkirk), a former con artist who is trying to become a respectable lawyer, into the personality of the flamboyant criminal lawyer Saul Goodman",
                    url:"https://www.youtube.com/watch?v=HN4oydykJFc"
                  },

                    {
            
                      name:'Dexter New Blood',
                      image:"https://sportshub.cbsistatic.com/i/2021/10/02/a3cd02ef-77da-44f9-9e1f-275eda96246f/dexter-new-blood-poster.jpg?auto=webp&width=640&height=800&crop=0.8:1,smart",
                      rating:1,
                      year:2021,
                      overview:"Set 10 years after Dexter went missing in the eye of Hurricane Laura, the series finds him living under an assumed name in the small town of Iron Lake, New York. Dexter may be embracing his new life, but in the wake of unexpected events in this close-knit community, his Dark Passenger beckons.",
                      url:"https://www.youtube.com/watch?v=l9H1uSS_zkk"
                    },

                      {
            
                        name:'The Dark Knight Rises',
                        image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
                        rating:4,
                        year:2012,
                        overview:"Batman is forced out of eight years of hiding when a ruthless mercenary called Bane takes control of Gotham's underworld, and makes plans to take over the whole city. With the help of the mysterious Selina Kyle and his butler Alfred, Bruce must protect the citizens of the beloved from their greatest threat yet.",
                        url:"https://www.youtube.com/watch?v=GokKUqLcvD8"
                      },

                        {
            
                          name:'True Detective',
                          image:"https://i.pinimg.com/originals/1c/ab/30/1cab30ca0cd90a6ce7e92d7c191d0714.jpg",
                          rating:5,
                          year:2014,
                          overview:"Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law. Edit Report This. In 2012, Louisiana State Police Detectives Rust Cohle and Martin Hart are brought in to revisit a homicide case they worked in 1995.",
                          url:"https://www.youtube.com/watch?v=fVQUcaO4AvE&t=19s"
                        },
          
          ],
        
          
          );
    
    const [text, settext] = useState("");
    const [rate, setrate] = useState(1);
    const rateChanged=(newrate)=>{
        setrate(newrate)
    };

    const addMovie=(newfilm)=> {setListe([...Liste,newfilm])}
    return (
    <div className='all'>
     <div className="filter">
     <div className="titlee"> <h1>Movie App</h1> </div>

     <div className="nav2">


<div class="form-outline" className='inputt'>
<input type="search" id="form1" class="form-control" placeholder="Quick Search"
 aria-label="Search" onChange={(e)=> settext(e.target.value)} />
</div>


    <div className="stars">
    <ReactStars
    count={5}
    onChange={rateChanged}
    size={24}
    activeColor="#ffd700"
  />
  </div>
  <AddModal addMovie={addMovie} />
  </div>
        </div>

        <div className='liste'>
            {Liste
            .filter((el=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate))
            .map((el)=>(<MovieCard movie={el}/>))
            
            }
            
        </div>
        </div>
    );
}

export default MovieListe;
