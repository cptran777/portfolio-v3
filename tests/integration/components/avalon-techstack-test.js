import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('avalon-techstack', 'Integration | Component | avalon techstack', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{avalon-techstack}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#avalon-techstack}}
      template block text
    {{/avalon-techstack}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
