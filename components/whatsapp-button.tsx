'use client'

export default function WhatsAppButton() {
  const phoneNumber = '1234567890' // Can be replaced with actual studio number
  const message = encodeURIComponent('Hi! I am interested in booking a tattoo consultation.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 sm:bottom-6 sm:right-6 z-[9999] p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center opacity-100 translate-y-0"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.146-.18.194-.3.297-.495.098-.21.05-.39-.024-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.348m-5.46-11.45A10.14 10.14 0 0 0 2.222 17.58L1 23l5.526-1.185A10.12 10.12 0 0 0 12.038 23c5.632 0 10.223-4.593 10.223-10.224A10.137 10.137 0 0 0 12.038 2.55" />
      </svg>
    </a>
  )
}
