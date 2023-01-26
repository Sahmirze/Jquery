const list=document.querySelector('.list')
const btn=document.getElementById('btn')

$(document).ready(function(){

	$("#btn").click(function(obj){
		// $('.list').hide()
		list.classList.toggle('color')
		if($(this).text()=="click me"){
			obj.target.innerHTML="mene bas"	
		}else{
			obj.target.innerHTML="click me"
		}

		
console.log($(this).text())


	})

	// $("#btn").dblclick(function(){
	// 	$('.list').hide()
	// })

	// $("#btn").mouseenter(function(){
	// 	// $('.list').hide()
	// 	console.log("mouse come into")
	// })

	// $("#btn").mouseleave(function(){
	// 	// $('.list').hide()
	// 	console.log("get out")
	// })
	// $("#btn").mouseup(function(){
	// 	// $('.list').hide()
	// 	console.log("mouse up	")
	// })
})
// $(window).on('load',()=>{
// 	console.log('aa mende varam')
// })