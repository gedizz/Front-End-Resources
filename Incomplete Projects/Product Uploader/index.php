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

<form id="product" type="hidden" action="#post.php" method="post"></form>

	<div class="product-info">
		<div class="section-header">
			<h1>Product Information</h1>
		</div>
		<div class="product-header">
			<button form="product" type="submit" id="publish">Publish</button>
			<h1>Add new product</h1>
			<button>Add Media</button>
			<label for="visible">Product Visible</label>
			<input form="product" type="checkbox" name="visible" id="visible">
			
		</div>
		<input form="product" type="text" name="product-name" placeholder="Product name...">
		<h1>Full Description</h1>
		<textarea form="product" type="textarea" name="description" placeholder="Full Description here..." rows="20"></textarea>
		<h1>Short Description</h1>
		<textarea form="product" type="textarea" name="shortdescription" placeholder="Short description here..." rows="10"></textarea>
	</div>
			
	<div class="seo">
		<div class="section-header">
			<h1>SEO Information</h1>
		</div>
		<h1>SEO Title</h1>
		<input form="product" type="text" name="seo-title" placeholder="SEO title...">
		<h1>Slug</h1>
		<input form="product" type="text" name="seo-slug" placeholder="SEO slug...">
		<h1>Meta Description</h1>
		<textarea form="product" type="textarea" name="meta-description" placeholder="Meta description here..." rows="15"></textarea>
	</div>

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
					gen
				</div>
				<div class="inventory">
					inv
				</div>
				<div class="attributes">
					attr
				</div>
				<div class="category">
					cat
				</div>
				<div class="additional-information">
					add
				</div>

			</div>
		</div>

		
		
	</div>
	<script src="product-data.js"></script>




</main>


	
    
</body>
</html>