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
  const [isLoading, setIsLoading] = useState(true);


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
        saveUser(email, name, 'POST');
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
  const signinWithEmailandPass = (email, password, navigate, location) => {
        setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || '/';
        navigate(destination);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
;
  };

  // google signin
  const signInWithGoogle = (navigate, location) => {
        setIsLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // facebook signIn
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
         const user = result.user;
         setUser(user);
         saveUser(user.email, user.displayName, 'PUT');
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
      setIsLoading(false);
    });
    return () => unsubscibed;
  }, [auth]);

  // save user to the database
  const saveUser = (email, name, method) => {
    const user = { email, name };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

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
    isLoading,
    setIsLoading,

  };
};

export default useFirebase;
