// ici l'attribut c'est placeholder =emplacement la ou je vais ecrire dans l html 
// readonly lecture seul on peut pas modifier l'attribut 
//myApp = valeur de l'attribut
// static signifie que l attribut est référencer sans que j'ai a faire une instance de cette classe. Pas besoin de faire un new.html
export class ToHtml {
    private static readonly placeholder: string =  'myApp';

    public toPage(object: any) {
// any c'est le type n'importe quoi. Document donne accès à tout ce qu'il y a dans le doc index.html. QUeryselector permet de piocher ce qui nous interesse dans index.html
// tohtml.... c'est le paramètre on appel document aussi DOM Document object model

        const htlmPlaceholder: JQuery = $('[' + ToHtml.placeholder + ']');

// innerHTML pour aller chercher ce qu'il y a dans la page html attribut de la classe html juste le contenu avec les balises
        let content: string = htlmPlaceholder.html();

// le tostring renvoie a la methode créée dans compagny model
    content += object.toString();
    htlmPlaceholder.html(content);
    }

}