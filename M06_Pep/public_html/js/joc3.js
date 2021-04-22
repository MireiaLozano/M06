///Comencem amb la classe pare
class Juego {
    
    constructor(){
        var interval;
        
    }
    text_intents(numerotorns, numero){
        var tamanylletra = document.createElement("p");
        var text_intents = document.createTextNode("Has posat el número " + numero + " aquest no és, torna a intentar-ho, portes " + numerotorns + " torns");
        tamanylletra.appendChild(text_intents);
        $("#missatge_intents").append(tamanylletra);
        $("#missatge_intents").show("block");
    }
    temps_acabat(){
        $("#intronumero").attr("disabled", true);
        $("#verifica").attr("disabled", true);
        $("#gran").attr("disabled", true);
        $("#petit").attr("disabled", true);
        $("#encertat").attr("disabled", true);
        //Coses endevina maquina
        $("#missatge").hide();
        $("#dificultat_maquina").hide();
        $("#intronumero").hide();
        $("#verifica").hide();
        //Coses endevina meu
        $("#dificultat_meu").hide();
        $("#missatge1").hide();
        $("#pista_10").attr("disabled", true);
        $("#pista_50").attr("disabled", true);
        $("#pista_100").attr("disabled", true);
        clearTimeout();
    } 
}
    
    const joc = new Juego();

/////////FEM UNA CLASE PELS EXTRES, PER QUAN VOLGUEM REFRESCAR LES PAGINES///////

class Utils{
    constructor(){
        this.segons = 0;
        this.minuts = 0;
        this.hores = 0;
        this.temps_restant = 5000;
        this.interval;
    }
    refrescar_joc(){
        location.reload();
    }
    
   iniciar_crono(){
        $("#crono").text("0"+this.hores + ":" + "0"+this.minuts + ":" + "0"+ this.segons);
            this.segons += 1;
 	      if(this.segons >= 10){
        $("#crono").text("0"+ this.hores + ":" + "0"+ this.minuts + ":" + this.segons); 
           }else if(this.minuts >= 10){
        $("#crono").text("0" + this.hores + ":" + this.minuts + ":" + "0"+this.segons);
           }else if(this.hores >= 10){
        $("#crono").text(this.hores + ":" + this.minuts + ":" + this.segons);
          }
       
	if( this.segons == 60){
    	 this.segons = 0;
        this.minuts += 1;
    }
    if(this.minuts == 60){
    	this.minuts = 0;
        this.hores += 1;
    }  
}
    compte_enrere(){
        this.temps_restant -= 1;
        if(this.temps_restant <= 0){
            $("#temps_resta").text("Temps!");
            clearInterval();
        }else{
        $("#temps_resta").text("Et queden " +this.temps_restant+ " segons");
    }
    }
     pista10() {
        var arxiu;
        if (window.XMLHttpRequest) {
        arxiu = new XMLHttpRequest();
            } 
        arxiu.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("pista_10").innerHTML = this.responseText;
        }
    };
    arxiu.open('GET', 'pista10.html', true);
    arxiu.send();
}
     pista50() {
        var arxiu;
        if (window.XMLHttpRequest) {
        arxiu = new XMLHttpRequest();
            } 
        arxiu.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("pista_50").innerHTML = this.responseText;
        }
    };
    arxiu.open('GET', 'pista50.html', true);
    arxiu.send();
}
     pista100() {
        var arxiu;
        if (window.XMLHttpRequest) {
        arxiu = new XMLHttpRequest();
            } 
        arxiu.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("pista_100").innerHTML = this.responseText;
        }
    };
    arxiu.open('GET', 'pista100.html', true);
    arxiu.send();
 }  
}
    const utils = new Utils();
    setInterval("utils.iniciar_crono()", 1000)

///////////////////////////////////LA MAQUINA ENDEVINA//////////

class EndevinaMeu extends Juego{
    constructor(){
        super();
            var compte_enrere_meu=0;
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
   
    dificultatjoc_meu() {
        if (document.getElementById("facil1").checked) {
            $.get("demo_10.asp", function(data){
                alert("Info: " + data);
            });
            this.numeromaxim=10;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=10;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 10000);
            $("#pista_10").show();
            $("#refrescar").show();
            $("#missatge_inici_meu").hide();
            $("#dificultat_meu").load("dif_text_facil.txt");
        } else if (document.getElementById("mitja1").checked) {
            $.get("demo_50.asp", function(data){
                alert("Info: " + data);
            });
            this.numeromaxim=50;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=15;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 15000);
            $("#pista_50").show("block");
            $("#refrescar").show("inline");
            $("#missatge_inici_meu").hide();
            $("#dificultat_meu").load("dif_text_mitj.txt");
        } else if (document.getElementById("dificil1").checked) {
            $.get("demo_100.asp", function(data){
                alert("Info: " + data);
            });
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=20;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 20000);
            $("#pista_100").show("block");
            $("#refrescar").show("inline");
            $("#missatge_inici_meu").hide();
            $("#dificultat_meu").load("dif_text_dificil.txt");
    }
}

          
   endevinarnumeromeu(){
    $("#intronumero").hide();
    $("#verifica").hide();
    $("#missatge").hide();
    $("#gifaplaudiment").hide();
    $("#endevinarmaquina").hide(); 
       
    $("#gran").show();
    $("#petit").show();
    $("#encertat").show();
    $("#dificultat_meu").show();
    $("#missatge1").show();
    $("#missatgeencertat").show();
    $("#missatge_inici_meu").load("missatge_inici_meu.txt");
   
     this.mostra=parseInt(this.numero);
    
   
    if (this.numeromaxim == this.numerominim && this.numerominim == this.numeromaxim) {
       $("#missatge1").text("Ep! No em maregis, pensa un número va");
       $("#img_gat").show("slow");
    } else{
       $("#missatge1").text("El número que estàs pensant és el " +this.mostra+ " ?");
        numeroMeu.text_intents(this.numerotorns, this.mostra);
        this.numerotorns++;
    }
       /* Això és per si fan trampes i ens volen marejar, però si ho afegim el code deixa de funcionar o no va el missatge d'error
       
       else if (this.numeromaxim == this.numerominim && this.numerominim == this.numeromaxim) {
            document.getElementById("missatge1").innerHTML = "Ep! No em maregis, pensa un número va";
        }*/
    
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
    $("#missatge_inici_meu").hide();
    $("#dificultat_meu").hide();
    $("#pista_10").hide();
    $("#pista_10").hide();
    $("#pista_10").hide();
    $("#missatgeencertat").text("He encertat!! Ha sigut en " + this.numerotorns + " torns");
    $("#gif_gat_content").show("slow");
    clearInterval(utils.interval);
    $("#temps_resta").text("Has encertat! S'acabat la partida");
    joc.temps_acabat();
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
            this.numeroinput;
            var mostra = 0;
            this.mostra = mostra;
            var numerotorns = 0;
            this.numerotorns = numerotorns;
    }
   
    dificultatjoc_maquina() {
        if (document.getElementById("facil2").checked) {
            $.get("demo_10.asp", function(data){
                alert("Info: " + data);
            });
            this.numeromaxim=10;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=10;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 10000);
            $("#pista_10").show();
            $("#refrescar").show();
            $("#missatge_inici_maq").hide();
            $("#dificultat_maquina").load("dif_text_facil.txt");
        } else if (document.getElementById("mitja2").checked) {
            $.get("demo_50.asp", function(data){
                alert("Info: " + data);
            });
            this.numeromaxim=50;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=15;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 15000);
            $("#pista_50").show();
            $("#refrescar").show();
            $("#missatge_inici_maq").hide();
            $("#dificultat_maquina").load("dif_text_mitj.txt");
        } else if (document.getElementById("dificil2").checked) {
            $.get("demo_100.asp", function(data){
                alert("Info: " + data);
            });
            this.numeromaxim=100;
            this.numero = Math.floor((Math.random()*this.numeromaxim)+1);
            utils.temps_restant=20;
            utils.interval = setInterval('utils.compte_enrere()', 1000);
            setTimeout(this.temps_acabat, 20000);
            $("#pista_100").show();
            $("#refrescar").show();
            $("#missatge_inici_maq").hide();
            $("#dificultat_maquina").load("dif_text_dificil.txt");
    }
}

    endevinarnumeromaquina(){
        $("#gran").hide();
        $("#petit").hide();
        $("#encertat").hide();
        $("#missatge1").hide();
        $("#missatgeencertat").hide();
        $("#endevinarnummeu").hide();
        
        $("#intronumero").show("inline");
        $("#verifica").show("inline");
        $("#dificultat_maquina").show("block");
        $("#missatge").show("block");
        $("#missatge_encertat_maquina").show("block");
        $("#gifaplaudiment").hide();
        $("#missatge_inici_maq").load("missatge_inici_maq.txt");
    
     this.numeroinput=document.getElementById("intronumero").value;
   
     if(this.numeroinput<this.numero){
        $("#missatge").text("He pensat un número més gran que " +this.numeroinput);
        $("#imatge_tigre").hide();
        numeroMaquina.text_intents(this.numerotorns, this.numeroinput);
        this.numerotorns++;
    } else if(this.numeroinput>this.numero){
        $("#missatge").text("He pensat un número més petit que " +this.numeroinput); 
        $("#imatge_tigre").hide();
        numeroMaquina.text_intents(this.numerotorns, this.numeroinput);
        this.numerotorns++;
    }  else if (isNaN(this.numeroinput)) {
        $("#missatge").text("No es poden introduir lletres ni caràcter especials, només numeros");
        $("#imatge_tigre").show("block");
    } else if (this.numeroinput > this.numeromaxim) {
            $("#missatge").text("Compte, has posat el límit màxim");
    } else if(this.numeroinput<=0){
            $("#missatge").text("Compte! Aquest número és negatiu");
    } else if(this.numeroinput==this.numero){
        //Per netejar l'interval
        clearInterval(utils.interval);
        $("#temps_resta").text("Has encertat! S'acabat la partida");
        //Perque els botons es desconnectin
        joc.temps_acabat();
        $("#missatge_encertat_maquina").text("Wow, l'has encertat, quin crack!! Només t'ha portat " +this.numerotorns+ " torns");
        $("#missatge_inici_maq").hide();
        $("#pista_10").hide();
        $("#pista_10").hide();
        $("#pista_10").hide();
        $("#dificultat_maquina").hide();
        $("#missatge").hide();
        $("#dificultat_maquina").hide();
        $("#intronumero").hide();
        $("#verifica").hide();
        $("#dificultat_maquina").hide();
        $("#missatge_inici_maq").hide();
        $("#gifaplaudiment").show("block");
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