import { auth } from './firebase-config';

export function signInWithGoogle(){
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}