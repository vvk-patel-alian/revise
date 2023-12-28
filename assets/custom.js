$(document).ready(function() {
  // Function to get the variant ID dynamically
  function getVariantID() {
    // Your logic to fetch and return the variant ID dynamically
    // For example:
    return 'YOUR_DYNAMIC_VARIANT_ID_HERE';
  }

  // Add a click event listener to the Add to Cart button
  $(document).on('click', '#add-to-cart-button', function(e) {
    e.preventDefault(); // Prevent the default action of the button

    // Get the variant ID dynamically
    var variantID = getVariantID();

    // Create the JSON payload to add the product to the cart
    var formData = {
      items: [
        {
          id: variantID,
          quantity: 1 // You can change the quantity as needed
        }
      ]
    };

    // Use jQuery AJAX to add the product with the variant ID to the cart
    $.ajax({
      type: 'POST',
      url: '/cart/add.js', // Shopify cart endpoint
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function(response) {
        // Handle the success response here if needed
        console.log('Product added to cart:', response);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        // Handle any errors that occur during the AJAX request
        console.error('Error adding product to cart:', errorThrown);
      }
    });
  });
});
