import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reeltime-techstack', 'Integration | Component | reeltime techstack', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reeltime-techstack}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reeltime-techstack}}
      template block text
    {{/reeltime-techstack}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
