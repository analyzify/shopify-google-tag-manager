	<script>                               
window.analyzifyProductPageHandlePublic = function(){
        var productName = "{{ product.title | remove: "'" | remove: '"' }}";
        var productId = "{{ product.id }}";
        var productPrice = "{{ product.variants.first.price | times: 0.01 }}";
        var productSku = "{{ product.selected_or_first_available_variant.sku | remove: "'" | remove: '"' }}";
        var productCollection = "{{ product.collections.last.title | remove: "'" | remove: '"' }}";
        
        window.dataLayer.push({
          event: 'analyzify_productDetail',
          name: productName,
          id: productId,
          price: productPrice,
          currency: "{{ shop.currency }}",
          sku: productSku,
          category: productCollection,
          variant_id: "{{ product.selected_variant.id | default: product.variants[0].id }}"
        });
	      {% case template_name %}
       
        {% when 'product' %}
          analyzifyProductPageHandlePublic()

      {% endcase %}
	</script>                               
