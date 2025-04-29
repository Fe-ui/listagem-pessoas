using Microsoft.AspNetCore.Mvc;
using ApiPessoas.Services;

namespace ApiPessoas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly PessoaService _pessoaService;

        public PessoasController()
        {
            _pessoaService = new PessoaService();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var pessoas = _pessoaService.GetPessoas();
            return Ok(pessoas);
        }
    }
}
