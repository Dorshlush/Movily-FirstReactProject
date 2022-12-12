
import React ,{Component} from "react";
import Movies from "./movies";
import Pagination from "./pagination";
import ChoosePages from "./choosePages";
import Container from "./container";




class Body  extends Component {
    state = {  } 
    render() { 
        const {filter,
            pagination,
            showall,
            newmoviesList,
            handleDelete,
            postsPerPage,
            temparr,
            newmoviesListlength,
            ChangePostsPerPage}=this.props
    
        return (
            (<React.Fragment>
               
                <div>
                
                    <Container/>
                
                 <Movies
                      
                      newmoviesList={newmoviesList} 
                      postsPerPage={postsPerPage}
                      pagination={pagination}
                      showall={showall}
                      handleDelete={handleDelete}
                      filter={filter}
                      temparr={temparr}
                
                />  
                
          
                <Pagination
                  
                  newmoviesListlength={newmoviesListlength}
                  postsPerPage={postsPerPage}
                  pagination={pagination}
                  />
    
                <ChoosePages
                   ChangePostsPerPage={ChangePostsPerPage}/>
               </div>
               
    
              
              
               
    
                       
            </React.Fragment>
            ));

        ;
    }
}
 
export default Body ;