import Footer from '../Components/Footer'
import "../styles/Login.css"

const Login = () => {
    return (
        <>
            <div className='login-container'>
                <form className='login-form' action="">
                    <h1>Inicia sesión</h1>
                    <div className='form-control'>
                        <input type="email" id='email' required />
                        <label id="email">Email</label>
                    </div>
                    <div className='form-control'>
                        <input type="password" id='password' required />
                        <label id="password">Password</label>
                    </div>
                    <button type='submit'>Iniciar sesión</button>
                    <div className="form-help">
                        <a href="">¿Olvidaste la contraseña?</a>
                        <div className="rememberMe">
                            <input type="checkbox" id="recuerdame" />
                            <label id="remember_me">Recuerdame</label>
                        </div>
                        <p>Primera vez en Netflix? <a href=""><strong>Suscribete ahora</strong></a></p>
                    </div>

                    <small className='recaptcha'>Esta pagina esta protegida por Google reCAPTCHA para comprobar que no eres un robot <a href="">Mas info</a></small>

                </form>
            </div>

        </>

    )
}

export default Login;