function mostrar()
{
var num= prompt("ingrese un numero")
var primo= true;

for (var i=2;i<num; i++)
{
    if (num%i==0)
    {
       primo=false
    }
   
}

if (primo==false)
{
    alert("no es primo");
}
else{
    alert("es primo")
}
}