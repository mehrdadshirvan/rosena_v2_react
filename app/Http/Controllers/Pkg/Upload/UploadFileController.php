<?php


namespace App\Http\Controllers\Pkg\Upload;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\Validator;

class UploadFileController extends Controller
{

    public static function upload($file)
    {
        if (empty($file)) return null;

        // Validate the file
        $validator = Validator::make(['file' => $file], [
            'file' => 'required|file|max:20480|mimes:pdf,png,jpeg,jpg,doc',
            // Validate for 20MB, PDF, and image types
        ]);

        // Check if validation failed
        if ($validator->fails()) return null;


        // Proceed with upload if validation passes
        $size = $file->getSize(); // Get file size
        $type = $file->getClientMimeType(); // Correct method to get MIME type

        // Store the file
        $url = $file->store('upload/' . date('Ym'), ['disk' => 'upload']);

        return [
            'url' => $url,
            'size' => $size,
            'type' => $type
        ];
    }

}
