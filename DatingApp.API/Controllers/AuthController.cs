using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo)
        {
           // this._config = config;
            this._repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] dtoClass user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (await _repo.UserExists(user.username))
            {
                return BadRequest("User Name already exists");
            }
            var userdata = new User();
            userdata.UserName = user.username;

            await _repo.Register(userdata, user.password);
            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] dtoLogin login)
        {
            var user = await _repo.Login(login.username, login.password);
            if (user == null)
            {
                return Unauthorized();
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };
            // var symmetricKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.
            //                     GetBytes(_config.GetSection("AppSettings:Token").Value));
            
            var symmetricKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.
                                 GetBytes("Super Secret Key "));
            
            var creds = new SigningCredentials(symmetricKey, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                 Subject = new ClaimsIdentity(claims),
                 Expires = DateTime.Now.AddDays(1),
                 SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}