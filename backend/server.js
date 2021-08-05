const express = require('express');
const userRoutes = require('./userRoutes');
const app = express();

app.use(express.json());
app.use('/api/users',userRoutes);

app.get('/',(req, res) => {
    res.send('API is running...')
})

const PORT = process.env.PORT || 5001;
app.listen(PORT , console.log(`Server running on port ${PORT}`));