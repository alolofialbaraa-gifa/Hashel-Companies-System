"use client"

import { AlertOctagon, PhoneCall } from "lucide-react"

export default function PaymentRequiredPage() {
  const handleContact = () => {
    // رقم الهاتف المضاف مع رسالة توجيهية جاهزة
    const phoneNumber = "967770137206" // يمكنك تعديل مفتاح الدولة إذا لم يكن سعودياً
    const message =
      "السلام عليكم، لقد قمت بالتواصل بخصوص تفعيل نظام شركات هاشل اليامي."
    const encodedMessage = encodeURIComponent(message)

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-6 dark:bg-slate-950"
      dir="rtl"
    >
      <div className="relative w-full max-w-lg text-center">
        {/* الدوائر الخلفية الزخرفية باللون الأحمر للتنبيه */}
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative space-y-8 rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
          {/* أيقونة الحالة والتنبيه */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
            <AlertOctagon className="h-12 w-12 animate-pulse stroke-[1.5]" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              تم إيقاف الخدمة مؤقتاً
            </h1>
            <p className="mx-auto max-w-sm leading-relaxed font-medium text-slate-600 dark:text-slate-300">
              تم إغلاق الوصول إلى النظام. يرجى سداد المبلغ المتفق عليه لاستعادة
              جميع الصلاحيات والخدمات فوراً.
            </p>
          </div>

          {/* صندوق التفاصيل المساعدة
          <div className="rounded-2xl bg-slate-100/80 p-4 text-sm text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
            إذا كنت قد قمت بالتحويل بالفعل أو ترغب في الاستفسار عن تفاصيل
            الفاتورة، يرجى التواصل عبر الواتساب.
          </div> */}

          {/* أزرار الإجراءات */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleContact}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-700 active:scale-95"
            >
              <PhoneCall className="h-5 w-5" />
              تواصل عبر واتساب
            </button>
          </div>

          {/* تذييل بسيط */}
          <div className="pt-4 text-xs text-slate-400">
            نظام شركات هاشل اليامي &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  )
}
