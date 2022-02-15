{% if first_time_accessed %}
	<script>                               
	window.dataLayer = window.dataLayer || [];                                            
	var shipping_price = '{{shipping_price | money_without_currency }}';
	shipping_price  = shipping_price.replace(",", ".");
	var total_price = '{{total_price | money_without_currency }}';
	total_price  = total_price.replace(",", ".");
	var tax_price = '{{tax_price | money_without_currency }}';
	tax_price  = tax_price.replace(",", ".");
	window.dataLayer.push({
	'page_type': 'purchase',
	'event': 'analyzify_purchase',
	'currency': "{{ shop.currency }}",
	'totalValue': total_price,
	'shipping': shipping_price,
	'tax': tax_price,
	'payment_type': '{{order.transactions[0].gateway}}',
	'transaction_id': "{{order.name}}",
	});
 	</script> 
 {% endif %}
