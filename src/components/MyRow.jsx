import React from 'react';
import { Link } from 'react-router-dom';


class MyRow extends React.Component {
    

    state = {
        movies: []

    }

    
     fetchMovie = async() => {
        
        try {
            //const response = await fetch(`http://localhost:3001/media=${this.props.query}`)

            const response = await fetch(process.env.REACT_APP_GET_URL)
            const data = await response.json()
            if(response.ok){

                console.log(`my movie data`, data)
                this.setState({
                    movies: data
                })
                console.log(`here is your data `, this.state.movies)

            } else {
                console.log(`something went wrong`)
            }

        } catch (e) {
            console.error(`ooops an error occured while fetching`, e)
        }

     }

    componentDidMount(){
        this.fetchMovie()
    }

    render(){
       
        return (
           
            <>
                {
                    this.state.movies.map(movie => (
                    <div className="colxx ml-1 text-white">
                    <div key={movie.id} className="card " >
                 
                         <Link to={`/media/${movie.id}`}> 
                         <div>
                         <img src={movie.Poster} className="movie" alt="..."/>
                         
                         </div>
                        
                        
                        </Link>   
                    </div>
                    
                    
                    </div>
                    
                ))
                }
            </>        
            
        )
    }
}

export default MyRow