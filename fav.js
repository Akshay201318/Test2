/*fetching all the favourite images from the localstorage*/
var array=JSON.parse(localStorage['favimges']);


/* remove function for removing the images */
const remove=function(){
    var string=this.id.split(" ")
    imgId="favimg"+string[1]
    document.getElementById(imgId).remove()
    document.getElementById(this.id).remove()
    array.splice(string[1],1)
    localStorage.setItem("favimges",JSON.stringify(array))
    alert("Successfully! removed from favourites");
}

/*adding all the images to the favourite page*/
for(var i=0;i<array.length;i++)
{
    if(array[i]==null)
    {

    }
    else
    {
    var divElem=document.createElement("div");
    divElem.setAttribute("class","d-flex flex-column")
    var ele=document.createElement("img");
    ele.src=array[i];
    ele.id="favimg"+i
    var btnEle=document.createElement("button")
    btnEle.setAttribute('class','m-1 btn btn-dark btn-lg')
    btnEle.innerHTML="Remove"
    btnEle.id="btn "+i
    btnEle.onclick=remove
    var main=document.getElementById("imgs");
    divElem.append(ele)
    divElem.append(btnEle)
    main.append(divElem)
    }
}

	

