import styles from '../login.module.scss';

function Login() {

    const checkUser=(e)=>{
        e.preventDefault();
        console.log("checkUser()");
    }

    return (
        <div>
            <h1 className={styles.body}>Log in</h1>
            <form action="/">
                <input type="text" id="uname"></input>
                <br></br>
                <input type="password" id="pwd"></input>
                <br></br>
                <input type="submit" onClick={e=>checkUser(e)}></input>
            </form>
        </div>
    )
}

export default Login;