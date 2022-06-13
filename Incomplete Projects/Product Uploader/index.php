<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Product Uploader</title>
</head>
<body>

<!-- Aglorithm
Product Info Section:
    - Product Name
    - Full Description
    - Short description (for product card)
    - Add Media:
        - Upload files
        - pull from current library of images
    - Product Visible button:
        - Yes or no
    

SEO Section:
    - slug
    - meta description

Product Data Section:
    - General:
        - Regular price
        - sale price
        - tax status
        - tax class
    - Inventory:
        - SKU
        - Manage stock y/n
    - Attributes:
        - Add size, color, etc to product
    - Categories:
        - Add new category
        - Select from current
    - Additional Information:
        - Brewery/Cidery
        - Style
        - ABV
        - IBU

-->

<div class="upload">
    <h1>Upload Product</h1>
    <form action="home" method="post">
        
        <label>Product Name:<input type="text" name="title"></label>
        <label>Product Description:<input type="text" name=description></label>
        <input type="file" name="uploader" multiple="multiple">
        <input type="submit" value="Submit">
    </form>

</div>

	
    
</body>
</html>