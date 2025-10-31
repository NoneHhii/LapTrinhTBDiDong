import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";
import { ScreenName } from "./MainAppContent";
import { NewTransactionData } from "../hooks/useTransactions";

export const AddScreen: React.FC<{ 
  onNavigate: (screen: ScreenName) => void; // Dùng kiểu ScreenName đã định nghĩa
  addTransaction: (data: NewTransactionData) => Promise<boolean>;
}> = ({ onNavigate, addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amountText, setAmountText] = useState('');
  const [type, setType] = useState<'Income' | 'Expense'>('Expense');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const amount = parseFloat(amountText.replace(/,/g, ''));
    
    if (!title || isNaN(amount) || amount <= 0) {
      // Thay thế alert bằng một thông báo trên UI thực tế (do hạn chế môi trường)
      console.log('Vui lòng nhập đầy đủ Tên và Số tiền hợp lệ.'); 
      return;
    }
    
    setIsSubmitting(true);
    const success = await addTransaction({ title, amount, type });
    setIsSubmitting(false);

    if (success) {
      // Reset form
      setTitle('');
      setAmountText('');
      setType('Expense');
      onNavigate('Home'); // Quay về màn hình chính
    } else {
      console.log('Lỗi khi lưu giao dịch. Vui lòng thử lại.');
    }
  };
  
  // Định dạng số tiền khi người dùng nhập
  const handleAmountChange = (text: string) => {
    // Loại bỏ tất cả các ký tự không phải số
    const rawNumber = text.replace(/[^0-9]/g, '');
    if (rawNumber === '') {
      setAmountText('');
      return;
    }
    // Định dạng lại (ví dụ: 1000000 -> 1.000.000)
    const formatted = new Intl.NumberFormat('vi-VN').format(parseInt(rawNumber, 10));
    setAmountText(formatted);
  };

  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.formTitle}>Thêm Khoản {type === 'Expense' ? 'Chi' : 'Thu'}</Text>

      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[styles.typeButton, type === 'Expense' && styles.typeButtonActiveExpense]}
          onPress={() => setType('Expense')}
        >
          <Text style={[styles.typeButtonText, type === 'Expense' && styles.typeButtonTextActive]}>CHI TIÊU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === 'Income' && styles.typeButtonActiveIncome]}
          onPress={() => setType('Income')}
        >
          <Text style={[styles.typeButtonText, type === 'Income' && styles.typeButtonTextActive]}>THU NHẬP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Tên khoản chi/thu:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="VD: Tiền nhà, Lương tháng 10"
      />

      <Text style={styles.inputLabel}>Số tiền (VND):</Text>
      <TextInput
        style={styles.input}
        value={amountText}
        onChangeText={handleAmountChange}
        placeholder="VD: 5.000.000"
        keyboardType="numeric"
      />
      
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.submitButtonText}>LƯU GIAO DỊCH</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};