import Moviecard from "../components/Moviecard"
import {useState} from "react"
import "../css/Home.css"

import SGDLR1 from "../assets/SGDLR1.webp"
import SGDLR2 from "../assets/SGDLR2.webp"
import SGDLRBA from "../assets/SGDLRBA.webp"
import SGDLR3 from "../assets/SGDLR3.webp"

function Home(){
  const[searchQuery, setSearchQuery] = useState(""); // state, fcn

  const movies =[
    {id: 1, title:"时光代理人 Link Click", release_date: "2021",url:SGDLR1},
    {id: 2, title:"时光代理人 Link Click S2", release_date: "2023",url:SGDLR2},
    {id: 3, title:"时光代理人 Link Click: Bridon Arc", release_date: "2024",url:SGDLRBA},
    {id: 4, title:"时光代理人 Link Click S3", release_date: "2026",url:SGDLR3},
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);

  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-name">
          <input type="text" 
          placeholder="Search for a movie"
          className="search-input" 
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          /> 
          <button type="Submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
          {movies.map(movie => 
          movie.title.toLowerCase().includes(searchQuery)&&(<Moviecard movie={movie} key={movie.id}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default Home