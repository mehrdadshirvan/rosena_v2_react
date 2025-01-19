<?php

namespace App\Http\Controllers\Pkg\OpenAi;

use App\Http\Controllers\Controller;

class OpenAiController extends Controller
{

    public function __construct($message) {
        $this->middleware('auth');
    }


    public static function send($message)
    {
        $url = "https://api.openai.com/v1/chat/completions";

        // The data you want to send in the request
        //gpt-4o-mini
        $data = [
            "model" => "gpt-4o-mini",
            "store" => true,
            "messages" => [
                [
                    "role" => "user",
                    "content" => $message
                ]
            ]
        ];

        // Initialize a cURL session
        $ch = curl_init($url);

        // Set cURL options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Receive response as a string
        curl_setopt($ch, CURLOPT_POST, true); // Set the method to POST
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Content-Type: application/json",
            "Authorization: Bearer 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"
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        // Execute the cURL request
        $response = curl_exec($ch);

        // Check for errors
        if ($response === false) {
            echo 'Curl error: ' . curl_error($ch);
        } else {
            // Print the response
           $data = json_decode($response, true);
        }

        // Close the cURL session
        curl_close($ch);

        return $data;
    }


}
