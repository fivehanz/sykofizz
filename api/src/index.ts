import { Hono } from 'hono'

const app = new Hono()

app.get('/api/', (c) => c.text('Hello Hono!'))

// health check response
app.get('/api/health', (c) => c.json({ status: 'pass' }))

export default app
