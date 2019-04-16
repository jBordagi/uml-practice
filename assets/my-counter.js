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
        // 'activer le bouton en enlevant le disable le $ permet de chercher l'objet d'identité decrease-qty
        $("#decrease-qty").removeAttr('disabled');
       // Incrémenter la valeur de 1
        let newVal= parseInt(inputField.val()) + 1;
    // Afficher dans l'interface la nouvelle valeur
        inputField.val(newVal)   
        
        // la valeur est elle egale au maximum?
        if (newVal===maxVal){
            //si c'est le cas je désactive
            console.log('le maximum tu as atteint, me désactiver il te faudra');
            $(this).attr('disabled', 'disabled');


            // TODO: Afficher un message si maximum atteint 
            $('[role="alert"] span.message').html('Vous avez atteint la limite maximale');
            $('[role="alert"]').show();
        } else {$('[role="alert"]').hide();}
    }    
    }
    );

    //TODO: Désactiver le bouton + si maximum atteint

    $('#decrease-qty').on(
        'click',
        function(event) {
       // J'essaie de lire la valeur du champs de saisie (input)
       const inputField = $('#quantity');
   
       // Récupérer la valeur max autoriséé: data max=n
       const minVal = inputField.data('min');
       
       // Introduire la contrainte fonctionnelle newVal<maxVal ... sinon NOOP
   
       if (inputField.val()>minVal) {
        $("#increase-qty").removeAttr('disabled');
          // Incrémenter la valeur de 1
           let newVal= parseInt(inputField.val()) - 1;
       // Afficher dans l'interface la nouvelle valeur
           inputField.val(newVal)   
           
           // la valeur est elle egale au maximum?
           if (newVal===minVal){
               //si c'est le cas je désactive
               console.log('le minimum tu as atteint, me désactiver il te faudra');
               $(this).attr('disabled', 'disabled');
   
               // TODO: Afficher un message si maximum atteint 
               $('[role="alert"] span.message').html('Vous avez atteint la limite minimale');
               $('[role="alert"]').show();
           } else {$('[role="alert"]').hide();}
               
       }    
       }
    );