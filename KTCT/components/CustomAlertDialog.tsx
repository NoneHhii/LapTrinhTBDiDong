import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";

export const CustomAlertDialog: React.FC<{
  isVisible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  confirmStyle?: any;
}> = ({ isVisible, title, message, onConfirm, onCancel, confirmText = 'Xác nhận', confirmStyle = styles.modalButtonConfirm }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalMessage}>{message}</Text>
        <View style={styles.modalButtonRow}>
          <TouchableOpacity style={[styles.modalButton, styles.modalButtonCancel]} onPress={onCancel}>
            <Text style={[styles.modalButtonText, styles.modalButtonTextCancel]}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalButton, confirmStyle]} onPress={onConfirm}>
            <Text style={styles.modalButtonText}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};