import React from 'react';


const Test = () => {

    const [resp, setResp] = React.useState('')

    const sendRequest = async () => {
        const res = await fetch('http://localhost:8080/api/users/', {mode: 'cors'})
        const data = await res.json()
        setResp(JSON.stringify(data.test))
    }

    return (
    <>
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            >
                <p>{resp}</p>  
            <button className='requestBtn' onClick={sendRequest}>send req</button>
            <button onClick={() => setResp('')}>reset</button>

        </div> 
    </>
    );

}

export default Test;