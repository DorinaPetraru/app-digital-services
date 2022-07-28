const serviceSelectionQuery = require('../../db/serviceQueries/serviceSelectionQuery');

const newServiceRequest = async (req, res, next) => {
    try {
        const { idService } = req.params;

        await serviceSelectionQuery(idService);

        res.send({
            status: 'ok',
            message: 'Service has been selected',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newServiceRequest;
