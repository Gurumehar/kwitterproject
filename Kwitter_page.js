const firebaseConfig = {
    apiKey: "AIzaSyAa-4c5wX1AhOXKVYpB0J3G7XDsBd7qZHE",
    authDomain: "kwitter-59f33.firebaseapp.com",
    databaseURL: "https://kwitter-59f33-default-rtdb.firebaseio.com",
    projectId: "kwitter-59f33",
    storageBucket: "kwitter-59f33.appspot.com",
    messagingSenderId: "8199207952",
    appId: "1:8199207952:web:9580e43692f1d442835e95"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push(
    {
        name:user_name,
        message:msg,
        like:0
    }
);
document.getElementById("msg").value="";
}
