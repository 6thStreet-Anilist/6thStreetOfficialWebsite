const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    badgeCount: Number,
    points: Number,
    registered: Boolean
  });
  
  module.exports = mongoose.model('User', userSchema);
  