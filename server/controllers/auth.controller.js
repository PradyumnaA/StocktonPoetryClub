export const signup = async (req, res) => {
    try {
        // Log the body to ensure data is received correctly
        console.log(req.body);

        // Send a response back to the client
        return res.status(200).json({ message: "Signup successful" });
    } catch (error) {
        // Handle any potential errors
        console.error("Error during signup:", error);
        return res.status(500).json({ message: "Signup failed", error });
    }
};