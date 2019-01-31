const express = require('express');

const app = express();

/**
 * routing controller 연결
 */
app.use('/save', require('./api/crud'));

app.listen(3000, () => {
    // server 구동 완료
    console.log('Server app listening on port 3000!');
});


