arr = [
  {
    name: "Workwear Watch with Black Dial & Metal Strap",
    img: "https://staticimg.titan.co.in/Titan/Catalog/1806NM01_1.jpg?pView=pdp",
    price: "25",
    flag: false,
  },
  {
    name: "Connected X - Khaki Green Hybrid Smart Watch",
    img: "https://staticimg.titan.co.in/Titan/Catalog/90116QM01_1.jpg?pView=pdp",
    price: "45",
    flag: false,
  },
  {
    name: "Connected X - Copper Brown Hybrid Smart Watch",
    img: "https://staticimg.titan.co.in/Titan/Catalog/90116QM02_1.jpg?pView=pdp",
    price: "35",
    flag: false,
  },
  {
    name: "TraQ Cardio by Titan - GPS Enabled Performance Gear",
    img: "https://staticimg.titan.co.in/Traq/Catalog/75001PP01_1.jpg?pView=pdp",
    price: "38",
    flag: false,
  },
  {
    name: "Blue Dial Leather Strap Watch",
    img: "https://staticimg.titan.co.in/Xylys/Catalog/40048KL01E_1.jpg?pView=pdp",
    price: "25",
    flag: false,
  },
  {
    name: "Classic Blue Dial Blue Leather Strap Watch",
    img: "https://staticimg.titan.co.in/Xylys/Catalog/40045SL01E_1.jpg?pView=pdp",
    price: "48",
    flag: false,
  },
];

var main = document.querySelector("#main");
var check = document.querySelector("#check");

check.addEventListener("change", function () {
  if (check.checked) {
    showfill();
  } else {
    showdata(arr);
  }
});

function showdata(val) {
  var temp = "";

  val.forEach(function (elem, index) {
    temp += `
        <div class="prdt">
        <div id="left">
          <img src="${elem.img}" alt="" />
        </div>
        <div id="right">
          <h6>Titan </h6>
          <h3>${elem.name}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            autem et. Ratione nisi voluptas nemo?
          </p>
          <h4>$${elem.price}</h4>
          <button id="${index}" >${elem.flag ? "Added" : "Buy now"}</button>
        </div>
      </div>
    
        `;
  });

  main.innerHTML = temp;
}

function update() {
  main.addEventListener("click", function (dets) {
    arr[dets.target.id].flag = !arr[dets.target.id].flag;
    showdata(arr);
  });
}

function showfill() {
  arr2 = [];
  arr.forEach(function (elem) {
    if (elem.flag) {
      arr2.push(elem);
    }
    showdata(arr2);
  });
}

showdata(arr);
update();
