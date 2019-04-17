export interface OutputInterface<T>{
// méthode output objet type inconnu T, retourne un JQUery 
    output(object: T): JQuery;
}
