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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name" + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='Redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function Redirecttoroomname(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

