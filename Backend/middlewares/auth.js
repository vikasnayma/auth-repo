const isAuthorize = async (req, res, next) => {
    try {
        if (
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ) {
            return res.status(409).json({ msg: 'Please provide token' });
        }

        next();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isAuthorize
}