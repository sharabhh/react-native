import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/Auth";
import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginhandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      await login(email, password);

      // setIsAuthenticating(false);
    } catch (err) {
      console.log(err.message);
      Alert.alert("Authentication failed");
    } finally {
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginhandler} />;
}

export default LoginScreen;
