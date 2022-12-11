import { IoMdPersonAdd } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import '../css/pageemployee.css';
export const PageAddEmployee = () => {
    return (
        <div className="add-employee">
            <div className="icons">
                <IoMdPersonAdd /> Add
            </div>
            <div className="icons">
                <AiFillEdit /> Edit
            </div>
        </div>
    );
}