
import React ,{Component} from "react";
import Navbar12 from "./component/navbar12";
import Container from "./component/container";



class Main extends Component {

    
    state = { 
        newmoviesList:[{id:1,name:'taken',rating:2.22,genre:'Comedy'},
                    {id:2,name:'dumb and dumber to',rating:4,genre:'Comedy'},
                    {id:3,name:'gosto',rating:3.3,genre:'Comedy'},
                    {id:5,name:'kongfu panda',rating:4.5,genre:'Action'},
                    {id:6,name:'kongfu pandsada',rating:3,genre:'Action'},
                    {id:7,name:'kongfu pasasdanda',rating:4.2,genre:'Action'},
                    {id:8,name:'kongsadfu panda',rating:3.7,genre:'Action'},
                    {id:9,name:'konsadgfu panda',rating:4,genre:'Action'},
                    {id:10,name:'kongfu panda',rating:2.22,genre:'Action'},
                    {id:11,name:'kongfsdasadu panda',rating:3,genre:'Drama'},
                    {id:12,name:'kongfu panda',rating:4,genre:'Drama'},
                    {id:13,name:'kongfu panda',rating:5,genre:'Drama'},
                    {id:14,name:'kongfu pandfda',rating:2,genre:'Drama'},
                    {id:15,name:'kongfu panda',rating:3.9,genre:'Drama'},
                    {id:16,name:'kongfu ccaspanda',rating:1.5,genre:'Fantasy'},
                    {id:17,name:'kongfu panda',rating:4.3,genre:'Fantasy'},
                    {id:18,name:'kongfu panda',rating:4.1,genre:'Fantasy'},
                    {id:19,name:'kongfu pxzaanda',rating:3.2,genre:'Fantasy'},
                    {id:20,name:'kosdasngfu panda',rating:3.5,genre:'Fantasy'},
                    {id:21,name:'kongfu panda',rating:4.1,genre:'Horror'},
                    {id:22,name:'konxagfu panda',rating:4.3,genre:'Horror'},
                    {id:23,name:'ksdongfu panda',rating:2.1,genre:'Horror'},
                    {id:24,name:'kewqongfu panda',rating:3.6,genre:'Horror'}
                  ],
            temparr:[{id:1,name:'taken',rating:2.22,genre:'Comedy'},
                    {id:2,name:'dumb and dumber to',rating:4,genre:'Comedy'},
                    {id:3,name:'gosto',rating:3.3,genre:'Comedy'},
                    {id:5,name:'kongfu panda',rating:4.5,genre:'Action'},
    ],
        postsPerPage:4,
 } 


        

    render() { 
       
        
        return (
        (
        <div className="maindiv" style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#c0bbbb",
        border: "10px solid #636363"

      }}>

            <Navbar12
               filterC={()=>this.filter("Comedy")}
               filterD={()=>this.filter("Drama")}
               filterA={()=>this.filter("Action")}
               filterH={()=>this.filter("Horror")}
               filterF={()=>this.filter("Fantasy")}
               showall={()=>this.showall()}
               newmoviesList={this.state.newmoviesList}
               newmoviesListlength={this.state.newmoviesList.length}
               postsPerPage={this.state.postsPerPage}/>
           
            <div>
               <Container
               filter={this.filter}
               pagination={this.pagination}
               showall={this.showall}
               newmoviesList={this.state.newmoviesList}
               handleDelete={this.handleDelete}
               postsPerPage={this.state.postsPerPage}
               temparr={this.state.temparr}
               ChangePostsPerPage={this.ChangePostsPerPage}
               newmoviesListlength={this.state.newmoviesList}
               onsubmitMaster={this.onMasterSubmit}

               />
           </div>
           </div>

           
          
           

                   
        
        ));
    }
handleDelete=(movieId)=>{
      const temparr=this.state.temparr.filter(val => val.id !== movieId);
      const newmoviesList=this.state.newmoviesList.filter(val => val.id !== movieId);
       
      this.setState({temparr})
      this.setState({newmoviesList})
 }


 filter=(Category)=>{
      const temparr=this.state.newmoviesList.filter(val1=>val1.genre==Category)
   
      this.setState({temparr})
 }


showall=()=>{
      this.pagination(1)
 }

pagination=(pageindex)=>{
      const currentPage= pageindex
      const postPerPage=this.state.postsPerPage
      const lastPostIndex= (currentPage*postPerPage)
      const firstPostIndex= (lastPostIndex-postPerPage)
      const temparr=this.state.newmoviesList.slice(firstPostIndex,lastPostIndex)
      this.setState({temparr})
}

onMasterSubmit=(values)=>{
      let newmoviesList=this.state.newmoviesList
      newmoviesList=[...newmoviesList,values]
      this.setState({newmoviesList:newmoviesList})
}

ChangePostsPerPage=(e)=>{
      const postsPerPage=((e))
      this.setState({postsPerPage})
      this.pagination(1)
      
   

}

}
export default Main ;