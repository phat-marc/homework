var assert = chai.assert;

describe('#group', function() {
  it('should group a list of people by occupation', function() {
      assert.deepEqual(group(people, 'occupation'), {
        "Office Worker": [
          { name: "James", age: 21, occupation: "Office Worker" }, 
          { name: "Ann", age: 32, occupation: "Office Worker" }, 
        ],
        "Civil Service": [
          { name: "Julie", age: 21, occupation: "Civil Service" },         
        ],
        "Industrial Supplier": [          
          { name: "Rob", age: 18, occupation: "Industrial Supplier" },
        ]
      })
  });  
  it('should group a list of people by age', function() {
      assert.deepEqual(group(people, 'age'), {
        18: [          
          { name: "Rob", age: 18, occupation: "Industrial Supplier" },
        ],
        21: [
          { name: "James", age: 21, occupation: "Office Worker" }, 
          { name: "Julie", age: 21, occupation: "Civil Service" },
        ],
        32: [         
          { name: "Ann", age: 32, occupation: "Office Worker" }, 
        ],
      })
   });
  
  it('what if the list is empty', function() {
      assert.deepEqual(group([], 'age'), {})
   });
  it('what if the list is null', function() {
      assert.deepEqual(group(null, 'age'), {})
   });
  it('BONUS: what if the list is stupid long', function() {
      assert.isNotNull(group(new Array(1000000).fill({ name: "Rob", age: 18, occupation: "Industrial Supplier" }), 'age'))
   });
});

// mocha.run();