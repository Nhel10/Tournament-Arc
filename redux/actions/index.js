import { USER_STATE_CHANGE, CLEAR_DATA } from "../constants/index";
/* Make calls to fetch a user, save a user, save events, and etc */
import firebase from "firebase";

/* Responsible for deleting everything from redux store so we can can clear previous users information*/ 
export function clearData(){
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}

/* Make call to firestore, get the dispatch, then if we see if the snapshot exists and are able to get data
   from the database. It will send a dispatch of the tye of the user state and a current user, which will be
    called to the reducer to update the current state of the user variable. */
export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('does not exist')
                }
            })
    })
}
