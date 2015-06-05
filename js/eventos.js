var inicioApp = function()
{
	var Datos = function()
	{
		$("#sectionDatos").show("slow");
		$("#sectionPracticas").hide("slow");
		$("#artInicio").hide("slow");
	}
	var Practicas = function()
	{
		$("#sectionPracticas").show("slow");
		$("#sectionDatos").hide("slow");
		$("#artInicio").hide("slow");
	}
	var Inicio = function()
	{
		$("#sectionPracticas").hide("slow");
		$("#sectionDatos").hide("slow");
		$("#artInicio").show("slow");	
	}

	$("#btnDatos").on("click",Datos);
	$("#btnInicio").on("click",Inicio);
	$("#btnPracticas").on("click",Practicas);

	var id=$("#menuCelular").val();
		if(id=="btnDatos")
			Datos();
		else if(id=="btnPracticas")
			Practicas();
		else if(id=="btnInicio")
			Inicio();
}
$(document).on("ready",inicioApp);
