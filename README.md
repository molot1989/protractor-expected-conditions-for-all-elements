# protractor expected conditions for all elements

##Usage
The protractor-expected-conditions-for-all-elements is available via npm:

<code>$ npm install protractor-expected-conditions-for-all-elements </code>


In your Protractor spec file, register protractor-expected-conditions-for-all-elements and
  use if need expects presence of all elements in DOM:
  <pre><code>presenceOfAll</pre></code>

<pre><code>
// spec.js
var ECAll = require('protractor-expected-conditions-for-all-elements')

describe('Protractor Demo', function() {
    var history = element.all(by.repeater('result in memory'));

    it('should have a history', function() {
        //expected presence of elements
        browser.wait(ECAll.presenceOfAll(history), 30000);
        expect(history.count()).toEqual(5);
    });
});
</pre></code>
