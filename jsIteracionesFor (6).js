function mostrar()
{
var cPar=0;
var rep= prompt("ingrese un numero");
for (var i=0;i<=rep;i++)
{
    if ((i%2)==0)
    {
      
       alert ("es par: "+i);
       cPar++;
    }
    
}
alert ("Se encontraron "+cPar+" numeros pares");


}//FIN DE LA FUNCIÓN