export class HeroDto{
    id: any;
    name: string;
    ability: string;

    constructor(obj:any){
        this.id = obj.id,
        this.name = obj.name,
        this.ability = obj.ability
    }
}