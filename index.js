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

    //Fetch Single User
    const user = await prisma.user({ id: 'ck5cp3juh0016071510rcwepy' })

    //Update User Name
    const updatedUser = await prisma.updateUser({
        where: { id: 'ck5cp3juh0016071510rcwepy' },
        data: { name: 'Bob' },
    })

    //Delete User
    const deletedUser = await prisma.deleteUser({ id: 'ck5cp3juh0016071510rcwepy' })

}



main().catch(e => console.error(e))
