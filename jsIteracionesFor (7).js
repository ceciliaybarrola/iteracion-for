function mostrar()
{
var num= prompt("ingrese un numero")
var cont=0

for (var i=0;i<=num;i++)
{
    if ((num%i)==0)
    {
        cont++
        alert("es divisor: "+i)
    }
}
alert("hay "+cont+" numeros divisores");

}//FIN DE LA FUNCIÓN