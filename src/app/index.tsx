import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoIcon}>🛒</Text>
      </View>

      <Text style={styles.title}>CartPath</Text>
      <Text style={styles.subtitle}>
        Shop any store faster.{"\n"}No more backtracking.
      </Text>

      <View style={styles.dots}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => router.push("/onboarding/store-picker")}
      >
        <Text style={styles.btnPrimaryText}>Get started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: "#EAF3DE",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoIcon: {
    fontSize: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  dots: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 40,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },
  dotActive: {
    width: 18,
    backgroundColor: "#3B6D11",
  },
  btnPrimary: {
    backgroundColor: "#3B6D11",
    borderRadius: 14,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  btnPrimaryText: {
    color: "#C0DD97",
    fontSize: 15,
    fontWeight: "600",
  },
  btnSecondary: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
  },
  btnSecondaryText: {
    color: "#555",
    fontSize: 15,
  },
});
