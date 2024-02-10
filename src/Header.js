import MyPic from "./images/aniket.png"
export const Header=()=>{
    return (
        <div className="header-container">
            <img src={MyPic} alt="My Picture"/>
            <h1>Aniket Khangar</h1>
            <div className="contact-details">
                <b>aniket@gmail.com</b>
                <span>9359626454</span>
            </div>
        </div>
    )
}