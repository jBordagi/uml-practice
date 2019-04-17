import {OutputInterface } from "src/utils/output-interface";
import {CompanyModel} from "../company.model";

export class NameAndZipStrategy implements OutputInterface<CompanyModel>{

    public output (CompanyModel: CompanyModel): JQuery{
        const object: JQuery= $('<h2>');
        object.html(CompanyModel.getName() + ' ' + CompanyModel.getCodePostal());
        return object;
    }
}