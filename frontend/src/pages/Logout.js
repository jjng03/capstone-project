import {useNavigate} from 'react-router-dom';
import { MdMoreHoriz } from 'react-icons/md'

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
                <MdMoreHoriz className="sign-out" size={40} onClick={handleClick} />
                    
                : <div className="login-link">
                {window.localStorage.getItem("username")}
                </div> }
            {/* <button onClick={handleClick}>Logout</button> */}
        </>
    )
}

export default Logout;