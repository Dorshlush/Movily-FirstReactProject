import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Body from './body';
import FormikForm from './formikform';


const Container = (props) => {
    const{onsubmitMaster,newmoviesList}=props
    
    return (
        <div>

                <Routes>
                    <Route path='/home' element={<Body{...props}/>}/>
                    <Route path='/addmovie' element={<FormikForm onsubmitMaster={onsubmitMaster} 
                        newmoviesList={newmoviesList}
         />}/>

                </Routes>
                
            </div>
       
    );
}

export default Container;
