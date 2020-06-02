const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mochServer = supergoose(server);

describe('products routs',()=>{
  it('it should post a new record',()=>{
    const obj = {
      'category': 'electronics',
      'name': 'mouse',
      'display_name': 'mouse',
      'description': 'mouse'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const record = result.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const obj = {
      'category': 'electronics',
      'name': 'phone',
      'display_name': 'phone',
      'description': 'good'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        return mochServer.get('/api/v1/products')
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(obj[key]);
            });
          });
          
      });
  });
  
  it('it should get a record by id',()=>{
    const obj = {
      'category': 'electronics',
      'name': 'key',
      'display_name': 'key',
      'description': 'key'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.get(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body[0][key]).toEqual(obj[key]);
            });
          });
          
      });
  });

  it('it should update a record by id',()=>{
    const obj = {
      'category': 'electronics',
      'name': 'light',
      'display_name': 'light',
      'description': 'light'};
    const obj2 = {
      'category': 'electronics',
      'name': 'lighter',
      'display_name': 'lighter',
      'description': 'lighter'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.put(`/api/v1/products/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('it should delete a record by id',()=>{
    const obj = {
      'category': 'electronics',
      'name': 'fan',
      'display_name': 'fan',
      'description': 'fan'};
    return mochServer.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.delete(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });
          
      });
  });
});

describe('categories routs',()=>{
  it('it should post a new record',()=>{
    const obj = {
      'name': 'mouse',
      'display_name': 'mouse',
      'description': 'mouse'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const record = result.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const obj = {
      'name': 'phone',
      'display_name': 'phone',
      'description': 'good'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        return mochServer.get('/api/v1/categories')
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(obj[key]);
            });
          });
          
      });
  });
  
  it('it should get a record by id',()=>{
    const obj = {
      'name': 'key',
      'display_name': 'key',
      'description': 'key'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.get(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body[0][key]).toEqual(obj[key]);
            });
          });
          
      });
  });

  it('it should update a record by id',()=>{
    const obj = {
      'name': 'light',
      'display_name': 'light',
      'description': 'light'};
    const obj2 = {
      'name': 'lighter',
      'display_name': 'lighter',
      'description': 'lighter'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.put(`/api/v1/categories/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('it should delete a record by id',()=>{
    const obj = {
      'name': 'fan',
      'display_name': 'fan',
      'description': 'fan'};
    return mochServer.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mochServer.delete(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });
          
      });
  });
});