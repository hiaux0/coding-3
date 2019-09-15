import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
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
}

main().catch(e => console.error(e))
