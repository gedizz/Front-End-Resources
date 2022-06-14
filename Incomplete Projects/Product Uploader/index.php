<?php 

if(strtoupper($_SERVER['REQUEST_METHOD']) === 'POST') {
    require 'includes/conn.php';
	if (isset($_POST['visible'])) {
		$visible = 1;
	} else {
		$visible = 0;
	}
    $name = $_POST['productname'];
	$full_desc = $_POST['desc'];
	$short_desc = $_POST['shortdesc'];
	$seo_title = $_POST['seotitle'];
	$seo_slug = $_POST['seoslug'];
	$meta_desc = $_POST['metadesc'];
	$price = $_POST['price'];
	$sale_price = $_POST['saleprice'];
	$tax_status = $_POST['taxstatus'];
	$tax_class = $_POST['taxclass'];
	$sku = $_POST['sku'];
	if (isset($_POST['managestock'])) {
		$manage_stock = 1;
	} else {
		$manage_stock = 0;
	}
	$stock_status = $_POST['stockstatus'];
	$brewery = $_POST['brewery'];
	$style = $_POST['style'];
	$abv = $_POST['abv'];
	$ibu = $_POST['ibu'];


    $sql = 'INSERT INTO product_info (visibility, name, full_desc, short_desc, seo_title, seo_slug, seo_meta_desc, price, sale_price, tax_status, tax_class, sku, stock_managed, stock_status, brewery, style, abv, ibu) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    $statement = $pdo->prepare($sql)->execute([$visible, $name, $full_desc, $short_desc, $seo_title, $seo_slug, $meta_desc, $price, $sale_price, $tax_status, $tax_class, $sku, $manage_stock, $stock_status, $brewery, $style, $abv, $ibu]);

}


?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Product Uploader</title>
</head>

<!-- 
==== Layout ====

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
	  - SEO title
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
<body>

<main>

<form id="product" type="hidden" action="index.php" method="post"></form>

	<div class="product-info">
		<div class="section-header">
			<h1>Product Information</h1>
		</div>
		<div class="product-header">
			<button form="product" type="submit" id="publish">Publish</button>
			<h1>Add new product</h1>
			<button>Add Media</button>
			<label for="visible">Product Visible</label>
			<input form="product" type="checkbox" name="visible" id="visible" checked="checked">
			
		</div>
		<input form="product" type="text" name="productname" placeholder="Product name...">
		<h1>Full Description</h1>
		<textarea form="product" type="textarea" name="desc" placeholder="Full Description here..." rows="20"></textarea>
		<h1>Short Description</h1>
		<textarea form="product" type="textarea" name="shortdesc" placeholder="Short description here..." rows="10"></textarea>
	</div>
			
	<div class="seo">
		<div class="section-header">
			<h1>SEO Information</h1>
		</div>
		<h1>SEO Title</h1>
		<input form="product" type="text" name="seotitle" placeholder="SEO title...">
		<h1>Slug</h1>
		<input form="product" type="text" name="seoslug" placeholder="SEO slug...">
		<h1>Meta Description</h1>
		<textarea form="product" type="textarea" name="metadesc" placeholder="Meta description here..." rows="15"></textarea>
	</div>

	<!-- 
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

	<div class="product-data">

		<div class="section-header">
			<h1>Product Data</h1>
		</div>

		<div class="product-data-container">
			<div class="sidebar">
				<a class="active" id="general">General</a>
				<a id="inventory">Inventory</a>
				<a id="attributes">Attributes</a>
				<a id="category">Category</a>
				<a id="additional-information">Additonal Information</a>
			</div>

			<div class="data">

				<div class="general">
					<div class="labels">
						<p>Regular price ($)</p>
						<p>Sale price ($)</p>
						<p>Tax status</p>
						<p>Tax class</p>
					</div>
					<div class="inputs">
						<input form="product" type="text" name="price" placeholder="Regular price...">
						<input form="product" type="text" name="saleprice" placeholder="Sale price...">
						<select form="product" name="taxstatus">
							<option value="Taxable" selected="selected">Taxable</option>
							<option value="Shipping Only">Shipping Only</option>
							<option value="None">None</option>
						</select>
						<select form="product" name="taxclass">
							<option value="Standard" selected="selected">Standard</option>
							<option value="Reduced">Reduced</option>
							<option value="Zero">Zero</option>
						</select>
					</div>
				</div>
				<div class="inventory">
				<div class="labels">
						<p>SKU</p>
						<p>Manage Stock?</p>
						<p>Stock status</p>
					</div>
					<div class="inputs">
						<input form="product" type="text" name="sku" placeholder="SKU...">
						<label>
							<input form="product" type="checkbox" name="managestock" checked="checked">
							Enable stock management at product level
						</label>
						<select form="product" name="stockstatus">
							<option value="In stock" selected="selected">In stock</option>
							<option value="Out of stock">Out of stock</option>
							<option value="On Backorder">On backorder</option>
						</select>
					</div>
				</div>

				<!-- Needs a lot of JS and formatting-->
				<div class="attributes">
					attr
				</div>
				<!-- Needs a lot of JS and formatting-->
				<div class="category">
					cat
				</div>
				<!-- 
				- Additional Information:
					- Brewery/Cidery
					- Style
					- ABV
					- IBU
				-->
				<div class="additional-information">
					<div class="labels">
						<p>Brewery/Cidery</p>
						<p>Style</p>
						<p>ABV</p>
						<p>IBU</p>
					</div>
					<div class="inputs">
						<input form="product" type="text" name="brewery" placeholder="Brewery name...">
						<input form="product" type="text" name="style" placeholder="Style...">
						<input form="product" type="text" name="abv" placeholder="ABV...">
						<input form="product" type="text" name="ibu" placeholder="IBU...">
					</div>
				</div>

			</div>
		</div>

		
		
	</div>
	<script src="product-data.js"></script>

<!-- Popups -->


</main>


	
    
</body>
</html>