class HomeController {
  async index(req, res) {
    res.json('novoCadastro');
  }
}
export default new HomeController();
