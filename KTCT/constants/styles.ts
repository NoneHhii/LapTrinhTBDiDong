import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Global Styles
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  fullScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  content: {
    flex: 1,
  },
  loading: {
    marginTop: 50,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#6B7280',
  },
  
  // Header
  header: {
    backgroundColor: '#4F46E5',
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Summary Card
  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  summaryTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
    fontWeight: '500',
  },
  summaryBalance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#4B5563',
  },

  // Income/Expense Text Styles
  incomeText: {
    color: '#10B981', // Green
    fontWeight: '600',
  },
  expenseText: {
    color: '#EF4444', // Red
    fontWeight: '600',
  },

  // Transaction List (Home Screen)
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  list: {
    flex: 1,
  },

  // Transaction Item (Câu 1)
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#4F46E5',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  itemDateContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDateText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  itemType: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 2,
  },
  unsyncedIndicator: {
    fontSize: 12,
    color: '#F59E0B',
    marginTop: 2,
    fontWeight: '600',
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  
  // Add Screen (Form)
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    fontSize: 16,
  },
  typeSelector: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
    marginBottom: 20,
  },
  typeButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  typeButtonActiveExpense: {
    backgroundColor: '#EF4444',
  },
  typeButtonActiveIncome: {
    backgroundColor: '#10B981',
  },
  typeButtonText: {
    fontWeight: 'bold',
    color: '#4B5563',
  },
  typeButtonTextActive: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  // Stats/Sync Screen
  statsContainer: {
    flex: 1,
    padding: 20,
  },
  syncCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  syncText: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 15,
  },
  syncCount: {
    fontWeight: 'bold',
    color: '#F59E0B',
  },
  syncButton: {
    backgroundColor: '#F59E0B',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  syncButtonDisabled: {
    backgroundColor: '#FECACA',
  },
  syncButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsPlaceholder: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontStyle: 'italic',
    marginTop: 20,
  },

  itemContainerTrash: {
    // Kiểu cơ bản cho item trong thùng rác
    borderLeftColor: '#6B7280',
    backgroundColor: '#F9FAFB',
  },
  deletedItemContainer: {
    // Kiểu mờ cho item đã xóa mềm, hiển thị trên màn hình chính (nếu có)
    opacity: 0.6,
    borderLeftColor: '#F59E0B',
  },

  modalButtonDelete: {
    backgroundColor: '#EF4444', // Red for soft delete
  },

  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    elevation: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: '#E5E7EB',
  },
  modalButtonConfirm: {
    backgroundColor: '#4F46E5',
  },
  modalButtonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  modalButtonTextCancel: {
    color: '#4B5563',
  },

  deletedActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  restoreButton: {
    backgroundColor: '#10B981',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  hardDeleteButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  deletedItemRow: {
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#FEE2E2', // Light red background
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },

  modalButtonRestore: {
    backgroundColor: '#10B981', // Green for restore
  },
  modalButtonHardDelete: {
    backgroundColor: '#DC2626', // Dark Red for hard delete
  },

  trashInfo: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 15,
    fontStyle: 'italic',
  },

  searchContainer: {
    marginBottom: 10,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    fontSize: 16,
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  tabIcon: {
    fontSize: 24,
  },
  tabLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 3,
  },
  tabLabelActive: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
})