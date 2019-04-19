import { dalleFactory } from "./dalleFactory";

export class Cercle extends dalleFactory {
    

    private diametre: number = 200;

    public constructor() {
        super(); 
        this.setTypeDalle('Circulaire');
    }

    public dessiner(): void {
        this.typeDalle = 'circulaire'
        console.log('Je suis un: ' + this.typeDalle);
        console.log('Et j\'ai un diamètre de: ' + this.diametre);
    }

    public setDiametre(diametre: number): void {
        this.diametre = diametre;
    }
    public compareTo(object: Cercle): number {

        // opérateur ternaire j'évalue si les deux object sont égale si oui 0 si non -1 permet de satisfaire l'interface qui veut un number
        return this.diametre === object.diametre ? 0 : -1;}

        public paintable(): void{
        }

}