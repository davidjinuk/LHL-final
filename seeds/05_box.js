const date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('box').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('box').insert({type: 'Produce', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Produce', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Baked Goods', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Dairy', package_id: 4, grocery_id: 2, created_at: date}),

        knex('box').insert({type: 'Dairy', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 1, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 1, created_at: date}),


        knex('box').insert({type: 'Baked Goods', grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 2, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 2, created_at: date}),


        knex('box').insert({type: 'Produce', grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 3, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 3, created_at: date}),


        knex('box').insert({type: 'Produce', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 4, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 4, created_at: date}),


        knex('box').insert({type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Dairy', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 5, created_at: date}),
        knex('box').insert({type: 'Baked Goods', grocery_id: 5, created_at: date})
      ]);
    });
};