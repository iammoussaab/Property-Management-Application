const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const auth = require('./middleware/auth');
const propertyRoutes = require('./routes/property');
const tenantRoutes = require('./routes/tenant');
const paymentRoutes = require('./routes/payment');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to MongoDB successfully!');
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	})
	.catch((err) => console.log('Failed to connect to MongoDB:', err));

app.use('/api/properties', auth, propertyRoutes);
app.use('/api/tenants', auth, tenantRoutes);
app.use('/api/payments', auth, paymentRoutes);
