export default function() {
  this.get('/posts');
  this.post('/posts');
  this.delete('/posts/:id');
  this.get('/posts/:id');
  this.put('/posts/:id');
  // this.get('/posts', function(){
  //   return {
  //     data: [{
  //       type: 'posts',
  //       id: 1,
  //       attributes: {
  //         title: 'Get a  corgi',
  //         author: 'Anna'
  //       }
  //     }, {
  //       type: 'posts',
  //       id: 2,
  //       attributes: {
  //         title: 'Water the plahnt',
  //         author: 'Bob'
  //       }
  //     }, {
  //       type: 'posts',
  //       id: 3,
  //       attributes: {
  //         title: 'Laundry day',
  //         author: 'Charlie'
  //       }
  //     }]
  //   };
  // });
}
