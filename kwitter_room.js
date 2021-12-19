
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
document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname="+Room_names);
row="<div id='+Room_names+'onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}