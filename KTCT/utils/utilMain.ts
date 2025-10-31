// MockAPI Endpoint: Thay thế bằng endpoint MockAPI thực tế của bạn
export const MOCK_API_ENDPOINT = 'https://68cd201ada4697a7f304d4d5.mockapi.io/user/products'; 

// Utility function để định dạng số tiền
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Utility function để định dạng ngày
export const formatDate = (isoString: string): string => {
  return new Date(isoString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

// Utility function để chuyển đổi số boolean (0/1) sang boolean
export const toBool = (num: 0 | 1): boolean => num === 1;
export const fromBool = (bool: boolean): 0 | 1 => (bool ? 1 : 0);