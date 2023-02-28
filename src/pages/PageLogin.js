import '../css/pagelogin.scss';
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE } from '../shared/Shared';
import InspectInput from '../pages/InspectInput'
export const PageLogin = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(MENU_ROUTE.HR_MENU);
    };
    return (
        <div className="main-container">
            <div className="left-side">
                <img className='logo' src='images/image.png'></img>
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
                    {/* <InspectInput></InspectInput> */}

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