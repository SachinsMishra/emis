import React from "react";

class InspectInput extends React.Component {
    componentDidMount() {
        const ssn = document.getElementById("ssnNumber");
        const container = ssn.parentElement;
        ssn.setAttribute("type", "password")
        const eyeIcon = document.createElement("i");
        eyeIcon.className = "far fa-eye";
        eyeIcon.id = "togglePassword";
        eyeIcon.style = "margin-left:-30px;margin-top:10px;margin-right:15px;cursor:pointer;"
        container.appendChild(eyeIcon);
        const togglePassword = document.querySelector('#togglePassword');
        togglePassword.addEventListener('click', (e) => {
            // toggle the type attribute
            const type = ssn.getAttribute('type') === 'password' ? 'text' : 'password';
            ssn.setAttribute('type', type);
            // toggle the eye slash icon
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
    render() {
        return (
            <div className="main-container">
                <label>SSN</label>
                <input id="ssnNumber"></input>
            </div>
        )
    }
}

export default InspectInput;