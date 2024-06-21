// import { Webhook } from 'svix'
// import { headers } from 'next/headers'
// import { WebhookEvent } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'

// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
//   const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

//   if (!WEBHOOK_SECRET) {
//     throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
//   }

//   // Get the headers
//   const headerPayload = headers()
//   const svix_id = headerPayload.get('svix-id')
//   const svix_timestamp = headerPayload.get('svix-timestamp')
//   const svix_signature = headerPayload.get('svix-signature')

//   // If there are no headers, error out
//   if (!svix_id || !svix_timestamp || !svix_signature) {
//     return new Response('Error occured -- no svix headers', {
//       status: 400,
//     })
//   }

//   // Get the body
//   const payload = await req.json()
//   const body = JSON.stringify(payload)

//   // Create a new Svix instance with your secret.
//   const wh = new Webhook(WEBHOOK_SECRET)

//   let evt: WebhookEvent

//   // Verify the payload with the headers
//   try {
//     evt = wh.verify(body, {
//       'svix-id': svix_id,
//       'svix-timestamp': svix_timestamp,
//       'svix-signature': svix_signature,
//     }) as WebhookEvent
//   } catch (err) {
//     console.error('Error verifying webhook:', err)
//     return new Response('Error occurred', {
//       status: 400,
//     })
//   }

//   // Do something with the payload
//   // For this guide, you simply log the payload to the console
//   const { id } = evt.data
//   const eventType = evt.type
//   console.log(id)
//   console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
//   console.log('Webhook body:', body)

//   return new Response('', { status: 200 })
// }

// app/api/auth/login/route.ts
// import { NextResponse } from 'next/server'

// import { Clerk } from '@clerk/nextjs/server'
// import { generateJWT } from '@/libs/auth'

// const clerk = Clerk()

// export async function POST(request: Request) {
//   const { email, password } = await request.json()

//   try {
//     const { userId } = await clerk.authenticateUser({
//       identifier: email,
//       password,
//     })

//     const token =  generateJWT(userId)

//     return NextResponse.json({ token })
//   } catch (error) {
//     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
//   }
// }

// export async function GET(req) {
//   const token = req.cookies.get('token')?.value

//   if (!token) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const verified = verifyToken(token)

//   if (!verified) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   return NextResponse.json({ message: 'Authorized', user: verified }, { status: 200 })
// }

export const GET = (req: Request) => {
  console.log(req)
  return NextResponse.json({
    message: "Payload Login Doesn't Implemented Asap Now !!! ",
  })
}
