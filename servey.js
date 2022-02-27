$(document).ready(function(){
    var mechant = 200; // la vie d'adversaire
    var toi = 200; // la vie de joueur
    var prog = 0; // progress bar

    var exo1_a = "2x-3x^(-2)"; var exo2_a = "-sin(x)"; // reponses pour exo 1 et 2
    var chat_box = "la réponse c'est :"; // message sur alert
    var list_correct = []; // liste contenu les numeros de questions repondus correctements

    $("#test").hide(); // cache tous les test, pour qu'on puisse lire l'indication d'abord
    $("footer").hide();

    $("#start_test").click(function(){ // cache l'indication et commence le test
        $("#indication").hide();
        $("#test").show();
        $("footer").show();
    })

    // caches tous les autres exos sauf exo1
    $("#exo2").hide();
    $("#exo3").hide();
    $("#exo4").hide();
    $("#exo5").hide();
    $("#exo6").hide();
    $("#exo7").hide();
    $("#exo8").hide();
    $("#exo9").hide();
    $("#exo10").hide();
    $("#exo11").hide();
    // cache d'abords les images de blessure
    $("#t_hurt").hide(); 
    $("#m_hurt").hide();

    /**
     * une fonction pour traiter image de personnage.
     * Si c'est le math qui a été tapé, alors on cache l'image noramle et affiche l'image de blessure
     * @param {verifier c'est qui a ete tape} chk 
     * @param {id de photo d'adversaire normale} id_m 
     * @param {id de photo d'adversaire blesse} id_m_hurt 
     * @param {id de photo de joueur normale} id_t 
     * @param {id de photo de joueur normale} id_t_hurt 
     */
    function image_hurt(chk,id_m, id_m_hurt, id_t, id_t_hurt, att_toi, att_math){
        if(chk == "m"){ // si c'est math qui a ete blesse
            att_math.animate({right:"+=900px"},"fast");
            att_math.animate({right:"0"},"fast");
            id_m.hide();
            id_m_hurt.show();
            id_t.show();
            id_t_hurt.hide();
            
        }
        else{ // si c'est le joueur qui a ete blesse
            att_toi.animate({left:"+=900px"},"fast");
            att_toi.animate({left:"0"},"fast");
            id_m.show();
            id_m_hurt.hide();
            id_t.hide();
            id_t_hurt.show();
        }
        
    }

    /**
     * Toutes les funtions ressemblent beaucoup, le principe, c'est toujours de 
     * 1. recuperer les reponses de joueur
     * 2. verifier si les reponses sont bon
     * 3. changer les bars de vies, de progres et les photos
     * 4. afficher la bonne reponse par alert()
     * 5. cache l'exo courant et affiche l'exo prochain
     * 
     * donc j'ai fait les commentaires pour le exo1 seulement
     */
    // --------------------------------exo 1------------------------------------------------
    $("#submit1").click(function(){
        var exo1_i = $("input[name='exo1']:checked").val(); // obtenir l'input de l'utilisateur
        if(exo1_a == exo1_i){ // si la reponse est correcte
            mechant -= 20;
            $("#bar_m").width(mechant); // changement de bar de vie
            list_correct.push("1"); // si la reponse est bon, on l'ajoute dans la liste de reponses bon
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{ // si la reponse n'est pas correcte
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))
        }
        

        // aller vers l'exo prochain
        chat_box = "la réponse c'est : 2x-3x^(-2)";
        alert(chat_box);
        $("#exo1").hide();
        $("#exo2").show();
        prog += 20; // complete progress bar
        $("#progbar2").width(prog);
    });

    // -----------------------------------------------exo2-----------------------------------
    $("#submit2").click(function(){
        var exo2_i = $("#exo2_input").val()
        if(exo2_i == exo2_a){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("2");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }

        chat_box = "la réponse c'est : -sin(x)";
        alert(chat_box);
        $("#exo2").hide();
        $("#exo3").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });

    // ------------------------------------------exo3-----------------------------------------
    $("#submit3").click(function(){
        var chk = 0;
        $("input:checkbox:checked").each(function(){
            chk += parseInt($(this).val())
            console.log(chk)     
        });
        if(chk == 6){ // si les reponses correctes ont ete choisi
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("3");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }

        chat_box = "la réponse c'est : opotion 1 et 3";
        alert(chat_box);
        if(toi <= 0){
            chat_box = "t'as ete toue par le math, veuillez regarder un peu le rappel";
            alert(chat_box);
            
        }
        $("#exo3").hide();
        $("#exo4").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // ------------------------------------ exo4 -------------------------------------
    $("#submit4").click(function(){
        var exo4_i = $("#exo4_input option:checked").val()
        if (exo4_i == '1'){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("4");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }

        chat_box = "la réponse c'est : opotion 2cos(2x+1)";
        alert(chat_box);
        if(toi <= 0){
            chat_box = "t'as ete toue par le math, veuillez regarder un peu le rappel";
            alert(chat_box);
            
        }
        $("#exo4").hide();
        $("#exo5").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // ------------------------------------ exo5 -------------------------------------
        chk = 0; var double_click0 = 0; var double_click1 = 0; var double_click2 = 0;
        $("#exo5_0").click(function(){ // change opacity when clicked
            double_click0 += 1;
            if (double_click0 % 2 != 0){ // clique 1 fois pour selecter des image
                $("#exo5_0").css("opacity", "0.5");
                chk += 1;
            }
            else{
                $("#exo5_0").css("opacity", "1"); // clique 2 fois pour annuler la selection d'image
                chk -= 1;
            }
            
        });
        $("#exo5_1").click(function(){
            double_click1 += 1;
            if (double_click1 % 2 != 0){ // clique 1 fois pour selecter des image
                $("#exo5_1").css("opacity", "0.5");
                chk += 2;
            }
            else{
                $("#exo5_1").css("opacity", "1"); // clique 2 fois pour annuler la selection d'image
                chk -= 2;
            }
        });
        $("#exo5_2").click(function(){
            double_click2 += 1;
            if (double_click2 % 2 != 0){
                $("#exo5_2").css("opacity", "0.5"); // clique 1 fois pour selecter des image
				chk += 4;
            }
            else{
                $("#exo5_2").css("opacity", "1"); // clique 2 fois pour annuler la selection d'image
				chk -= 4;
            }
        });


        $("#submit5").click(function(){
        if(chk == 3){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("5");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }

        chat_box = "la réponse c'est : image 1 et image 2";
        alert(chat_box);
        if(toi <= 0){
            chat_box = "t'as ete toue par le math, veuillez regarder un peu le rappel";
            alert(chat_box);
            
        }
        $("#exo5").hide();
        $("#exo6").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
        console.log(list_correct)
    });
    // ---------------------------------------exo6----------------------------------------------
    $("#submit6").click(function(){
        var exo6_i = $("#exo6_input").val()
        if(exo6_i == "yes"){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("6");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }

        chat_box = "la réponse c'est : yes";
        alert(chat_box);
        $("#exo6").hide();
        $("#exo7").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // ----------------------------------------------exo7-------------------------------------------
    $("#submit7").click(function(){
        var exo7_i = $("input[name='exo7']:checked").val();
        if(exo7_i == '0'){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("7");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        // aller vers l'exo prochain
        chat_box = "la réponse c'est : la ligne rouge c'est 2x, ligne bleu c'est x^2";
        alert(chat_box);
        $("#exo7").hide();
        $("#exo8").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // ---------------------------------------------exo8----------------------------------------------
    $("#submit8").click(function(){
        var prenom = $("#prenom").val().toLowerCase(); // on s'en fous de uppercase ou lowercase
        var nom = $("#nom").val().toLowerCase();
        if ((prenom == "isaac" || prenom == "gottfried") && (nom == "newton" || nom == "leibniz")){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("8");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        // aller vers l'exo prochain
        chat_box = "la réponse c'est : Isaac Newton ou Gottfried Leibniz";
        alert(chat_box);
        $("#exo8").hide();
        $("#exo9").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // ----------------------------------------------exo9---------------------------------------------
    $("#submit9").click(function(){
        var ln = $("#ln").val();
        if (ln == "ln(x)/ln(8)"){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("9");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        // aller vers l'exo prochain
        chat_box = "la réponse c'est : ln(x)/ln(8)";
        alert(chat_box);
        $("#exo9").hide();
        $("#exo10").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    });
    // -----------------------------------------------exo10 -------------------------------------------
    $("#submit10").click(function(){
        var exo10_i = $("input[name='exo10']:checked").val()
        if (exo10_i == '1'){
            mechant -= 20;
            $("#bar_m").width(mechant);
            list_correct.push("10");
            image_hurt("m", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        else{
            toi -= 40;
            $("#bar_toi").width(toi);
            image_hurt("t", $("#m_normal"), $("#m_hurt"), $("#t_normal"), $("#t_hurt"), $("#att_toi"), $("#att_math"))// changement d'image
        }
        // aller vers l'exo prochain
        chat_box = "la réponse c'est : 3.141592653589";
        alert(chat_box);
        $("#exo10").hide();
        $("#exo11").show();
        prog += 20; // progress bar
        $("#progbar2").width(prog);
    
    // --------------------------------------- le résumé de jeu ---------------------------------
    for(i = 0; i < list_correct.length; i++){
        $("#list_c").append(list_correct[i])
        $("#list_c").append(", ")
    }
        

    var vie_p_m = 200 - mechant;
    var vie_t = 200 - toi;
	if (vie_t > 200){
		vie_t = 200
	}
    $("#status_m").text(vie_p_m.toString())
    $("#status_t").text(vie_t.toString())
    if (toi <= 0){
        $("#alive_t").text("mort, quel dommage, je sais que les questions à la fin sont bizarres, mais c'est la vie lol")
    }
    else{
        $("#alive_t").text("pas mort !!! félicitations my friend ( ￣V￣)人(^▽^ )")
    }
    
    });
    
});
