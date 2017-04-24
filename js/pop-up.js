		
		//Mon compte

		$('.supprimer').click(function(){
            $('.apparitionsuppr,.apparition').toggleClass('connexion-visible');
        });

        $('.supprimerimg').click(function(){
            $('.apparitionsupprimg,.apparition').toggleClass('connexion-visible');
        });

        $('.ajouterlien').click(function(){
            $('.apparitionupload,.apparition').toggleClass('connexion-visible');
        });

        $('.supprson').click(function(){
            $('.apparitionsupprson,.apparition').toggleClass('connexion-visible');
        });

        //L'actu

         $('#btn-lire').click(function(){
         	$('.apparitioncompterendu,.apparition').toggleClass('connexion-visible');
	    });

         $('#ajoutercompterendu').click(function(){
         	$('.apparitionajoutercompterendu,.apparition').toggleClass('connexion-visible');
	    });

         //Qui sommes-nous ?

         $('.ajoutermembre').click(function(){
         	$('.apparitionajoutermembre,.apparition').toggleClass('connexion-visible');
	    });

        //Toutes les pages

         $('#moncompte').click(function(){
       		$('.apparition').toggleClass('connexion-visible');
    	});

	     $('#fondco').click(function(){
            $('.apparition,.apparitionsuppr,.apparitionsupprimg,.apparitionupload,.apparitionsupprson,.apparitioncompterendu,.apparitionajoutercompterendu,.apparitionajoutermembre').removeClass('connexion-visible');
        });
        