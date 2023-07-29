import {useState} from 'react';

const SignUpForm = ( {setToken }) => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onChangeName = (event) => {
        let changedName = event.target.value;
        setUserName(changedName);
    }

    const onChangePassword = (event) => {
        let changedPassword = event.target.value;
        setPassword(changedPassword);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: userName,
                        password: passWord
                    })
                });
            const data = await response.json();
            console.log(data);
            const authToken = data.token;
            setToken(authToken);

        } catch(error) {
            console.error(`Yup, handle submit screwed you.`, error)
        }
    }

    return (
        <>
            <h2>Sign Up!</h2> 
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input 
                        onChange={onChangeName}
                    />
                </label>
                <br />
                <label>
                    Password: 
                    <input  
                        onChange={onChangePassword}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </>
        
    )
}

export default SignUpForm;