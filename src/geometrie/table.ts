import { Paintable } from "./paintable-interface";

// on doit faire l'export pour pouvoir importer la table ailleurs 
// implements equivalent de extends pour une classe abstraite sauf que la c'est une interface
export class Table implements Paintable {
    private length: number;
    private width: number; 
// dans un contructeur retourne jamais rien pas besoin ni possible de mettre void seul méthode dans ce cas.
    public constructor (length: number, width: number) {
        this.length = length;
        this.width = width;
    }
// void te précise que la fonction ne renvoie rien pas de valeur de return si retourne. A savoir un seul return par méthode
    public make(): void {
        console.log('Construction d\'une table de L: ' + this.length + 'x l : ' + this.width)
    }

    // array signifie return tableau. Number signifie tableau avec des nombres. Comme c'est un tableau [,]
    public increaseDimensions(): Array<number> {
        return [this.length*2, this.width * 2];
    }

    public paint( color:string):void {
        console.log('Peinture de la table en : ' + color);
    }
}