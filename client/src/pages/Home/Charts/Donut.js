import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const marketShareData = {
  labels: initialCompetitors,
  datasets: [
    {
      data: competitorProductCounts.map((item) => item.count),
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const donutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
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
>
  <Heading as="h2" size="lg" color="#999999" mb={4}>
    Market Share by Competitor
  </Heading>
  <Doughnut data={marketShareData} options={donutOptions} />
</Box>
