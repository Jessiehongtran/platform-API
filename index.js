require('dotenv').config();
const server = require('./server');

const PORT =   process.env.PORT || 5001

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})