import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { MovieContext } from "./Context";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey="pk_test_51LFHpISEjwPdnx0uLxtxDdI7NbUVn7f7kMFpaveaC7dxiKGFGU0KHRd9ZxvPRl61oCxI4n1V54UJwAvzwgtSjhLI00A9CiotH3">
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
