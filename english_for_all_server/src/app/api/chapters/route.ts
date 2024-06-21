import configPromise from '@payload-config'
import { equal } from 'assert'
import { getPayload } from 'payload'
// import { PayloadRequest } from 'payload/types'

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req?.url as string)
  const bookId = searchParams.get('bookId')
  console.log(bookId)
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const data = await payload.find({
      //  @ts-ignore
      req,
      collection: 'chapter',
      where: {
        book: {
          equals: bookId,
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
    if (!payloadData?.book) {
      console.log('error here')
      throw new Error('Book Id Is Required!!')
    }

    const payload = await getPayload({
      config: configPromise,
    })

    //  Check Is Book Exists With ID ?? :
    const book = await payload.findByID({
      collection: 'book',
      id: payloadData.book,
    })

    console.log(book)
    if (!book) {
      throw new Error("Book Doesn't Exists With This ID!!!")
    }

    const postedData = await payload.create({
      collection: 'chapter',
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
