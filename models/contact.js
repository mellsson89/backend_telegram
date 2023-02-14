const {Schema, model} = require('mongoose');

const contactSchema= Schema ({
  
    app_id: {
      type: String,
        required: [true, 'App id required'],
    },
    app_hash: {
      type: String,
        required: [true, 'App Hash is required'],
    },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },

    owner: {
        type: String,
        required: [true, 'Owner is required'],
    }
  
},
{versionKey:false,timestamps:true}
)

module.exports=model('contact', contactSchema)