const list=document.querySelector('.list')
const center=document.querySelector('.center')
const btn=document.getElementById('btn')
const write=document.getElementById('write')
const text=document.getElementById('text')
const img=document.getElementById('img')
$(document).ready(function(){

	$("#btn").click(function(obj){
		// $('.list').hide()
		list.classList.toggle('color')
		if($(this).text()=="click me"){
			//obj.target.innerHTML="mene bas"	
			$(this).html('mene bas')
			$(this).css("color","lime")
		}else{
			//obj.target.innerHTML="click me"
			$(this).html("click me")
			$(this).css("color","inherit")
		}
//set data
$(img).attr('alt',"severde problem var")	
console.log($(img).attr('src'),  $(img).attr('alt'))
// get data
console.log($(center).data('author-name'),$(center).data('year'))
//ajax load
// $(img).load('index.html img',function(){
// 	console.log('sekil point Out')
// })
// jquery html secilmis olan obyektin textini deyiisir .html()
// $(this) hemin elementi secmek ucun istifade olunur




	})

	$(write).click(function(event){

		$.getJSON('result.json',function(jd){
			console.log(jd);
		 	$(text).html('<p>Name:'	+ jd.name+ '</p>')
		 	$(text).append('<p>Age:'	+ jd.age+ '</p>')
		 	$(text).append('<p>Sex:'	+ jd.sex+ '</p>')
		})
	
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




