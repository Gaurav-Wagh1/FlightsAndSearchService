'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: "Boeing 737",
        capacity: 300,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: "Airbus A320",
        capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: "Boeing 777",
        capacity:400,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: "Boeing 747",
        capacity:420,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: "Airbus A330",
        capacity:420,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};