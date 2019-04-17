import {Repository} from "../utils/repository";
import {CompanyModel} from "./company.model";

// defintion d'une collection a partir d'une classe abstraite (classe abstraite duplique le meme comportement a n'importe qu'elle type de classe concrète)
export class CompanyRepository extends Repository<CompanyModel> {

/**
 * @override on override les méthodes de la classe abstraite
 * @param company
 */
    public add(company: CompanyModel): void {
        this.repository.set(company.getId(), company);
    }
    public remove(company: CompanyModel): void {
        this.repository.delete(company.getId());
    }

    /**
     * @override
     * @param id
     */
    public get(id:number): CompanyModel {
        return this.repository.get(id);
    }
}
