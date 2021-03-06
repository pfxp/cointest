using CoinTrader.Shared;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add configurations to the container
builder.Services.Configure<CoinTraderSettings>(builder.Configuration.GetSection("CoinTraderSettings"));

// Add services to the container.
builder.Services.AddSingleton<IUserPreferencesService, UserPreferencesService>();

// HttpFactory
var coinTraderSettings = builder.Configuration.GetSection("CoinTraderSettings").Get<CoinTraderSettings>();
builder.Services.AddHttpClient<ICointreeApiService, CointreeApiService>(c =>
{
    c.BaseAddress = new Uri(coinTraderSettings.CoinTreePricesUrl);
});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
      builder =>
      {
          builder.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CoinTrader v1");
        c.DocumentTitle = "CoinTrader API";
    });
}

app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();