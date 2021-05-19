document.body.id += "frame";

var frame = document.getElementById("frame");
var header = document.createElement("header");
var section = document.createElement("section");
var figure = document.createElement("figure");
var footer = document.createElement("footer");

var h1 = document.createElement("h1");
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");

var img1 = document.createElement("img");

var text1 = document.createTextNode("Tämä on artikkelin otsikko");
var text2 = document.createTextNode("Esnimmäinen kappale! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto consequatur laudantium vero vel hic delectus? Culpa nam aspernatur maiores eos voluptates consectetur temporibus. Quaerat, incidunt repudiandae. Eum, fuga maiores.");
var text3 = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestiae fuga dolor exercitationem. Libero, reiciendis iure pariatur odit quod nemo illum officia tempore. Assumenda commodi perspiciatis, ex eligendi repellendus ipsum!Nulla molestiae fuga dolor exercitationem. Libero, reiciendis iure pariatur odit quod nemo illum officia tempore. Assumenda commodi perspiciatis, ex eligendi repellendus ipsum!");
var text4 = document.createTextNode("® 2020 Mohamed Adel Ahmed Mahmoud");

img1.setAttribute('src','/image/kuva.gif');

header.className = "ylatunniste";
section.id = "rinnakkain";
figure.id = "kuvanpaikka";
p1.className = "p1";
p2.className = "p2";
p3.className = "p3";

h1.appendChild(text1);
p1.appendChild(text2);
p2.appendChild(text3);
p3.appendChild(text4);

header.appendChild(h1);
header.appendChild(p1);

section.appendChild(p2);
section.appendChild(figure);
footer.appendChild(p3);

frame.appendChild(header);
frame.appendChild(section);
figure.appendChild(img1);
frame.appendChild(footer);