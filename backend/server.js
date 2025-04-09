import app from './app.js';

const PORT = process.env.PORT || 4000;  // Use 4000 as default if PORT is not defined

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
