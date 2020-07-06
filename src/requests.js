// const apiUrl = window.location.href;

export function getJwt(login, password) {
  return new Promise((res, rej) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://127.0.0.1:5000/login/", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({ login, password }));
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState !== 4) return;
      if (xmlHttp.status === 200) {
        const response = JSON.parse(xmlHttp.responseText);
        res(response);
      } else {
        rej();
      }
    };
  });
}

export function register(login, password) {
  return new Promise((res, rej) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://127.0.0.1:5000/register/", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({ login, password }));
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState !== 4) return;
      if (xmlHttp.status === 200) {
        const response = JSON.parse(xmlHttp.responseText);
        res(response);
      } else {
        rej();
      }
    };
  });
}

export function getTodos(token) {
  return new Promise((res, rej) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://127.0.0.1:5000/todo/", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState !== 4) return;
      if (xmlHttp.status === 200) {
        const response = JSON.parse(xmlHttp.responseText);
        res(response);
      } else {
        rej();
      }
    };
  });
}

export function setTodos(token, todos, maxId) {
  return new Promise((res, rej) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://127.0.0.1:5000/todo/", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.setRequestHeader("Authorization", "Bearer " + token);
    xmlHttp.send(JSON.stringify({ todos, maxId}));
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState !== 4) return;
      if (xmlHttp.status === 200) {
        const response = JSON.parse(xmlHttp.responseText);
        res(response);
      } else {
        rej();
      }
    };
  });
}
