import { Paintable } from "./paintable-interface";
import { Comparable } from "./comparable-interface";

// classe définie comme abstraite car elle guide les autres dans la manière a concevoir réellement les autres objets
export abstract class dalleFactory implements Paintable, Comparable<dalleFactory>{
/**
 * @var string Libéllé du type de dalle a produire. Attribut protégé accessible dans la classe dalle fatory et aussi dans
 * celles qui hérité ou étende dalle factory donc carré triangel cercle... si on avait mis private pas visible des autres
 */
    protected typeDalle: string;

/**
 *void c'est le type de retour de la méthode. Le tout méthode abstraite : impose les concepteurs de dalles
 * a definir dans leurs classes métiers la classe dessiner() du coup la ou est étendue la méthode abstraite on est obliger de coder la méthode dessiner 
 * pas de {} derrière void car abstraite sinon il faut remplir
 */
    public abstract dessiner(): void;
// méthode concrète dans une classe abstraite dalle généralisé
    public setTypeDalle(type:string) {
        this.typeDalle = type;

        // Ici constructor implicite il est pas écrit mais il y en a quand meme un.
    }

    public paint( color:string):void {
        console.log('Peinture de ' + this.typeDalle + ' en ' + color);
    }
    public abstract compareTo(object: dalleFactory): number;
}