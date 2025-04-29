using ApiPessoas.Models;

namespace ApiPessoas.Services
{
    public class PessoaService
    {
        private readonly List<Pessoa> _pessoas;

        public PessoaService()
        {
            _pessoas = GerarPessoas();
        }

        public List<Pessoa> GetPessoas() => _pessoas;

        private List<Pessoa> GerarPessoas()
        {
            var lista = new List<Pessoa>();
            for (int i = 1; i <= 30; i++)
            {
                lista.Add(new Pessoa
                {
                    Cpf = $"000.000.000-{i:D2}",
                    Nome = $"Pessoa {i}",
                    Genero = (i % 2 == 0) ? "Masculino" : "Feminino",
                    Endereco = $"Rua {i}",
                    Idade = 20 + (i % 10),
                    Municipio = $"Municipio {i}",
                    Estado = "SP"
                });
            }
            return lista;
        }
    }
}
