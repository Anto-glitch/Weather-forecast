import { File, Paths } from 'expo-file-system';
import { file } from 'zod';

getOfflineData() {
    const file = new File (Paths.document, 'weather_data.json');
    return file.textSync();
}