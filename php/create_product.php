<?php
    $title = $_POST["product-title"];
    $type = $_POST["product-type"];
    $products_array = array(
        "product"=>array(
            "title"=> $title,
            "body_html"=> "",
            "vendor"=> "",
            "product_type"=> $type,
            "published"=> false ,
            "variants"=>array(
                            array(
                            "sku"=>"",
                            "taxable"=>false,
                            )
            )
        )
    );
    
    echo "<br />";
    $url = "https://moy-sofas.myshopify.com/admin/api/2022-07/products.json";
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Shopify-Access-Token: '));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_VERBOSE, 0);
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($products_array));
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec ($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close ($curl);
    echo($response);
    echo $httpcode;

    if($httpcode == 201){
        echo("<br><br>");
        echo("Product added successfully");
    } else {
        echo("<br><br>");
        echo("Adding product failed - please seek support");
    }
    
?>
