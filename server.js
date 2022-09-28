const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes/index")(app);
require("./routes/htmlRoutes/index")(app);

app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT} !`);
});