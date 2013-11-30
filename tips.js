// without using JQuery
tips('.targets').create({
        width: 200,
        edgeOffset: 10,
        action: 'hover',
        content: 'fromDom',
        float: 'auto',
        style: {
                  border : 10,
                  padding : 7,
                  borderRadius: 3
          }
        }
    });
    
// all parameters can be omitted (only for example)
tips('#eg').create();
