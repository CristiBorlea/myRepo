export class AlertModel{
	id: number;
	type: string;
	message: string;

	constructor(id:number, type:string, message:string){
		this.id=id;
		this.type=type;
		this.message=message;
	}
}