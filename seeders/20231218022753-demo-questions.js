'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
      {
        title: 'What is the capital of Indonesia?',
        answer: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Malaysia?',
        answer: 'Kuala Lumpur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Singapore?',
        answer: 'Singapore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Thailand?',
        answer: 'Bangkok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Vietnam?',
        answer: 'Hanoi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Cambodia?',
        answer: 'Phnom Penh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Laos?',
        answer: 'Vientiane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Myanmar?',
        answer: 'Naypyidaw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Brunei?',
        answer: 'Bandar Seri Begawan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of East Timor?',
        answer: 'Dili',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of the Philippines?',
        answer: 'Manila',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Taiwan?',
        answer: 'Taipei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of China?',
        answer: 'Beijing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Hong Kong?',
        answer: 'Hong Kong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'What is the capital of Macau?',
        answer: 'Macau',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    // Exact opposite of up function
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
