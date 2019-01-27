//white beanie - blue logo yellow accent
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2189253902384],
        node: document.getElementById('product-component-1548021695555'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//grey besik beanie - yellow accent
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2174608703536],
        node: document.getElementById('product-component-1545429421413'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//red keep it besik beanie
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2174607786032],
        node: document.getElementById('product-component-1545429040025'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//white beanie w logo
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2165854339120],
        node: document.getElementById('product-component-1544128988967'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//green beanie white besik
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2165833302064],
        node: document.getElementById('product-component-1544128396090'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//grey besik beanie
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2156889997360],
        node: document.getElementById('product-component-1543079345028'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//burgundy beanie
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2156890652720],
        node: document.getElementById('product-component-1543079464117'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//black be beanie
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2156892717104],
        node: document.getElementById('product-component-1543079600230'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//navy blue be beanie w/ circle
/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'besik.myshopify.com',
      storefrontAccessToken: 'b48d63181663503a28908895459f7bd4',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [2156895928368],
        node: document.getElementById('product-component-1543079752977'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"button":true},"text":{"title":"Your Shopping Cart","total":"TOTAL","notice":"Tax and discounts are included with purchase."},"styles":{"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}},"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"toggle":{"styles":{"toggle":{":hover":{"background-color":"#6ca44e"},":focus":{"background-color":"#6ca44e"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
