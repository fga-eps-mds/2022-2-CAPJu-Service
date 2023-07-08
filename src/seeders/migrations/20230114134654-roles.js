"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          name: "Estagiário",
          accessLevel: 4,
          allowedActions: [
            "see-unit",
            "see-stage",
            "forward-stage",
            "backward-stage",
            "see-flow",
            "see-process",
            "create-process",
            "archive-process",
            "end-process",
            "edit-process",
            "delete-process",
            "edit-account",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Servidor",
          accessLevel: 3,
          allowedActions: [
            "see-unit",
            "create-stage",
            "see-stage",
            "delete-stage",
            "advance-stage",
            "backward-stage",
            "create-flow",
            "see-flow",
            "edit-flow",
            "delete-flow",
            "create-process",
            "see-process",
            "archive-process",
            "end-process",
            "edit-process",
            "delete-process",
            "edit-account",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juiz",
          accessLevel: 2,
          allowedActions: [
            "see-unit",
            "see-stage",
            "see-flow",
            "see-process",
            "edit-account",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diretor",
          accessLevel: 1,
          allowedActions: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Administrador",
          accessLevel: 5,
          allowedActions: [
            "create-unit",
            "see-unit",
            "edit-unit",
            "delete-unit",
            "see-request",
            "accept-request",
            "delete-request",
            "see-profile",
            "edit-profile",
            "delete-profile",
            "edit-account",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role", null, {});
  },
};
