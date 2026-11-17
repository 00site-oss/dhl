import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const historyData = [
  { id: '1', tracking: '6101101104358756', status: 'En Route', date: 'Nov 17, 2026' },
  { id: '2', tracking: '6101101104358757', status: 'Delivered', date: 'Nov 16, 2026' },
  { id: '3', tracking: '6101101104358758', status: 'Out for Delivery', date: 'Nov 17, 2026' },
  { id: '4', tracking: '6101101104358759', status: 'Label Created', date: 'Nov 15, 2026' },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.tracking}>{item.tracking}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', padding: 20, backgroundColor: '#fff' },
  item: { backgroundColor: '#fff', margin: 8, padding: 16, borderRadius: 12 },
  tracking: { fontWeight: 'bold', fontSize: 16 },
  status: { color: '#D40511', marginTop: 4 },
  date: { color: '#666', marginTop: 4, fontSize: 13 },
});
