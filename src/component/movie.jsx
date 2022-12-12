
import HeartButton from './heartbutton';
import Rating from './rating';

const Movie=(props)=>{
        const{id,name,rating,genre,mydelete,image}=props
        return (
            <tr>
                <th>{id}</th>
                <th>{name}</th>
                <th>{genre}</th>
                <th>{<Rating
                rating={rating}
                />}</th>
                <th><img src="https://picsum.photos/150/150"></img></th>
                <th> {HeartButton(onclick)}Like</th>
                
                {<th><button className="btn btn-danger btn-sm" 
                onClick={()=>mydelete(id)}>Remove🗑</button></th> }
                
                
            </tr>
        );
            }

 
export default Movie;
