import Moviecard from "../components/Moviecard"
import {useState} from "react"

function Home(){
  const[searchQuery, setSearchQuery] = useState(""); // state, fcn

  const movies =[
    {id: 1, title:"时光代理人", release_date: "2021"},
    {id: 2, title:"时光代理人 第二季", release_date: "2023"},
    {id: 3, title:"时光代理人 英都篇", release_date: "2024"},
    {id: 4, title:"时光代理人 第三季", release_date: "2026"},
  ];


  const handleSearch = () => {
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