
import React,{Component} from 'react';
import Movie from './movie';



class Movies extends Component {
  
    state = { 
        
     } 


    render() { 
        const{temparr,handleDelete}=this.props
        return (
           
                <div>
           
              
                
                <div className='moviesTable'>
                <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>rating</th>
                        <th>Image</th>
                        <th>like</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                { temparr.map(val=>
                    <Movie  
                     key={val.id}
                    id={val.id}
                    name={val.name}
                    genre={val.genre}
                    rating={val.rating}
                    mydelete={()=>handleDelete(val.id)}
                    
    
                    />
                )}

              
                
                </tbody>
            </table>
            </div>
            
            
            </div>
          
        );
        
    }

   
    

}
 
export default Movies;