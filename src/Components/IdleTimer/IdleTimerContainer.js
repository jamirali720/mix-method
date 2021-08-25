import React, {useRef, useState} from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const IdleTimerContainer = () => {

    const [isLoggedIn, setIsLoggedIn ] = useState(true);
    const [modalIsOpen, setModalIsOpen ] = useState(false);
    const sessionTimeoutRef = useRef(null);

    const idleTimerRef = useRef(null);
    const onIdle =()=> {
        console.log("suer is idle")
        setModalIsOpen(true)
        sessionTimeoutRef.current= setTimeout(logout, 5000)
    }
    const stayActive = () => {
        setModalIsOpen(false);
        console.log('user is active')
        clearTimeout(sessionTimeoutRef.current)
    }
    const logout = () => {
        setModalIsOpen(false);
        setIsLoggedIn(false);
        console.log('user has been logged out')
        clearTimeout(sessionTimeoutRef.current)
    }
    return (
        <div>
            {
                isLoggedIn ? <h1>hello jamirali</h1> : <h1>hello guest</h1>
            }
            <Modal isOpen={modalIsOpen}>
                <h1> you are a idle user </h1>
                <p>you will be  log out</p>
                <button onClick={logout}> log me out </button>
                <button onClick={stayActive}> keep me logged in</button>
            </Modal>

            <p> Idle timer component</p>
            <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
        </div>
    );
};


export default IdleTimerContainer;