
exports.verifyAuth = function (req, res, next) {
    const accessKey = req.headers['x-access-key'];

    if (!accessKey) {
        return res.status(401).send({
            message: 'Unauthorized. Access key is missing.'
        })
    }

    try {
        // Check if the accessKey is valid
        next();
    } catch (err) {
        return res.status(403).send({
            message: 'Unauthorized. Access key is invalid.'
        })
    }
}