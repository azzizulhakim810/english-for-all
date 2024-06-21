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
    const book = await payload.findByID({
      collection: 'book',
      id: id,
    })

    console.log(book)
    if (!book) {
      throw new Error("Book Doesn't Exists For this ID")
    }

    return Response.json(book)
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
      collection: 'book',
      id: id,
    })

    if (!blog.id) {
      throw new Error("Book Doesn't Exists For this ID")
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

  console.log(data)
  const id = params.id

  const payload = await getPayload({
    config: configPromise,
  })

  console.log(id)

  try {
    const blog = await payload.update({
      collection: 'book',
      id: id,
      data: {
        ...data,
      },
    })

    if (!blog.id) {
      throw new Error("Book Doesn't Exists For this ID")
    }

    return Response.json(blog)
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}
