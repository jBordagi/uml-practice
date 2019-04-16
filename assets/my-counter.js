/**
 * @name my-counter
 * @author moi
 * @version 1.0.0
 * @description Gère un composant de type compteur
 */

 // Gestionnaire d'évenement sur le bouton + (id=increase-qty)

 $('#increase-qty').on(
     'click',
     function(event) {
    // J'essaie de lire la valeur du champs de saisie (input)
    const inputField = $('#quantity');

    // Récupérer la valeur max autoriséé: data max=n
    const maxVal = inputField.data('max');
    
    // Introduire la contrainte fonctionnelle newVal<maxVal ... sinon NOOP

    if (inputField.val()<maxVal) {

       // Incrémenter la valeur de 1
        let newVal= parseInt(inputField.val()) + 1;
    // Afficher dans l'interface la nouvelle valeur
        inputField.val(newVal)   
        // 'activer le bouton en enlevant le disable le $ permet de chercher l'objet d'identité decrease-qty
        const decreaseQtyBtn = $('decrease-qty');
        decreaseQtyBtn.removeAttr('disable');
        // la valeur est elle egale au maximum?
        if (newVal===maxVal){
            //si c'est le cas je désactive
            console.log('le maximum tu as atteint, me désactiver il te faudra');
            $(this).attr('disabled', 'disabled');
            // TODO: Afficher un message si maximum atteint 
            prompt('le maximum est atteint')

        }

    } 
    
    
    
    //TODO: Désacativer le bouton + si maximum atteint

     }
 );