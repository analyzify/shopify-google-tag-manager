{% comment %}
Analyzify - Enhanced Conversions Tag V1.3
SECTION 1: ONLY EDIT HERE
Add your relevant values here. Detailed guideline: https://analyzify.app/hub/google-ads-enhanced-conversion-setup-on-shopify/
{% endcomment %}


{% assign gads_aw_id = "AW-111111111" %}
{% assign gads_send_to = "AW-111111111/conversionlabelhere" %}
{% assign product_id = "product_id_variant-id" %}
{% assign product_id_prefix = "shopify_us_" %}
{% assign gads_merchant_id = "222222222" %}
{% assign gads_feed_country = "US" %}
{% assign gads_feed_language = "EN" %}


{% comment %}
SECTION 2: DO NOT EDIT BELOW - ONLY EDIT SECTION 1
{% endcomment %}

<!-- Global site tag (gtag.js) - Google Analytics -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ gads_aw_id }}', { 'allow_enhanced_conversions': true });
</script>
{% if first_time_accessed %}

    <!-- START Google Ads Enhanced Conversions  V1.3-->
    <script>
    var enhanced_conversion_data = {
    {% unless checkout.email == blank %}"email": "{{ checkout.email }}",{% endunless %}
    {% unless billing_address.phone == blank %}"phone_number": "{{ billing_address.phone }}",{% endunless %}
    {% unless billing_address.first_name == blank %}"first_name": "{{ billing_address.first_name }}",{% endunless %}
    {% unless billing_address.last_name == blank %}"last_name": "{{ billing_address.last_name }}",{% endunless %}
    "home_address": {
        {% unless billing_address.street == blank %}"street": "{{ billing_address.street }}",{% endunless %}
        {% unless billing_address.city == blank %}"city": "{{ billing_address.city }}",{% endunless %}
        {% unless billing_address.province_code == blank %}"region": "{{ billing_address.province_code }}",{% endunless %}
        {% unless billing_address.zip == blank %}"postal_code": "{{ billing_address.zip }}",{% endunless %}
        {% unless billing_address.country_code == blank %}"country": "{{ billing_address.country_code }}"{% endunless %}
    }
    };
    </script>
      <!-- END Google Ads Enhanced Conversions  V1.3-->

    <!-- START Cart data V1.3-->
    <script type="text/javascript">
    gtag('event', 'purchase', {
        'send_to': '{{ gads_send_to }}',
        'transaction_id': '{{ order.order_number }}',
        'value': Shopify.checkout.total_price_set.presentment_money.amount,
        'currency': Shopify.checkout.total_price_set.presentment_money.currency_code,
        'discount': discount(),
        'aw_merchant_id': {{ gads_merchant_id }},
        'aw_feed_country': '{{ gads_feed_country }}',
        'aw_feed_language': '{{ gads_feed_language }}',
        'items': items()
    });
    
    function discount(){
        return (Shopify.checkout.discount == null) ? 0 : Shopify.checkout.discount.amount;
    }

    function items(){
        var jsonarray = [];
        for (var line_item_count = 0; line_item_count < Shopify.checkout.line_items.length; line_item_count++){
            jsonarray.push({
                id: {% if product_id == "product_id_variant-id" %}'{{ product_id_prefix }}' + Shopify.checkout.line_items[line_item_count].product_id + '_' + Shopify.checkout.line_items[line_item_count].variant_id{% elsif product_id == 'variant-id' %}Shopify.checkout.line_items[line_item_count].variant_id{% elsif product_id == 'sku' %}Shopify.checkout.line_items[line_item_count].sku{% endif %},
                quantity: Shopify.checkout.line_items[line_item_count].quantity,
                price: Shopify.checkout.line_items[line_item_count].line_price
            })
        }
        return jsonarray;
    }
    </script>
    <!-- END Cart data V1.3-->
{% endif %}
{% comment %}
END Analyzify - Enhanced Conversions Tag V1.3 Detailed guideline: https://analyzify.app/hub/google-ads-enhanced-conversion-setup-on-shopify/
{% endcomment %}
