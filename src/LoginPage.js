import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import ModalAlertApp from './ModalAlertApp';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleShowAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleCloseAlert = () => setShowAlert(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      handleShowAlert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      handleShowAlert("Invalid Password Format", "Password must be at least 6 characters long and contain at least one letter and one number.");
      return;
    }

    if (username.trim() === "") {
      handleShowAlert("Empty Username", "Username cannot be empty.");
      return;
    }

    if (username.trim().length < 6) {
      handleShowAlert("Short Username", "Username must be at least 6 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      handleShowAlert("Registration Successful", "Your account has been created.");
      setIsLoginPage(true);
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      handleShowAlert("Registration Failed", "Please check your network connection and try again.");
    }

    setShowPassword(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      handleShowAlert("Login Successful", "You are now logged in.");
      navigate('/');
    } catch (error) {
      handleShowAlert("Invalid credentials");
    }
  };

  const showRegisterPage = (e) => {
    e.preventDefault();
    setIsLoginPage(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setShowPassword(false);
  };

  const showLoginPage = (e) => {
    e.preventDefault();
    setIsLoginPage(true);
    setUsername('');
    setPassword('');
    setEmail('');
    setShowPassword(false);
  };

  return (
    <div className='containerapp'>
      {isLoginPage ? (
        <form onSubmit={handleLogin}>
          <div className="headerapp">
            <div className="textapp">Login</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <i
                className={`fas fa-eye${showPassword ? '' : '-slash'}`}
                style={{
                  marginLeft: '8px',
                  cursor: 'pointer',
                  color: 'grey'
                }}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button className="sub-button" type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href onClick={showRegisterPage}>Register</a></p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <div className="headerapp">
            <div className="textapp">Register</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <i
                className={`fas fa-eye${showPassword ? '' : '-slash'}`}
                style={{
                  marginLeft: '8px',
                  cursor: 'pointer',
                  color: 'grey'
                }}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button className="sub-button" type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href onClick={showLoginPage}>Login</a></p>
          </div>
        </form>
      )}
      <ModalAlertApp 
        show={showAlert} 
        handleClose={handleCloseAlert} 
        title={alertTitle} 
        message={alertMessage} 
      />
    </div>
  );
};

export default LoginPage;
