import configPromise from '@payload-config'
import { equal } from 'assert'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
// import { PayloadRequest } from 'payload/types'

export const GET = async (req: Request | NextRequest) => {
  const { searchParams } = new URL(req?.url as string)
  const chapterId = searchParams.get('chapterId')
  console.log(chapterId)
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const data = await payload.find({
      //  @ts-ignore
      req,
      collection: 'quiz',
      where: {
        chapter: {
          equals: chapterId,
        },
      },
    })

    console.log(data)

    return Response.json(data)
  } catch (err) {
    return Response.json(err)
  }
}

//  Post books **
export const POST = async (req: Request) => {
  const payloadData = await req?.json()

  console.log(payloadData)
  try {
    //  Is Book Id Exists In payload ??
    if (!payloadData?.chapter) {
      console.log('error here')
      throw new Error('Chapter Id Is Required!!')
    }

    const payload = await getPayload({
      config: configPromise,
    })

    //  Check Is Book Exists With ID ?? :
    const chapter = await payload.findByID({
      collection: 'chapter',
      id: payloadData.chapter,
    })

    console.log(chapter)
    if (!chapter) {
      throw new Error("Chapter Doesn't Exists With This ID!!!")
    }

    const postedData = await payload.create({
      collection: 'quiz',
      data: {
        ...payloadData,
      },
    })

    return Response.json(postedData)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}
