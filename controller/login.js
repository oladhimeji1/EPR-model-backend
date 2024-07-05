const fs = require('fs');

const login = (req, res) => {

    const { email, password } = req.body;
  
    // Read existing data
    fs.readFile(`json/users.json`, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
    
        let jsonData = JSON.parse(data);
    
        const user = jsonData.users.find(user => user.email === email && user.password === password);

        // MongoDB
        // const user = await User.findOne({ email });
  
        if (user) {
            res.status(200).json({user, message: 'Login succeful'});
        } else {
            res.status(401).json({ err: 'Invalid username or password' });
        }
  
      
    });
};

module.exports = login;