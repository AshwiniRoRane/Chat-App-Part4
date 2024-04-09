//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_nsme,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
