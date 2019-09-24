using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReadingDiary.Models
{
    public class Reading
    {
        public int Id { get; set; }

        [JsonIgnore]
        public string UserId { get; set; }

        [Required]
        public DateTimeOffset Date { get; set; }

        [Required]
        public int PageAmount { get; set; }

        [Required]
        public int TimeAmount { get; set; }
    }
}
