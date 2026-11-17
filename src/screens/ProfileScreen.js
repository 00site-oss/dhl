import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.name}>Courier Driver</Text>
        <Text style={styles.role}>DHL eCommerce • Salt Lake City</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>Device</Text>
        <Text style={styles.infoValue}>iPhone 11 Pro Max</Text>
        <Text style={styles.infoLabel}>Screen</Text>
        <Text style={styles.infoValue}>6.5" Super Retina XDR (2688 x 1242)</Text>
        <Text style={styles.infoLabel}>App Version</Text>
        <Text style={styles.infoValue}>1.0.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#D40511', padding: 40, alignItems: 'center' },
  avatar: { fontSize: 64 },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 12 },
  role: { color: '#FFCC00', marginTop: 4 },
  info: { padding: 20 },
  infoLabel: { fontSize: 12, color: '#666', marginTop: 16 },
  infoValue: { fontSize: 16, fontWeight: '600' },
});
