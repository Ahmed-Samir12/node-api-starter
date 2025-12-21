import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';

const app = express();

// Global middlewares
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: { 'script-src': ["'self'"] },
  })
);

// Test route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

export default app;
