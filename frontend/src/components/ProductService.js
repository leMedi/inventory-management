import axios from 'axios';

class ProductService {

  sendData(data) {
    axios.post('http://localhost:4200/products/add/post', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ProductService;