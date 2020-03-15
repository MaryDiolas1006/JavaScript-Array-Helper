var products = [
    { nme: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruit'}
  ];
  
  //for Loop
  
  var filteredProducts =[];
  
  for (var i = 0; i < products.length; i++) {
     if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
  
     }
  }

  console.log('filteredProducts = ', filteredProducts);

  
  
  //FILTER
  const a = products.filter(function(product){
      return product.type === 'fruit'
  });

  console.log('a = ', a);
  