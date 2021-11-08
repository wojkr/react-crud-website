import { FiUserPlus } from "react-icons/fi"
const Join = ({ isLoggedIn, setShowRegisterForm }) => {
    return (
        <div className="full-page default-background">
            <div className="h-100 flex-column flex-center">
                <div className="w-50">
                    <h1>Join us!</h1>
                    <div className="default-box-container">
                        <h2>What you will get?</h2>
                        <div className="default-box-container">
                            <p>Being the member allows you to use these benefits:</p>
                            <ul className="list-circle">
                                <li>10% off for all beverages</li>
                                <li>15% off for deals</li>
                                <li>20% off for a favorite drink or a cookie</li>
                                <li>25% off for favorite drink+cookie</li>
                                <li>20% off to rent one of our room for your special occasieon</li>
                                <li>free favorites for your birthday</li>
                                <li>free favorites you and your friend who will join us</li>
                                <li><strong>Spending time with amazing and inspiring people</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="default-box-container">
                        <h2>What you need to do to join?</h2>
                        <div className="default-box-container">
                            <p>We have got only {isLoggedIn ? 2 : 3} requirements:</p>
                            <ul className="list-circle">
                                {!isLoggedIn && <li>
                                    Create your account on this website <i>(you can do it here: </i>
                                    <button className="button-react-icon"
                                        onClick={setShowRegisterForm}>
                                        <FiUserPlus className="react-icon" />
                                    </button>
                                    <i>)</i>
                                </li>}
                                <li>Register at our reception</li>
                                <li>Subscribe Membership <i>(Membership fee: £10/month)</i></li>
                            </ul>
                        </div>
                    </div>
                    <h4>To become better verion of yourself stay with those who are getting improved</h4>
                </div>
            </div>
        </div>
    )
}
export default Join