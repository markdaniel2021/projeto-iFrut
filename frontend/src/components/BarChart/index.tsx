import Chart from 'react-apexcharts';

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['AWSCloudTrail', 'AmazonEC2', 'AmazonVPC', 'AmazonDynamoDB', 'AWSSystemsManager', 'AmazonCloudWatch']
        },
        series: [
            {
                name: "% dos Gastos Totais",
                data: [0, 30.3, 42.3, 11.6, 10.1, '05.7']                   
            }
        ]
    };
    
    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;