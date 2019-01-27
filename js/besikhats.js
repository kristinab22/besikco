//black/red snapback
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
        id: [1393486168112],
        node: document.getElementById('product-component-1548611263852'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//navy blue snap back/grey/black
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
        id: [384401113126],
        node: document.getElementById('product-component-1548611872033'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//besik & co snapback hat - grey/white
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
        id: [384309559334],
        node: document.getElementById('product-component-1548612615408'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//be snap back black/grey/red
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
        id: [384385941542],
        node: document.getElementById('product-component-1548613017799'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//be snap back black red accent
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
        id: [384367722534],
        node: document.getElementById('product-component-1548613229031'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//be white be snap back
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
        id: [384327745574],
        node: document.getElementById('product-component-1548613473449'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
//be snap back black red logo
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
        id: [384318767142],
        node: document.getElementById('product-component-1548613780850'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });
    });
  }
})();
/*]]>*/
