/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer:

Code - สะอาด, Maintain ง่าย 


2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer:

ง่ายขึ่นไม่ต้องใส่ If - else ให่้วุ่นวาย 


3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  

- Callback Function คือ Function ที่ถูกส่งเป็น Parameter ไปยัง Function อื่น 
- Higher-Order Function คือ Function ที่เอา Function อื่น ๆ มาเป็น Parameter และเป็นตัวรับ Return จาก Parameter อื่น ๆ มาใช้งาน

ยกตัวอย่าง:

ระบบแจ้งเตือนบน ที่ทำงานต่างกันไปตามเหตุการณ์ เช่น โพสต์ใหม่, มีคนกดไลค์, มีคนคอมเมนต์ หรือมีการแชร์โพสต์ โดยมี Higher-Order Function เป็นโรงงาน ที่คอยเรียกใช้งาน Callback Function ตามความต้องการ

ข้อดีหากคุณต้อง Maintain หรือ ต้องเขียนระบบ แจ้งเตือนคนกด Link ใหม่ คุณก็ไม่ต้องไปยุ่งกับ ส่วนอื่น ๆ เลย การยุ่งกับส่วนอื่น ๆ มีความเสี่ยงที่จะทำให้พังทั้งระบบได้



*/
