const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const dashboard = {
  farmer: { id: 'FMR-01842', name: 'Ramesh Sahu', village: 'Bargaon, Nuapada' },
  stats: { activeBookings: 1, queuePosition: 8, pendingPayment: 18450 },
  currentBooking: {
    id: 'KF-240618', centre: 'Nuapada Procurement Centre', crop: 'Paddy', quantity: 42,
    date: '18 Jun 2025', time: '10:00–11:00 AM', token: 8, farmersAhead: 7, estimatedWait: 25, status: 'Confirmed'
  },
  centre: { name: 'Nuapada Procurement Centre', distanceKm: 3.2, capacityBooked: 64, hours: '8:00 AM – 5:00 PM' }
};

app.get('/api/health', (_request, response) => response.json({ status: 'ok', service: 'krishiflow-backend' }));
app.get('/api/dashboard', (_request, response) => response.json(dashboard));
app.get('/api/centres', (_request, response) => response.json([
  { id: 'NUP-01', name: 'Nuapada Procurement Centre', distanceKm: 3.2, capacityBooked: 64 },
  { id: 'NUP-02', name: 'Khariar Road Centre', distanceKm: 12.8, capacityBooked: 41 }
]));
app.post('/api/bookings', (request, response) => {
  const { deliveryMode, centreId, cropType, quantity } = request.body;
  if (!deliveryMode || !centreId || !cropType || !quantity) {
    return response.status(400).json({ error: 'deliveryMode, centreId, cropType and quantity are required' });
  }
  return response.status(201).json({ id: `KF-${Date.now().toString().slice(-6)}`, status: 'Pending confirmation', token: null });
});
app.get('/api/bookings/:bookingId', (request, response) => response.json({ ...dashboard.currentBooking, id: request.params.bookingId }));

app.listen(PORT, () => console.log(`KrishiFlow backend listening on http://localhost:${PORT}`));
