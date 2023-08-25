import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Tmdb from '../Tmdb';
import "./ViewMovie.css"

const ViewMovie = () => {
    const { id } = useParams(); 

    const [movieData, setMovieData] = useState(null)

    useEffect(()=>{
        const loadAll = async() =>{
          let chosenInfo = await Tmdb.getMoiveInfo(id, 'tv')
      
          setMovieData(chosenInfo)
        }
      
        loadAll()
      }, [])

    console.log(movieData)
  return (
    <div>
        {movieData && movieData.name === "Warrior" &&
            <div>
                 <h1>{movieData.name}</h1>
        <iframe className="videoo"src="https://embed.warezcdn.net/serie/tt5743796" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "The Witcher" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt5180504" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "A Guerra dos Tronos" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt0944947" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Jujutsu Kaisen" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt12343534" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "O Eleito" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt1405354" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Bleach" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt0434665" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Futurama" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt0149460" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "마스크걸" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt26258200" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Fundação" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt0804484" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Invasão Secreta" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt13157618" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "One Piece" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt0388629" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Special Ops: Lioness" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt13111078" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "無職転生 ～異世界行ったら本気だす～" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt13293588" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Sequestro no Ar" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt19854762" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Shelter" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt15483276" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Homicídios ao Domicílio" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt11691774" frameborder="0"></iframe>
            </div>
        }
        {movieData && movieData.name === "Star Trek: Strange New Worlds" &&
            <div>
                <h1>{movieData.name}</h1>
                <iframe className='videoo' src="https://embed.warezcdn.net/serie/tt12327578" frameborder="0"></iframe>
            </div>
        }
        
    </div>
  )
}

export default ViewMovie