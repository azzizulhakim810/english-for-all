import configPromise from '@payload-config'
import { getPayload } from 'payload'

//  Get Books By Single ID **
export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id

  const payload = await getPayload({
    config: configPromise,
  })

  console.log('id', id)

  try {
    const chapter = await payload.findByID({
      collection: 'chapter',
      id: id,
    })

    console.log(chapter)
    if (!chapter) {
      throw new Error("Chapter Doesn't Exists For this ID")
    }

    return Response.json(chapter)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}

// DELETE BOOKS BY ID **
export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id

  const payload = await getPayload({
    config: configPromise,
  })

  console.log(id)

  try {
    const blog = await payload.delete({
      collection: 'chapter',
      id: id,
    })

    if (!blog.id) {
      throw new Error("Chapter Doesn't Exists For this ID")
    }

    return Response.json(blog)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}

//  PUT BOOKS BY ID **

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const data = await req.json()

  const id = params.id

  console.log(id)

  try {
    const payload = await getPayload({
      config: configPromise,
    })

    //  Is Book Id Exists In payload ??
    if (data?.book) {
      //  Check Is Book Exists With ID ?? :
      const book = await payload.findByID({
        collection: 'book',
        id: data.book,
      })

      if (!book) {
        throw new Error("Book Doesn't Exists With This ID!!!")
      }
    }

    const chapter = await payload.update({
      collection: 'chapter',
      id: id,
      data: {
        ...data,
      },
    })

    if (!chapter.id) {
      throw new Error("Chapter Doesn't Exists For this ID")
    }

    return Response.json(chapter)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}
