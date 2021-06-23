export default function() {
    const el = document.getElementById('chart');
    const data = {
        categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [{
                name: 'temperature',
                data: [29, 29, 29, 28, 28, 28, 30],
            },
            {
                name: 'rainfall',
                data: [500, 700, 300, 150, 0, 300, 1000],
            },
        ],
    };
    const options = {
        chart: { width: 700, height: 400 },
    };

    toastui.Chart.barChart({ el, data, options });

}