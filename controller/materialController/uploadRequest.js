const {  Mateials } = require('../../model/requestModel');

const uploadRequest = async (req, res) => {

    const request = new Mateials(req.body);

    try {
        request.save()
            .then((result) => {
                res.status(200).json({
                    message: 'Request submitted succefully',
                    request: result
                });
            })
            .catch(err => {
                console.log(err);
                return;
            })
    } catch(err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err.message
        });
    }  
    
};

module.exports = uploadRequest;