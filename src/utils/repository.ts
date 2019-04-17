/**
 * @name Repository
 * @desc Classe abstraite définissant une collection d'objets
 * @author Aélion
 * @version 1.0.0
 *
 */
// T est un spécificateur de classe T nom générique de la classe map attribut qui contient réelement les infos comme un tableau avec clef unique
 export abstract class Repository<T>{
    protected repository: Map<number, T> = new Map<number, T>();
// oblige les dev a coder ces méthodes sinon ça compile pas
    public abstract add(object: T): void;

    public abstract remove(object: T): void;

    public abstract get(id: number): T;
 }