const AreaOptions=(XAxisLabel)=>{
    var options={
        axes: {
            bottom: {
                title: XAxisLabel,
                mapsTo: 'key',
                scaleType: 'labels',
            },
            left: {
                mapsTo: 'value',
                scaleType: 'linear'
            }
        },
        curve: 'curveMonotoneX',
        height: '100%'
    }
    return options;
}
export default AreaOptions;