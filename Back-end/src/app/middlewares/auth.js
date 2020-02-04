import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' '); // passando apenas a primeira posição do array pois nao precisa do bearer

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret); // promisify deixa usar o async await. coloca a função que não tem async no primeiro parenteses

    req.userId = decoded.id; // seta o ID automaticando quando faz o login

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
