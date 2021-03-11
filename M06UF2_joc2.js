///Comencem amb la classe pare
class Juego {
    constructor(){
    }
}

///////////////////////////////////LA MAQUINA ENDEVINA//////////

class EndevinaMeu extends Juego{
    constructor(){
        super();
            var numerominim = 0;
            this.numerominim = numerominim;
            var numeromaxim = 100;
            this.numeromaxim = numeromaxim;
            var numero = Math.floor((Math.random()*100)+1);
            this.numero = numero;
            var mostra = 0;
            this.mostra = mostra;
            var numerotorns = 0;
            this.numerotorns = numerotorns;

    }
       
   endevinarnumeromeu(){
    document.getElementById("intronumero").style.display = "none";
    document.getElementById("verifica").style.display = "none";
    document.getElementById("missatge").style.display = "none";
    document.getElementById("gifaplaudiment").style.display = "none";
        
    document.getElementById("gran").style.display = "inline";
    document.getElementById("petit").style.display = "inline";
    document.getElementById("encertat").style.display = "block";
    document.getElementById("missatge1").style.display = "block";
    document.getElementById("missatgeencertat").style.display = "block";
    
     this.mostra=parseInt(this.numero);
    
   
    if (this.numeromaxim == this.numerominim && this.numerominim == this.numeromaxim) {
       document.getElementById("missatge1").innerHTML = "Ep! No em maregis, pensa un número va";
       document.getElementById("img_gat").style.display ="block";
    } else{
        document.getElementById("missatge1").innerHTML= "El número que estàs pensant és el " +this.mostra+ " ?";
        this.numerotorns++;
    }
    
}
    mesgran(){
    this.numerominim=this.numero;
    this.numero=this.numerominim+(this.numeromaxim-this.numerominim)/2;
    parseInt(this.numero);
    this.numerominim = parseInt(this.numerominim);
    this.numeromaxim = parseInt(this.numeromaxim);
    numeroMeu.endevinarnumeromeu();
}
    mespetit(){
    this.numeromaxim=this.numero;
    this.numero=this.numerominim+(this.numeromaxim-this.numerominim)/2;
    parseInt(this.numero);
    this.numeromaxim = parseInt(this.numeromaxim);
    this.numerominim = parseInt(this.numerominim);
    numeroMeu.endevinarnumeromeu();
}
    encertat() {
    document.getElementById("missatgeencertat").innerHTML = "He encertat!! Ha sigut en " + this.numerotorns + " torns";
    document.getElementById("gif_gat_content").style.display = "block";
  }
    
}
      const numeroMeu = new EndevinaMeu();
     

////////////////////////////////////ENDEVINEM NUMERO MAQUINA//////////////////////

class EndevinaMaquina extends Juego{
    constructor(){
        super();
            var numerominim = numerominim;
            this.numerominim = numerominim;
            var numeromaxim = numeromaxim;
            this.numeromaxim = numeromaxim;
            var numero = Math.floor((Math.random()*100)+1);
            this.numero = numero;
            var mostra = 0;
            this.mostra = mostra;
            var numerotorns = 0;
            this.numerotorns = numerotorns;
    }
    
    dificultatjoc_maquina() {
        if (document.getElementById("facil2").checked) {
            alert("El joc anirà del 0 al 10");
            this.numeromaxim=10;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
        } else if (document.getElementById("mitja2").checked) {
            alert("El joc anirà del 0 al 50");
            this.numeromaxim=50;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
        } else if (document.getElementById("dificil2").checked) {
            alert("El joc anirà del 0 al 100");
            this.numeromaxim=100;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
    }
}

    endevinarnumeromaquina(){
        document.getElementById("gran").style.display = "none";
        document.getElementById("petit").style.display = "none";
        document.getElementById("encertat").style.display = "none";
        document.getElementById("missatge1").style.display = "none";
        document.getElementById("missatgeencertat").style.display = "none";
    
        document.getElementById("intronumero").style.display = "inline";
        document.getElementById("verifica").style.display = "inline";
        document.getElementById("dificultat_maquina").style.display = "block";
        document.getElementById("missatge").style.display = "block";
        document.getElementById("gifaplaudiment").style.display = "none";
    
    var numeroinput=document.getElementById("intronumero").value;
   
     if(numeroinput<this.numero){
        document.getElementById("missatge").innerHTML="He pensat un número més gran que " +numeroinput;
        document.getElementById("imatge_tigre").style.display = "none";
        this.numerotorns++;
    } else if(numeroinput>this.numero){
        document.getElementById("missatge").innerHTML="He pensat un número més petit que " +numeroinput; 
        document.getElementById("imatge_tigre").style.display = "none";
        this.numerotorns++;
    }  else if (isNaN(numeroinput)) {
        document.getElementById("missatge").innerHTML = "No es poden introduir lletres ni caràcter especials, només numeros";
        document.getElementById("imatge_tigre").style.display = "block";
    } else if (numeroinput > this.numeromaxim) {
            document.getElementById("missatge").innerHTML = "Compte, has posat el límit màxim";
    } else if(numeroinput<=0){
            document.getElementById("missatge").innerHTML = "Compte! Aquest número és negatiu";
    } else if(numeroinput==this.numero){
        document.getElementById("missatge").innerHTML="Wow, l'has encertat, quin crack!! Només t'ha portat " +this.numerotorns+ " torns";
        document.getElementById("gifaplaudiment").style.display = "block";
    }
        
        /*Aquest és el code d'errors per si posen una lletra, un número negatiu o pasen el límit del màxim, 
         pero al posar-ho només m'agafa el de les lletres
         
         else if(numeroinput<=0){
            document.getElementById("missatge").innerHTML = "Compte! Aquest número és negatiu";
        } else if (isNaN(numeroinput)) {
            document.getElementById("missatge").innerHTML = "No es pot introduir lletres";
        } else if (numeroinput>this.numeromaxim) {
            document.getElementById("missatge").innerHTML = "Compte, has posat el límit màxim";
        }*/
 }
}
    const numeroMaquina = new EndevinaMaquina();
