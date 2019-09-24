using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ReadingDiary.Migrations
{
    public partial class UserIdRevised : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {   
            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "Reading",
                newName: "UserId");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Reading",
                nullable: false,
                oldClrType: typeof(int))
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Reading",
                newName: "UserID");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Reading",
                nullable: false,
                oldClrType: typeof(int))
                .OldAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);
        }
    }
}
