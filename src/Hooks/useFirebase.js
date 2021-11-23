import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);

  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // register
  const createNewUser = (email, password, name, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('');
        setUser(result.user);
        setUserName(name);
        navigate('/home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // signin with email and pass
  const signinWithEmailandPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message)
        setError(error.message);
      });
  };

  // google signin
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // facebook signIn
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // password reset email
  const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError('');
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess('');
        setError(error.message);
      });
  };

  // logout
  const logout = (navigate) => {
    signOut(auth).then(() => {
      setUser({});
      navigate('/home');
    });
  };

  // observe the user
  useEffect(() => {
    const unsubscibed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscibed;
  }, [auth]);

  return {
    user,
    setUser,
    error,
    createNewUser,
    logout,
    signinWithEmailandPass,
    signInWithGoogle,
    signInWithFacebook,
    passwordReset,
    success,
    setSuccess,
    setError,
  };
};

export default useFirebase;
