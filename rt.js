
function tipcalculator(){
	var bill= document.getElementById("billinpt").value;
	var service= document.getElementById("tipamount").value;
	var people= document.getElementById("pplinpt").value;
	//service==0 m3nah makhyrna walo = service yet7at fih 0
	if (bill=="" || service==0) {
		alert("Please fill the details");
	}
	if (people==0 || people<=1) {
		people=1;
		document.getElementById("each").style.display = 'none';
	}
	else{
		document.getElementById("each").style.display = 'inline';
	}
	// service mashi /100 psq deja dernaha 3tinalou value f html/100 ,30%= 0.3 tsma direct billx0.3 else billx30/100
	var total= (bill * service)/ people ;

	//console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
    // expected output: 6 6 5	
    //total=math.round(total); ,madirhash hna psq mymshish lprograme

	//next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    document.getElementById("tiprslt").style.display = 'inline';
    //result mashi tiprslt bash nbdlo 0.00 brk mashi kolsh
     document.getElementById("result").innerHTML = total;

}
// on page load hide tip resulat everything 
 document.getElementById("tiprslt").style.display = 'none';
 // tiprslt id t3ni result id wich is span w sup psq id= 1element,, nzidou each cuz its not involved in tiprslt
 document.getElementById("each").style.display = 'none';
/*t9dr

 document.getElementById("clcbtn").onclick = function(){
 	tipcalculator();
 }; 

 */
 