using System;
using FilmComments.DB.Model;
using Microsoft.EntityFrameworkCore;

namespace FilmComments.DB
{
    public class DbContextManager : DbContext
    {
        public DbSet<CommentEntity> Comments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//            var connectionString = "Server=localhost;Port=8889;Database=film_comment_app;Uid=root;Pwd=gattogatto";
           var connectionString = "Server=localhost;Port=3306;Database=film_comment_app;Uid=root;Pwd=gattogatto";
//            var version = new MySqlServerVersion(new Version(5, 7, 24));
            var version = new MySqlServerVersion(new Version(8, 0, 26));
            optionsBuilder.UseMySql(connectionString, version);

            base.OnConfiguring(optionsBuilder);
        }
    }
}
