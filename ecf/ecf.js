let article = document.querySelectorAll("article");


for(let i = 0; i < article.length; i++){

    article[i].addEventListener("mouseover", function(){
  this.style.color = "#212529";
  this.style.backgroundColor = "rgba(128, 128, 128, 0.419)";
}); 
    article[i].addEventListener("mouseout", function(){
  this.style.color = "white";
  this.style.backgroundColor = "#212529";
});
  
}


