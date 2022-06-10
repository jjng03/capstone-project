import {useNavigate} from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const handleClick = async() => {
        window.localStorage.clear()
        navigate('/login')
        window.location.reload()
    }
    return (
        <>
            { window.localStorage.getItem("username") ? 
                <button onClick={handleClick}>Sign out</button>
                    
                : <div className="login-link">
                {window.localStorage.getItem("username")}
                </div> }
            {/* <button onClick={handleClick}>Logout</button> */}
        </>
    )
}

export default Logout;