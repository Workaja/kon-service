const create = async (req, res) => {
  // after login first time, check method [google, facebook]
  // then make this format user:method:user_id_from_method
  res.json({
    success: true,
    message: "Successfully create a user"
  })
}
const update = async (req, res) => {
  res.json({
    success: true,
    message: "Successfully update user profile"
  })
}
const deactivate = async (req, res) => {
  // by deactivate the user, set user profile status as deactivate
  // all its product will be set as deactivated
  res.json({
    success: true,
    message: "Successfully deactivate your account, in 30 days will be removed permanently"
  })
}
const profile = async (req, res) => {
  // after login with method, then load the user profile
  res.json({
    success: true,
    message: "Successfully to login",
    method: "google"
  })
}

module.exports = {
  create, update, deactivate, profile
}