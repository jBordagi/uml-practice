// permet de regrouper des objets qui n'ont pas de lien entre eux dans tout les cas la méthode paint sera des que les objets implémente la méthode paintable
// une classe peut implémenter plusieurs  interface

export interface Paintable {
    paint(color:string): void;
}
    