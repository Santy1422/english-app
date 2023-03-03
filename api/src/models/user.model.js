const mongoose = require('mongoose');
const validator = require('validator')
const { toJSON/* , paginate */ } = require('./plugins');
/*
{
  
  email: 'rod.toobe2@gmail.com',
  email_verified: true,
  
}


*/
const userSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ['user', 'shelter', 'volunteer', 'admin'],
      default: 'user'
    },

    email: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
      lowercase: true,

    },
    password:{
      type: String
    },
    name:{
      type: String,
    },
    picture: {
      type: String,

    },
    palabras: {
      español: {
        type: Array,
      },
      ingles: {
        type: Array,
      },
      image:{
        type: Array,
      }, 
      detail:{
        type: Array
      }
    },
    aprendidas: {
      español: {
        type: Array,
      },
      ingles: {
        type: Array,
      },
      image:{
        type: Array,
      }, 
      detail:{
        type: Array
      }
    },
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
  }
);
//userSchema.index({Location: '2dsphere' });

userSchema.plugin(toJSON);
//userSchema.plugin(paginate);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
