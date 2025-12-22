<?php

namespace hearlov\webhook;

use pocketmine\scheduler\AsyncTask;

/**
 * @AsyncWebhookSender
 *
 * EN: This software was developed by hearlov. It works with PHP PocketMine 5.0+ software!
 * TR: Bu yazılım hearlov tarafından üretilmiştir. PHP PocketMine 5.0+ yazılımlarında çalışır!
 */
class AsyncWebhookSender extends AsyncTask{
	
    public function __construct(
	private string $url,
	private string $json
	){
    }

    public function onRun(): void{
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $this->url);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $this->json);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($curl);
    }

}