using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ReadingDiary.Models
{
    public class ReadingContext : DbContext
    {
        public ReadingContext (DbContextOptions<ReadingContext> options)
            : base(options)
        {
        }

        public DbSet<ReadingDiary.Models.Reading> Reading { get; set; }
    }
}
