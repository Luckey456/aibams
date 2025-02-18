import Card from "../components/card";

const CardList = () => {
  const cardData = [
    {
      icon: "🛢️",
      title: "Database Tools",
      description: "Meet dbForge, a renowned line of products for SQL Server, MySQL, Oracle, and PostgreSQL databases.",
    },
    {
      icon: "🔗",
      title: "Data Connectivity",
      description: "Top-rated solutions for ADO.NET, ODBC, Python, SSIS, Excel, dbExpress, and Delphi Components.",
    },
    {
      icon: "☁️",
      title: "Data Integration",
      description: "Explore Skyvia, a no-code cloud data integration platform for ETL, ELT, and Reverse ETL.",
    },
    {
      icon: "📈",
      title: "Productivity Tools",
      description: "Augment your work with tools that help write, compare, merge, and review code.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-800 p-10">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
