import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Gestor de peticiones';
  msg:string = '';
  hideUpdate:boolean = true;




	petition =[
	  {'name': 'Ecoli', searchtype: 'normal', DBgestor : 'SQLServer'},
	  {'name': 'Ecoli1', searchtype: 'optimizada', DBgestor : 'All'},
	  {'name': 'Ecoli2', searchtype: 'optimizada', DBgestor : 'MariaDB'},
	  {'name': 'Ecoli3', searchtype: 'normal', DBgestor : 'All'},
	  {'name': 'Ecoli4', searchtype: 'optimizada', DBgestor : 'MySQL'}
	];

	model:any ={};
	model2:any={};

	addPetition():void{
	  this.petition.push(this.model);

	  this.msg='Peticion añadida';
	}

	deletePetition(i):void{
		

		var answer = confirm('¿Seguro que quiere eliminar la peticion?');

		console.log(answer);

		if(answer){
			this.petition.splice(i, 1);
		}
		

		this.msg='Peticion eliminada';
	}

	myValue;
	editPetition(i):void{
		this.hideUpdate=false;
		this.model2.name=this.petition[i].name;
		this.model2.searchtype=this.petition[i].searchtype;
		this.model2.DBgestor=this.petition[i].DBgestor;
		this.myValue = i;
	}

	updatePetition():void{
		let i =this.myValue;
		for(let j =0 ;j< this.petition.length;j++){
			if(i == j){
				this.petition[i]=this.model2;
				this.model2={};
			}
		}
		this.msg='Peticion actualizada';
		this.hideUpdate=true;
	}

	closeAlert():void{
		this.msg='';
	}

}