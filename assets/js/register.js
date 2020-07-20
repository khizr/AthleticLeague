$("#programs").change(function() {
    if ($(this).val() == "Soccer") {
        $('#infoForm').show();
    } else if ($(this).val() == "Wellness") {
        $('#infoForm').show();
    } else if ($(this).val() == "Active") {
        $('#infoForm').show();
    } else {
        $('#infoForm').hide();			
    }
});
$("#programs").trigger("change");


// var fr = new FileReader();
// fr.onload = function(e) {
//     document.getElementById("termsText").innerText = e.target.result
//     console.log(e.target.result)
// };
// fr.readAsText("terms.txt");

// document.getElementById("termsText").innerText = "heyyyyyyyyyyyy"


var termsLink = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
var txtFile = new XMLHttpRequest();
var allText = "file not found";
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
        allText = txtFile.responseText;
        allText = allText.split("\n").join("<br>");
    }

    document.getElementById('termsText').innerHTML = allText;
}
txtFile.open("GET", termsLink, true);
txtFile.send(null);