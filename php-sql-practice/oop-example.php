<?php

class Customer{
  private $id;
  private $name;
  private $email;
  private $balance;

  public function __construct($id, $name, $email, $balance){
    $this->id       = $id;
    $this->name     = $name;
    $this->email    = $email;
    $this->balance  = $balance;
  }

  // public function getEmail(){
  //   return $this->email;
  // }
}

// $theCustomer = new Customer(1, 'Otton Fernandez', 'ottongabriel@gmail.com', 0);
// echo $customer->getEmail();

class Subscriber extends Customer{
  public $plan;

  public function __construct($id, $name, $email, $balance, $plan){
    parent::__construct($id, $name, $email, $balance);
    $this->plan = $plan;
  }
}

$theSubscriber = new Subscriber(1, 'Otton Fernandez', 'ottongabriel@gmail.com', 0, 'pro');
echo $customer->getEmail();

echo $subscriber->getEmail()

/////////////////////////////////////////////


class User{
  public $useranme;
  public $password;
  public static $passwordLength = 5;

  public static function getPasswordLength(){
    return self::$passwordLength;
  }
}

echo User::$getPasswordLength;


?>