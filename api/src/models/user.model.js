const mongoose = require('mongoose');
const validator = require('validator')
const { toJSON/* , paginate */ } = require('./plugins');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
/*
{
  
  email: 'rod.toobe2@gmail.com',
  email_verified: true,
  
}


*/
const userSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['user', 'shelter', 'volunteer', 'admin'],
      default: 'user'
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password:{
      type: String
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
  }],
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
      vistas:{
        type: Array
      },
      ejemplo:{
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
      ,
      ejemplo:{
        type: Array
      }
    },
    vistas:{
      type: Array
    }
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
userSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

userSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email} )
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}

const User = mongoose.model('User', userSchema);

module.exports = User;
