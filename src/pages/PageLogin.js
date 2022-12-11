import '../css/pagelogin.css';
import { useNavigate } from 'react-router-dom';
export const PageLogin = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add-employee');
    };
    return (
        <div className="main-container">
            <div className="left-side">
                {/* Left */}
            </div>
            <div className="right-side">
                <div className='container'>
                    <h1 className='project-title'>
                        Welcome to Employee Identity Management System
                    </h1>
                    <h4>
                        Sign in
                    </h4>
                    <div className='login-screen'>
                        <div className='user-field'>
                            <label> Email Address</label>
                            <input placeholder='Please enter user emailid'></input>
                        </div>
                        <div className='user-field'>
                            <label> Password</label>
                            <input placeholder='Please enter user password'></input>
                        </div>
                    </div>
                    <div className='btn-submit'>
                        <button className='btn-login' onClick={handleClick} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}