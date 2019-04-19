// on définit une interface appelé comparable, elle définit une méthode appelé compareTO  qui accepte un objet en paramètre
//toute les classes qui implémente l'interface comparable devront avoir la méthode compareTo

export interface Comparable<T> {
    compareTo(object:T): number;
}