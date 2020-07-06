async function fetchImage()
{
        
        var Name=document.querySelector("#Names").value;
        const url='https://www.superheroapi.com/api.php/1927701114032828/search/'+Name;
        /*fetching the Api and collecting the response in res*/
        const res= await fetch(url);
        /*getting json from the response in resp*/
        const resp=await res.json();
        /*extracting all the information needed for about page from json*/
        var img=resp.results[0].image.url;
        var name=resp.results[0].name;
        var power=resp.results[0].powerstats.power;
        var speed=resp.results[0].powerstats.speed;
        var durability=resp.results[0].powerstats.durability;
        var intelligence=resp.results[0].powerstats.intelligence;
        var strength=resp.results[0].powerstats.strength;
        var combat=resp.results[0].powerstats.combat;
        var aliases=resp.results[0].biography.aliases;
        var alignment=resp.results[0].biography.alignment;
        var alteregos=resp.results[0].biography[4];
        var firstappearance=resp.results[0].biography.firstappearance;
        var fullname=resp.results[0].biography.full-name;
        var placeOfBirth=resp.results[0].biography.placeofbirth;
        var publisher=resp.results[0].biography.publisher;

        /*Adiing all information of about page to localstorage of browser*/

        localStorage.setItem('imageurl',img);
        localStorage.setItem('name',name);
        localStorage.setItem('power',power);
        localStorage.setItem('speed',speed);
        localStorage.setItem('durability',durability);
        localStorage.setItem('intelligence',intelligence);
        localStorage.setItem('strength',strength);
        localStorage.setItem('combat',combat);
        localStorage.setItem('aliases',aliases);
        localStorage.setItem('alignment',alignment);
        localStorage.setItem('alteregos',alteregos);
        localStorage.setItem('firstappearance',firstappearance);
        localStorage.setItem('fullname',fullname);
        localStorage.setItem('placeOfBirth',placeOfBirth);
        localStorage.setItem('publisher',publisher);
        /*setting url for image after search*/
        var homeimg=document.getElementById("super");
        homeimg.src=img;
        
}

/*calling fetchImage function when search superhero btn is clicked*/
     $("#btn").click(fetchImage);


/*adding image to favourites*/
var favimages=new Array();
function addToFavourite()
{
        
        alert("Successfully! added to favourites")
        if(localStorage['favimges']==null)
        {      
                favimages.push(localStorage.getItem('imageurl'));
                console.log(favimages)
                localStorage.setItem("favimges",JSON.stringify(favimages));
        }
        else
        {
                var array=JSON.parse(localStorage['favimges']);
                array.push(localStorage.getItem('imageurl'));
                localStorage.setItem("favimges",JSON.stringify(array));
        }
}


/*calling addToFavourite function when add favourite btn is clicked*/
$("#btn1").click(addToFavourite);

/******about page********/
$('#img1').attr('src',localStorage.getItem('imageurl'));
/* Storing the information of the superhero in variables*/
var name=localStorage.getItem('name');
var power=localStorage.getItem('power');
var speed=localStorage.getItem('speed');
var durability=localStorage.getItem('durability');
var intelligence=localStorage.getItem('intelligence');
var strength=localStorage.getItem('strength');
var combat=localStorage.getItem('combat');
var aliases=localStorage.getItem('aliases');
var alignment=localStorage.getItem('alignment');
var alteregos=localStorage.getItem('alteregos');
var firstappearance=localStorage.getItem('firstappearance');
var fullname=localStorage.getItem('fullname');
var placeOfBirth=localStorage.getItem('placeOfBirth');
var publisher=localStorage.getItem('publisher');



/*asigning text to the about page*/

/*Superhero name*/
 var name1=document.querySelector(".name");
 name1.append(name);


 /*powerstats*/
 var power1=document.querySelector("#power");
 power1.append(power);
 var combat1=document.querySelector("#combat");
 combat1.append(combat);
 var durability1=document.querySelector("#durability");
 durability1.append(durability);
 var intelligence1=document.querySelector("#intelligence");
 intelligence1.append(intelligence);
var speed1=document.querySelector("#speed");
speed1.append(speed);
var strength1=document.querySelector("#strength");
strength1.append(strength);


/*biography*/

var fullname1=document.querySelector("#fullname");
fullname1.append(fullname);
var placeOfBirth1=document.querySelector("#placeOfBirth");
placeOfBirth1.append(placeOfBirth);
var firstappearance1=document.querySelector("#firstappearance");
firstappearance1.append(firstappearance);
var publisher1=document.querySelector("#publisher");
publisher1.append(publisher);
var aliases1=document.querySelector("#aliases");
aliases1.append(aliases);
var alteregos1=document.querySelector("#alteregos");
alteregos1.append(alteregos);
var alignment1=document.querySelector("#alignment");
alignment1.append(alignment);





