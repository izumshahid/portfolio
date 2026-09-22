/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/Projects", destination: "/work", permanent: true },
      { source: "/AboutMe", destination: "/about", permanent: true },
      { source: "/ApexGaming", destination: "/work/apex-gaming", permanent: true },
      { source: "/ApexInventoryManagement", destination: "/work/apex-inventory", permanent: true },
      { source: "/ApexWebApp", destination: "/work/apex-software-qc", permanent: true },
      { source: "/ApexOrderStatus", destination: "/work/apex-order-status", permanent: true },
      { source: "/Selli", destination: "/work/selli", permanent: true },
      { source: "/Printfresh", destination: "/work/printfresh", permanent: true },
      { source: "/RechargeCustomPortal", destination: "/work/recharge-portal", permanent: true },
      { source: "/NextritionForm", destination: "/work/nextrition-form", permanent: true },
      { source: "/Technicron", destination: "/work/technicron", permanent: true },
      { source: "/MCQsLearning", destination: "/work/mcqs-learning", permanent: true },
    ];
  },
};

module.exports = nextConfig;
