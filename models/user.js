const {Schema, model} = require('mongoose');


const userSchema= Schema ({

        id: {
          type: String,
          required: [true, 'User Id is required'],
        },
        username: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        first_name :{
          type: String,
            required: [true, 'First name is required'],
        },
        auth_date: {
          type: String,
            required: [true, 'User date is required'],
        },
        photo_url: {
            type: String,
            default: null,
        },

        token: {
            type: String,
            default: null,
        },
      
  
},
{versionKey:false,timestamps:true}
)


module.exports=model('user', userSchema)