const getConnection = require('../getConnection');
const { generateError } = require('../../helpers');

const serviceSelectionQuery = async (idService) => {
    let connection;

    try {
        connection = await getConnection();

        const [services] = await connection.query(
            `SELECT title FROM services WHERE id = ?`,
            [idService]
        );

        if (services.length === 0) {
            throw generateError(
                'There is no service with the selected id',
                409
            );
        }
    } finally {
        if (connection) connection.release();
    }
};

module.exports = serviceSelectionQuery;
