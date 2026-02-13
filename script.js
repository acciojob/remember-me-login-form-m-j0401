
let input_one=document.querySelector("#username");
let btn=document.querySelector("#submit");
let check=document.querySelector("#checkbox");
let input_two=document.querySelector("#password");
let exist_btn=document.querySelector("#existing");
exist_btn.style.display="none";

btn.addEventListener("click",(e)=>{

	e.preventDefault();
	alert(`Logged in as ${input_one.value}`);
// 	let obj={
// 	username:input_one.value,
// 	password:input_two.value
// }
// let json_obj=JSON.stringify(obj);
if(check.checked)
{
	//alert(`Logged in as ${input_one.value}`);
	localStorage.setItem(input_two.value,input_one.value);
	// exist_btocn.id="existing";
	// exist_btn.innerText="Login as existing user";
	exist_btn.style.display="block";
}
	else{
		localStorage.removeItem("data");
		//alert(`credentials are not stored`);
	}
})
exist_btn.addEventListener("click",display)
function display()
{
	let d=localStorage.getItem(input_two.value);
	alert(`Logged in as ${d}`);
}