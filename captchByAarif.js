
/**
 * This captcha code is written by Mohd Aarif at Monday 06 March 2017
 * 
 * Purpose is to validate captcha in a form before submit
 */

myFunction();
var val=[];        
val.push("VQ7W3");     /** push value in this array  */
val.push("A1234");     /** To maintain image order here   */
val.push("A32BD");   /** if first image 0_capt.jpeg contains value VQ7W3 so pusg=h this value into zero(0) index of array   */
val.push("LD673");
val.push("PQ78V");
val.push("MX81W");
var x;
/**This below method generate random number from 0-5
 * name of image starts with that number will set on 
 * captcha location 
 */
function myFunction() {
    x = Math.floor(Math.random() * 6);
	$("#imgCaptchaPlace").html("<img id='abc' src='captcha_images/"+x+"_cpt'/>")  ;
}

/**
 * This below method will call on change of input fields where use enter
 * captcha code value
 */
function chaeckCpatch(id)
{
		if($("#"+id).val()==val[x])
		{
				alert("match");
		}
		else
		{
			alert("No match");
		}
	
}