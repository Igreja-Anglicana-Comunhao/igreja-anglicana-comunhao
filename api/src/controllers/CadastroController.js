import Cadastro from '../models/Cadastro';

class CadastroController {
  async index(req, res) {
    const cadastros = await Cadastro.findAll();
    res.json(cadastros);
  }

  async store(req, res) {
    try {
      const cadastro = await Cadastro.create(req.body);
      return res.json(cadastro);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando Id'],
        });
      }
      const cadastro = await Cadastro.findByPk(id);

      if (!cadastro) {
        return res.status(400).json({
          erros: ['Cadastro nao existe'],
        });
      }

      return res.json(cadastro);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando Id'],
        });
      }
      const cadastro = await Cadastro.findByPk(id);

      if (!cadastro) {
        return res.status(400).json({
          erros: ['Cadastro nao existe'],
        });
      }
      await cadastro.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando Id'],
        });
      }
      const cadastro = await Cadastro.findByPk(id);

      if (!cadastro) {
        return res.status(400).json({
          erros: ['Cadastro nao existe'],
        });
      }
      const cadastroAtualizado = await cadastro.update(req.body);
      return res.json(cadastroAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }
}
export default new CadastroController();
