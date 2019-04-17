import {OutputInterface} from "src/utils/output-interface";
import {CompanyModel} from "../company.model";

export class AllStrategy implements OutputInterface<CompanyModel>{

    public output(companyModel: CompanyModel): JQuery{
        
        const object: JQuery= ($('<div>'))
            .addClass('col-12');

        const title: JQuery =  $('<h2>');
        title.html(companyModel.getName());
        // Juste j'ajoute le titre a la div
        title.appendTo(object);

        // c est parti pour l adresse
        const adresse: JQuery=$('<address>');

        const postalAdresse: JQuery= $('<p>');
        postalAdresse.html(companyModel.getAdress());

        const codePostal: JQuery= $('<span>')
        codePostal.html(companyModel.getCodePostal());

        const ville: JQuery = $('<span>')
        ville.html(companyModel.getville());

        const wrapper: JQuery=$('<p>');
        codePostal.appendTo(wrapper);
        ville.appendTo(wrapper);

        postalAdresse.appendTo(adresse);
        wrapper.appendTo(adresse);

        adresse.appendTo(object);

        return object;
    }
}