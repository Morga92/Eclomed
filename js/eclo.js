$(document).ready(function()
{
$('input[type="number"]').val("0");
$('input[type="text"]').val("0");	

$("#h1").focus();
$("#h1").select();
//$("#h1").val("");

function myRound(num, dec) {
  var exp = Math.pow(10, dec || 2); // 2 decimales por defecto
  return parseInt(num * exp, 10) / exp;
}
$("#h1").change(function() {
 $("#h2").focus();
 $("#h2").select();
 //$("#h2").val("");
});
$("#h2").change(function() {
 $("#h3").focus();
 $("#h3").select();
 //$("#h3").val("");
});
$("#h3").change(function() {
 $("#h4").focus();
 $("#h4").select();
 //$("#h4").val("");
});
$("#h4").change(function() {
 $("#h5").focus();
 $("#h5").select();
 //$("#h5").val("");
});
$("#h5").change(function() {
 $("#h6").focus();
 $("#h6").select();
 //$("#h6").val("");
});
$("#h6").change(function() {
 $("#l1").focus();
 $("#l1").select();
 //$("#l1").val("");
});
$("#l1").change(function() {
 $("#l2").focus();
 $("#l2").select();
 //$("#l2").val("");
});
$("#l2").change(function() {
 $("#l3").focus();
 $("#l3").select();
 //$("#l3").val("");
});
$("#l3").change(function() {
 $("#l4").focus();
 $("#l4").select();
 //$("#l4").val("");
});
$("#l4").change(function() {
 $("#l5").focus();
 $("#l5").select();
 //$("#l5").val("");
});
$("#l5").change(function() {
 $("#l6").focus();
 $("#l6").select();
 //$("#l6").val("");
});
$("#l6").change(function() {
 $("#hm1").focus();
 $("#hm1").select();
 //$("#hm1").val("");
});
$("#hm1").change(function() {
 $("#hm2").focus();
 $("#hm2").select();
 //$("#hm2").val("");
});
$("#hm2").change(function() {
 $("#hm3").focus();
 $("#hm3").select();
 //$("#hm3").val("");
});
$("#hm3").change(function() {
 $("#hm4").focus();
 $("#hm4").select();
 //$("#hm4").val("");
});
$("#hm4").change(function() {
 $("#hm5").focus();
 $("#hm5").select();
 //$("#hm5").val("");
});
$("#hm5").change(function() {
 $("#hm6").focus();
 $("#hm6").select();
 //$("#hm6").val("");
});

$("input[type='number']").change(function(){

var h1 = $("#h1").val();
var l1 =  $("#l1").val();
var hm1 = $("#hm1").val();

var t1 = parseInt(h1) + parseInt(l1);
$("#t1").val(t1);

var h2 = $("#h2").val();
var l2 =  $("#l2").val();
var hm2 = $("#hm2").val();

var t2 = parseInt(h2) + parseInt(l2);
$("#t2").val(t2);

var h3 = $("#h3").val();
var l3 =  $("#l3").val();
var hm3 = $("#hm3").val();

var t3 = parseInt(h3) + parseInt(l3);
$("#t3").val(t3);

var h4 = $("#h4").val();
var l4 =  $("#l4").val();
var hm4 = $("#hm4").val();

var t4 = parseInt(h4) + parseInt(l4);
$("#t4").val(t4);

var h5 = $("#h5").val();
var l5 =  $("#l5").val();
var hm5 = $("#hm5").val();

var t5 = parseInt(h5) + parseInt(l5);
$("#t5").val(t5);

var h6 = $("#h6").val();
var l6 =  $("#l6").val();
var hm6 = $("#hm6").val();

var t6 = parseInt(h6) + parseInt(l6);
$("#t6").val(t6);

var xh = parseInt(h1)+parseInt(h2)+parseInt(h3)+parseInt(h4)+parseInt(h5)+parseInt(h6);
$("#xh").val(xh);

var xl = parseInt(l1)+parseInt(l2)+parseInt(l3)+parseInt(l4)+parseInt(l5)+parseInt(l6);
$("#xl").val(xl);

var xt = t1+t2+t3+t4+t5+t6;
$("#xt").val(xt);

var xhm = parseInt(hm1)+parseInt(hm2)+parseInt(hm3)+parseInt(hm4)+parseInt(hm5)+parseInt(hm6);
$("#xhm").val(xhm);
});

$("#calcular").click(function() {

var xl = parseInt($("#xl").val());
var xt = parseInt($("#xt").val());
var xhm = parseInt($("#xhm").val());
var ems = (xl / xt) * 100;
var phm = (xhm / (xt + xhm)) * 100;
if (isNaN(ems) || isNaN(phm)) {
	alert("Aun no se ha completado el llenado");
} 
else {
	$("#ems").val(myRound(ems)+"%");
	$("#phm").val(myRound(phm)+"%");
}
});

$("#resetear").click(function() {
	alert(":)");
$('input[type="number"]').val("0");
$('input[type="text"]').val("0");
$("#ems").val("");
$("#phm").val("");
$("#h1").focus();
$("#h1").select();
});

});