import Moviecard from "../components/Moviecard.jsx";
import {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api.js";
import "../css/Home.css";

function Home(){
  const[searchQuery, setSearchQuery] = useState(""); // state, fcn
  const[movies, setMovies] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    const loadPopularMovies = async()=> {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err){
        console.log(err)
        setError("Failed to load the movies. Please try again later.")
      }finally{
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSearch = async(e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return
    
    setLoading(true)
    try{
      const searchResults=await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)

    }catch(err){
      console.log(err)
      setError("Failed to search movies. Maybe BetterBoxd isn't better than LetterBoxd...")

    }finally{
      setLoading(false)
    }

    setSearchQuery("")

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

      {error && <div className="error-message">{error}</div>}

      {loading ?(<div className="loading">Searching.....</div>
      ):(
        <div className="movies-grid">
          {movies?.map(movie => 
          movie.title.toLowerCase().includes(searchQuery)&&(<Moviecard movie={movie} key={movie.id}/>
            ))}
        </div>
      )
      } 
      </div>
    </>
  )
}

export default Home