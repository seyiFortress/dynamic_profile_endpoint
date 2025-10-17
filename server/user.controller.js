import axios from "axios";
import "dotenv/config";

const jsonServerUrl =
  process.env.JSON_SERVER_URL || "http://localhost:4001/user/1";

/*
 ** Providing my profile with a cat qoute. **
 */
const getUserProfile = async (_, response) => {
  const timestamp = new Date().toISOString();
  try {
    const extResponse = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    }); // after 3sec it will stop trying
    const profileResponse = await axios.get(`${jsonServerUrl}`);
    const userProfile = profileResponse.data;

    if (!extResponse) {
      response.status(404).json({
        status: "error",
        message:
          "Quote service is currently unavailable. Please try again later.",
        timestamp: timestamp,
        user: {
          email: userProfile.email,
          name: userProfile.name,
          stack: userProfile.stack,
        },
      });
    } else {
      const catFact = extResponse.data.fact;

      return response.status(200).json({
        status: "success",
        user: {
          email: userProfile.email,
          name: userProfile.name,
          stack: userProfile.stack,
        },
        timestamp: timestamp,
        fact: catFact,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: `Internal server error, ${error.message}`,
      timestamp: timestamp,
    });
  }
};

export default getUserProfile;
