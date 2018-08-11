import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-statistiken',
  templateUrl: 'statistiken.html'
})
export class StatistikenPage {
	temp:any;
	sum:any;

	Data =[{"ID":"1","Name":"Aloe vera","botanischerName":"Aloe vera","Benzol":"1","Formaldehyd":"65","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"2","Name":"Goldfruchtpalme","botanischerName":"Dypsis lutescens","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"3","Name":"Bambuspalme","botanischerName":"Chamaedorea seifrizii","Benzol":null,"Formaldehyd":"3.196","Trichlorethen":"688","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"4","Name":"Banane","botanischerName":"Musa Oriana","Benzol":null,"Formaldehyd":"488","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"10","Name":"Elephant ear philodendron","botanischerName":"Philodendron domesticum","Benzol":null,"Formaldehyd":"416","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"11","Name":"Barbera daisy","botanischerName":"Gerbera jamesonii","Benzol":"4.486","Formaldehyd":"0.01","Trichlorethen":"1.66","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"13","Name":"Boston fern","botanischerName":"Nephrolepis exaltata 'Bostoniensis'","Benzol":null,"Formaldehyd":"1.863","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"14","Name":"Chinesischer immergr\u00fcn","botanischerName":"Aglaonema modestum","Benzol":"604","Formaldehyd":"183","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"15","Name":"Cornstalk dracaena","botanischerName":"Dracaena fragrans 'Massangeana'","Benzol":"0.01","Formaldehyd":"938","Trichlorethen":"421","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"16","Name":"English ivy","botanischerName":"Hedera helix","Benzol":"579","Formaldehyd":"761","Trichlorethen":"298","Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"17","Name":"Dendrobium","botanischerName":"Dendrobium spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"18","Name":"Devil's ivy, Pothos plant ","botanischerName":"Epipremnum aureum","Benzol":"0.01","Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"20","Name":"Garten-Chrysantheme","botanischerName":"Chrysanthemum morifolium","Benzol":"3.205","Formaldehyd":"1.45","Trichlorethen":"0.01","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":null},{"ID":"21","Name":"Heartleaf philodendron","botanischerName":"Philodendron cordatum","Benzol":null,"Formaldehyd":"353","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"22","Name":"Dieffenbachien","botanischerName":"Dieffenbachia spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"24","Name":"Dwarf date palm ","botanischerName":"Phoenix roebelenii","Benzol":null,"Formaldehyd":"1.385","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"25","Name":"Janet Craig","botanischerName":"Dracaena deremensis \"Janet Craig\"","Benzol":"1.082","Formaldehyd":"1.699","Trichlorethen":"764","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"26","Name":"Red-edged dracaena ","botanischerName":"Dracaena marginata","Benzol":"1.264","Formaldehyd":"853","Trichlorethen":"1.137","Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"27","Name":"Rubber plant ","botanischerName":"Ficus elastica","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"28","Name":"Selloum philodendron","botanischerName":"Philodendron bipinnatifidum","Benzol":null,"Formaldehyd":"361","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"29","Name":"gr\u00fcnlilie","botanischerName":"Chlorophytum comosum","Benzol":null,"Formaldehyd":"560","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"30","Name":"Kimberley queen fern ","botanischerName":"Nephrolepis obliterata","Benzol":null,"Formaldehyd":"1.328","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":null,"Toxic":null,"Bild":null},{"ID":"31","Name":"Variegated snake plant","botanischerName":"Sansevieria trifasciata 'Laurentii'","Benzol":"1196","Formaldehyd":"1.304","Trichlorethen":"405","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"33","Name":"Warneckei ","botanischerName":"Dracaena deremensis \"Warneckei\"","Benzol":"1.63","Formaldehyd":"760","Trichlorethen":"573","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"34","Name":"King of hearts","botanischerName":"Homalomena wallisii","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"35","Name":"Weeping fig ","botanischerName":"Ficus benjamina","Benzol":null,"Formaldehyd":"94","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"36","Name":"Moth orchids","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"37","Name":"Moth orchids","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"38","Name":"Peace lily","botanischerName":"Spathiphyllum 'Mauna Loa'","Benzol":"1.725","Formaldehyd":"674","Trichlorethen":"1.128","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":null}];

  constructor(public navCtrl: NavController) {
  	this.temp=this.sum_benzol_formaldehyd_trichlorethen();
  	this.sum=this.is_toxic();

  }



sum_benzol_formaldehyd_trichlorethen(){
var sum =0;
 for(var i=0;i<this.Data.length;i++){
    sum += Number(this.Data[i]["Benzol"]);
	sum += Number(this.Data[i]["Formaldehyd"]);
	sum += Number(this.Data[i]["Trichlorethen"]);
}
var temp=Number(sum).toFixed(4);
return temp;
}
is_toxic(){
var sum =0;
for(var i=0;i<this.Data.length;i++){
	sum += Number(this.Data[i]["Toxic"]);
}
return((sum==0) ? "Nein":"Ja");		
}
}




