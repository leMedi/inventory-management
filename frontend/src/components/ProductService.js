import axios from 'axios';

class ProductService {

  sendData(data) {
    axios.post('http://localhost:4200/products/add/post', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  deleteData(id){
    axios.get('http://localhost:4200/products/delete/'+id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err));
  }

  updateData(data, id){
    axios.post('http://localhost:4200/products/update/'+id, data)
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }
}

export default ProductService;