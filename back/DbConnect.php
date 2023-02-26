<?php

/** Database Connection **/

class dbConnect {
  private $server = 'localhost';
  private $dbname = 'restaurant_chambery';
  private $user = 'root';
  private $password = 'NicoJuju69';

  public function connect() {

    $dateErr = date("j F Y : H:m:s");

    try {
      $pdo = new PDO('mysql:host='.$this->server.',dbname='.$this->dbname, $this->user, $this->password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
      file_put_contents('./log/errorsConnectDB.php', $dateErr.' : '.$e->getMessage(), FILE_APPEND);
      echo 'erreur de connexion à la base de données';
    }
    
  }
}