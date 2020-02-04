import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
// extname para usar o nome da extensão

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      // formatar o nome da imagem quando receber
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
        // trasnforma em hexadecimal os carecteres aleatorio do crypto
      });
    },
  }),
};
