import { dalleFactory } from "./dalleFactory";

export class Carre extends dalleFactory{

// ici on spécialise la classe carré ne concerne que cette classe

    private sideLength: number = 200;

    public constructor() {  // méthode constructor renvoie a la classe parente. Ici constructor explicite car écrit
        // sinon peut etre implicite dans ce dernier cas contruit un objet vide
        super(); // super renvoie a la classe parente dallefactory
        this.setTypeDalle('Carré');
    }
// une méthode dessine moi un carré qui s'applique a tout les objets de cette classe. Methode dessiner envoie un message dans la console
    public dessiner(): void {
        this.typeDalle = 'carré'
        console.log('Je suis un : ' + this.typeDalle);
        console.log('Et j\'ai un côté de ' + this.sideLength);
    }
// on créer une méthode permettant de changer la taille du cote du carré
    public setSideLength(side: number): void {
        this.sideLength = side;
    }

    public compareTo(object: Carre): number {

        // opérateur ternaire j'évalue si les deux object sont égale si oui 0 si non -1 permet de satisfaire l'interface qui veut un number
        return this.sideLength === object.sideLength ? 0 : -1;
    }
public paintable(): void {
    
}

}
