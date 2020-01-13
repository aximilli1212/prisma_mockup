const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
    // Create a new user called `Alice`
    const newUser = await prisma.createUser({ name: 'Shaolinix' })
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users()
    // console.log(allUsers)

    //Filter user list
    const usersCalledAlice = await prisma.users({
        where: {
            name: 'Alice',
        },
    });
    console.log(usersCalledAlice);
}



main().catch(e => console.error(e))
