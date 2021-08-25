import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = ({close}) => {
    return (
      <div>
        <p>something is wrong</p>
        <button onClick={close}> close</button>
      </div>
    );
        
    
}

 toast.configure();
const Toastify = () => {
   
    const notify =() => {
        toast.success(' success this is for testing toastify', {position: toast.POSITION.TOP_LEFT, autoClose:8000})
        toast.warning(<CustomToast></CustomToast>, {position: toast.POSITION.TOP_CENTER})
        toast.warn('warn this is for testing toastify', {position: toast.POSITION.TOP_RIGHT})
        toast.error('error this is for testing toastify', {position: toast.POSITION.BOTTOM_LEFT})
        toast.info('this is for testing toastify', {position: toast.POSITION.BOTTOM_CENTER, autoClose:false})
        toast('this is for testing toastify', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000})
    }
   
    return (
        <div className="m-auto" >
            <h1>  toast using here</h1>
           <button onClick={notify}>notify </button>
        </div>
    );
};

export default Toastify;