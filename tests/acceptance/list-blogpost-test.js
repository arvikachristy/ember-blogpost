import { test } from 'qunit';
import moduleForAcceptance from 'ember-blogpost/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /list-blogpost', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should navigate to list of posts', function (assert) {
	visit('/');
	click('a:contains("Posts")');
	andThen(function (){
		assert.equal(currentURL(), '/posts', "should navigate to posts");
	});
});

test('should link to post list', function(assert) {
  visit('/posts/newpost');
  fillIn('input.title','Test my post yeah!');
  click('[data-test=submit]');
  andThen(() => assert.equal(find('ul.posts li:first').text(), 'Test my post yeah!'));
  andThen(function() {
    assert.equal(currentURL(), '/posts', "should pass the post list");
  });
});
