// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAk_gg71HoMJdVliskbiUdJ35idJDg-P9s",
    authDomain: "social-e5855.firebaseapp.com",
    databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
    projectId: "social-e5855",
    storageBucket: "social-e5855.appspot.com",
    messagingSenderId: "671543009162", appId: "1:671543009162: web: a881fdddf02bf05c08b273"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function add_room()
{
    room_name = document.getElementById("ROOM_name").value;
    localStorage.setItem("roomname",room_name);
    window.location = "chat_room.html";
    
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}



