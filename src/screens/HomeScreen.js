import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DHL COURIER</Text>
        <Text style={styles.subtitle}>iPhone 11 Pro Max Optimized</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Today's Stops</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Remaining</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('Scan')}>
          <Text style={styles.scanButtonText}>📷 SCAN BARCODE</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recent Shipments</Text>
        <TouchableOpacity style={styles.shipmentCard} onPress={() => navigation.navigate('Tracking')}>
          <Text style={styles.trackingNum}>6101101104358756</Text>
          <Text style={styles.status}>En Route • Salt Lake City, UT</Text>
          <Text style={styles.eta}>ETA: Nov 19, 2026</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shipmentCard}>
          <Text style={styles.trackingNum}>6101101104358757</Text>
          <Text style={styles.status}>Out for Delivery</Text>
          <Text style={styles.eta}>ETA: Today</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#D40511', padding: 20, paddingTop: 40 },
  logo: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#FFCC00', fontSize: 14, marginTop: 4 },
  content: { flex: 1, padding: 16 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, flex: 1, marginHorizontal: 4, alignItems: 'center', elevation: 2 },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#D40511' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 4 },
  scanButton: { backgroundColor: '#FFCC00', padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 24 },
  scanButtonText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  shipmentCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 1 },
  trackingNum: { fontSize: 16, fontWeight: 'bold' },
  status: { color: '#666', marginTop: 4 },
  eta: { color: '#D40511', marginTop: 4, fontWeight: '600' },
});
