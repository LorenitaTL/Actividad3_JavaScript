function curp(){
//alert("prueba");
var curp = null;
  var nombre = document.getElementById('c_nombre').value;
  var pap = document.getElementById('pap').value;
  var sap = document.getElementById('sap').value;
  var fecha = document.getElementById('f_nac').value;
  var estado = document.getElementById('estados').value;
  var sexo;

  if(document.getElementById('sex').value=='Femenino'){
    sexo='M'
  }else if (document.getElementById('sex').value=='Masculino') {
    sexo='H'
  }

//Obtener primer vocal de ap_paterno
  var i=1;
  var vocal=null;
  while (i<pap.length &&vocal==null) {
    if ((pap.charAt(i)=='A')||
        (pap.charAt(i)=='E')||
        (pap.charAt(i)=='I')||
        (pap.charAt(i)=='O')||
        (pap.charAt(i)=='U')){
          vocal=pap.charAt(i);
    }
    i++;
  }

  //Obtener datos de la fecha de nacimiento
  var anio=fecha.substring(0,4);
  var valor =/-/g,
  nuevoValor="",
  fn = fecha.replace(valor,nuevoValor);
  var fnac = fn.substring(2,8);


  //obtener consonante pap
  var j=1;
  var consonante=null;
  while (j<pap.length &&consonante==null) {
    if ((pap.charAt(j)=='B')||
        (pap.charAt(j)=='C')||
        (pap.charAt(j)=='D')||
        (pap.charAt(j)=='F')||
        (pap.charAt(j)=='G')||
        (pap.charAt(j)=='H')||
        (pap.charAt(j)=='J')||
        (pap.charAt(j)=='K')||
        (pap.charAt(j)=='L')||
        (pap.charAt(j)=='M')||
        (pap.charAt(j)=='N')||
        (pap.charAt(j)=='P')||
        (pap.charAt(j)=='Q')||
        (pap.charAt(j)=='R')||
        (pap.charAt(j)=='S')||
        (pap.charAt(j)=='T')||
        (pap.charAt(j)=='V')||
        (pap.charAt(j)=='X')||
        (pap.charAt(j)=='Y')||
        (pap.charAt(j)=='Z')){
          consonante=pap.charAt(j);
    }
    j++;
  }

  //obtener consonante sap
  var j=1;
  var consonante_sap=null;
  while (j<sap.length &&consonante_sap==null) {
    if ((sap.charAt(j)=='B')||
        (sap.charAt(j)=='C')||
        (sap.charAt(j)=='D')||
        (sap.charAt(j)=='F')||
        (sap.charAt(j)=='G')||
        (sap.charAt(j)=='H')||
        (sap.charAt(j)=='J')||
        (sap.charAt(j)=='K')||
        (sap.charAt(j)=='L')||
        (sap.charAt(j)=='M')||
        (sap.charAt(j)=='N')||
        (sap.charAt(j)=='P')||
        (sap.charAt(j)=='Q')||
        (sap.charAt(j)=='R')||
        (sap.charAt(j)=='S')||
        (sap.charAt(j)=='T')||
        (sap.charAt(j)=='V')||
        (sap.charAt(j)=='X')||
        (sap.charAt(j)=='Y')||
        (sap.charAt(j)=='Z')){
          consonante_sap=sap.charAt(j);
        //  alert(consonante_sap)
    }
    j++;
  }
  //obtener consonante nombre
  var j=1;
  var consonante_nom=null;
  while (j<nombre.length &&consonante_nom==null) {
    if ((nombre.charAt(j)=='B')||
        (nombre.charAt(j)=='C')||
        (nombre.charAt(j)=='D')||
        (nombre.charAt(j)=='F')||
        (nombre.charAt(j)=='G')||
        (nombre.charAt(j)=='H')||
        (nombre.charAt(j)=='J')||
        (nombre.charAt(j)=='K')||
        (nombre.charAt(j)=='L')||
        (nombre.charAt(j)=='M')||
        (nombre.charAt(j)=='N')||
        (nombre.charAt(j)=='P')||
        (nombre.charAt(j)=='Q')||
        (nombre.charAt(j)=='R')||
        (nombre.charAt(j)=='S')||
        (nombre.charAt(j)=='T')||
        (nombre.charAt(j)=='V')||
        (nombre.charAt(j)=='X')||
        (nombre.charAt(j)=='Y')||
        (nombre.charAt(j)=='Z')){
          consonante_nom=nombre.charAt(j);
        }
    j++;
  }


var letra;
  if (anio<=1999) {
    letra = Math.floor((Math.random() * 10));

  }else if (anio>1999) {
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letra = abc.charAt(Math.floor((Math.random() *26 )));

  }

  var digito=Math.floor((Math.random() * 10));
  alert("CURP: "+pap.charAt(0)+vocal+sap.charAt(0)+nombre.charAt(0)+fnac+sexo+estado+consonante+consonante_sap+consonante_nom+letra+digito)
}

function activar(){
  alert('prueba')
  document.getElementById('Bin').checked= true;
  document.getElementById('Oct').checked= true;
  document.getElementById('Hexa').checked= true;

}

function conversiones() {
  var decimal = document.getElementById('decimal').value;
  var resul_binario = document.getElementById('res_binario');
  var resul_octal = document.getElementById('res_octal');
  var resul_hexa = document.getElementById('res_hexa');

  var binario = parseInt(decimal).toString(2);
  var octal = parseInt(decimal).toString(8);
  var hexa = parseInt(decimal).toString(16);

  if(document.getElementById('Bin').checked==true){
    document.getElementById('res_binario').value= binario

  }
  if(document.getElementById('Oct').checked==true){
    document.getElementById('res_octal').value= octal
  }
  if(document.getElementById('Hexa').checked==true){
    document.getElementById('res_hexa').value= hexa
  }
}

function numero_letras(){
  alert('prueba')
  var cadena = document.getElementById('caja_cadena').value;
  alert(cadena)
  var vocal =0;
  var consonante =0;
  for (var i = 0; i < cadena.length; i++) {
    if ((cadena[i]=='A')||
        (cadena[i]=='E')||
        (cadena[i]=='I')||
        (cadena[i]=='O')||
        (cadena[i]=='U')||
        (cadena[i]=='a')||
        (cadena[i]=='e')||
        (cadena[i]=='i')||
        (cadena[i]=='o')||
        (cadena[i]=='u')) {
          vocal ++;
    }
  }
  for (var i = 0; i < cadena.length; i++) {
    if ((cadena[i]=='B')|| (cadena[i]=='C')||(cadena[i]=='D')||(cadena[i]=='F')||(cadena[i]=='G')||(cadena[i]=='H')||
        (cadena[i]=='J')||(cadena[i]=='K')||(cadena[i]=='L')||(cadena[i]=='M')||(cadena[i]=='N')||(cadena[i]=='P')||
        (cadena[i]=='Q')||(cadena[i]=='R')||(cadena[i]=='S')||(cadena[i]=='T')||(cadena[i]=='V')||(cadena[i]=='W')||
        (cadena[i]=='X')||(cadena[i]=='Y')||(cadena[i]=='Z')||
        (cadena[i]=='b')|| (cadena[i]=='c')||(cadena[i]=='d')||(cadena[i]=='f')||(cadena[i]=='g')||(cadena[i]=='h')||
        (cadena[i]=='j')||(cadena[i]=='k')||(cadena[i]=='l')||(cadena[i]=='m')||(cadena[i]=='n')||(cadena[i]=='p')||
        (cadena[i]=='q')||(cadena[i]=='r')||(cadena[i]=='s')||(cadena[i]=='t')||(cadena[i]=='v')||(cadena[i]=='w')||
        (cadena[i]=='x')||(cadena[i]=='y')||(cadena[i]=='z')) {
          consonante ++;
    }
  }
  document.getElementById('num_vocales').value= vocal
  document.getElementById('num_consonantes').value= consonante

}

function contar_letras(){
  var letra = document.getElementById('letra').value;
  var cadena = document.getElementById('caja_cadena').value;
  var c=0;
  alert(letra)
  if(letra.length>1){
    alert('Ingrese solo una letra')
  }else{for (var i = 0; i < cadena.length; i++) {
    if (cadena[i]==letra) {
      c++;
    }
  }
  alert('Veces que aparece la letra:'+c)}


}

/*function consonantes( var cadena){
  var i=1;
  var consonante=null;
  while (i<pap.length &&consonante==null) {
    if ((pap.charAt(i)=='b')||
        (pap.charAt(i)=='c')||
        (pap.charAt(i)=='d')||
        (pap.charAt(i)=='f')||
        (pap.charAt(i)=='g')||
        (pap.charAt(i)=='h')||
        (pap.charAt(i)=='j')||
        (pap.charAt(i)=='k')||
        (pap.charAt(i)=='l')||
        (pap.charAt(i)=='m')||
        (pap.charAt(i)=='n')||
        (pap.charAt(i)=='p')||
        (pap.charAt(i)=='q')||
        (pap.charAt(i)=='r')||
        (pap.charAt(i)=='s')||
        (pap.charAt(i)=='t')||
        (pap.charAt(i)=='v')||
        (pap.charAt(i)=='x')||
        (pap.charAt(i)=='y')||
        (pap.charAt(i)=='z')||
        ){
          consonante=pap.charAt(i);
          alert(consonante)
    }
    i++;
  }

return consonante;

}*/
