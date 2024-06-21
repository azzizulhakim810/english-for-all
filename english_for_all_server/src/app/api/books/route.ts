import configPromise from '@payload-config'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'

export const GET = async (req: Request | NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    // @ts-ignore
    req,
    collection: 'book',
  })

  console.log(data)

  return Response.json(data)
}

//  Post books **
export const POST = async (req: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await req.json()
  console.log(data)
  try {
    const postedData = await payload.create({
      collection: 'book',
      data: {
        ...data,
      },
    })

    return Response.json(postedData)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}
