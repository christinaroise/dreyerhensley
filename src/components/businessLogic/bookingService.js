import * as firebase from "firebase/app";
import "firebase/firestore";

var db = firebase.firestore();

const BookingService = {
    schedule: function(value) {
        db.collection("orders").add({
            name: value.name,
            phone: value.phone,
            email: value.email,
            type: value.type, 
            time: value.time,
            message: value.message
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
};

export default BookingService