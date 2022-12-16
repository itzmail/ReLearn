<?php

/*
* Attribute adalah menambahkan metadata terhadap kode program yang kita buat
* Fiture ini adalah fitur yang sanget baru sekali di PHP, dan memungkinkan fitur ini bakal diadopsi sangat banyak oleh framework=faremwork di PHP di masa yang akan datang
* Fitur ini jika di bahasa pemrogram seperti Java bernama Annotation, Attributes di C# atau Decorator di Python dan JavaScript
* */

#[Attribute]
class NotBlank {
  
}

class LoginRequest
{
  #[NotBlank]
  public string $username;

  #[NotBlank]
  public string $password;
}
