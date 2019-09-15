import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  // Create a new user with a new post
  const newUser = await prisma.createUser({
    name: 'Bob',
    email: 'bob@prisma.io',
    posts: {
      create: [
        {
          title: 'Join us for GraphQL Conf in 2019',
        },
        {
          title: 'Subscribe to GraphQL Weekly for GraphQL news',
        },
      ],
    },
  })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Fetch single user
  const user = await prisma.user({ id: 'ck0lgchr9000k07377yvt6ca7' })

  // Filter user list
  const usersCalledAlice = await prisma.users({
    where: {
      name: 'Alice',
    },
  })

  // Update a user's name
  const updatedUser = await prisma.updateUser({
    where: { id: 'ck0lgchr9000k07377yvt6ca7' },
    data: { name: 'Bob' },
  })

  // Delete user
  // const deletedUser = await prisma.deleteUser({ id: 'ck0lgchr9000k07377yvt6ca7' })

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const allPosts = await prisma.posts()
  console.log(allPosts)
}

main().catch(e => console.error(e))


