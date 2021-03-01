console.log("我是main.js,hello!");
let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "style.css");
  request.onload = () => {
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console("失败了");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.head.appendChild(script);
  };
  request.onerror = () => {
    console("失败了");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console("失败了");
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
