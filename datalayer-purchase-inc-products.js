{% if first_time_accessed %}
	<script>                               
	window.dataLayer = window.dataLayer || [];                                            
	var shipping_price = '{{shipping_price | money_without_currency }}';
	shipping_price  = shipping_price.replace(",", ".");
	var total_price = '{{total_price | money_without_currency }}';
	total_price  = total_price.replace(",", ".");
	var tax_price = '{{tax_price | money_without_currency }}';
	tax_price  = tax_price.replace(",", ".");
  var orderItemsName = []            
  var orderItemsPrice = []
  var orderItemsQuantity = []
  var totalQuantity = 0;

  {% for line_item in line_items %}
      orderItemsName.push( '{{ line_item.product.title | remove: "'" | remove: '"'}}')
      orderItemsPrice.push('{{ line_item.price | times: 0.01 }}');
      orderItemsQuantity.push('{{ line_item.quantity }}');
     totalQuantity +=  {{ line_item.quantity }};
  {% endfor %}
	window.dataLayer.push({
	'page_type': 'purchase',
	'event': 'analyzify_purchase',
	'currency': "{{ shop.currency }}",
	'totalValue': total_price,
	'shipping': shipping_price,
	'tax': tax_price,
	'payment_type': '{{order.transactions[0].gateway}}',
	'transaction_id': "{{order.name}}",
  'name': orderItemsName,
  'price': orderItemsPrice,
  'quantity': orderItemsQuantity,
	});
 	</script> 
 {% endif %}

