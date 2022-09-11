$(function() {

    var premierClick = 0;

    $(".bouton1").click(function() {
        if (premierClick == 0) {


            $(".texte-bouton1").hide(2000);
            premierClick++;

        }
        //retourne a default
        else {
            $(".texte-bouton1").show(2000);


            premierClick = 0;

        }
    });

    var premierClick2 = 0;

    $(".bouton2-cons").click(function() {
        if (premierClick2 == 0) {


            $(".donne").hide(2000);
            premierClick2++;

        }
        //retourne a default
        else {
            $(".donne").show(2000);


            premierClick2 = 0;

        }
    });

    $(".liste2").mouseenter(function() { $(this).addClass("changement") });

    $(".liste2").mouseleave(function() { $(this).removeClass("changement") });

    $(".text-contact ").hide();


    var premierClick3 = 0;
    var Image_Id = document.getElementById('imges');
    $(".bouton3").dblclick(function() {
        if (premierClick3 == 0) {




            $(".text-contact ").show();

            $("#imges").attr('src', '../Image/telephone.jfif');

            premierClick3++;
        }
        //retourne a default
        else {

            $(".text-contact ").hide();
            $("#imges").attr('src', '../Image/conseille.jfif');

            premierClick3 = 0;

        }
    });
    $(".enregistrer").click(function() {
        var nom = $("#nom").val(); //recupere le contenu
        var prenom = $("#prenom").val(); //recupere le contenu

        if (nom == "" || prenom == "") {
            alert("Vous devez entrez un nom ou prenom");
            $("#nom").focus();
        } else {

            alert("Merci Mr/Mme." + nom + " " + prenom + " pour votre souscription");
            ("#nom").val("");
            ("#prenom").val("");
        }





    });



});