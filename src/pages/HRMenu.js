import { IoMdPersonAdd } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import '../css/hrmenu.scss';
import { useNavigate, useNavigation } from 'react-router-dom';
import { MENU_ROUTE } from '../shared/Shared';
export const HRMenu = () => {
    const navigate = useNavigate();
    // const navigategation = useNavigation();
    const gotoAddEmployee = () => {
        window.location.href=MENU_ROUTE.ADD_EMPLOYEE;
        // window.push(MENU_ROUTE.ADD_EMPLOYEE)
        // navigategation.navigate(MENU_ROUTE.ADD_EMPLOYEE);
    }
    const gotoEditEmployee = () => {
        window.location.href=MENU_ROUTE.OTHER_DESIGN;
        // window.push(MENU_ROUTE.ADD_EMPLOYEE)
        // navigategation.navigate(MENU_ROUTE.ADD_EMPLOYEE);
    }

    return (
        <div className="add-employee">
            <div onClick={gotoAddEmployee} className="icons">
                <IoMdPersonAdd /> Add
            </div>
            <div className="icons" onClick={gotoEditEmployee}>
                <AiFillEdit /> Edit
            </div>
        </div>
    );
}