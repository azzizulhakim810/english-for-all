// import { sign, verify } from '@hapi/jwt'

// //  Access Secret Token **
// const secret = process.env.JWT_SECRET

// // Generate JWT TOKEN ** 
// export function generateJWT(userId: string): string {
//   const token = sign({ userId }, secret)
//   return token
// }


// //  Verify JWT TOKEN ** 
// export function verifyJWT(token: string): { userId: string } | null {
//   try {
//     const decoded = verify(token, secret)
//     return decoded as { userId: string }
//   } catch (error) {
//     return null
//   }
// }
