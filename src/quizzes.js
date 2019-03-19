var quizzes = {
  0: {
    context:
      "M. Rhododendron, 75 ans, est hospitalisé dans votre service. Vous le voyez afin d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Vous prévoyez de le faire travailler en chambre, puis de le faire marcher dans le couloir.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  1: {
    context:
      "M. Didondindon, 75 ans, est hospitalisé dans votre service. Vous le voyez en kinésithérapie motrice en vue d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Vous prévoyez de le faire travailler en chambre puis de le faire marcher dans le couloir. Il y a quelques travaux dans les environs qui cassent les oreilles à tout le monde.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 par le patient est indiqué afin de le protéger des TRAVAUX. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  2: {
    context:
      "Mme. Verrue, 65 ans, est hospitalisée dans votre service. Vous la voyez en kinésithérapie motrice en vue d'améliorer ses capacités locomotrices et de jouer favorablement sur son pronostic. Vous prévoyez de la faire travailler en chambre puis de la faire marcher dans le couloir. Vous avez une petite goutte au nez car vous avez fêté sur une péniche la veille et n'aviez pas pris votre petite laine.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical est indiqué ici du fait que VOUS PRÉSENTEZ DES SYMPTÔMES RESPIRATOIRES, afin de protéger le patient. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  3: {
    context:
      "Mme Rapace, 65 ans, est hospitalisée dans votre service. Vous la voyez afin d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Vous prévoyez de la faire travailler en chambre, puis de la faire marcher dans le couloir. Accessoirement, ce matin vous vous êtes accidentellement coupé le bout de l'annulaire sur les feuilles de transmission de Stéphanie.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est indiqué du fait que vous ayez une PLAIE CUTANÉE sur la main.laver, il faudra alors DÉSINFECTER la plaie, PROTÉGER avec un pansement, puis porter des gants gants par dessus à changer entre chaque patient.\n\nOn peut rappeler les indications du port des gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  4: {
    context:
      "M. Péqueroute, 59 ans, est hospitalisé dans votre service. Vous le voyez afin d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Vous prévoyez de le faire travailler en chambre, puis de le faire marcher dans le couloir. Le patient dispose d'une sonde urinaire.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. Il faudra mettre des gants lors de la manipulation et de la sécurisation de la sonde urinaire, pour la mettre dans un sac jaune propre pour le transport, puis retirer les gants et frictionner ses mains au SHA.\n\nOn peut rappeler les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  5: {
    context:
      "M. Morbleu, 59 ans, est hospitalisé dans votre service. Vous le voyez afin d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Vous prévoyez de le faire travailler en chambre, puis de le faire marcher dans le couloir. Le patient dispose d'une colostomie.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est indiqué du fait que vous ayez un un risque de contact avec des produits biologiques du fait de la COLOSTOMIE. On peut rappeler les indications du port des gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée sur les mains du professionnel).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  6: {
    context:
      "M. Ventresaintgris, 47 ans, est hospitalisé dans votre service. Vous le voyez dans le cadre de séances de kinésithérapie respiratoire afin de prévenir les complications d'une opération abdominale. Normalement vous ne devriez pas avoir besoin d'entrer en contact avec la cicatrice. Il n'est pas encombré et n'a pas de symptômes respiratoires antérieurs à l'opération.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe patient ne présente pas de symptôme respiratoire, et quand bien même, le patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  7: {
    context:
      "M. Padbol, 47 ans, est hospitalisé dans votre service. Vous le voyez pour des séances de kinésithérapie respiratoire en vue de prévenir les complications liées à une opération abdominale. Il est légèrement encombré et un diagnostic de tuberculose a été posé. La précaution complémentaire Air a été mise en place. Vous le voyez en chambre seule.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car le patient est dans sa chambre et pas dans un milieu partagé.\n\nOn peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nIci le port de gants en vinyle par le professionnel est préconisé car il y a risque de contact avec des produits biologiques (expectorations, sécretions, salive, ...) au niveau du patient ou de son environnement, avec un risque de colporter les agents infectieux vers d'autres patients.\n\nOn peut rappeller les autres indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisant pour se protéger de la tuberculose (particules en suspension inférieures à 5 micromètres, pour rappel, le masque chirurgical filtre moins de 50% des particules de moins de 5 micromètres), surajouté du fait que le masque chirurgical ne correspond pas aux précautions complémentaires Air. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 est indiqué ici du fait des précautions complémentaires Air et de la tuberculose. Il n'y a pas d'autre indications ici (pathologie hautement infectieuse).\n\nRemarque: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2). La recommandation du FFP1 plutôt que du FFP2 dans le cas de la tuberculose sensible aux traitements anti-tuberculeux tient au fait que l'augmentation du risque de contagion du thérapeute entre le port du FFP1 et celui du FFP2 est minime par rapport à la contrainte de port du FFP2 (forte filtration, sensation de manque d'air, ...). Cependant, dans la pratique, si vous préférez porter un FFP2 cela n'est pas dérangeant vu que les 2 masques ont sensiblement le même prix (environs 16 centimes l'unité).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air liées à la tuberculose sensible aux traitements anti-tuberculeux.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nRemarque: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2). La recommandation du FFP1 plutôt que du FFP2 dans le cas de la tuberculose sensible aux traitements anti-tuberculeux tient au fait que l'augmentation du risque de contagion du thérapeute entre le port du FFP1 et celui du FFP2 est minime par rapport à la contrainte de port du FFP2 (forte filtration, sensation de manque d'air, ...). Cependant, dans la pratique, si vous préférez porter un FFP2 cela n'est pas dérangeant vu que les 2 masques ont le même prix (environs 16 centimes l'unité)."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de lunettes de protection est indiqué ici du fait du risque d'éclaboussure ou de projection de produit biologique (toux, expectorations, ...)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port d'un tablier imperméable blanc est indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  8: {
    context:
      "M. Duguet, 55 ans, est hospitalisé dans votre service. Vous le voyez en kinésithérapie motrice afin d'entretenir ses capacités locomotrices et jouer favorablement sur son pronostic. Par ailleurs un diagnostic de tuberculose a été posé et les précautions complémentaires Air mises en place. Son moral est très bas et il aimerait pouvoir se lever et voir la vue depuis la fenêtre du couloir. Vous vous proposez de l'accompagner. ",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard. et complémentaires Air\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nIci le port du masque chirurgical est indiqué car le patient est contaminant et va se retrouver en milieu partagé. On recommande le masque chirurgical qui est surtout efficace pour filtrer l'air expiré et protéger l'environnement. Il faudra que le patient mette le masque AVANT DE SORTIR DE LA CHAMBRE.\n\nOn peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici. Le but ici est simplement que le patient, contaminant, ne puisse pas contaminer le milieu partagé. Les Appareils de Protection Respiratoire FFP sont efficaces pour empêcher la contamination du milieu par le patient ET empêcher la contamination du patient par le milieu. Ces Appareils de Protection Respiratoire FFP remplissent plus que le rôle recherché ici et coûtent entre 3 et 4 fois plus cher que les masques simples, c'est pourquoi on recommande l'utilisation du masque chirurgical pour le patient."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. Le but ici est simplement que le patient, contaminant, ne puisse pas contaminer le milieu partagé. Les Appareils de Protection Respiratoire FFP sont efficaces pour empêcher la contamination du milieu par le patient ET empêcher la contamination du patient par le milieu. Ces Appareils de Protection Respiratoire FFP remplissent plus que le rôle recherché ici et coûtent entre 3 et 4 fois plus cher que les masques simples, c'est pourquoi on recommande l'utilisation du masque chirurgical pour le patient.\n\nOn peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 pour le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici.\n\nOn peut rappeller les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisant pour se protéger de la tuberculose (particules en suspension inférieures à 5 micromètres, pour rappel, le masque chirurgical filtre moins de 50% des particules de moins de 5 micromètres), surajouté du fait que le masque chirurgical ne correspond pas aux précautions complémentaires Air. On peut rappeler les indications du masque chirurgical (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nIci Le port de l'Appareil de Protection Respiratoire FFP1 est indiqué, compte tenu des précautions complémentaires Air et de la tuberculose. On peut rappeler les indications du port du masque chirurgical par le professionnel (pathologie hautement infectieuse).\n\nRemarque: Il est recommandé d'aérer régulièrement la chambre du patient en cas de précaution complémentaire Air, on peut en profiter pour OUVRIR la fenêtre de la chambre en LAISSANT LA PORTE FERMÉE le temps du soin.\n\nRemarque 2: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2). La recommandation du FFP1 plutôt que du FFP2 dans le cas de la tuberculose sensible aux traitements anti-tuberculeux tient au fait que l'augmentation du risque de contagion du thérapeute entre le port du FFP1 et celui du FFP2 est minime par rapport à la contrainte de port du FFP2 (forte filtration, sensation de manque d'air, ...). Cependant, dans la pratique, si vous préférez porter un FFP2 cela n'est pas dérangeant vu que les 2 masques ont sensiblement le même prix (environs 16 centimes l'unité).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nRemarque: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2). La recommandation du FFP1 plutôt que du FFP2 dans le cas de la tuberculose sensible aux traitements anti-tuberculeux tient au fait que l'augmentation du risque de contagion du thérapeute entre le port du FFP1 et celui du FFP2 est minime par rapport à la contrainte de port du FFP2 (forte filtration, sensation de manque d'air, ...). Cependant, dans la pratique, si vous préférez porter un FFP2 cela n'est pas dérangeant vu que les 2 masques ont sensiblement le même prix (environs 16 centimes l'unité).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de lunettes de protection n'est pas indiqué ici compte tenu du fait qu'il s'agit d'une prise en charge motrice. On peut rappeler les indications du port de lunettes de protection (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air. Le port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  9: {
    context:
      "M. Tartare, 57 ans, est hospitalisé en chambre seule dans votre service. Vous le voyez en kinésithérapie respiratoire afin de prévenir les complications liées à une opération thoracique et jouer favorablement sur son pronostic. Par ailleurs un diagnostic de tuberculose multi-résistante aux anti-tuberculeux a été posé et les précautions complémentaires Air ont été mises en place. Il est légèrement encombré.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard. et complémentaires Air\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici. On peut rappeler les indication du port du Appareil de Protection Respiratoire FFP1 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. Le but ici est simplement que le patient, contaminant, ne puisse pas contaminer le milieu partagé. Les Appareils de Protection Respiratoire FFP sont efficaces pour empêcher la contamination du milieu par le patient ET empêcher la contamination du patient par le milieu. Ces Appareils de Protection Respiratoire FFP remplissent plus que le rôle recherché ici et coûtent entre 3 et 4 fois plus cher que les masques simples, c'est pourquoi on recommande l'utilisation du masque chirurgical pour le patient.\n\nOn peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 pour le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants en vinyle par le professionnel est préconisé ici du fait du risque de contact contaminant avec l'environnement du patient.\n\nIl n'y a pas d'autre indication au port de gants en vinyle ici (risque de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisant pour se protéger de la tuberculose (particules en suspension inférieures à 5 micromètres, pour rappel, le masque chirurgical filtre moins de 50% des particules de moins de 5 micromètres), surajouté du fait que le masque chirurgical ne correspond pas aux précautions complémentaires Air. On peut rappeler les indications du masque chirurgical (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué, compte tenu des précautions complémentaires Air et de la tuberculose multi-résistante aux anti-tuberculeux. C'est le port de l'Appareil de Protection Respiratoire FFP2 qui est préconisé ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (pathologie hautement infectieuse, tuberculose sensible aux traitements anti-tuberculeux).\n\nRemarque: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nIci Le port de l'Appareil de Protection Respiratoire FFP2 est indiqué compte tenu du risque pour le professionnel et les autres patients. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nRemarque: l'Appareil de Protection Respiratoire FFP1 a un pourcentage de filtration des aérosols de 80% (contre 94% pour le FFP2) et un pourcentage de fuite vers l'intérieur de 22% (contre 8% pour le FFP2).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nIci le port de lunettes de protection est indiqué . On peut rappeler les indications du port de lunettes de protection (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port d'un tablier imperméable blanc est indiqué ici. On peut rappeler les indications du port du tablier de protection (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  10: {
    context:
      "Mme. Morue, 58 ans est hospitalisée dans votre service pour suite d'une greffe hépatique. Vous la voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à l'opération et à la douleur. Elle présente une immuno-dépression et la précaution complémentaire protectrice de risque faible a été mise en place.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard.\n\nOn peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  11: {
    context:
      "Mme. Yaourt, 62 ans, est hospitalisée dans votre service pour suite d'une greffe hépatique. Vous la voyez en kinésithérapie motrice, elle présente une immuno-dépression et la précaution complémentaire protectrice de risque faible a été mise en place. Vous prévoyez de la faire travailler en chambre afin de lui montrer quelques auto-exercices, puis de la faire marcher dans le couloir.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard.\n\nOn peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard.\n\nOn peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard.\n\nOn peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  12: {
    context:
      "Mme. Blondet, 64 ans, est hospitalisée dans votre service pour suite d'une greffe hépatique. Vous la voyez en kinésithérapie motrice, elle présente une immuno-dépression et la précaution complémentaire protectrice de risque faible a été mise en place. Vous prévoyez de la faire travailler en chambre, puis de la faire marcher dans le couloir. Elle dispose d'une sonde urinaire.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux).\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. Il faudra mettre des gants lors de la sécurisation de la sonde urinaire, en la mettant dans un sac jaune propre par exemple.\n\nOn peut rappeler les indications du port des gants en vinyle par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité.\n\nEn effet, dans le cas de la précaution complémentaire protectrice de risque faible, il n'y a pas de précations spécifiques autres que les précautions standard."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  13: {
    context:
      "Mme. Reblochon, 67 ans est hospitalisée dans votre service pour suite d'une greffe hépatique compliquée en post-opératoire immédiat. Vous la voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à l'opération et à la douleur. Elle présente une immuno-dépression et la précaution complémentaire protectrice de risque intermédiaire a été mise en place. Elle n'est pas encombrée.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standarde et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car le patient reste dans sa chambre. PAR AILLEURS, dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car le patient reste dans sa chambre. PAR AILLEURS, dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici du fait que le patient reste en milieu non partagé. En revanche s'il devait sortir de sa chambre il devrait en effet porter un Appareil de Protection Respiratoire FFP2 afin de se protéger des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  14: {
    context:
      "Mme. Youdet, 67 ans est hospitalisée dans votre service pour suite d'une greffe hépatique compliquée en post-opératoire immédiat. Vous la voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à l'opération et à la douleur. Elle présente une immuno-dépression et la précaution complémentaire protectrice de risque intermédiaire a été mise en place. Elle n'est pas encombrée. Vous avez un peu mal à la gorge.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standarde et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car le patient reste dans sa chambre. PAR AILLEURS, dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car le patient reste dans sa chambre. PAR AILLEURS, dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici du fait que le patient reste en milieu non partagé. En revanche s'il devait sortir de sa chambre il devrait en effet porter un Appareil de Protection Respiratoire FFP2 afin de se protéger des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical est indiqué ici du fait que VOUS PRÉSENTEZ DES SYMPTÔMES RESPIRATOIRES, afin de protéger le patient. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  15: {
    context:
      "Mme. Bourriche, 49 ans est hospitalisée dans votre service pour suite d'une greffe hépatique compliquée en post-opératoire immédiat. Vous la voyez en kinésithérapie motrice en vue de prévenir les complications liées à l'opération et à la douleur. Elle présente une immuno-dépression et la précaution complémentaire protectrice de risque intermédiaire a été mise en place. Vous prévoyez de la faire travailler en chambre puis de marcher dans le couloir.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 est indiqué ici du fait que le patient se retrouve en milieu partagé ET bénéficie des précautions complémentaires protectrices de risque intermédiaire. C'est l'Appareil de Protection Respiratoire FFP2 qui est indiqué afin de se protéger au mieux des différents germes (aspergillose, pneumocystose, légionellose, ...).\n\nOn peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical n'est pas indiqué ici (professionel ou patient présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  16: {
    context:
      "Mme. Bourriche, 49 ans est hospitalisée dans votre service pour suite d'une greffe hépatique compliquée en post-opératoire immédiat. Vous la voyez en kinésithérapie motrice. Elle présente une immuno-dépression et la précaution complémentaire protectrice de risque intermédiaire a été mise en place. Vous prévoyez de la faire travailler en chambre puis de marcher dans le couloir. Elle dispose d'une sonde urinaire.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de surblouse n'est pas indiqué ici car dans le cas des précautions complémentaires protectrices de risque intermédiaire, chez le patient sortant de sa chambre, il n'est pas nécessaire de mettre une surblouse (à la différence des précautions complémentaires protectrices de risque élevé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 est indiqué ici du fait que le patient se retrouve en milieu partagé ET bénéficie des précautions complémentaires protectrices de risque intermédiaire. C'est l'Appareil de Protection Respiratoire FFP2 qui est indiqué afin de se protéger au mieux des différents germes (aspergillose, pneumocystose, légionellose, ...).\n\nOn peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. Il faudra porter des gants le temps de sécuriser la sonde urinaire, en la mettant dans un sac jaune propre par exemple.\n\nOn peut rappeler les indications du port du masque chirurgical par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical n'est pas indiqué ici (professionel ou patient présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  17: {
    context:
      "M. Rance, 45 ans est hospitalisé dans votre service pour suite d'une greffe cardiaque. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à l'opération et à la douleur. Il présente une immuno-dépression et la précaution complémentaire protectrice de risque élevé a été mise en place. Il n'est pas encombré.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici car le patient reste en milieu non partagé. En revanche s'il devait sortir, il devrait porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici car le patient reste en milieu non partagé. En revanche s'il devait sortir, il devrait porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici du fait que le patient reste en milieu non partagé. En revanche s'il devait sortir de sa chambre il devrait en effet porter un Appareil de Protection Respiratoire FFP2 afin de se protéger des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. On peut rappeler les indications du port du masque chirurgical par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical est indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  18: {
    context:
      "M. Rance, 45 ans est hospitalisé dans votre service pour suite d'une greffe cardiaque. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à l'opération et à la douleur. Il présente une immuno-dépression et la précaution complémentaire protectrice de risque élevé a été mise en place. Il n'est pas encombré. Vous vous sentez le nez pris.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici car le patient reste en milieu non partagé. En revanche s'il devait sortir, il devrait porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici car le patient reste en milieu non partagé. En revanche s'il devait sortir, il devrait porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici du fait que le patient reste en milieu non partagé. En revanche s'il devait sortir de sa chambre il devrait en effet porter un Appareil de Protection Respiratoire FFP2 afin de se protéger des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. On peut rappeler les indications du port du masque chirurgical par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port du masque chirurgical est indiqué car vous présentez des SYMPTÔMES RESPIRATOIRES, surajouté du fait que de base le masque chirurgical est indiqué compte tenu des précautions complémentaires protectrices de risque élevé.\n\nOn peut rappeler les indications du masque chirurgical d'après les précautions standard (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque intermédiaire.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  19: {
    context:
      "M. Rance, 45 ans est hospitalisé dans votre service pour suite d'une greffe cardiaque. Vous le voyez en kinésithérapie motrice en vue de prévenir les complications liées à l'opération et à la douleur. Il présente une immuno-dépression et la précaution complémentaire protectrice de risque élevé a été mise en place. Vous prévoyez de le faire travailler en chambre puis de marcher dans le couloir avec l'équipe.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici compte tenu des précautions complémentaires protectrices de risque élevé car on préconise plutôt une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse est indiqué ici car le patient passe en milieu partagé tandis que s'appliquent les précautions complémentaires protectrices de risque élevé. Il doit donc porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port du masque chirurgical n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP2 est indiqué ici du fait que le patient se retrouve en milieu partagé ET bénéficie des précautions complémentaires protectrices de risque intermédiaire. C'est l'Appareil de Protection Respiratoire FFP2 qui est indiqué afin de se protéger au mieux des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. On peut rappeler les indications du port du masque chirurgical par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port du masque chirurgical n'est pas indiqué ici (professionel ou patient présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  20: {
    context:
      "M. Jean, 65 ans est hospitalisée dans votre service pour suite d'une greffe cardiaque. Vous le voyez en kinésithérapie motrice en vue de prévenir les complications liées à l'opération et à la douleur. Il présente une immuno-dépression et la précaution complémentaire protectrice de risque élevé a été mise en place. Vous prévoyez de le faire travailler en chambre puis de marcher dans le couloir avec l'équipe. Il dispose d'une sonde urinaire.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse n'est pas indiqué ici compte tenu des précautions complémentaires protectrices de risque élevé car on préconise plutôt une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de surblouse est indiqué ici car le patient passe en milieu partagé tandis que s'appliquent les précautions complémentaires protectrices de risque élevé. Il doit donc porter une surblouse VERTE (déperlante) et non une surblouse blanche (imperméable et déperlante), car la surblouse verte offre le même degré de protection pour la situation tout en coûtant moins cher."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port du masque chirurgical n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car il n'est pas assez protecteur pour celui qui le porte. Dans le cas d'un patient à qui s'appliquent les patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé se retrouvant en milieu partagé, celui-ci devra porter un Appareil de Protection Respiratoire FFP2 afin d'être protégé au mieux."
      },

      patient_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP2 est indiqué ici du fait que le patient se retrouve en milieu partagé ET bénéficie des précautions complémentaires protectrices de risque intermédiaire. C'est l'Appareil de Protection Respiratoire FFP2 qui est indiqué afin de se protéger au mieux des différents germes (aspergillose, pneumocystose, légionellose, ...). On peut rappeler les différentes indications de port du Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est indiqué du fait de la manipulation de la SONDE URINAIRE qui représente un risque de contact avec un produit biologique. On peut rappeler les indications du port du masque chirurgical par le professionnel (risque de contact avec un produit nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port du masque chirurgical n'est pas indiqué ici (professionel ou patient présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et les précautions complémentaires protectrices de risque élevé.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  21: {
    context:
      "M. Patriarche, 49 ans, est hospitalisé dans votre service suite à une greffe cardiaque. Vous le voyez pour des séances de kinésithérapie respiratoire à visée de désencombrement et de recrutement des volumes thoraco-pulmonaires. Il présente une immuno-dépression et la précaution complémentaire protectrice de risque élevée est mise en place. Le patient est encombré et ses sécretions sont purulentes. Par ailleurs vous avez une petite coupure à l'index gauche suite à la préparation de votre superbe purée de patates douces hier soir, votre spécialité.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe patient restant dans sa chambre pour la séance, il n'y a pas contact avec un environnement extérieur, donc pas de raison qu'il porte une surblouse. Par ailleurs, s'il devait se retrouver en environnement extérieur, compte tenu des précautions complémentaires protectrices de risque élevé, il faudrait qu'il porte une surblouse verte (déperlante) et non une surblouse blanche (déperlante et imperméable) étant donné que le niveau de protection attendu pour le patient est identique pour les deux blouses mais que la verte à un coût inférieur à la blanche."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe patient restant dans sa chambre pour la séance, il n'y a pas contact avec un environnement extérieur, donc pas de raison qu'il porte une surblouse. Par ailleurs, s'il devait se retrouver en environnement extérieur, compte tenu des précautions complémentaires protectrices de risque élevé, il faudrait qu'il porte une surblouse verte (déperlante) et non une surblouse blanche (déperlante et imperméable) étant donné que le niveau de protection attendu pour le patient est identique pour les deux blouses mais que la verte à un coût inférieur à la blanche."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe patient se trouve dans sa chambre lors de la séance, il n'est pas en environnement extérieur donc il n'a pas besoin de porter de masque. Par ailleurs, s'il devait se retrouver en environnement extérieur, le masque chirurgical ne serait pas indiqué pour la protection car insuffisament protecteur pour son porteur. Le masque indiqué serait le FFP2 compte tenu des précautions complémentaires protectrices de risque élevé."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe patient se trouve dans sa chambre lors de la séance, il n'est pas en environnement extérieur donc il n'a pas besoin de porter de masque. Par ailleurs, s'il devait se retrouver en environnement extérieur, l'Appareil de Protection Respiratoire FFP1 ne serait pas indiqué pour la protection car insuffisament protecteur pour son porteur. Le masque indiqué serait le FFP2 compte tenu des précautions complémentaires protectrices de risque élevé."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe patient se trouve dans sa chambre lors de la séance, il n'est pas en environnement extérieur donc il n'a pas besoin de porter de masque. Par ailleurs, s'il devait se retrouver en environnement extérieur, l'Appareil de Protection Respiratoire FFP2 serait le masque indiqué pour le patient compte tenu des précautions complémentaires protectrices de risque élevé."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port de gants en vinyle par le professionnel est préconisé ici pour deux raisons. La première est le fait qu'il y ai une plaie au niveau de la main du thérapeute, la seconde est que le patient présente des symptômes respiratoires avec ce que cela implique comme risque de contact avec des produits biologiques. On peut rappeler les indications de port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nIci le port du masque chirurgical est indiqué compte tenu du fait que le patient présente des symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nIci le port de lunettes de protection est indiqué compte tenu du risque d'éclaboussure ou de projection de produits biologiques ou nocifs."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires protectrices de risque élevé.\nIci le port d'un tablier imperméable blanc est indiqué compte tenu du risque de projection ou d'aérosolisation de liquide biologique. On peut rappeler les indications de du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  22: {
    context:
      "M. Meuh, 55 ans, est hospitalisé dans votre service. Vous le voyez pour des séances de kinésithérapie respiratoire de désencombrement. Il est encombré et ses sécretions sont purulentes.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants en vinyle par le professionnel est préconisé car il y a un risque de contact avec un produit biologique du fait des expectorations du patient. On peut rappeler les indications de port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port du masque chirurgical est indiqué compte tenu du fait que le patient présente des symptômes respiratoires. On peut rappeler les indications de port de masque chirurgical par le professionel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de lunettes de protection est indiqué ici du fait du risque d'éclaboussure ou de projection de produit biologique ou nocif."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port d'un tablier imperméable blanc est indiqué ici car il y a risque de projection ou d'aérosolisation de produits biologique par le patient. On peut rappeler les indications de port du tablier de protection par le soignant (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  23: {
    context:
      "M. Georges, 58 ans, est hospitalisé dans votre service. Vous le voyez pour des séances de kinésithérapie respiratoire de désencombrement. Il est encombré et ses sécretions sont purulentes. Malheureusement sa toux est inefficace et vous êtes obligé de réaliser une aspiration naso-pharyngée pour pouvoir le désencombrer efficacement.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeler les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nIci le port de gants par le professionnel est préconisé car il y a un risque de contact avec un produit biologique du fait des expectorations du patient, cependant le geste d'aspiration naso-pharyngé est un geste technique et précis et il est plutôt préconisé d'utiliser des gants en latex, ou des gants en nitrile s'il y a un problème d'allergie au latex. On peut rappeler les indications de port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nLe port de gants en latex ou nitrile par le professionnel est pas préconisé compte tenu de la réalisation d'un gest technique et précis qu'est l'aspiration naso-pharyngée. On priviligiera d'abord les gants en latex sauf en cas de problème d'allergie au latex. On peut rappeler les indications du port de gants en nitrile ou latex par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port du masque chirurgical est indiqué compte tenu du fait que le patient présente des symptômes respiratoires. On peut rappeler les indications de port de masque chirurgical par le professionel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port de lunettes de protection est indiqué ici du fait du risque d'éclaboussure ou de projection de produit biologique ou nocif."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard.\nIci le port d'un tablier imperméable blanc est indiqué ici car il y a risque de projection ou d'aérosolisation de produits biologique par le patient. On peut rappeler les indications de port du tablier de protection par le soignant (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  24: {
    context:
      "Mme. Bourru, 48 ans, est hospitalisée dans votre service. Vous la voyez dans le cadre de séances de kinésithérapie respiratoire afin de prévenir les complications d'une opération pulmonaire. Normalement vous ne devriez pas avoir besoin d'entrer en contact avec la cicatrice. Elle n'est pas encombrée et n'a pas de symptômes respiratoires antérieurs à l'opération. Elle est par ailleurs traitée par chimiothérapie et les précautions complémentaires contact et Air ont été mises en place en conséquence.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe patient ne présente pas de symptôme respiratoire, et quand bien même, le patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici car ils ne sont pas suffisants pour se protéger des CYTOSTATIQUES liés au traitement CHIMIOTHÉRAPIQUE du patient. Il faut absolument utiliser des gants en latex ou des gants en nitrile dans ce cas. On peut rappeler les indications de port de gants en vinyle pour le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel est préconisé ici compte tenu du traitement CHIMIOTHÉRAPIQUE du patient. En effet, les gants en vinyle ne sont pas efficaces pour se protéger des CYTOSTATIQUES. On recommande donc en premier lieu l'utilisation de gants en latex, ou en second lieu de gants en nitrile si problème d'allegie. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port de l'Appareil de Protection Respiratoire FFP2 est indiqué car il constitue la meilleure protection contre les CYTOSTATIQUES possiblement présents dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port d'un tablier imperméable blanc est indiqué compte tenu du risque d'aérosolisation de produits nocifs compte tenu du traitement CHIMIOTHÉRAPIQUE. On peut rapeller les indications de port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  25: {
    context:
      "Mme. Bourru, 48 ans, est hospitalisée dans votre service. Vous la voyez dans le cadre de séances de kinésithérapie respiratoire afin de prévenir les complications d'une opération pulmonaire. Normalement vous ne devriez pas avoir besoin d'entrer en contact avec la cicatrice. Elle est très encombrée. Elle est par ailleurs traitée par chimiothérapie et les précautions complémentaires contact et Air ont été mises en place en conséquence.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe patient ne présente pas de symptôme respiratoire, et quand bien même, le patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici car ils ne sont pas suffisants pour se protéger des CYTOSTATIQUES liés au traitement CHIMIOTHÉRAPIQUE du patient. Il faut absolument utiliser des gants en latex ou des gants en nitrile dans ce cas. On peut rappeler les indications de port de gants en vinyle pour le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel est préconisé ici compte tenu du fait que le patient est encombré et qu'il y a un risque de contact avec des produits biologiques, et du traitement CHIMIOTHÉRAPIQUE du patient. En effet, les gants en vinyle ne sont pas efficaces pour se protéger des CYTOSTATIQUES. On recommande donc en premier lieu l'utilisation de gants en latex, ou en second lieu de gants en nitrile si problème d'allegie. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port de l'Appareil de Protection Respiratoire FFP2 est indiqué car il constitue la meilleure protection contre les CYTOSTATIQUES possiblement présents dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient, surajouté du fait que le patient soit encombré et qu'il y a risque de projection de produits biologiques. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le port de lunettes de protection est indiqué car le patient est encombré et qu'il y a un risque de projection de produits biologiques. On peut rappeler les indications de port de lunettes de protections par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port d'un tablier imperméable blanc est indiqué compte tenu du risque d'aérosolisation de produits nocifs compte tenu du traitement CHIMIOTHÉRAPIQUE et du fait que le patient est encombré. On peut rapeller les indications de port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  26: {
    context:
      "M. Rustre, 58 ans, est hospitalisé dans votre service. Vous le voyez dans le cadre de séances de kinésithérapie motrice afin de prévenir les complications d'une opération pulmonaire. Normalement vous ne devriez pas avoir besoin d'entrer en contact avec la cicatrice. Il est très encombré. Il est par ailleurs traité par chimiothérapie et les précautions complémentaires contact et Air ont été mises en place en conséquence. Vous prévoyez de le fait travailler en chambre puis de le faire un peu marcher dans le couloir",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe patient ne présente pas de symptôme respiratoire, et quand bien même, le patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici car ils ne sont pas suffisants pour se protéger des CYTOSTATIQUES liés au traitement CHIMIOTHÉRAPIQUE du patient. Il faut absolument utiliser des gants en latex ou des gants en nitrile dans ce cas. On peut rappeler les indications de port de gants en vinyle pour le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel est préconisé ici compte tenu du traitement CHIMIOTHÉRAPIQUE du patient. En effet, les gants en vinyle ne sont pas efficaces pour se protéger des CYTOSTATIQUES. On recommande donc en premier lieu l'utilisation de gants en latex, ou en second lieu de gants en nitrile si problème d'allegie. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port de l'Appareil de Protection Respiratoire FFP2 est indiqué car il constitue la meilleure protection contre les CYTOSTATIQUES possiblement présents dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient, surajouté du fait que le patient soit encombré et qu'il y a risque de projection de produits biologiques. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.Le port de lunettes de protection n'est pas indiqué ici. On peut rappeler les indications de port de lunettes de protections par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci Le port d'un tablier imperméable blanc est indiqué compte tenu du risque d'aérosolisation de produits nocifs compte tenu du traitement CHIMIOTHÉRAPIQUE. On peut rapeller les indications de port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  27: {
    context:
      "Mme. Moribonde, 68 ans, est hospitalisée dans votre service. Vous la voyez dans le cadre de séances de kinésithérapie respiratoire. Vous ne devriez entrer en contact avec la cicatrice. Elle est traitée par chimiothérapie et les précautions complémentaires spécifiques ont été mises en place. Mais hier soir un diagnostic de grippe a été posé et les précautions complémentaires goutelettes ont été mises en place.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici car ils ne sont pas suffisants pour se protéger des CYTOSTATIQUES liés au traitement CHIMIOTHÉRAPIQUE du patient. Il faut absolument utiliser des gants en latex ou des gants en nitrile dans ce cas. On peut rappeler les indications de port de gants en vinyle pour le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de gants en latex ou nitrile par le professionnel est préconisé ici compte tenu du fait que le patient est potentiellement contaminant et qu'il y a un risque de contact avec des produits biologiques, et du traitement CHIMIOTHÉRAPIQUE du patient. En effet, les gants en vinyle ne sont pas efficaces pour se protéger des CYTOSTATIQUES. On recommande donc en premier lieu l'utilisation de gants en latex, ou en second lieu de gants en nitrile si problème d'allegie. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port du masque chirurgical n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici car insuffisamment protecteur des CYTOSTATIQUES possiblement en suspension dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient. On recommande ici l'utilisation d'un Appareil de Protection Respiratoire FFP2. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nIci Le port de l'Appareil de Protection Respiratoire FFP2 est indiqué car il constitue la meilleure protection contre les CYTOSTATIQUES possiblement présents dans l'air du fait du traitement CHIMIOTHÉRAPIQUE du patient, surajouté du fait que le patient soit potentiellement contaminant. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nIci le port de lunettes de protection est indiqué car le patient est potentiellement contaminant et qu'il y a un risque de projection de produits biologiques. On peut rappeler les indications de port de lunettes de protections par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nIci Le port d'un tablier imperméable blanc est indiqué compte tenu du risque d'aérosolisation de produits nocifs compte tenu du traitement CHIMIOTHÉRAPIQUE et du fait que le patient est potentiellement contaminant. On peut rapeller les indications de port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact, complémentaires Air et complémentaires gouttelettes.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  28: {
    context:
      "M. Palsanbleu, 85 ans, est hospitalisée dans votre service. Vous le voyez dans le cadre de séances de kinésithérapie respiratoire afin de prévenir les complications d'une opération abdominale. De plus un diagnostic de grippe a été posé et les précautions complémentaires goutelettes ont été mises en place.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe patient reste dans sa chambre lors de la séance, donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants en vinyle par le professionnel est  préconisé ici car le patient est contaminant et il y a un risque de contact avec des produits biologiques. On peut rappeler les indications de port de gants en vinyle pour le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port du masque chirurgical est indiqué ici compte tenu des précautions complémentaires gouttelettes et des précautions standard qui présonisent le port du masque chirurgical dans le cas de risque de projection de liquides biologiques. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nIci le port de lunettes de protection est indiqué car il y a un risque de projection de produits biologiques. On peut rappeler les indications de port de lunettes de protections par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nIci Le port d'un tablier imperméable blanc est indiqué compte tenu du risque d'aérosolisation de produits nocifs compte tenu du traitement CHIMIOTHÉRAPIQUE et du fait que le patient est potentiellement contaminant. On peut rapeller les indications de port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  29: {
    context:
      "M. Palsanbleu, 85 ans, est hospitalisée dans votre service. Vous le voyez dans le cadre de séances de kinésithérapie motrices afin de prévenir les complications d'une opération abdominale. De plus un diagnostic de grippe a été posé et les précautions complémentaires goutelettes ont été mises en place. Vous prévoyez de le faire un peu travailler dans sa chambre puis de le faire marcher dans le couloir.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port du masque chirurgical est indiqué ici compte tenu du fait que le patient est contaminant et se retrouve en milieu partagé. Il doit donc porter un masque chirurgical afin de protéger l'environnement."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe savon n'est pas indiqué ici (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants en vinyle par le professionnel n'est pas préconisé ici (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici. On peut rappeler les indications du port de gants en latex ou nitrile par le professionnel (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port du masque chirurgical est indiqué ici compte tenu des précautions complémentaires gouttelettes. On peut rappeler les indications du port de masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici. On peut rappeler les indications du port de Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port de lunettes de protection n'est pas indiqué ici. On peut rappeler les indications de port de lunettes de protections par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires gouttelettes.\nLe port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" n'est pas indiqué ici.\n\nOn peut rappeler les indications du port de ce type d'équipement par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  30: {
    context:
      "M. Rognons, 58 ans, est hospitalisé dans votre service. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à une opération abdominale. Par ailleurs un diagnostic d'infection au clostridium difficile a été posé, les précautions complémentaires contact ont été mises en place en conséquence. Il n'est pas encombré et ne présente pas de symptômes respiratoires antérieurs à l'opération.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe masque chirurgical n'est pas indiqué ici. On peut rappeller les indications du port du masque chirurgical par le patient (patient présentant des symptômes respiratoires et se retrouvant en milieu partagé).\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications d'utilisation du savon neutre par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port du masque chirurgical n'est pas indiqué ici (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de lunettes de protection n'est pas indiqué ici (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port d'un tablier imperméable blanc n'est pas indiqué ici (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT. La surblouse verte est déperlante mais perméable, donc en cas de risque de soin mouillant ou souillant ou avec un risque de projection, on préfèrera utiliser une sublouse BLANCHE ou bien une surblouse verte avec un tablier de protection par dessus. On peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  31: {
    context:
      "M. Neuville, 68 ans, est hospitalisé dans votre service. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à une opération abdominale. Par ailleurs un diagnostic d'infection au clostridium difficile a été posé, les précautions complémentaires contact ont été mises en place en conséquence. Il est encombré et ses sécretions sont purulentes.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe patient présente des symptômes respiratoires mais reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications d'utilisation de savon neutre par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port du masque chirurgical est indiqué compte tenu du fait que le patient présente des symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de lunettes de protection est indiqué du fait du risque de projection de produit biologique. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc est indiqué du fait du risque d'aérosolisation de produit biologique.\n\nRemarque: Ici compte tenu des précautions standard dans la prise en charge d'un patient présentant des symptômes respiratoires, et des précautions complémentaires contact compte tenu d'un clostridium difficilé, il y a deux possibilités, SOIT utiliser UNIQUEMENT une surblouse blanche (déperlante et imperméable), SOIT utiliser une surblouse verte (déperlante uniquement) ainsi qu'un tablier de protection par dessus. \n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nLa surblouse verte est déperlante mais perméable, donc en cas de risque de soin mouillant ou souillant ou avec un risque de projection, comme c'est le cas ici, on préfèrera utiliser une surblouse BLANCHE ou bien une surblouse verte avec un tablier de protection par dessus. On peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  32: {
    context:
      "Mme. Branquinol, 69 ans, est hospitalisée dans votre service. Vous la voyez en kinésithérapie motrice en vue de prévenir les complications liées à une opération thoracique. Un diagnostic d'infection au clostridium difficile a été posé, les précautions complémentaires contact ont été mises en place. Elle ne présente plus de diarrhées. Vous prévoyez de la faire travailler en chambre.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe patient ne présente pas de symptômes respiratoires et reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications d'utilisation de savon neutre par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu du fait que le patient ne présente pas de symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de lunettes de protection n'est pas indiqué. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc n'est pas indiqué compte tenu du fait que la patiente ne présente plus de diarrhées, il n'y a donc pas de risque de projection de produits biologiques. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nLa surblouse verte est indiquée ici en première intention avant la surblouse blanche, car la patiente ne présente plus de diarrhées. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  33: {
    context:
      "Mme. Branquinol, 69 ans, est hospitalisée dans votre service. Vous la voyez en kinésithérapie motrice en vue de prévenir les complications liées à une opération thoracique. Un diagnostic d'infection au clostridium difficile a été posé, les précautions complémentaires contact ont été mises en place. Elle présente encore beaucoup d'épisodes de diarrhée. Vous prévoyez de la faire travailler en chambre.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe patient ne présente pas de symptômes respiratoires et reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications de port de gants en vinyle par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications de l'utilisation de savon neutre par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu du fait que le patient ne présente pas de symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de lunettes de protection n'est pas indiqué. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc est indiqué compte tenu du fait que la patiente présente encore des épisodes de diarrhée, il n'y a donc un risque de projection de produits biologiques. Il faut donc porter le tablier de protection par dessus la surblouse verte (déperlante), ou utiliser directement une surblouse blanche (déperlante et imperméable). En revanche si la patiente ne présentait plus d'épisode de diarrhée, il serait alors recommandé de porter simplement une surblouse verte (déperlante).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nLa surblouse verte est indiquée ici en première intention avant la surblouse blanche, car la patiente ne présente plus de diarrhées. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  34: {
    context:
      "M. Padbol, 70 ans, est hospitalisée dans votre service. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à une opération thoracique. Un diagnostic d'infection au clostridium difficile ET de tuberculose a été posé, les précautions complémentaires contact et Air ont été mises en place. Il ne présente plus d'épisode de diarrhée.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe patient reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications de port de gants en vinyle par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT, ainsi que du fait que le patient présente une tuberculose. On peut rappeler les indications de l'utilisation de savon neutre par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard , complémentaires contact et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu des précautions complémentaires Air. Il n'est pas suffisant pour protéger son porteur, on recommande ici Le port de l'Appareil de Protection Respiratoire FFP1. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 est indiqué ici compte tenu des précautions complémentaires Air et du fait que ce soit une tuberculose sensible aux traitements anti-tuberculeux. On peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le port de lunettes de protection est indiqué du fait du risque de projection de produit biologique. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc est indiqué compte tenu du fait que la patiente présente encore des épisodes de diarrhée ET de la tuberculose, il y a donc un risque de projection de produits biologiques. Il faut donc porter le tablier de protection par dessus la surblouse verte (déperlante), ou utiliser directement une surblouse blanche (déperlante et imperméable). En revanche si la patiente ne présentait plus d'épisode de diarrhée, il serait alors recommandé de porter simplement une surblouse verte (déperlante).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nCompte tenu de la nécessité ici de porter une surblouse et qu'il y a un risque de projection de liquides biologiques nocif du fait de la tuberculose, il est nécessaire de porter une surblouse verte (déperlante) et un tablier de protection, ou alors de porter directement une surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  35: {
    context:
      "M. Padbol, 70 ans, est hospitalisée dans votre service. Vous le voyez en kinésithérapie respiratoire en vue de prévenir les complications liées à une opération thoracique. Un diagnostic d'infection au clostridium difficile ET de tuberculose MULTI-RESISTANTE a été posé, les précautions complémentaires contact et Air ont été mises en place. Il ne présente plus d'épisode de diarrhée.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe patient reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications de port de gants en vinyle par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT, ainsi que du fait que le patient présente une tuberculose. On peut rappeler les indications de l'utilisation de savon neutre par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard , complémentaires contact et complémentaires Air.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu des précautions complémentaires Air. Il n'est pas suffisant pour protéger son porteur, on recommande ici Le port de l'Appareil de Protection Respiratoire FFP1. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est PAS indiqué ici compte tenu des précautions complémentaires Air spécifiques de la tuberculose MULTI-RESISTANTE. Ici c'est un Appareil de Protection Respiratoire FFP2 qui est indiqué.\n\nOn peut rappeler les indications du port de l'Appareil de Protection Respiratoire FFP1 par le professionnel (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nLe port de l'Appareil de Protection Respiratoire FFP2 est indiqué ici compte tenu de la tuberculose MULTI-RESISTANTE.\n\nOn peut rappeler les indications du port du Appareil de Protection Respiratoire FFP2 par le professionnel (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: true,
        explanation:
          "Ce sont les précautions standard, complémentaires contact et complémentaires Air.\nIci le port de lunettes de protection est indiqué du fait du risque de projection de produit biologique. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc est indiqué compte tenu du fait de la tuberculose et du risque de projection de produit biologique nocif. Il faut donc porter le tablier de protection par dessus la surblouse verte (déperlante), ou utiliser directement une surblouse blanche (déperlante et imperméable). En revanche si la patiente ne présentait plus d'épisode de diarrhée, il serait alors recommandé de porter simplement une surblouse verte (déperlante).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nCompte tenu de la nécessité ici de porter une surblouse et qu'il y a un risque de projection de liquides biologiques nocif du fait de la tuberculose, il est nécessaire de porter une surblouse verte (déperlante) et un tablier de protection, ou alors de porter directement une surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  32: {
    context:
      "Mme. Branquinol, 69 ans, est hospitalisée dans votre service. Vous la voyez en kinésithérapie motrice en vue de prévenir les complications liées à une opération thoracique. Un diagnostic d'infection au clostridium difficile a été posé, les précautions complémentaires contact ont été mises en place. Elle ne présente plus de diarrhées. Vous prévoyez de la faire travailler en chambre.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe patient ne présente pas de symptômes respiratoires et reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications d'utilisation de savon neutre par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications du port de gants en vinyle par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu du fait que le patient ne présente pas de symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de lunettes de protection n'est pas indiqué. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc n'est pas indiqué compte tenu du fait que la patiente ne présente plus de diarrhées, il n'y a donc pas de risque de projection de produits biologiques. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nLa surblouse verte est indiquée ici en première intention avant la surblouse blanche, car la patiente ne présente plus de diarrhées. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  },

  36: {
    context:
      "M. Propre, 55 ans, est hospitalisée dans votre service. Vous le voyez en kinésithérapie motrice en vue de prévenir les complications liées à une opération thoracique. Par ailleurs un diagnostic de gale  a été posé, les précautions complémentaires contact ont été mises en place en conséquence. Rien que d'y penser ça vous gratouille par-ci par-là.",

    responses: {
      patient_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le patient avant et après tout contact avec des éléments extérieurs et régulièrement dans la journée.\nIl ne faut pas hésiter à le lui rappeler."
      },

      patient_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE.\n\nOn peut rappeler les indications de l'utilisation de savon par le patient (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson), le fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      patient_MCQ_glove_vinyle: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants par le patient n'est pas indiqué ici."
      },

      patient_MCQ_surblouse_white: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_surblouse_green: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de surblouse par le patient ne s'applique pas ici. On peut rappeler les indications du port de surblouse par le patient (patient à qui s'appliquent les précautions complémentaires protectrices de risque ÉLEVÉ et qui se retrouve en milieu partagé)."
      },

      patient_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe patient ne présente pas de symptômes respiratoires et reste dans la chambre le temps du soin. Il ne se trouve donc pas en milieu partagé donc le port du masque chirurgical n'est pas indiqué ici."
      },

      patient_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici."
      },

      patient_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (patient à qui s'appliquent les précautions complémentaires protectrices de risque intermédiaire OU élevé et qui se retrouve en milieu partagé, présence de travaux)."
      },

      pract_MCQ_SHA: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe SHA doit être appliqué par le professionnel avant ET après tout coutact avec le patient OU son environnement, et notamment après tout port de gants."
      },

      pract_MCQ_soap: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le savon est indiqué compte tenu de la présence de CLOSTRIDIUM DIFFICILE et qu'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT.\n\nOn peut rappeler les indications de port de gants en vinyle par le professionnel (cas de souillure, après un éternuement, cas de clostridium difficile, Gale, Hépatite A ou E, Salmonellose, Shigellose, et bien entendu à l'arrivée dans le service, au départ du service, après être passé aux toilettes, après s'être mouché, avant un repas ou une prise de boisson).\n\nLe fait d'utiliser du savon quand cela n'est pas nécessaire augmente le risque d'irritations cutanées (à la différence du SHA) et est donc contre-productif."
      },

      pract_MCQ_glove_vinyle: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de gants en vinyle par le professionnel est préconisé compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du fait que l'on ENTRE EN CONTACT AVEC LE PATIENT OU SON ENVIRONNEMENT. On peut rappeler les indications de l'utilisation de savon neutre par le professionnel (risque de contact avec un produit biologique ou nocif, de contact avec des lésions ou des muqueuses, de piqûre, lésion cutanée du soignant).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en vinyle coûtent moins cher que ceux en latex, eux-même moins chers que ceux en nitrile. Ils sont indiqués en première intention. En revanche il ne sont pas adaptés aux gestes fins (aspirations naso-pharyngée, ...) ni à la protection contre les cytostatiques (patient sous traitement chimiothérapique)."
      },

      pract_MCQ_glove_latex_nitrile: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de gants en latex ou nitrile par le professionnel n'est pas préconisé ici (aspiration naso-pharyngée ou autre geste fin, protection des cytostatiques face à un patient sous traitement chimiothérapique).\n\nOn recommande de changer de gants entre chaque patient, et lors d'un soin chez un même patient en passant d'un site contaminé à un autre ou si le gant est souillé ou perforé.\n\nRemarque: les gants en nitrile coûtent plus cher que ceux en latex, eux-même plus chers que ceux en vinyle. Dans le cas où les gants en vinyle sont contre-indiqués, on préconisera en premier lieu les gants en latex SAUF SI intolérance au latex par le patient ou le praticien. Enfin, à la différence des gants en vinyle, ceux-ci sont indiqués pour la réalisation de gestes fins et la protection contre les cytostatiques."
      },

      pract_MCQ_standard_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port du masque chirurgical n'est pas indiqué ici compte tenu du fait que le patient ne présente pas de symptômes respiratoires. On peut rappeler les indications du port du masque chirurgical par le professionnel (professionnel présentant des symptômes respiratoires, risque d'aerosolisation de produits biologiques, infectieux ou nocifs, précautions complémentaires gouttelette, précautions complémentaires protectrices de risque élevé).\nCEPENDANT l'odeur dans la chambre compte tenu de l'infection au clostridium difficile peut être inconfortable pour le professionnel et c'est pourquoi il peut être intéressant d'utiliser un masque chirurgical. Mais ce sera pour des raisons de confort et non de recommandations liées à l'hygiène.\n\nOn recommande de mettre le masque chirurgical dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner (recouvrant NEZ, BOUCHE et MENTON) et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque chirurgical détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp1_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP1 n'est pas indiqué ici (tuberculose sensible aux traitements anti-tuberculeux, pathologie hautement infectieuse, précautions complémentaires air).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_ffp2_mask: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nLe port de l'Appareil de Protection Respiratoire FFP2 n'est pas indiqué ici (tuberculose multi-résistante aux anti-tuberculeux, pathologie hautement infectieuse, patient sous traitement chimiothérapique, précautions complémentaires air spécifique).\n\nOn recommande de mettre le masque dès sa sortie de son contenant, après la désinfection des mains aux SHA, de correctement le positionner et de ne plus le toucher avant la fin du soin. A la fin du soin, de le retirer PUIS de désinfecter les mains au SHA, le masque étant potentiellement contaminant.\n\nEnfin il faut savoir que le fait de toucher la partie filtrante du masque détériore les fibres et diminue très fortement son efficacité. C'est pourquoi il ne doit être touché QUE lors de la mise ET lors du retrait sous peine de perdre une grande part de son efficacité."
      },

      pract_MCQ_protection_glasses: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port de lunettes de protection n'est pas indiqué. On peut rappeler les indications du port de lunettes de protection par le professionnel (risque d'éclaboussure ou de projection de produit biologique ou nocif)."
      },

      pract_MCQ_apron: {
        value: false,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'un tablier imperméable blanc est indiqué compte tenu du fait que la patiente présente encore des épisodes de diarrhée, il n'y a donc un risque de projection de produits biologiques. Il faut donc porter le tablier de protection par dessus la surblouse verte (déperlante), ou utiliser directement une surblouse blanche (déperlante et imperméable). En revanche si la patiente ne présentait plus d'épisode de diarrhée, il serait alors recommandé de porter simplement une surblouse verte (déperlante).\n\nOn peut rappeler les indication du port du tablier de protection par le professionnel (soin potentiellement souillant ou mouillant, risque de projection ou d'aerosolisation de produit biologique ou nocif).\n\nRemarque: les tabliers destinés aux soignants sont de couleur blanche tandis que ceux destinés aux ASH sont bleus."
      },

      pract_MCQ_surblouse_green: {
        value: true,
        explanation:
          "Ce sont les précautions standard et complémentaires contact.\nIci le port d'une surblouse verte (déperlante) ou blanche (déperlante et imperméable), encore appelés \"blouse de protection hydrophobes non stériles à manches longues\" est indiqué, compte tenu de la présence de CLOSTRIDIUM DIFFICILE et du contact avec le patient et son ENVIRONNEMENT.\n\nLa surblouse verte est indiquée ici en première intention avant la surblouse blanche, car la patiente ne présente plus de diarrhées. En revanche si la patiente présentait encore des épisodes de diarrhée, il serait alors recommandé de porter un tablier de protection par dessus la surblouse verte (simplement déperlante), ou alors de porter directement un surblouse blanche (déperlante et imperméable).\n\nOn peut rappeler les indications de port d'une surblouse par le professionnel (soin potentiellement souillant ou mouillant avec un risque de projection ou d'aerosolisation de produit biologique ou nocif plus important que pour le port du tablier, ou dont les conséquences sont plus graves, précautions complémentaires spécifiques d'agents alcoolo-résistants comme le clostridium difficile ou la gale)."
      }
    }
  }
};
