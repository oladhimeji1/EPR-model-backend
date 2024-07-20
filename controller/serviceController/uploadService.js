const { Service } = require('../../model/requestModel');

const uploadService = async (req, res) => {

    const request = new Service(req.body);

    try {
        request.save()
            .then((result) => {
                res.status(200).json({
                    message: 'Service request submitted succefully',
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

module.exports = uploadService;