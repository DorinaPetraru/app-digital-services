const resolvedServiceQuery = require('../../db/serviceQueries/resolvedServiceQuery');
const selectServiceQuery = require('../../db/serviceQueries/selectServiceQuery');

const resolvedService = async (req, res, next) => {
    try {
        const { idService } = req.params;
        const service = await selectServiceQuery(idService);
        const actualStatus = service[0].statusService;

        if (actualStatus === 'resolved') {
            res.send({
                status: 'ok',
                message: 'No need to solve, it is already been solved',
            });
        } else {
            await resolvedServiceQuery(idService);

            res.send({
                status: 'ok',
                message: 'Resolved service',
            });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = resolvedService;
