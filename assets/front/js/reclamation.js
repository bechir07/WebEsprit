function envoyer()
{

	var id= idj.value;
	var mail= mailj.value;
	var tel= telj.value;
	var reclam= reclamj.value;
	if(id.length==0 || mail.length==0 || tel.length==0 || reclam.length==0)
	{
		alert("veuillez saisir vos cordonnés");
	}
	else
	{
		alert("rempli avec succés");
	}
}