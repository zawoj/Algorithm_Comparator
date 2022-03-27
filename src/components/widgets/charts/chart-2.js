import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

export const Chart2 = ({data}) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#1f87e6', '#ff5c7c','#27f6db'],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      horizontalAlign: 'right',
      labels: {
        colors: theme.palette.text.secondary
      },
      position: 'top',
      show: true
    },
    markers: {
      hover: {
        size: undefined,
        sizeOffset: 2
      },
      radius: 2,
      shape: 'circle',
      size: 4,
      strokeColors: ['#1f87e6', '#ff5c7c','#27f6db'],
      strokeWidth: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000',
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
        axisBorder: {
          color: theme.palette.divider,
          show: true
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
    
  };

  const chartSeries = [
    {
      data: {...data[0]}[0],
      name: 'Qucik Sort'
    },
    {
      data: {...data[1]}[0],
      name: 'Merage Sort'
    },
    {
      data: {...data[2]}[0],
      name: 'Insertion Sort'
    }
    
  ];


  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Card>
        <CardHeader title="Chart" />
        <CardContent>
          <Chart
            height={500}
            options={chartOptions}
            series={chartSeries}
            type="line"
          />
        </CardContent>
      </Card>
    </Box>
  );
};
