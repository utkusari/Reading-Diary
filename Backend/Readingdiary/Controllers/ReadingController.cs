using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadingDiary.Models;

namespace ReadingDiary.Controllers
{
    [Produces("application/json")]
    [Route("api/Reading")]
    [Authorize]
    public class ReadingController : Controller
    {
        private readonly ReadingContext _context;

        public ReadingController(ReadingContext context)
        {
            _context = context;
        }

        // GET: api/Reading
        [HttpGet]
        public async Task<IEnumerable<Reading>> GetReading()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == "uid")?.Value;

            return await _context.Reading
                .Where(u => u.UserId == userId)
                .OrderByDescending(d => d.Date)
                .ToArrayAsync();
        }


        // GET: api/Readings/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReading([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == "uid")?.Value;
            var reading = await _context.Reading.SingleOrDefaultAsync(m => m.Id == id && m.UserId == userId);

            if (reading == null)
            {
                return NotFound();
            }

            return Ok(reading);
        }

        // PUT: api/Readings/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReading([FromRoute] int id, [FromBody] Reading reading)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reading.Id)
            {
                return BadRequest();
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == "uid")?.Value;
            if (_context.Reading.FirstOrDefault(c => c.UserId == userId && c.Id == id) == null)
            {
                return NotFound();
            }


            _context.Entry(reading).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/Readings
        [HttpPost]
        public async Task<IActionResult> PostReading([FromBody] Reading reading)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == "uid")?.Value;
            reading.UserId = userId;

            _context.Reading.Add(reading);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReading", new { id = reading.Id }, reading);
        }

        // DELETE: api/Readings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReading([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == "uid")?.Value;
            var reading = await _context.Reading.SingleOrDefaultAsync(m => m.Id == id && m.UserId == userId);
            if (reading == null)
            {
                return NotFound();
            }

            _context.Reading.Remove(reading);
            await _context.SaveChangesAsync();

            return Ok(reading);
        }
    }
}