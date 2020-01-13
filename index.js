const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function addUser() {
    // Create a new user called `Alice`
    const newUser = await prisma.createUser({name: 'Shaolinix'})
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
}

async function getUsers() {

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users()
    // console.log(allUsers)
}

async function getUser(name) {

    //Filter user list
    const usersCalledAlice = await prisma.users({
        where: {
            name: name,
        },
    });
    console.log(usersCalledAlice);
}

async function getUserById() {

    //Fetch Single User
    const user = await prisma.user({id: 'ck5cp3juh0016071510rcwepy'})
}
async function updateUser(id,name) {

    //Update User Name
    const updatedUser = await prisma.updateUser({
        where: {id: id},
        data: {name: name},
    })
}

async function deleteUser() {
    //Delete User
    const deletedUser = await prisma.deleteUser({id: 'ck5cp3juh0016071510rcwepy'})
    console.log(deletedUser)

}

async function CreateNewUserWithLinks() {

    const newUserWithLinks = await prisma.createUser({
        name: 'Alice',
        password: 'IlikeTurtles',
        posts: {
            create: [
                {
                    title: 'Prisma is the data layer for modern applications',
                },
                {
                    title: 'Check out How to GraphQL - The fullstack tutorial for GraphQL',
                },
            ],
            connect: {
                id: 'cjli6tknz005s0a23uf0lmlve',
            },
        },

    })
    console.log(newUserWithLinks);
}

CreateNewUserWithLinks().catch(err=>{console.log(err)});
