function startLoader() {
  $("div.spanner").addClass("show");
  $("div.overlay").addClass("show");
}

function endLoader() {
  $("div.spanner").removeClass("show");
  $("div.overlay").removeClass("show");
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  let cookieNow = "";
  let cookieData = null;
  if (parts.length === 2) cookieNow = parts.pop().split(";").shift();
  if (cookieNow !== "") {
    cookieData = parseJwt(cookieNow);
    return cookieData;
  }
  return cookieData;
}
function authenticate() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "false" || isLoggedIn === null) {
    location.href = "index.html";
  }
  let cookieData = getCookie("user_jwt");
  console.log(cookieData);
  // if (!cookieData?.admin_phonenumber) {
  //   localStorage.setItem("isLoggedIn", "false");
  //   location.href = "index.html";
  // }
}
// baseURL: `/gst/backend/`,
const axiosInstance = axios.create({
  baseURL: `/backend/`,
  credentials: "include",
  withCredentials: true,
});
// render file
var loadFile = function (event, preview_id) {
  var output = document.getElementById(preview_id);
  output.src = URL.createObjectURL(event.target.files[0]);
  logoFileData = event.target?.files[0];
  console.log(logoFileData);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};
const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
function validatePAN(panVal) {
  var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  if (regpan.test(panVal)) {
    return true;
  } else {
    return false;
  }
}
