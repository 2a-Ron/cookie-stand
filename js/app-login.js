/* On my own time I will seperate the check for username from password just incase the user doesn't exist. */
var adminList = [
  {
    username: 'Admin',
    password: 'Password'
  },

  {
    username: 'Pat',
    password: 'Cookie'
  }
];

var getUserInfo = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  for(var i = 0; i < adminList.length; i++) {
    if(username === adminList[i].username && password === adminList[i].password) {
      window.open('sales.html', 'newwindow');
      return;
    }
  }
  alert('Incorrect username or password');
};

