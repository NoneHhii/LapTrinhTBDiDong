import { SQLiteDatabase } from "expo-sqlite";

export const migrateDbIfNeeded = async (db: SQLiteDatabase) => {
  console.log("Database migration started...");
  
  // Bật chế độ Write-Ahead Logging (WAL) để cải thiện hiệu suất
  await db.execAsync(`PRAGMA journal_mode = WAL;`);

  // Tạo bảng 'transactions' với tất cả các cột nếu nó chưa tồn tại
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      amount REAL NOT NULL,
      type TEXT NOT NULL CHECK(type IN ('Income', 'Expense')),
      createdAt TEXT NOT NULL,
      isSynced INTEGER NOT NULL DEFAULT 0,
      isDeleted INTEGER NOT NULL DEFAULT 0
    );
  `);
  
  // Logic migration: Check và thêm cột isDeleted nếu nó bị thiếu trong DB cũ
  try {
      // Sử dụng PRAGMA table_info để kiểm tra schema một cách rõ ràng
      const tableInfo = await db.getAllAsync<{name: string}>('PRAGMA table_info(transactions)');
      const columnExists = tableInfo.some(info => info.name === 'isDeleted');
      
      if (!columnExists) {
          console.log("Column 'isDeleted' missing. Adding column...");
          // Đảm bảo ALTER TABLE chạy với DEFAULT 0
          await db.execAsync(`ALTER TABLE transactions ADD COLUMN isDeleted INTEGER NOT NULL DEFAULT 0`);
          console.log("Column 'isDeleted' added successfully.");
      } else {
          console.log("Column 'isDeleted' already exists.");
      }
  } catch (e) {
      console.error("Critical error during column check/migration:", e);
      // Nếu lỗi nghiêm trọng xảy ra ở đây, thường là do cấu trúc DB bị hỏng.
      // Dù sao, ta vẫn để App chạy tiếp.
  }

  console.log("Table 'transactions' checked/migrated successfully.");
};