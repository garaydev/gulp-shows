using Microsoft.EntityFrameworkCore;


namespace GulpShows.Models
{
    public  class ApplicationDbContext : DbContext
    {
        public DbSet<Character> Character { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
    }
}