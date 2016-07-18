export default function() {

  this.get('/posts', function(){
      let posts: [{
          title: 'Get a  corgi',
          author: 'Anna'
        },{
          title: 'Water the plant',
          author: 'Bob'
        }, {
          title: 'Laundry day',
          author: 'Charlie'
      }]
  });
}
