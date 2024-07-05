const fs = require('fs');

const registerUser = async (req, res) => {

    const newUser = req.body;
    const { email } = req.body;

    console.log(newUser)
    
    fs.readFile(`json/users.json`, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return res.status(500).send("Internal server error");
        }

        const jsonData = JSON.parse(data);
        const emailExist = jsonData.users.find(user => user.email === email);

        if(emailExist){
            return res.json({
                message: "email already exist",
            });
        } else {
            try {
                jsonData.users.push(newUser);

                const updatedJsonData = JSON.stringify(jsonData, null, 2);

                fs.writeFile(`json/users.json`, updatedJsonData, "utf8", (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    return res.status(500).send("Internal server error");
                }
                res.status(200).json({message: "New user added successfully"});
                });

                // MongoDB
                // const newUser = UserModel.create({
                //     username,
                //     email,
                //     password,
                //     gender,
                // });
            } catch (parseError) {
                console.error("Error parsing JSON data:", parseError);
            }
        }
    });
    
    
};

module.exports = registerUser;