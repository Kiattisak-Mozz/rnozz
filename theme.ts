import { createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "myBrand",
  primaryShade: { light: 0, dark: 6 },
  defaultRadius: "md",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  colors: {
    myBrand: [
      "#001b32", // 0: Ultra light – เหมาะสำหรับ background อ่อนที่สุด หรือ overlay ช่วง hover เบามาก
      "#00304f", // 1: Very light – ใช้เป็น background ใน light mode หรือ border เบา ๆ
      "#00466c", // 2: Light – เหมาะกับ text หัวข้อเล็ก หรือ icon/state secondary
      "#005c89", // 3: Mid-light – เหมาะกับ hover state ใน light theme (ถ้ามืดกว่า shade 2)
      "#0074a9", // 4: Base light – ค่า default ของ primary shade ใน light mode (primaryShade.light = 6 แต่ปรับใช้ได้)
      "#008ecb", // 5: Mid – ใช้เป็น primary color ปกติ ถ้าอยากให้เข้มขึ้นใช้ shade 6–7
      "#26aaf0", // 6: Base – primaryShade.light = 6 (ค่าปลอมแปลงใช้ตามมาตรฐาน Mantine)
      "#5fc8ff", // 7: Light hover – ใช้เป็น hover state ใน light mode (shade 7)
      "#94ddff", // 8: Dark – primaryShade.dark = 8; ใช้ใน dark mode ปกติ
      "#c8f0ff", // 9: Ultra dark hover – ใช้เป็น hover/active ใน dark mode (shade 9)
    ],
  },
});

export default theme;
