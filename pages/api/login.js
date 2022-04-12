export default async function handler(req, res) {
    if (req.method == 'POST') {
        // parse input from request
        let username = req.body.username;
        let password = req.body.password;

        if (username === 'user1' && password === 'user1') {
            const session = { user: username }
            return res.status(200).json({ msg: "login success", body: session });
        } else {
            return res.status(400).json({ msg: "incorrect username or password" });
        }
    }
}