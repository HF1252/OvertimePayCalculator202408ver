function calculateOvertimePay() {
    // 入力値を取得
    // 基本月給を取得し、数値に変換
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    // 月平均出勤日数を取得し、数値に変換
    const workDays = parseFloat(document.getElementById('workDays').value);
    // 1日の所定内労働時間を取得し、数値に変換
    const workHours = parseFloat(document.getElementById('workHours').value);
    // 残業代割増率を取得し、パーセントから倍率に変換（例: 25% → 1.25）
    const overtimeRate = parseFloat(document.getElementById('overtimeRate').value) / 100 + 1;
    // 月の見込残業時間を取得し、数値に変換
    const overtimeHours = parseFloat(document.getElementById('overtimeHours').value);

    // 残業代の計算
    // 時給を計算（基本月給を月間総労働時間で割る）
    const hourlyWage = basicSalary / (workDays * workHours);
    // 残業代を計算（時給 × 残業代倍率 × 残業時間）
    const overtimePay = hourlyWage * overtimeRate * overtimeHours;

    // 結果を表示
    // 計算結果を「月想定残業代: [計算結果]円」という形式で表示
    document.getElementById('result').textContent = `月想定残業代: ${overtimePay.toFixed(0)}円`;
}