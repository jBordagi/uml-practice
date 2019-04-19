import { dalleFactory } from "./dalleFactory";

export class Triangle extends dalleFactory{
    private whatKind: string = 'Isocèle';

// methode appelée automatiquement lorsqu'on fait un new d'un objet de cette classe
    public constructor() {
        super();
        this.setTypeDalle('Triangulaire');
    }    
    public setKind(kind: string) {
        this.whatKind = kind;
    }    

    public dessiner(): void {
        this.typeDalle='triangulaire';
        console.log('Je suis un: ' + this.typeDalle);
        console.log('De type: ' + this.whatKind);
    }
    public compareTo(object: Triangle): number {
    if (this.whatKind===object.whatKind)    
        
        return  0}

public paintable(): void{}
}