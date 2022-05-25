var p=1;
var ans=0;
function call(l)
{
  if(l==1)
  ans++;
  if(p<=10)
  {
   
  

  

  var pre=document.getElementById(""+p);
  var next=document.getElementById(""+(++p));
  
pre.style.display="none";
next.style.display="block";

  }
}
function answer()
{

  pp=document.getElementById("display");
  pp.innerHTML=""+ans;
  return false;
}