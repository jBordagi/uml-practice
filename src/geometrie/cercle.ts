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
}