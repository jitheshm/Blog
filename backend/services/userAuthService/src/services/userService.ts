import User from "../models/userModel"

export const fetchEmails = async () => {
    try {
        let users = await User.find({}, { email: 1, _id: 0 })
        let emails = users.map((user) => user.email)
        return emails
    } catch (error) {
        console.log(error);

    }
}