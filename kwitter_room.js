var firebaseConfig = {
      apiKey: "AIzaSyCtbNEZ8nithmYqyUjrj3B3Kv-wQNjg2Ak",
      authDomain: "project-11aa5.firebaseapp.com",
      databaseURL: "https://project-11aa5-default-rtdb.firebaseio.com",
      projectId: "project-11aa5",
      storageBucket: "project-11aa5.appspot.com",
      messagingSenderId: "495513248568",
      appId: "1:495513248568:web:5a3799481079f5c84c97cd",
      measurementId: "G-KV2ZEJ9KL8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name-" + Room_names);
    row = "<div class='room_name' id+"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
   
    
      //End code
      
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

      }  
   function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
    
}
function redirectToRoomName(name)
{
   console.log(name);
   localStorages.setItem("room_name",name);
   window.location = "kwitter_page.html"

}

firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0,
});
