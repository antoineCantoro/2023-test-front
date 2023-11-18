<?php
// PUNK Client
require '../vendor/autoload.php';
use GuzzleHttp\Client;

Class Punk {

  public function __construct()
  {
    $this->client = new Client([
        'base_uri' => 'https://api.punkapi.com/v2/',
    ]);
  }

  // Get latests 60 beers
  public function getBeers()
  {
    // What I've to do ?
    $response = $this->client->request('GET', 'beers?per_page=60');
    $data = json_decode($response->getBody(), true);
    return $data;
  }

  // Get specific beer informations
  public function getBeer($id) {
    $response = $this->client->request('GET', 'beers/' . $id);
    $data = json_decode($response->getBody(), true);
    return $data;
  }
}

