import React from 'react';


const Test = () => {

    const [resp, setResp] = React.useState('')

    const sendRequest = async () => {
<<<<<<< HEAD
        const res = await fetch('http://localhost:8080/api/users/', {mode: 'cors'})
        const data = await res.json()
        setResp(JSON.stringify(data.test))
=======
        const res = await fetch('http://localhost:8080/api/register', {mode: 'cors'})
        const data = await res.json()
        setResp(data.test)
>>>>>>> 2cabee1 (separted routes into mvc archi)
    }

    return (
    <>
        <p>{resp}</p>  
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            >
            <button className='requestBtn' onClick={sendRequest}>send req</button>
            <button onClick={() => setResp('')}>reset</button>

        </div> 
    </>
    );

}

export default Test;