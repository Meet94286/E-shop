const Adresses = require("../models/address.model");
const Users = require("../models/user.model");

async function address(req,res) {

    const {
        zipcode,
        state,
        street,
        landmark,
        city,
        phone,
        name

    } = req.body;

  const user = await Users.findOne({name:name})

    const newAddress= new Adresses({
        zipcode,
        state,
        street,
        landmark,
        city,
        phone,
        name,
       user:user,
      
    });

    const filter={name:name}

    Adresses.findOneAndUpdate(filter,{ useFindAndModify: false })
    .then(data=>{
        if(!data){
            newAddress.save((err, user) => {
                if (err)
                  return res.status("400").send(err.message || "some error occurred");

                 
                  res.status(200).send(user);
              });
        }else{
              res.status(200).send(data);
          
        }
        
    })
}

module.exports = address;