import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function TrackingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.trackingNum}>6101101104358756</Text>
          <Text style={styles.status}>EN ROUTE</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Estimated Delivery</Text>
          <Text style={styles.value}>November 19, 2026</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.value}>SALT LAKE CITY, UT 84116-5422, US</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Service</Text>
          <Text style={styles.value}>DHL Parcel Expedited Max</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>0.2999 LB</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>USPS Tracking</Text>
          <Text style={[styles.value, { color: '#D40511' }]}>9261290416114939820982</Text>
        </View>
        <Text style={styles.section}>Tracking History</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyEvent}>DEPARTURE ORIGIN DHL ECOMMERCE FACILITY</Text>
          <Text style={styles.historyTime}>Nov 17, 2026 • 03:07 AM MT</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyEvent}>PROCESSED</Text>
          <Text style={styles.historyTime}>Nov 16, 2026 • 06:52 PM MT</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyEvent}>LABEL CREATED</Text>
          <Text style={styles.historyTime}>Nov 15, 2026 • 01:05 PM MT</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#D40511', padding: 20, alignItems: 'center' },
  trackingNum: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  status: { color: '#FFCC00', fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  card: { backgroundColor: '#fff', margin: 12, padding: 16, borderRadius: 12 },
  label: { fontSize: 12, color: '#666' },
  value: { fontSize: 16, fontWeight: '600', marginTop: 4 },
  section: { fontSize: 18, fontWeight: 'bold', margin: 16, marginBottom: 8 },
  historyItem: { backgroundColor: '#fff', marginHorizontal: 12, marginBottom: 8, padding: 16, borderRadius: 12 },
  historyEvent: { fontWeight: 'bold' },
  historyTime: { color: '#666', marginTop: 4, fontSize: 13 },
});
