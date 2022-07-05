const getData = async (input) => {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?query=${input}&client_id=SFuvLdLHBIUWcJhKHFAQjbL0HhL6HslrRcSkbxxjZe4`
      );
      let data = await res.json();
      showData(data.results);
    };

  let value = "cars";
  getData(value);

  const showData = (data) => {
    let images = document.getElementById("images");
    images.innerHTML=""
    data.map((elem) => {
        let div = document.createElement("div");
        div.setAttribute("class","IM")
          let img = document.createElement("img");
            img.src=elem.urls.full;
          let title = document.createElement("h3");
            title.innerText=elem.user.name;
        div.append(img,title);
        images.append(div)
    })
    console.log(data);
  };


function search(){
  let input = document.querySelector("input").value;
  console.log(input)
  getData(input)
}


let input = document.querySelector("input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search()
  }
});