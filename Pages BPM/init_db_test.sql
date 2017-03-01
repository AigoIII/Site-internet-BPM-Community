CREATE  TABLE `utilisateur` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `pseudo` VARCHAR(50) NOT NULL,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL ,
  `groupe` VARCHAR(10) NULL,
  `motdepasse` VARCHAR(100) NOT NULL ,
  `admin` BIT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) );
  
