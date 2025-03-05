/* 
- เรากำลังพัฒนาระบบแจ้งเตือน (Notification System) อยู่ ระบบแจ้งเตือนของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. แจ้งเตือนกรณีสร้างโพสสำเร็จ
    2. แจ้งเตือนกรณีมีคนมากดไลค์
    3. แจ้งเตือนกรณีมีคนมาคอมเมนต์
    4. แจ้งเตือนกรณีมีคนแชร์โพส
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

postCreated = () => "📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!";
postLiked = () => "👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!";
postCommented = () => "💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!";
postShared = () => "🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!";

sendNotification = (callbackFunction) => {
  return callbackFunction();
};

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(sendNotification(postCreated)); // 📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!
console.log(sendNotification(postLiked)); // 👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!
console.log(sendNotification(postCommented)); // 💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!
console.log(sendNotification(postShared)); // 🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!
