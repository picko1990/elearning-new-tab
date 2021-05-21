
var links = document.getElementsByClassName("activityinstance");

for (var i=0; i < links.length; i++) {

    try {
        var open_l = document.createElement("a");
        open_l.setAttribute('target', "_blank");
        open_l.setAttribute('id', "open_l");
        open_l.innerHTML="open";

        link = links[i].firstChild.getAttribute('onclick');
        link = link.split("open('")[1].split("',")[0];
        console.log(link);
        open_l.setAttribute('href',link);
        links[i].appendChild(open_l);
    
    }
    catch(err) {
        console.log('error');
    }

}