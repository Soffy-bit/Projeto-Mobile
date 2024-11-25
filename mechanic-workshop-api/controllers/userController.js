const User = require('../models/userModel');

// Cadastro de usuário
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  const user = new User({ username, password });
  await user.save();

  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
};

// Login de usuário
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos' });
  }

  res.status(200).json({ message: 'Login realizado com sucesso!' });
};
