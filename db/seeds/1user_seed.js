

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE "user" CASCADE');

    return knex('user').del()
        .then(async function () {
            // Inserts seed entries
            return knex('user').insert([{
                name: 'user1',
                login: 'user_1',
                password: 'user1',
                role: 'admin'
            },
                {
                    name: 'user2',
                    login: 'user_2',
                    password: 'user2',
                    role: 'user'
                },
                {
                    name: 'user3',
                    login: 'user_3',
                    password: 'user3',
                    role: 'user'
                }]);
        });

};
