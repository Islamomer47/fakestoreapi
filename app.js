///////////////////////////////////////////////////
async function getproducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function products() {
  try {
    const data = await getproducts();

    data.map((element) => {
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      const li3 = document.createElement("li");
      const li4 = document.createElement("li");
      const img = document.createElement("img");

      document.getElementById("products").appendChild(ul);
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      li4.appendChild(img);

      ul.setAttribute("id", "products1");
      ul.classList.add("card");
      img.setAttribute("src", element.image);
      img.setAttribute("id", "products2");

      li1.innerHTML = element.title;
      li2.innerHTML = element.price;
      li3.innerHTML = element.description;
      img.style.width = "100px";
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

products();
