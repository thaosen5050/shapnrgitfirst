const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing : false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null , title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode= req.query.edit;
  if (!editMode){
    return res.redirect('/');
  }
  const prodId=req.params.productId;
  Product.findById(prodId , product=>{
    if(!product){
      return res.redirect('/');
    }
    
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product : product
    });
  })
};

exports.postEditProduct = (req,res,next)=>{
  const prodID=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedImageUrl=req.body.imageUrl;
  const updatedPrice=req.body.price;
  const updatedDesc=req.body.description;
  const updatedProduct=new Product(prodID , updatedTitle, updatedImageUrl, updatedDesc , updatedPrice);
  updatedProduct
  .save()
  .then(()=>{
    res.redirect('/admin/products')
  })
  .catch(err => console.log(err));
  };

exports.postDeleteProduct = (req,res,next)=>{
  const prodId=req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
