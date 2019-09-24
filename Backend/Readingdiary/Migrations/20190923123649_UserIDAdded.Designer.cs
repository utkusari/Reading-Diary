﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ReadingDiary.Models;
using System;

namespace ReadingDiary.Migrations
{
    [DbContext(typeof(ReadingContext))]
    [Migration("20190923123649_UserIDAdded")]
    partial class UserIDAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026");

            modelBuilder.Entity("ReadingDiary.Models.Reading", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("Date");

                    b.Property<int>("PageAmount");

                    b.Property<int>("TimeAmount");

                    b.Property<string>("UserID");

                    b.HasKey("Id");

                    b.ToTable("Reading");
                });
#pragma warning restore 612, 618
        }
    }
}
