using Dating.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Dating.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Likes> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Likes>().HasKey(k => new {k.LikerId, k.LikeeID});

            builder.Entity<Likes>().HasOne(u => u.Likee).WithMany(u => u.Likers).HasForeignKey(u => u.LikeeID).OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Likes>().HasOne(u => u.Likers).WithMany(u => u.Likee).HasForeignKey(u => u.LikerId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}