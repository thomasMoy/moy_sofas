<?php
    $productID = $_POST["product-id"];
    $productTitle = $_POST["product-title"];
    $productType = $_POST["product-type"];

    if ($productTitle == null){
        $productTitle = "";
    }

    if ($productType == null){
        $productType = "";
    }
    $products_array = array(
        "product"=>array(
            "id"=>$productID,
            "title"=> $productTitle,
            "product_type"=> $productType
            
        )
    );
    echo json_encode($products_array);
    echo "<br />";
    $url = "https://moy-sofas.myshopify.com/admin/api/2022-07/products/7715354018039.json";
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Shopify-Access-Token: '));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_VERBOSE, 0);
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($products_array));
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec ($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close ($curl);
    echo($response);
    echo $httpcode;
    
    if($httpcode == 200){
        echo("<br><br>");
        echo("Product updated successfully");
    } else {
        echo("<br><br>");
        echo("Updating product failed - please seek support");
    }
    
?>
