function training(rf){
    var data = [
        {
            'q1':1,
            'q2':2,
            'q3':1,
            'q4':1,
            'q5':2,
            'q6':2,
            'q7':2,
            'q8':1,
            "p":"b"
        },
        {
            'q1':3,
            'q2':1,
            'q3':2,
            'q4':1,
            'q5':3,
            'q6':2,
            'q7':3,
            'q8':2,
            "p":"g"
        },
        {
            'q1':2,
            'q2':3,
            'q3':1,
            'q4':3,
            'q5':2,
            'q6':1,
            'q7':1,
            'q8':1,
            "p":"b"
        },
        {
            'q1':1,
            'q2':2,
            'q3':3,
            'q4':2,
            'q5':1,
            'q6':3,
            'q7':2,
            'q8':1,
            "p":"d"
        },
        {
            'q1':3,
            'q2':2,
            'q3':2,
            'q4':3,
            'q5':2,
            'q6':1,
            'q7':2,
            'q8':2,
            "p":"d"
        },
        {
            'q1':1,
            'q2':3,
            'q3':2,
            'q4':2,
            'q5':2,
            'q6':1,
            'q7':2,
            'q8':1,
            "p":"b"
        },
        {
            'q1':2,
            'q2':1,
            'q3':3,
            'q4':3,
            'q5':1,
            'q6':2,
            'q7':3,
            'q8':2,
            "p":"g"
        },
        {
            'q1':3,
            'q2':2,
            'q3':3,
            'q4':3,
            'q5':1,
            'q6':2,
            'q7':1,
            'q8':1,
            "p":"d"
        },
        {
            'q1':2,
            'q2':1,
            'q3':1,
            'q4':2,
            'q5':1,
            'q6':1,
            'q7':2,
            'q8':1,
            "p":"b"
        },
        {
            'q1':3,
            'q2':1,
            'q3':2,
            'q4':1,
            'q5':3,
            'q6':1,
            'q7':2,
            'q8':1,
            "p":"g"
        }
    ];
    var my_forest;
    rf.fit(data, null, "p", function(err, trees){
        my_forest = trees;
    });
    return my_forest;
}

module.exports = { training };
