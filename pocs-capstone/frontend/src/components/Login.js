import {useRef,useState,useEffect} from 'react';
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';


import axios from '../api/axios';
const LOGIN_URL = '/api/token/';

const Login = () => {

        const { setAuth, persist, setPersist } = useAuth();
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/loader";

        const emailRef = useRef()
        const errRef = useRef()

        const [email, setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [errMsg, setErrMsg] = useState('');

        useEffect(()=>{emailRef.current.focus();},[])
        useEffect(()=>{setErrMsg('');},[email,password]) //as unreadable as humanly possible like a tru front-end dev

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({email,password}), //email: email provided for clarity, first is a key for the value
                    {
                        headers: {'Content-Type':'application/json'},
                        withCredentials:true //odd we need this out
                        //TODO - when we serve on a site, we will need to add an origin to cors serverside
                        
                    }
                );
                
                console.log(response?.data?.access)
                //console.log(response?.data?.refresh)
                console.log(email)
                const access = response?.data?.access;
                //const refreshToken = response?.data?.refresh;
                //const roles = response?.data?.roles; //not a thing we have but we could add later if admin
                setAuth({email,password,access});//,refreshToken});
                localStorage.setItem("refresh",response?.data?.refresh)
                setEmail('');
                setPassword('');
                navigate(from, { replace: true });
                navigate('/loader')
               // navigate('/pet-choice')
            }catch(err){ //TODO do these error codes really match
                if (!err?.response){
                    setErrMsg('No Server Response');
                }
                else if (err.response?.status === 400){
                    setErrMsg('Missing Username or Password')
                }
                else if (err.response?.status === 401){
                    setErrMsg('Unauthorized')
                }
                else{
                    console.log(err.response.data)
                    setErrMsg('Login Failed')
                }
                errRef.current.focus();
            }

        }

        const togglePersist = () => {
            setPersist(prev => !prev);
        }
    
        useEffect(() => {
            localStorage.setItem("persist", persist);
        }, [persist])

        if (!localStorage.getItem("refresh"))
        console.log("REFRESH LOGIN------------->",localStorage.getItem("refresh"))

    //using fragment so display success
    return (

        <div className="backg">
            <section className='section-login-register'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign-in to visit your buddies!</h1>
                <form onSubmit={handleSubmit} className="form-login-register">
                    <label className="label-login-register" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <label className="label-login-register" htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                    />
                    <button className='button-login-register'>Sign In</button>
                    <div className="persistCheck">
                        <input
                            type="checkbox"
                            id="persist"
                            onChange={togglePersist}
                            checked={persist}
                        />
                        <label htmlFor="persist">Trust This Device</label>
                    </div>
                
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <Link to='/register'>Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>

    )

}


export default Login