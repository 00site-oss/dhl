import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData({ type, data });
    Alert.alert(
      'Barcode Scanned',
      `Type: ${type}\nData: ${data}`,
      [
        { text: 'Scan Again', onPress: () => setScanned(false) },
        { text: 'View Tracking', onPress: () => {
          // Navigate to tracking with the scanned number
          Alert.alert('Tracking', `Opening tracking for: ${data}`);
        }},
      ]
    );
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>No access to camera</Text>
        <Text>Please enable camera permission in Settings to scan barcodes.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scan Package Barcode</Text>
      <Text style={styles.subtitle}>Point camera at barcode or QR code</Text>
      
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.overlay}>
          <View style={styles.scanFrame} />
        </View>
      </View>

      {scanned && (
        <TouchableOpacity style={styles.scanAgainButton} onPress={() => setScanned(false)}>
          <Text style={styles.scanAgainText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}

      {scannedData && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Last Scanned:</Text>
          <Text style={styles.resultData}>{scannedData.data}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  subtitle: { color: '#FFCC00', textAlign: 'center', marginBottom: 10 },
  cameraContainer: { flex: 1, margin: 20, borderRadius: 16, overflow: 'hidden', position: 'relative' },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' },
  scanFrame: { width: 250, height: 250, borderWidth: 3, borderColor: '#FFCC00', borderRadius: 12, backgroundColor: 'transparent' },
  scanAgainButton: { backgroundColor: '#D40511', padding: 16, margin: 20, borderRadius: 12, alignItems: 'center' },
  scanAgainText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  resultBox: { backgroundColor: '#fff', margin: 20, padding: 16, borderRadius: 12 },
  resultLabel: { fontSize: 14, color: '#666' },
  resultData: { fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  permissionText: { fontSize: 18, textAlign: 'center', margin: 20 },
});
