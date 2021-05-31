const mysqlPromise = require('../config/db');

const productsModel = {
    productsList: async function(params) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`SELECT * FROM products WHERE del_flg = '0' ORDER BY id DESC LIMIT ?, ?`, [params.offset, params.limit]);
        connection.release();
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
      return res.length > 0 ? res : null;
    },
    productDetail: async function(id) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`SELECT * FROM products WHERE id = ?`, [id]);
        connection.release();
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
      return res.length > 0 ? res[0] : null;
    },
    productByLocation: async function(location,params) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`SELECT * FROM products WHERE location_name = ? ORDER BY id DESC LIMIT ?, ?`, [location,params.offset, params.limit]);
        connection.release();
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
      return res.length > 0 ? res[0] : null;
    },
    saveProduct: async function(product) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`INSERT INTO products (location_name, catalog_name, color, size, quantity) VALUES (?, ?, ?, ?, ?)`, [product.location_name, product.catalog_name, product.color, product.size, product.quantity]);
        connection.release();
        product.id = res.insertId;
        return res;
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
    },
    updateProduct: async function(product) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`UPDATE products SET location_name = ?, catalog_name = ?, color = ?, size = ?, quantity = ? WHERE (id = ? )`, [product.location_name, product.catalog_name, product.color, product.size, product.quantity, product.id]);
        connection.release();
        return res;
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
    },
    deleteProduct: async function(id) {
      const connection = await mysqlPromise.DATABASE.getConnection();
      var res = [{}];
  
      try {
        res = await connection.execute(`UPDATE products SET del_flg = '1' WHERE id = ?`, [id]);
        console.log(res);
        connection.release();
        return "Product deleted successfully.";
      }
      catch (err) {
        console.error(err)
        connection.release();
        return false
      }
    }
  }
  
  module.exports = productsModel;