var firebaseConfig = {
      apiKey: "AIzaSyDvxEERhd-YpYVX_r_7X_okLlTahwkKkhY",
      authDomain: "instagram-18aa0.firebaseapp.com",
      databaseURL: "https://instagram-18aa0-default-rtdb.firebaseio.com",
      projectId: "instagram-18aa0",
      storageBucket: "instagram-18aa0.appspot.com",
      messagingSenderId: "105315596965",
      appId: "1:105315596965:web:cd13e56f6a06ee0401eb4c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
