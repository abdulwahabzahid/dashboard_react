import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const averagePrices = initialCompetitors.map((competitor) => {
  const filtered = products.filter((product) =>
    product.brand.toLowerCase().includes(competitor.toLowerCase())
  );
  if (filtered.length === 0) return { competitor, average: 0 };

  const total = filtered.reduce((sum, product) => sum + product.price, 0);
  const average = total / filtered.length;

  return {
    competitor,
    average,
  };
});

const averagePriceData = {
  labels: averagePrices.map((item) => item.competitor),
  datasets: [
    {
      label: 'Average Price',
      data: averagePrices.map((item) => item.average),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)', 
      borderWidth: 1,
    },
  ],
};

const averagePriceOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

<Box
  p={6}
  borderRadius="lg"
  boxShadow="lg"
  bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
  width="95%"
  mb={8}
  height="400px" 
>
  <Heading as="h2" size="lg" color="#999999" mb={4}>
    Average Price per Competitor
  </Heading>
  <Bar data={averagePriceData} options={averagePriceOptions} />
</Box>
