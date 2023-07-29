const Authenticate = () => {
    const handleClick = async () => {
        console.log('Authenticate is Working, got it?')
    }

    return (
        <>
            <h2>AUTHENTICATE!!!</h2>
            <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}

export default Authenticate