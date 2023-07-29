import {useState} from 'react';

const Authenticate = ( { token } ) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                    }
                });
            const data = await response.json();
            console.log(data.message);
            setSuccessMessage(data.message);
            
            } catch (error) {
            console.error(error.message);
        }
        
    }

    return (
        <>
            <h2>AUTHENTICATE!!!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}

export default Authenticate