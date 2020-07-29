//index   = Vai retornar uma listagem de sessão
//show    = Vai retornar uma unica sessão
//store   = Vai criar uma sessão
//update  = Vai atualizar uma sessão
//destroy = Vai remover uma sessão
const User = require('../models/User')

module.exports = {
  async store(request, response){
    const { email } = request.body

    const user = await User.create({ email })

    return response.json(user)
  }
}