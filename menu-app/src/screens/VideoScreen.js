import { StyleSheet, Text, View, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mi Experiencia Personal</Text>
      <Text style={styles.description}>
        Video sobre el desarrollo de la aplicación
      </Text>

      <View style={styles.videoWrapper}>
        <YoutubePlayer
          height={220}
          play={false}
          videoId="2iadlnDPRjA"
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
    lineHeight: 20,
  },
  videoWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000000',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 6,
    lineHeight: 20,
  },
});