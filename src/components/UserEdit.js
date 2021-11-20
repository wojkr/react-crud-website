const UserEdit = () => {
    return (<>
           <div className="full-page flex-column flex-center default-background">
            <div className="default-box-container">
    <h1>userEdit page</h1>
    {//birthday, hobby, favDrink,favCookie,userBioText,
}
                {/* {wrongPassword && <p className="message-error">{wrongPassword}</p>} */}
                {/* <form onSubmit={onSubmit} className="flex-column"> */}
                    <div className="flex-column flex-a-start flex-grow">
                        {/* <label htmlFor="comment-form-user">Username or Email: </label>
                        <input className="default-form w-80" id="comment-form-user" type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input> */}
                    </div>
                    <div className="flex-column flex-a-start flex-grow">
                        <label htmlFor="comment-form-rating">Password: </label>
                        {/* <input className="default-form w-80" id="comment-form-rating" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input> */}
                    </div>
                    {/* <button className="button-react-icon button-block" type="submit"><FiSend className="react-icon" /></button> */}
                {/* </form> */}
                {/* <LoginForm /> */}
                {/* <h3>If you dont have account, Sign in here: <Link to="/register"> <button className="button-react-icon"><FiFeather className="react-icon" /></button></Link></h3> */}
            </div>
        </div>
        </>
   )
}
export default UserEdit