import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    // salva no bando de dados como name e path

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
