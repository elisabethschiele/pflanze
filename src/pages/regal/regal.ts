import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-regal',
  templateUrl: 'regal.html'
})
export class RegalPage {
  Data=[];
  //console.log(typeof Data);
  //  Data = [{"ID":"1","Name":"Aloe vera","botanischerName":"Aloe vera","Benzol":"1","Formaldehyd":"65","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"aloeVera.jpg"},{"ID":"2","Name":"Goldfruchtpalme","botanischerName":"Dypsis lutescens","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"dypsisLutescens.jpg"},{"ID":"3","Name":"Bambuspalme","botanischerName":"Chamaedorea seifrizii","Benzol":null,"Formaldehyd":"3.196","Trichlorethen":"688","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"chamaedoreaSeifrizii.jpg"},{"ID":"4","Name":"Banane","botanischerName":"Musa Oriana","Benzol":null,"Formaldehyd":"488","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"0","Bild":"musaOriana.jpg"},{"ID":"10","Name":"Philodendron domesticum","botanischerName":"Philodendron domesticum","Benzol":null,"Formaldehyd":"416","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronDomesticum.jpg"},{"ID":"11","Name":"Gerbera jamesonii","botanischerName":"Gerbera jamesonii","Benzol":"4.486","Formaldehyd":"0.01","Trichlorethen":"1.66","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"0","Bild":"gerberaJamesonii.jpg"},{"ID":"13","Name":"Nephrolepis exaltata","botanischerName":"Nephrolepis exaltata 'Bostoniensis'","Benzol":null,"Formaldehyd":"1.863","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"nephrolepisExaltataB.jpg"},{"ID":"14","Name":"Chinesischer immergr\u00fcn","botanischerName":"Aglaonema modestum","Benzol":"604","Formaldehyd":"183","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"aglaonemaModestum.jpg"},{"ID":"15","Name":"Dracaena fragrans ","botanischerName":"Dracaena fragrans 'Massangeana'","Benzol":"0.01","Formaldehyd":"938","Trichlorethen":"421","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaFragransM.jpg"},{"ID":"16","Name":"Gemeiner Efeu","botanischerName":"Hedera helix","Benzol":"579","Formaldehyd":"761","Trichlorethen":"298","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"hederaHelix.jpg"},{"ID":"17","Name":"Dendrobium","botanischerName":"Dendrobium spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"dendrobiumSpp.jpg"},{"ID":"18","Name":"Efeutute","botanischerName":"Epipremnum aureum","Benzol":"0.01","Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"epipremnumAureum.jpg"},{"ID":"20","Name":"Garten-Chrysantheme","botanischerName":"Chrysanthemum morifolium","Benzol":"3.205","Formaldehyd":"1.45","Trichlorethen":"0.01","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":"chrysanthemumMorifolium.jpg"},{"ID":"21","Name":"Philodendron cordatum","botanischerName":"Philodendron cordatum","Benzol":null,"Formaldehyd":"353","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronCordatum.jpg"},{"ID":"22","Name":"Dieffenbachien","botanischerName":"Dieffenbachia spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"dieffenbachiaSpp.jpg"},{"ID":"24","Name":"Zwerg-Dattelpalme","botanischerName":"Phoenix roebelenii","Benzol":null,"Formaldehyd":"1.385","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"phoenixRoebelenii.jpg"},{"ID":"25","Name":"Janet Craig","botanischerName":"Dracaena deremensis \"Janet Craig\"","Benzol":"1.082","Formaldehyd":"1.699","Trichlorethen":"764","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaDeremensisJC.jpg"},{"ID":"26","Name":"Gerandeter Drachenbaum","botanischerName":"Dracaena marginata","Benzol":"1.264","Formaldehyd":"853","Trichlorethen":"1.137","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"dracaenaMarginata.JPG"},{"ID":"27","Name":"Gummibaum","botanischerName":"Ficus elastica","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"ficusElastica.jpg"},{"ID":"28","Name":"Philodendron bipinnatifidum","botanischerName":"Philodendron bipinnatifidum","Benzol":null,"Formaldehyd":"361","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronBipinnatifidum.jpg"},{"ID":"29","Name":"gr\u00fcnlilie","botanischerName":"Chlorophytum comosum","Benzol":null,"Formaldehyd":"560","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"chlorophytumComosum.jpg"},{"ID":"30","Name":"Nephrolepis obliterata","botanischerName":"Nephrolepis obliterata","Benzol":null,"Formaldehyd":"1.328","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"nephrolepisObliterata.png"},{"ID":"31","Name":"Sansevieria trifasciata","botanischerName":"Sansevieria trifasciata 'Laurentii'","Benzol":"1196","Formaldehyd":"1.304","Trichlorethen":"405","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"sansevieriaTrifasciataL.jpg"},{"ID":"33","Name":"Warneckei ","botanischerName":"Dracaena deremensis \"Warneckii\"","Benzol":"1.63","Formaldehyd":"760","Trichlorethen":"573","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaDeremensisW.jpg"},{"ID":"34","Name":"Homalomena wallisii","botanischerName":"Homalomena wallisii","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"homalomenaWallisii.jpg"},{"ID":"35","Name":"Birkenfeige","botanischerName":"Ficus benjamina","Benzol":null,"Formaldehyd":"94","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"ficusBenjamina.jpg"},{"ID":"37","Name":"Phalaenopsis","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"phalaenopsisSpp.jpg"},{"ID":"38","Name":"Spathiphyllum","botanischerName":"Spathiphyllum 'Mauna Loa'","Benzol":"1.725","Formaldehyd":"674","Trichlorethen":"1.128","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":"spathiphyllumML"}];

  constructor(public navCtrl: NavController,  public storage: Storage) {
    //this.getPflanzen();
  }
  getPflanzen() {

    this.storage.get('pflanze').then(data =>  {
      //console.log("["+data+"]");
      console.log(data);
      if(data == null){
        console.log("string empty");
        this.Data = null;
      }
      else {
        console.log("geparst");
        this.Data = JSON.parse("["+data+"]");
      }
    });


 }
 ionViewDidEnter() {
   this.getPflanzen();
 }

}
