function curp(){
  var nombre = document.funciones_js.caja_nombre.value;
  var pap = document.funciones_js.caja_p_apellido.value;
  var sap = document.funciones_js.caja_s_apellido.value;
  var fecha = document.funciones_js.f_nacimiento.value;
  var sexo;
  var estado = document.funciones_js.estado.value;

  if (document.funciones_js.sexo.value =="Femenino") {
    sexo="M";
    alert('Mujer');
  }
  if (document.funciones_js.sexo.value=="Masculino") {
    sexo="H";
    alert('Hombre');
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
function convertir(){
  var decimal = document.conversiones.caja_decimal.value;
  var binario = parseInt(decimal).toString(2);
  var octal = parseInt(decimal).toString(8);
  var hexa = parseInt(decimal).toString(16);
  alert('Decimal:'+decimal+'\n'  +'Binario: '+binario+'\n'+'Octal: '+octal+'\n'+'Hexadecimal: '+hexa+'\n');
}

function analizar(){
  var cadena = document.cadenas.caja_cadena.value;
  var letra = document.cadenas.letra.value;
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
  var c=0;
  alert(letra)
  if(letra.length>1){
    alert('Ingrese solo una letra')
  }else{for (var i = 0; i < cadena.length; i++) {
    if (cadena[i]==letra) {
      c++;
    }
  }
  alert("Vocales: "+vocal+'\n'+ 'Consonantes: '+consonante+'\n'+'Veces que aparece la letra: '+c);
}


}
