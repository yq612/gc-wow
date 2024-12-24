/**
 * @name 博客相关的配置
 */

import Solutions from "./detail/files/solutions";
import Finance from "./detail/files/finance";
import Advice from "./detail/files/advice";
import post from "~/assets/blogs/post.webp";

/** 所有的博客列表 */
export const allBlogList = [
  {
    date: "2023-1-23",
    post: post,
    title:
      "Demo Tips: Your Guide to Personal Finance",
    tags: ["all", "press"],
    postId: 203,
    content: Finance,
    des:"Managing personal finances can often feel overwhelming, especially when unexpected expenses arise. Whether it’s for a sudden medical bill, an emergency, or an opportunity you don’t want to miss, having access to quick and flexible financial solutions is essential."
  },
  {
    date: "2023-1-23",
    post: post,
    title:
      "Demo: Fast, Secure Loan Solutions",
    tags: ["all", "business"],
    postId: 452,
    content: Solutions,
    des:"In life, financial needs often arise unexpectedly. Whether it’s an urgent personal expense or operating capital for a small business, having quick access to a loan becomes essential. Demo, an innovative "

  },
  {
    date: "2023-1-23",
    post: post,
    title: "The Borrower’s Corner: Demo’s Financial Advice – Borrow Responsibly and Stay Within Your Limits",
    tags: ["all", "press"],
    postId: 774,
    content: Advice,
    des:"When life throws unexpected financial challenges your way, whether it’s a personal emergency or a sudden business need, having access to quick, reliable funding can make all the difference."
  },
];

/** 所有的博客分类 */
export const blogCate = [
  { label: "All", value: "all" },
  { label: "Business & Finance", value: "business" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Press Release", value: "press" },
  { label: "Activities", value: "activities" },
];

/** 时间转换 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr); // 将字符串转换为日期对象
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }; // 定义日期格式选项
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

/** 根据发布日期降序 */
export function sortByDateDesc(data: any[]): any[] {
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
