async function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  let user_token_id = googleUser.getAuthResponse().id_token;
  let status = await axios.post("/login", { user_token_id });
  if (status.data.varification_status === "success") {
    signOut();
    location.assign("/dashboard");
  }

  // console.log("ID: " + profile.getId());
  // console.log("Name: " + profile.getName());
  // console.log("Image URL: " + profile.getImageUrl());
  // console.log("Email: " + profile.getEmail());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

async function logOut() {
  let res = await axios.get("/logout");
  console.log(res);
}
